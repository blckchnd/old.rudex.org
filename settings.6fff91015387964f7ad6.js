(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[9],{

/***/ 2723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLoaded", function() { return hasLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindToCurrentAccount", function() { return bindToCurrentAccount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1973);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2109);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1974);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1854);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(544);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1957);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var hasLoaded = function hasLoaded(currentAccount) {
    return !!currentAccount && !!currentAccount.get("id");
};

var bindToCurrentAccount = function bindToCurrentAccount(WrappedComponent) {
    var _class, _temp;

    // ...and returns another component...
    var BindToCurrentAccount = (_temp = _class = function (_React$Component) {
        _inherits(BindToCurrentAccount, _React$Component);

        function BindToCurrentAccount(props) {
            _classCallCheck(this, BindToCurrentAccount);

            return _possibleConstructorReturn(this, (BindToCurrentAccount.__proto__ || Object.getPrototypeOf(BindToCurrentAccount)).call(this, props));
        }

        _createClass(BindToCurrentAccount, [{
            key: "render",
            value: function render() {
                if (hasLoaded(this.props.currentAccount)) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
                } else {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], null);
                }
            }
        }]);

        return BindToCurrentAccount;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _class.propTypes = {
        currentAccount: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount
    }, _class.defaultProps = {
        // set subscription
        autosubscribe: true
    }, _temp);

    BindToCurrentAccount = Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BindToCurrentAccount);

    BindToCurrentAccount = react_debounce_render__WEBPACK_IMPORTED_MODULE_2___default()(BindToCurrentAccount, 100, {
        leading: false
    });

    return Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(BindToCurrentAccount, {
        listenTo: function listenTo() {
            return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
        },
        getProps: function getProps() {
            var currentAccount = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().passwordAccount || "please-login";
            return {
                currentAccount: new Map([["name", currentAccount]])
            };
        }
    });
};

/***/ }),

/***/ 3242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(717);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2694);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1960);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3243);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SettingsContainer = function (_React$Component) {
    _inherits(SettingsContainer, _React$Component);

    function SettingsContainer() {
        _classCallCheck(this, SettingsContainer);

        return _possibleConstructorReturn(this, (SettingsContainer.__proto__ || Object.getPrototypeOf(SettingsContainer)).apply(this, arguments));
    }

    _createClass(SettingsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        settings: function settings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().viewSettings;
                        },
                        defaults: function defaults() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().defaults;
                        },
                        localesObject: function localesObject() {
                            return stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().localesObject;
                        },
                        apiLatencies: function apiLatencies() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().apiLatencies;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], this.props)
            );
        }
    }]);

    return SettingsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettingsContainer);

/***/ }),

/***/ 3243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3244);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_IntlActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(719);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(718);
/* harmony import */ var _WebsocketAddModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1948);
/* harmony import */ var _SettingsEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3245);
/* harmony import */ var _AccountsSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3247);
/* harmony import */ var _WalletSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3248);
/* harmony import */ var _PasswordSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3269);
/* harmony import */ var _RestoreSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3270);
/* harmony import */ var _ResetSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3272);
/* harmony import */ var _BackupSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3273);
/* harmony import */ var _AccessSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1949);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(576);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var Settings = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings(props) {
        _classCallCheck(this, Settings);

        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

        var menuEntries = _this._getMenuEntries(props);
        var activeSetting = 0;

        var tabIndex = !!props.match.params.tab ? menuEntries.indexOf(props.match.params.tab) : props.viewSettings.get("activeSetting", 0);
        if (tabIndex >= 0) activeSetting = tabIndex;

        var general = ["locale", "unit", "fee_asset", "filteredServiceProviders", "browser_notifications", "showSettles", "walletLockTimeout", "themes", "showAssetPercent", "viewOnlyMode", "showProposedTx"];
        // disable that the user can change login method if only one is allowed
        if (Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getAllowedLogins"])().length > 1) general.push("passwordLogin");
        general.push("reset");

        _this.state = {
            isAddNodeModalVisible: false,
            isRemoveNodeModalVisible: false,
            removeNode: {
                name: null,
                url: null
            },
            apiServer: props.settings.get("apiServer"),
            activeSetting: activeSetting,
            menuEntries: menuEntries,
            settingEntries: {
                general: general,
                access: ["apiServer", "faucet_address"]
            }
        };

        _this.showAddNodeModal = _this.showAddNodeModal.bind(_this);
        _this.hideAddNodeModal = _this.hideAddNodeModal.bind(_this);
        _this.showRemoveNodeModal = _this.showRemoveNodeModal.bind(_this);
        _this.hideRemoveNodeModal = _this.hideRemoveNodeModal.bind(_this);

        _this._handleNotificationChange = _this._handleNotificationChange.bind(_this);
        return _this;
    }

    _createClass(Settings, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (prevProps.match.params.tab !== this.props.match.params.tab && !!this.props.match.params.tab) {
                this._onChangeMenu(this.props.match.params.tab);
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.settings.get("passwordLogin") !== this.props.settings.get("passwordLogin")) {
                var currentEntries = this._getMenuEntries(this.props);
                var menuEntries = this._getMenuEntries(np);
                var currentActive = currentEntries[this.state.activeSetting];
                var newActiveIndex = menuEntries.indexOf(currentActive);
                var newActive = menuEntries[newActiveIndex];
                this.setState({
                    menuEntries: menuEntries
                });
                if (newActiveIndex && newActiveIndex !== this.state.activeSetting) {
                    this.setState({
                        activeSetting: menuEntries.indexOf(currentActive)
                    });
                } else if (!newActive || this.state.activeSetting > menuEntries.length - 1) {
                    this.setState({
                        activeSetting: 0
                    });
                }
            }
        }
    }, {
        key: "showAddNodeModal",
        value: function showAddNodeModal() {
            this.setState({
                isAddNodeModalVisible: true
            });
        }
    }, {
        key: "hideAddNodeModal",
        value: function hideAddNodeModal() {
            this.setState({
                isAddNodeModalVisible: false
            });
        }
    }, {
        key: "showRemoveNodeModal",
        value: function showRemoveNodeModal(url, name) {
            this.setState({
                isRemoveNodeModalVisible: true,
                removeNode: {
                    url: url,
                    name: name
                }
            });
        }
    }, {
        key: "hideRemoveNodeModal",
        value: function hideRemoveNodeModal() {
            this.setState({
                isRemoveNodeModalVisible: false,
                removeNode: {
                    url: null,
                    name: null
                }
            });
        }
    }, {
        key: "_getMenuEntries",
        value: function _getMenuEntries(props) {
            if (props.deprecated) {
                return ["wallet", "backup"];
            }
            var menuEntries = [];

            menuEntries.push("general");
            if (!props.settings.get("passwordLogin")) menuEntries.push("wallet");
            menuEntries.push("accounts");
            if (!props.settings.get("passwordLogin")) menuEntries.push("password");
            if (!props.settings.get("passwordLogin")) menuEntries.push("backup");
            if (!props.settings.get("passwordLogin")) menuEntries.push("restore");
            menuEntries.push("access");

            if (Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().show) menuEntries.push("faucet_address");

            menuEntries.push("reset");

            return menuEntries;
        }
    }, {
        key: "triggerModal",
        value: function triggerModal(e) {
            var _refs$ws_modal;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            (_refs$ws_modal = this.refs.ws_modal).show.apply(_refs$ws_modal, [e].concat(args));
        }
    }, {
        key: "_handleNotificationChange",
        value: function _handleNotificationChange(path, value) {
            // use different change handler because checkbox doesn't work
            // normal with e.preventDefault()

            var updatedValue = Object(lodash_es_set__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.settings.get("browser_notifications"), path, value);

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                setting: "browser_notifications",
                value: updatedValue
            });
        }
    }, {
        key: "_handleSettingsEntryChange",
        value: function _handleSettingsEntryChange(setting, input) {
            if (!input.target) {
                this._onChangeSetting(setting, { target: { value: input } });
            } else {
                this._onChangeSetting(setting, input);
            }
        }
    }, {
        key: "_onChangeSetting",
        value: function _onChangeSetting(setting, e) {
            if (e.preventDefault) e.preventDefault();

            var defaults = this.props.defaults;

            var value = null;

            function findEntry(targetValue, targetDefaults) {
                if (!targetDefaults) return targetValue;
                if (targetDefaults[0].translate) {
                    for (var i = 0; i < targetDefaults.length; i++) {
                        if (counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("settings." + targetDefaults[i].translate) === targetValue) {
                            return i;
                        }
                    }
                } else {
                    return targetDefaults.indexOf(targetValue);
                }
            }

            switch (setting) {
                case "locale":
                    var myLocale = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.getLocale();
                    if (e.target.value !== myLocale) {
                        actions_IntlActions__WEBPACK_IMPORTED_MODULE_3__["default"].switchLocale(e.target.value);
                        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                            setting: "locale",
                            value: e.target.value
                        });
                    }
                    break;

                case "themes":
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: "themes",
                        value: e.target.value
                    });
                    break;

                case "defaultMarkets":
                    break;

                case "walletLockTimeout":
                    var newValue = parseInt(e.target.value, 10);
                    if (isNaN(newValue)) newValue = 0;
                    if (!isNaN(newValue) && typeof newValue === "number") {
                        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                            setting: "walletLockTimeout",
                            value: newValue
                        });
                    }
                    break;

                case "inverseMarket":
                case "confirmMarketOrder":
                    value = findEntry(e.target.value, defaults[setting]) === 0; // USD/BTS is true, BTS/USD is false
                    break;

                case "apiServer":
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: "apiServer",
                        value: e.target.value
                    });
                    this.setState({
                        apiServer: e.target.value
                    });
                    break;

                case "showProposedTx":
                case "showSettles":
                case "showAssetPercent":
                case "passwordLogin":
                case "viewOnlyMode":
                    var reference = defaults[setting][0];
                    if (reference.translate) reference = reference.translate;
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: setting,
                        value: e.target.value === reference
                    });
                    break;

                case "filteredServiceProviders":
                    break;
                case "fee_asset":
                case "unit":
                    var defaultSettings = defaults["unit"];
                    var index = findEntry(e.target.value, defaultSettings);
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: setting,
                        value: defaultSettings[index]
                    });
                    break;

                default:
                    value = findEntry(e.target.value, defaults[setting]);
                    break;
            }

            if (value !== null) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({ setting: setting, value: value });
            }
        }
    }, {
        key: "onReset",
        value: function onReset() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].clearSettings();
        }
    }, {
        key: "_redirectToEntry",
        value: function _redirectToEntry(entry) {
            this.props.history.push("/settings/" + entry);
        }
    }, {
        key: "_onChangeMenu",
        value: function _onChangeMenu(entry) {
            var index = this.state.menuEntries.indexOf(entry);
            this.setState({
                activeSetting: index
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({ activeSetting: index });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                settings = _props.settings,
                defaults = _props.defaults;
            var _state = this.state,
                menuEntries = _state.menuEntries,
                activeSetting = _state.activeSetting,
                settingEntries = _state.settingEntries;

            var entries = void 0;
            var activeEntry = menuEntries[activeSetting] || menuEntries[0];

            switch (activeEntry) {
                case "accounts":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountsSettings__WEBPACK_IMPORTED_MODULE_8__["default"], null);
                    break;

                case "wallet":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WalletSettings__WEBPACK_IMPORTED_MODULE_9__["default"], this.props);
                    break;

                case "password":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PasswordSettings__WEBPACK_IMPORTED_MODULE_10__["default"], null);
                    break;

                case "backup":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BackupSettings__WEBPACK_IMPORTED_MODULE_13__["default"], null);
                    break;

                case "restore":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RestoreSettings__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        passwordLogin: this.props.settings.get("passwordLogin")
                    });
                    break;

                case "access":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccessSettings__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        faucet: settings.get("faucet_address"),
                        nodes: defaults.apiServer,
                        onChange: this._onChangeSetting.bind(this),
                        showAddNodeModal: this.showAddNodeModal,
                        showRemoveNodeModal: this.showRemoveNodeModal
                    });
                    break;
                case "faucet_address":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], {
                        disabled: !Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().editable,
                        type: "text",
                        defaultValue: settings.get("faucet_address"),
                        onChange: Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().editable ? this._onChangeSetting.bind(this, "faucet_address") : null
                    });
                    break;

                case "reset":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResetSettings__WEBPACK_IMPORTED_MODULE_12__["default"], null);
                    break;

                default:
                    entries = settingEntries[activeEntry].map(function (setting) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SettingsEntry__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
                            key: setting,
                            setting: setting,
                            settings: settings,
                            defaults: defaults[setting === "fee_asset" ? "unit" : setting],
                            onChange: _this2._handleSettingsEntryChange.bind(_this2),
                            onNotificationChange: _this2._handleNotificationChange,
                            locales: _this2.props.localesObject
                        }, _this2.state));
                    });
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"],
                { layout: "vertical" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: this.props.deprecated ? "" : "grid-block settings-container"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block main-content margin-block wrap" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                className: "grid-content shrink settings-menu",
                                style: { paddingRight: "2rem" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                style: { paddingBottom: 10, paddingLeft: 10 },
                                component: "h3",
                                content: "header.settings",
                                className: "panel-bg-color"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "ul",
                                null,
                                menuEntries.map(function (entry, index) {
                                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "li",
                                        {
                                            className: index === activeSetting ? "active" : "",
                                            onClick: _this2._redirectToEntry.bind(_this2, entry),
                                            key: entry
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                            content: "settings." + entry
                                        })
                                    );
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                className: "grid-content",
                                style: {
                                    height: "100%"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block small-12 no-margin vertical",
                                    style: {
                                        maxWidth: 1000
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                    component: "h3",
                                    content: "settings." + menuEntries[activeSetting]
                                }),
                                activeEntry != "access" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                    unsafe: true,
                                    style: {
                                        paddingTop: 5,
                                        marginBottom: 30
                                    },
                                    content: "settings." + menuEntries[activeSetting] + "_text",
                                    className: "panel-bg-color"
                                }),
                                entries
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WebsocketAddModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        removeNode: this.state.removeNode,
                        isAddNodeModalVisible: this.state.isAddNodeModalVisible,
                        isRemoveNodeModalVisible: this.state.isRemoveNodeModalVisible,
                        onAddNodeClose: this.hideAddNodeModal,
                        onRemoveNodeClose: this.hideRemoveNodeModal,
                        apis: defaults["apiServer"],
                        api: defaults["apiServer"].filter(function (a) {
                            return a.url === _this2.state.apiServer;
                        }).reduce(function (a, b) {
                            return b && b.url;
                        }, null),
                        changeConnection: function changeConnection(apiServer) {
                            _this2.setState({ apiServer: apiServer });
                        }
                    })
                )
            );
        }
    }]);

    return Settings;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ 3244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1989);


/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : Object(_baseSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, value);
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),

/***/ 3245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2100);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2090);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notifyjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FeeAssetSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3246);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Gateways_GatewaySelectorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2692);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Form"].Item;
var Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"].Option;

var SettingsEntry = function (_React$Component) {
    _inherits(SettingsEntry, _React$Component);

    function SettingsEntry() {
        _classCallCheck(this, SettingsEntry);

        var _this = _possibleConstructorReturn(this, (SettingsEntry.__proto__ || Object.getPrototypeOf(SettingsEntry)).call(this));

        _this.state = {
            message: null,
            isGatewaySelectorModalVisible: false,
            isGatewaySelectorModalRendered: false
        };

        _this.handleNotificationChange = _this.handleNotificationChange.bind(_this);
        return _this;
    }

    _createClass(SettingsEntry, [{
        key: "hideGatewaySelectorModal",
        value: function hideGatewaySelectorModal() {
            this.setState({
                isGatewaySelectorModalVisible: false
            });
        }
    }, {
        key: "showGatewaySelectorModal",
        value: function showGatewaySelectorModal() {
            this.setState({
                isGatewaySelectorModalRendered: true,
                isGatewaySelectorModalVisible: true
            });
        }
    }, {
        key: "_setMessage",
        value: function _setMessage(key) {
            var _this2 = this;

            this.setState({
                message: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(key)
            });

            this.timer = setTimeout(function () {
                _this2.setState({ message: null });
            }, 4000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: "handleNotificationChange",
        value: function handleNotificationChange(path) {
            var _this3 = this;

            return function (evt) {
                _this3.props.onNotificationChange(path, !!evt.target.checked);
            };
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (nextProps.setting === "filteredServiceProviders") {
                // only rerender for the modal, not when settings changed (visualized in the modal!)
                return nextState.isGatewaySelectorModalVisible !== this.state.isGatewaySelectorModalVisible;
            }
            return true;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                defaults = _props.defaults,
                setting = _props.setting,
                settings = _props.settings;

            var options = void 0,
                optional = void 0,
                confirmButton = void 0,
                value = void 0,
                input = void 0,
                selected = settings.get(setting);
            var noHeader = false;
            var component = null;

            switch (setting) {
                case "locale":
                    value = selected;
                    options = defaults.map(function (entry) {
                        var translationKey = "languages." + entry;
                        var value = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(translationKey);

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            Option,
                            { key: entry, value: entry },
                            value
                        );
                    });

                    break;

                case "themes":
                    value = selected;
                    options = defaults.map(function (entry) {
                        var translationKey = "settings." + entry;
                        var value = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(translationKey);

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            Option,
                            { key: entry, value: entry },
                            value
                        );
                    });

                    break;

                case "browser_notifications":
                    value = selected;

                    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "settings--notifications" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "settings--notifications--group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "settings--notifications--item" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Checkbox"],
                                    {
                                        id: "browser_notifications.allow",
                                        checked: !!value.allow,
                                        onChange: this.handleNotificationChange("allow")
                                    },
                                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.browser_notifications_allow")
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "settings--notifications--group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "settings--notifications--item" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Checkbox"],
                                        {
                                            id: "browser_notifications.additional.transferToMe",
                                            disabled: !value.allow,
                                            checked: !!value.additional.transferToMe,
                                            onChange: this.handleNotificationChange("additional.transferToMe")
                                        },
                                        counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.browser_notifications_additional_transfer_to_me")
                                    )
                                )
                            )
                        ),
                        !!value.allow && notifyjs__WEBPACK_IMPORTED_MODULE_4___default.a.needsPermission && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                href: "https://goo.gl/zZ7NHY",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "external-link"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "div",
                                className: "settings--notifications--no-browser-support",
                                content: "settings.browser_notifications_disabled_by_browser_notify"
                            })
                        )
                    );

                    break;

                case "fee_asset":
                    options = null;
                    value = true;
                    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FeeAssetSettings__WEBPACK_IMPORTED_MODULE_5__["default"], { key: "fee_asset_component" });
                    break;

                case "filteredServiceProviders":
                    options = null;
                    value = true;
                    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                onClick: this.showGatewaySelectorModal.bind(this)
                            },
                            "Choose external Service Providers"
                        ),
                        this.state.isGatewaySelectorModalRendered && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gateways_GatewaySelectorModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            visible: this.state.isGatewaySelectorModalVisible,
                            hideModal: this.hideGatewaySelectorModal.bind(this)
                        })
                    );
                    break;

                case "defaultMarkets":
                    options = null;
                    value = null;
                    break;

                case "walletLockTimeout":
                    value = selected;
                    input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                        type: "text",
                        className: "settings--input",
                        value: selected,
                        onChange: this.props.onChange.bind(this, setting)
                    });
                    break;

                default:
                    if (typeof selected === "number") {
                        value = defaults[selected];
                    } else if (typeof selected === "boolean") {
                        if (selected) {
                            value = defaults[0];
                        } else {
                            value = defaults[1];
                        }
                    } else if (typeof selected === "string") {
                        value = selected;
                    }

                    if (defaults) {
                        options = defaults.map(function (entry) {
                            var option = entry.translate ? counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings." + entry.translate) : entry;
                            if (setting === "unit" || setting === "fee_asset") {
                                option = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { name: entry });
                            }
                            var key = entry.translate ? entry.translate : entry;
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                Option,
                                {
                                    value: entry.translate ? entry.translate : entry,
                                    key: key
                                },
                                option
                            );
                        });
                    } else {
                        input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            className: "settings-input",
                            type: "text",
                            defaultValue: value,
                            onBlur: this.props.onChange.bind(this, setting)
                        });
                    }
                    break;
            }
            if (typeof value !== "number" && !value && !options) return null;

            if (value && value.translate) {
                value = value.translate;
            }

            var EntryLayout = function EntryLayout(_ref) {
                var noHeader = _ref.noHeader,
                    setting = _ref.setting,
                    children = _ref.children;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    noHeader && children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        FormItem,
                        {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings." + setting)
                        },
                        children
                    )
                );
            };

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "section",
                { className: "no-border-bottom" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    EntryLayout,
                    { noHeader: noHeader, setting: setting },
                    options ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        { className: "unstyled-list" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { className: "with-dropdown" },
                            optional,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"],
                                {
                                    value: value,
                                    className: "settings--select",
                                    onChange: this.props.onChange.bind(this, setting)
                                },
                                options
                            ),
                            confirmButton
                        )
                    ) : null,
                    input ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        { className: "unstyled-list" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            input
                        )
                    ) : null,
                    component ? component : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "facolor-success" },
                    this.state.message
                )
            );
        }
    }]);

    return SettingsEntry;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettingsEntry);

/***/ }),

/***/ 3246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1854);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(717);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(410);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2100);
/* harmony import */ var _Modal_SetDefaultFeeAssetModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2108);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var FeeAssetSettings = function (_React$Component) {
    _inherits(FeeAssetSettings, _React$Component);

    function FeeAssetSettings(props) {
        _classCallCheck(this, FeeAssetSettings);

        var _this = _possibleConstructorReturn(this, (FeeAssetSettings.__proto__ || Object.getPrototypeOf(FeeAssetSettings)).call(this, props));

        _this.state = {
            showModal: false,
            current_asset: bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].assets_by_symbol.get(props.fee_asset) || "1.3.0"
        };
        return _this;
    }

    _createClass(FeeAssetSettings, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            return true;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAsset(this.state.current_asset);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    component: "span",
                    content: "settings.current_fee_asset",
                    style: { marginRight: "10px" }
                }),
                asset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__["default"], { name: asset.get("symbol") }) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__["Button"],
                    {
                        style: { margin: "15px" },
                        key: "open_change_fee_asset",
                        type: "secondary",
                        onClick: function onClick() {
                            _this2.setState({ showModal: true });
                        }
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.change_default_fee_asset")
                ),
                this.state.showModal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_SetDefaultFeeAssetModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    key: "change_fee_asset_modal",
                    className: "modal",
                    show: this.state.showModal,
                    current_asset: this.state.current_asset,
                    displayFees: false,
                    forceDefault: true,
                    onChange: function onChange(value) {
                        _this2.setState({ current_asset: value });
                    },
                    close: function close() {
                        _this2.setState({ showModal: false });
                    }
                })
            );
        }
    }]);

    return FeeAssetSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(FeeAssetSettings, {
    listenTo: function listenTo() {
        return [_stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps(props) {
        return {
            fee_asset: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings.get("fee_asset")
        };
    }
}));

/***/ }),

/***/ 3247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1836);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(560);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1854);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AccountsSettings = function (_React$Component) {
    _inherits(AccountsSettings, _React$Component);

    function AccountsSettings() {
        _classCallCheck(this, AccountsSettings);

        return _possibleConstructorReturn(this, (AccountsSettings.__proto__ || Object.getPrototypeOf(AccountsSettings)).apply(this, arguments));
    }

    _createClass(AccountsSettings, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextProps.myAccounts, this.props.myAccounts) || nextProps.hiddenAccounts !== this.props.hiddenAccounts;
        }
    }, {
        key: "onToggleHide",
        value: function onToggleHide(account, hide, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__["default"].toggleHideAccount(account, hide);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                myAccounts = _props.myAccounts,
                hiddenAccounts = _props.hiddenAccounts;


            var accounts = hiddenAccounts.toArray().concat(myAccounts).sort();

            if (!accounts.length) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "settings.no_accounts" })
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "table",
                { className: "table" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    null,
                    accounts.map(function (account) {
                        var isIgnored = hiddenAccounts.has(account);
                        var hideLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                onClick: isIgnored ? _this2.onToggleHide.bind(_this2, account, false) : _this2.onToggleHide.bind(_this2, account, true)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                content: "account." + (isIgnored ? "unignore" : "ignore")
                            })
                        );

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { key: account },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                account
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    {
                                        to: "/account/" + account + "/permissions"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "settings.view_keys" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                hideLink
                            )
                        );
                    })
                )
            );
        }
    }]);

    return AccountsSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountsSettings = Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(AccountsSettings, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            myAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getMyAccounts(),
            hiddenAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myHiddenAccounts
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (AccountsSettings);

/***/ }),

/***/ 3248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3249);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3251);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Form"].Item;

var WalletSettings = function (_React$Component) {
    _inherits(WalletSettings, _React$Component);

    function WalletSettings() {
        _classCallCheck(this, WalletSettings);

        var _this = _possibleConstructorReturn(this, (WalletSettings.__proto__ || Object.getPrototypeOf(WalletSettings)).call(this));

        _this.state = {
            lookupActive: false,
            resetMessage: null
        };
        return _this;
    }

    _createClass(WalletSettings, [{
        key: "onLookup",
        value: function onLookup() {
            this.setState({
                lookupActive: true
            });
        }
    }, {
        key: "onResetBrainkeySequence",
        value: function onResetBrainkeySequence() {
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].resetBrainKeySequence();
            this.setState({
                resetMessage: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("wallet.brainkey_reset_success")
            });
        }
    }, {
        key: "render",
        value: function render() {
            var lookupActive = this.state.lookupActive;
            var deprecated = this.props.deprecated;


            if (deprecated) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["ChangeActiveWallet"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["WalletDelete"], null)
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["ChangeActiveWallet"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["WalletDelete"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    FormItem,
                    {
                        label: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("wallet.balance_claims"),
                        className: "no-offset",
                        style: { padding: "15px 0" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingBottom: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "settings.lookup_text" }),
                        ":"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                        { onClick: this.onLookup.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.balance_claim_lookup" })
                    )
                ),
                lookupActive ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    FormItem,
                    {
                        label: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("wallet.brainkey_seq_reset"),
                        className: "no-offset",
                        style: { paddingBottom: "15px" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingBottom: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                unsafe: true,
                                content: "wallet.brainkey_seq_reset_text"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                onClick: this.onResetBrainkeySequence.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.brainkey_seq_reset_button" })
                        ),
                        this.state.resetMessage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            {
                                style: { paddingTop: 10 },
                                className: "facolor-success"
                            },
                            this.state.resetMessage
                        ) : null
                    )
                )
            );
        }
    }]);

    return WalletSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WalletSettings);

/***/ }),

/***/ 3269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3266);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PasswordSettings = function (_React$Component) {
    _inherits(PasswordSettings, _React$Component);

    function PasswordSettings() {
        _classCallCheck(this, PasswordSettings);

        return _possibleConstructorReturn(this, (PasswordSettings.__proto__ || Object.getPrototypeOf(PasswordSettings)).apply(this, arguments));
    }

    _createClass(PasswordSettings, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"], null);
        }
    }]);

    return PasswordSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PasswordSettings);

/***/ }),

/***/ 3270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2632);
/* harmony import */ var _Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3259);
/* harmony import */ var _Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2652);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(718);
/* harmony import */ var _RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3271);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Select"].Option;

var RestoreSettings = function (_React$Component) {
    _inherits(RestoreSettings, _React$Component);

    function RestoreSettings() {
        _classCallCheck(this, RestoreSettings);

        var _this = _possibleConstructorReturn(this, (RestoreSettings.__proto__ || Object.getPrototypeOf(RestoreSettings)).call(this));

        _this.state = {
            restoreType: 0,
            types: ["backup", "key", "legacy", "brainkey", "favorites"]
        };
        return _this;
    }

    _createClass(RestoreSettings, [{
        key: "_setWalletMode",
        value: function _setWalletMode() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeSetting({
                setting: "passwordLogin",
                value: false
            });
        }
    }, {
        key: "_changeType",
        value: function _changeType(value) {
            this.setState({
                restoreType: this.state.types.indexOf(value)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var passwordLogin = this.props.passwordLogin;


            if (passwordLogin) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "settings.wallet_required",
                        component: "h4"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        { className: "dark-text-color" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.wallet_required_text" }),
                        ":"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Button"],
                        {
                            type: "primary",
                            className: "button",
                            onClick: this._setWalletMode
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.enable_wallet" })
                    )
                );
            }
            var _state = this.state,
                types = _state.types,
                restoreType = _state.restoreType;

            var options = types.map(function (type) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    Option,
                    { key: type, value: type },
                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("settings.backup_" + type),
                    " "
                );
            });

            var content = void 0;

            switch (types[restoreType]) {
                case "backup":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__["BackupRestore"], null)
                    );
                    break;

                case "brainkey":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { maxWidth: "40rem", paddingBottom: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.restore_brainkey_text" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__["CreateWalletFromBrainkey"], { nested: true })
                    );
                    break;

                case "favorites":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__["default"], null)
                    );
                    break;

                default:
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__["default"], { privateKey: restoreType === 1 });
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Select"],
                    {
                        onChange: this._changeType.bind(this),
                        className: "bts-select",
                        value: types[restoreType]
                    },
                    options
                ),
                content
            );
        }
    }]);

    return RestoreSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestoreSettings);

/***/ }),

/***/ 3271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(718);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var RestoreFavorites = function (_React$Component) {
    _inherits(RestoreFavorites, _React$Component);

    function RestoreFavorites(props) {
        _classCallCheck(this, RestoreFavorites);

        var _this = _possibleConstructorReturn(this, (RestoreFavorites.__proto__ || Object.getPrototypeOf(RestoreFavorites)).call(this, props));

        _this.state = {
            json: null,
            error: null
        };
        return _this;
    }

    _createClass(RestoreFavorites, [{
        key: "upload",
        value: function upload(evt) {
            var _this2 = this;

            this.setState({ error: false, json: null });

            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                var contents = evt.target.result;

                try {
                    var json = JSON.parse(contents);

                    for (var key in json) {
                        var market = json[key];
                        var quote = market.quote,
                            base = market.base;


                        if (!quote || !base) throw new Error("Cannot parse json data.");
                    }

                    _this2.setState({ json: json });
                    // this.finish();
                } catch (message) {
                    _this2.setState({ error: true });
                }
            };
            reader.readAsText(file);
        }
    }, {
        key: "finish",
        value: function finish() {
            var json = this.state.json;


            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].clearStarredMarkets();

            for (var key in json) {
                var market = json[key];
                var quote = market.quote,
                    base = market.base;


                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].addStarMarket(quote, base);
            }

            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Notification"].success({
                message: counterpart__WEBPACK_IMPORTED_MODULE_3___default()("settings.backup_favorites_success")
            });
        }
    }, {
        key: "render",
        value: function render() {
            var state = this.state;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                    type: "file",
                    id: "file_input",
                    accept: ".json",
                    style: {
                        border: "solid",
                        marginBottom: 15
                    },
                    onChange: this.upload.bind(this)
                }),
                state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h5",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.backup_favorites_error" })
                ),
                state.json && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Button"],
                        {
                            type: "primary",
                            onClick: this.finish.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.backup_favorites_finish" })
                    )
                )
            );
        }
    }]);

    return RestoreFavorites;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestoreFavorites);

/***/ }),

/***/ 3272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(718);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routerTransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1950);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ResetSettings = function (_React$Component) {
    _inherits(ResetSettings, _React$Component);

    function ResetSettings() {
        _classCallCheck(this, ResetSettings);

        var _this = _possibleConstructorReturn(this, (ResetSettings.__proto__ || Object.getPrototypeOf(ResetSettings)).call(this));

        _this.state = {
            message: null
        };
        return _this;
    }

    _createClass(ResetSettings, [{
        key: "_setMessage",
        value: function _setMessage(key) {
            var _this2 = this;

            this.setState({
                message: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(key)
            });

            this.timer = setTimeout(function () {
                _this2.setState({ message: null });
            }, 4000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "section",
                { className: "no-border-bottom" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "header",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "span",
                        style: {
                            fontWeight: "normal",
                            fontFamily: "Roboto-Medium, arial, sans-serif",
                            fontStyle: "normal"
                        },
                        content: "settings.reset_text_description",
                        generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.general"),
                        "with": {
                            generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.general"),
                            accessName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.access"),
                            faucetName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.faucet_address")
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Button"],
                    {
                        type: "primary",
                        style: { height: 60, width: "100%", marginTop: "30px" },
                        onClick: function onClick() {
                            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].clearSettings().then(function () {
                                _this3._setMessage("settings.restore_default_success");
                                setTimeout(function () {
                                    Object(_routerTransition__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
                                }, 50);
                            });
                        }
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.reset")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "facolor-success",
                        style: { marginTop: "20px", height: "18px" }
                    },
                    this.state.message
                )
            );
        }
    }]);

    return ResetSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResetSettings);

/***/ }),

/***/ 3273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2632);
/* harmony import */ var _Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3268);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackupFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3274);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;

var BackupSettings = function (_React$Component) {
    _inherits(BackupSettings, _React$Component);

    function BackupSettings() {
        _classCallCheck(this, BackupSettings);

        var _this = _possibleConstructorReturn(this, (BackupSettings.__proto__ || Object.getPrototypeOf(BackupSettings)).call(this));

        _this.state = {
            restoreType: 0,
            types: ["backup", "brainkey", "favorites"]
        };
        return _this;
    }

    _createClass(BackupSettings, [{
        key: "_changeType",
        value: function _changeType(value) {
            this.setState({
                restoreType: this.state.types.indexOf(value)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                types = _state.types,
                restoreType = _state.restoreType;

            var options = types.map(function (type) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    Option,
                    { key: type, value: type },
                    counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("settings.backupcreate_" + type),
                    " "
                );
            });

            var content = void 0;

            switch (types[restoreType]) {
                case "backup":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__["BackupCreate"], null);
                    break;

                case "brainkey":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__["default"], null);
                    break;

                case "favorites":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackupFavorites__WEBPACK_IMPORTED_MODULE_4__["default"], null);
                    break;

                default:
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__["Select"],
                    {
                        onChange: this._changeType.bind(this),
                        className: "bts-select",
                        value: types[restoreType],
                        style: { marginBottom: "16px" }
                    },
                    options
                ),
                content
            );
        }
    }]);

    return BackupSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BackupSettings);

/***/ }),

/***/ 3274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2541);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1854);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(717);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var BackupFavorites = function (_React$Component) {
    _inherits(BackupFavorites, _React$Component);

    function BackupFavorites() {
        _classCallCheck(this, BackupFavorites);

        return _possibleConstructorReturn(this, (BackupFavorites.__proto__ || Object.getPrototypeOf(BackupFavorites)).apply(this, arguments));
    }

    _createClass(BackupFavorites, [{
        key: "makeBackup",
        value: function makeBackup() {
            var data = this.props.starredMarkets.toJS();

            var blob = new Blob([JSON.stringify(data)], {
                type: "application/json; charset=us-ascii"
            });

            Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "favorites.json");
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "settings.backup_favoritestext" })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__["Button"],
                    { type: "primary", onClick: this.makeBackup.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "settings.backup_favoritesbtn" })
                )
            );
        }
    }]);

    return BackupFavorites;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(BackupFavorites, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().starredMarkets
        };
    }
}));

/***/ }),

/***/ 3292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3293);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2110);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2107);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(544);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(410);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2909);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(589);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(562);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(588);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2116);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(594);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















function moveDecimal(num, decimals) {
    if (!num) return;
    return num / Math.pow(10, decimals);
}

var Barter = function (_Component) {
    _inherits(Barter, _Component);

    function Barter() {
        _classCallCheck(this, Barter);

        var _this = _possibleConstructorReturn(this, (Barter.__proto__ || Object.getPrototypeOf(Barter)).call(this));

        _this.onMemoChanged = function (type, index) {
            return function (e) {
                var memos = Object.assign({}, _this.state.memo);
                memos[type][index] = { message: e.target.value, shown: true };
                _this.setState({ memo: memos });
            };
        };

        _this.handleMemoOpen = function (type, index) {
            return function (e) {
                var memos = Object.assign({}, _this.state.memo);
                memos[type][index] = { message: "", shown: true };
                _this.setState({ memo: memos });
            };
        };

        _this.state = {
            from_name: "",
            to_name: "",
            from_account: null,
            to_account: null,
            from_barter: [{
                index: 0,
                from_amount: "",
                from_asset_id: null,
                from_asset: null,
                from_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ amount: 0, asset_id: "1.3.0" }),
                from_hasPoolBalance: null,
                from_balanceError: false
            }],
            to_barter: [{
                index: 0,
                to_amount: "",
                to_asset_id: null,
                to_asset: null,
                to_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ amount: 0, asset_id: "1.3.0" }),
                to_hasPoolBalance: null,
                to_balanceError: false
            }],
            amount_counter: [],
            amount_index: 0,
            from_error: null,
            to_error: null,
            memo: {
                from_barter: [{ message: "", shown: false }],
                to_barter: [{ message: "", shown: false }],
                escrow: [{ message: "", shown: false }]
            },
            proposal_fee: {
                amount: 0,
                asset_id: "1.3.0"
            },
            showEscrow: false,
            escrow_account_name: "",
            escrow_account: null,
            send_to_escrow: false,
            escrow_payment: 0,
            escrow_payment_changed: false,
            escrowFeeAssetId: "1.3.0",
            balanceWarning: { peer1: [], peer2: [] }
        };
        _this._checkBalance = _this._checkBalance.bind(_this);
        _this.onTrxIncluded = _this.onTrxIncluded.bind(_this);
        return _this;
    }

    _createClass(Barter, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var currentAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().currentAccount;
            if (!this.state.from_name) this.setState({ from_name: currentAccount });
        }
    }, {
        key: "fromChanged",
        value: function fromChanged(from_name) {
            this.setState({ from_name: from_name });
        }
    }, {
        key: "escrowAccountChanged",
        value: function escrowAccountChanged(escrow_account_name) {
            this.setState({ escrow_account_name: escrow_account_name });
        }
    }, {
        key: "onFromAccountChanged",
        value: function onFromAccountChanged(from_account) {
            this.setState({
                from_account: from_account,
                from_barter: [{
                    from_amount: "",
                    from_asset_id: null,
                    from_asset: null,
                    from_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ amount: 0, asset_id: "1.3.0" }),
                    from_hasPoolBalance: null,
                    from_balanceError: false
                }]
            });
        }
    }, {
        key: "onEscrowAccountChanged",
        value: function onEscrowAccountChanged(escrow_account) {
            this.setState({
                escrow_account: escrow_account
            });
        }
    }, {
        key: "toChanged",
        value: function toChanged(to_name) {
            this.setState({ to_name: to_name });
        }
    }, {
        key: "onToAccountChanged",
        value: function onToAccountChanged(to_account) {
            this.setState({
                to_account: to_account,
                to_barter: [{
                    to_amount: "",
                    to_asset_id: null,
                    to_asset: null,
                    to_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ amount: 0, asset_id: "1.3.0" }),
                    to_hasPoolBalance: null,
                    to_balanceError: false
                }]
            });
        }
    }, {
        key: "onFromAmountChanged",
        value: function onFromAmountChanged(index, e) {
            var _this2 = this;

            var asset = e.asset;
            var amount = e.amount;
            if (!asset) {
                return;
            }
            var from_barter = [].concat(_toConsumableArray(this.state.from_barter));

            from_barter[index] = {
                index: index,
                from_amount: amount,
                from_asset: asset,
                from_asset_id: asset.get("id"),
                from_balanceError: false,
                from_feeAsset: from_barter[index].from_feeAsset
            };

            this.setState({
                from_barter: from_barter,
                from_error: null
            }, function () {
                _this2._checkBalance(from_barter[index].from_feeAsset, amount, _this2.state.from_account, asset, index, true, from_barter[index].from_feeAsset.asset_id, from_barter);
                _this2.checkAmountsTotal();
            });
        }
    }, {
        key: "onToAmountChanged",
        value: function onToAmountChanged(index, e) {
            var _this3 = this;

            var asset = e.asset;
            var amount = e.amount;
            if (!asset) {
                return;
            }
            var to_barter = [].concat(_toConsumableArray(this.state.to_barter));

            to_barter[index] = {
                index: index,
                to_amount: amount,
                to_asset: asset,
                to_asset_id: asset.get("id"),
                to_feeAsset: to_barter[index].to_feeAsset,
                to_balanceError: false
            };

            this.setState({
                to_barter: to_barter,
                to_error: null
            }, function () {
                _this3._checkBalance(to_barter[index].to_feeAsset, amount, _this3.state.to_account, asset, index, false, to_barter[index].to_feeAsset.asset_id, to_barter);
                _this3.checkAmountsTotal();
            });
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance(feeAmount, amount, account, asset, index, from, fee_asset_id, barter) {
            if (!asset || !account) return;
            var balanceID = account.getIn(["balances", asset.get("id")]);
            var feeBalanceID = account.getIn(["balances", feeAmount.asset_id]);
            if (!asset || !account) return;
            if (!balanceID) if (from) {
                barter[index].from_balanceError = true;
                return this.setState({ from_barter: barter });
            } else {
                barter[index].to_balanceError = true;
                return this.setState({ to_barter: barter });
            }
            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(balanceID);
            var feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(feeBalanceID) : null;
            if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
                if (from) {
                    this.setState({ from_barter: barter });
                } else {
                    this.setState({ to_barter: barter });
                }
            }
            if (!balanceObject || !feeAmount) return;
            if (!amount) if (from) {
                barter[index].from_balanceError = false;
                return this.setState({ from_barter: barter });
            } else {
                barter[index].to_balanceError = false;
                return this.setState({ to_barter: barter });
            }
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_12__["checkBalance"])(amount, asset, feeAmount, balanceObject);

            if (hasBalance === null) return;
            if (from) {
                barter[index].from_balanceError = !hasBalance;
                return this.setState({ from_barter: barter });
            } else {
                barter[index].to_balanceError = !hasBalance;
                return this.setState({ to_barter: barter });
            }
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account,
                from_error = state.from_error,
                to_account = state.to_account,
                to_error = state.to_error;


            var getAssetTypes = function getAssetTypes(account, err) {
                var asset_types = [],
                    fee_asset_types = [];
                if (!(account && account.get("balances") && !err)) {
                    return { asset_types: asset_types, fee_asset_types: fee_asset_types };
                }
                var account_balances = account.get("balances").toJS();
                asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].sortID);
                fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].sortID);

                for (var key in account_balances) {
                    var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(account_balances[key]);
                    if (balanceObject && balanceObject.get("balance") === 0) {
                        asset_types.splice(asset_types.indexOf(key), 1);
                        if (fee_asset_types.indexOf(key) !== -1) {
                            fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                        }
                    }
                }

                return { asset_types: asset_types, fee_asset_types: fee_asset_types };
            };

            var from = getAssetTypes(from_account, from_error);
            var to = getAssetTypes(to_account, to_error);

            return {
                from_asset_types: from.asset_types || [],
                to_asset_types: to.asset_types || [],
                from_fee_asset_types: from.fee_asset_types || [],
                to_fee_asset_types: to.fee_asset_types || []
            };
        }
    }, {
        key: "addFromAmount",
        value: function addFromAmount() {
            this.state.from_barter.push({
                from_amount: "",
                from_asset_id: null,
                from_asset: null,
                from_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ amount: 0, asset_id: "1.3.0" })
            });
            this.setState({ from_barter: this.state.from_barter });
        }
    }, {
        key: "addToAmount",
        value: function addToAmount() {
            this.state.to_barter.push({
                to_amount: "",
                to_asset_id: null,
                to_asset: null,
                to_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ amount: 0, asset_id: "1.3.0" })
            });
            this.setState({ to_barter: this.state.to_barter });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            var _this4 = this;

            e.preventDefault();
            this.setState({ from_error: null, to_error: null });
            var sendAmount = void 0;
            var transfer_list = [];

            var proposer = stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().currentAccount;

            var left_account = this.state.from_account;
            var escrowMemo = this.state.memo["escrow"][0] && this.state.memo["escrow"][0].message;

            if (this.state.showEscrow && this.state.send_to_escrow) {
                left_account = this.state.escrow_account;
            }

            if (this.state.showEscrow) {
                var escrow_payment = this.state.escrow_payment_changed ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ real: this.state.escrow_payment }).getAmount() : fee(true);
                if (escrow_payment > 0) {
                    transfer_list.push({
                        from_account: this.state.from_account.get("id"),
                        to_account: this.state.escrow_account.get("id"),
                        amount: escrow_payment,
                        asset: "1.3.0",
                        memo: escrowMemo ? new Buffer(escrowMemo, "utf-8") : null,
                        feeAsset: this.state.escrowFeeAssetId,
                        propose_account: proposer
                    });
                }
            }

            this.state.from_barter.forEach(function (item, index) {
                var asset = item.from_asset;
                var amount = item.from_amount;
                sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({
                    real: amount,
                    asset_id: asset.get("id"),
                    precision: asset.get("precision")
                });

                var fromBarterMemo = _this4.state.memo["from_barter"][index] && _this4.state.memo["from_barter"][index].message;

                if (_this4.state.showEscrow && _this4.state.send_to_escrow) {
                    transfer_list.push({
                        from_account: _this4.state.from_account.get("id"),
                        to_account: _this4.state.escrow_account.get("id"),
                        amount: sendAmount.getAmount(),
                        asset: asset.get("id"),
                        memo: escrowMemo ? new Buffer(escrowMemo, "utf-8") : null,
                        feeAsset: item.from_feeAsset ? item.from_feeAsset.asset_id : "1.3.0"
                    });
                }

                transfer_list.push({
                    from_account: left_account.get("id"),
                    to_account: _this4.state.to_account.get("id"),
                    amount: sendAmount.getAmount(),
                    asset: asset.get("id"),
                    memo: fromBarterMemo ? new Buffer(fromBarterMemo, "utf-8") : null,
                    feeAsset: item.from_feeAsset ? item.from_feeAsset.asset_id : "1.3.0",
                    propose_account: proposer
                });
            });

            if (this.state.showEscrow && !this.state.send_to_escrow) {
                transfer_list.push({
                    from_account: this.state.escrow_account.get("id"),
                    to_account: this.state.from_account.get("id"),
                    amount: 1,
                    asset: "1.3.0",
                    memo: null,
                    feeAsset: this.state.escrowFeeAssetId,
                    propose_account: proposer
                });
            }

            this.state.to_barter.forEach(function (item, index) {
                var asset = item.to_asset;
                var amount = item.to_amount;
                var toBarterMemo = _this4.state.memo["to_barter"][index] && _this4.state.memo["to_barter"][index].message;
                sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({
                    real: amount,
                    asset_id: asset.get("id"),
                    precision: asset.get("precision")
                });
                transfer_list.push({
                    from_account: _this4.state.to_account.get("id"),
                    to_account: _this4.state.from_account.get("id"),
                    amount: sendAmount.getAmount(),
                    asset: asset.get("id"),
                    memo: toBarterMemo ? new Buffer(toBarterMemo, "utf-8") : null,
                    feeAsset: item.to_feeAsset ? item.to_feeAsset.asset_id : "1.3.0",
                    propose_account: proposer
                });
            });

            _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_14__["default"].transfer_list(transfer_list, this.state.proposal_fee.asset_id);
        }
    }, {
        key: "onTrxIncluded",
        value: function onTrxIncluded(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                TransactionConfirmStore.unlisten(this.onTrxIncluded);
                TransactionConfirmStore.reset();
            } else if (confirm_store_state.closed) {
                TransactionConfirmStore.unlisten(this.onTrxIncluded);
                TransactionConfirmStore.reset();
            }
        }
    }, {
        key: "renderMemoField",
        value: function renderMemoField(type, index) {
            var memo = this.state.memo;

            var memoValue = memo[type][index] && memo[type][index].message ? memo[type][index].message : "";
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "content-block transfer-input" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    className: "left-label",
                    component: "label",
                    content: "transfer.memo"
                }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                    style: { marginBottom: 0 },
                    rows: "1",
                    value: memoValue,
                    onChange: this.onMemoChanged(type, index)
                })
            );
        }
    }, {
        key: "getBalance",
        value: function getBalance(account, assetType) {
            return bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAccountBalance(account, assetType);
        }
    }, {
        key: "checkAmountsTotal",
        value: function checkAmountsTotal() {
            var _this5 = this;

            var _state = this.state,
                from_barter = _state.from_barter,
                to_barter = _state.to_barter,
                from_account = _state.from_account,
                to_account = _state.to_account;

            var peer1Amounts = {};
            var peer2Amounts = {};

            // for peer1
            from_barter.forEach(function (item) {
                if (item.from_amount) {
                    if (peer1Amounts.hasOwnProperty(item.from_asset_id)) {
                        peer1Amounts[item.from_asset_id] = {
                            amount: Number(peer1Amounts[item.from_asset_id].amount) + Number(item.from_amount),
                            precision: item.from_asset.get("precision"),
                            symbol: item.from_asset.get("symbol")
                        };
                    } else {
                        peer1Amounts[item.from_asset_id] = {
                            amount: Number(item.from_amount),
                            precision: item.from_asset.get("precision"),
                            symbol: item.from_asset.get("symbol")
                        };
                    }
                }
            });

            var peer1AmountsFormated = Object(lodash_es_map__WEBPACK_IMPORTED_MODULE_0__["default"])(peer1Amounts, function (item, key) {
                var balanceOfCurrentAsset = _this5.getBalance(from_account, key);
                var decimals = Math.max(0, item.precision);
                var formatedBalance = balanceOfCurrentAsset ? moveDecimal(balanceOfCurrentAsset, decimals) : 0;
                item.assetId = key;
                if (item.amount > formatedBalance) {
                    item.warning = true;
                    item.balance = formatedBalance;
                }
                return item;
            });

            // for peer2
            to_barter.forEach(function (item) {
                if (item.to_amount) {
                    if (peer2Amounts.hasOwnProperty(item.to_asset_id)) {
                        peer2Amounts[item.to_asset_id] = {
                            amount: Number(peer2Amounts[item.to_asset_id].amount) + Number(item.to_amount),
                            precision: item.to_asset.get("precision"),
                            symbol: item.to_asset.get("symbol")
                        };
                    } else {
                        peer2Amounts[item.to_asset_id] = {
                            amount: Number(item.to_amount),
                            precision: item.to_asset.get("precision"),
                            symbol: item.to_asset.get("symbol")
                        };
                    }
                }
            });

            var peer2AmountsFormated = Object(lodash_es_map__WEBPACK_IMPORTED_MODULE_0__["default"])(peer2Amounts, function (item, key) {
                var balanceOfCurrentAsset = _this5.getBalance(to_account, key);
                var decimals = Math.max(0, item.precision);
                var formatedBalance = balanceOfCurrentAsset ? moveDecimal(balanceOfCurrentAsset, decimals) : 0;
                item.assetId = key;
                if (item.amount > formatedBalance) {
                    item.warning = true;
                    item.balance = formatedBalance;
                }
                return item;
            });

            this.setState({
                balanceWarning: {
                    peer1: peer1AmountsFormated,
                    peer2: peer2AmountsFormated
                }
            });
        }
    }, {
        key: "renderBalanceWarnings",
        value: function renderBalanceWarnings() {
            var _state$balanceWarning = this.state.balanceWarning,
                peer1 = _state$balanceWarning.peer1,
                peer2 = _state$balanceWarning.peer2;

            var isPeer1Warning = peer1.some(function (item) {
                return !!item.warning;
            });
            var isPeer2Warning = peer2.some(function (item) {
                return !!item.warning;
            });

            var peer1Text = counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.peer_left");
            var peer2Text = counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.peer_right");
            var peer1Component = isPeer1Warning ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { style: { maxWidth: "25rem" } },
                counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning_tooltip", {
                    peer: peer1Text
                }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                peer1.map(function (item) {
                    if (item.warning) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                {
                                    style: { marginRight: "10px" },
                                    key: item.assetId
                                },
                                " - " + counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning_line", {
                                    asset_symbol: item.symbol,
                                    asset_balance: item.balance,
                                    asset_amount: item.amount
                                })
                            )
                        );
                    }
                })
            ) : null;
            var peer2Component = isPeer2Warning ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { style: { maxWidth: "25rem" } },
                counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning_tooltip", {
                    peer: peer2Text
                }),
                peer2.map(function (item) {
                    if (item.warning) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                style: { marginRight: "10px" },
                                key: item.assetId
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning_line", {
                                asset_symbol: item.symbol,
                                asset_balance: item.balance,
                                asset_amount: item.amount
                            }),
                            ";"
                        );
                    }
                })
            ) : null;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                { className: "barter-balance-warning" },
                isPeer1Warning && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Popover"],
                    {
                        content: peer1Component,
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { style: { cursor: "help" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
                            style: {
                                display: "inline",
                                marginRight: "1rem"
                            },
                            message: peer1Text + " " + counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning"),
                            type: "warning",
                            showIcon: true
                        })
                    )
                ),
                isPeer2Warning && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Popover"],
                    {
                        content: peer2Component,
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { style: { cursor: "help" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
                            style: { display: "inline" },
                            message: peer2Text + " " + counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.balance_warning"),
                            type: "warning",
                            showIcon: true
                        })
                    )
                )
            );
        }
    }, {
        key: "onFeeChangedPeer1CreateProposal",
        value: function onFeeChangedPeer1CreateProposal(asset) {
            this.setState({ proposal_fee: asset });
        }
    }, {
        key: "onFeeChangedPeer1InProposal",
        value: function onFeeChangedPeer1InProposal(asset) {
            var _barter = this.state.from_barter.map(function (item) {
                item.to_feeAsset = asset;
                return item;
            });
            this.setState({ from_barter: _barter });
        }
    }, {
        key: "onFeeChangedPeer2InProposal",
        value: function onFeeChangedPeer2InProposal(asset) {
            var _barter = this.state.to_barter.map(function (item) {
                item.to_feeAsset = asset;
                return item;
            });
            this.setState({ to_barter: _barter });
        }
    }, {
        key: "onEscrowFeeChanged",
        value: function onEscrowFeeChanged(asset) {
            this.setState({ escrowFeeAssetId: asset.asset_id });
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            var _state2 = this.state,
                from_name = _state2.from_name,
                to_name = _state2.to_name,
                from_account = _state2.from_account,
                to_account = _state2.to_account,
                from_barter = _state2.from_barter,
                to_barter = _state2.to_barter,
                amount_index = _state2.amount_index,
                from_error = _state2.from_error,
                to_error = _state2.to_error;

            var _getAvailableAssets2 = this._getAvailableAssets(),
                from_asset_types = _getAvailableAssets2.from_asset_types,
                to_asset_types = _getAvailableAssets2.to_asset_types;

            var smallScreen = window.innerWidth < 850 ? true : false;
            var assetFromList = [];
            var assetToList = [];
            var assetFromSymbol = "";
            var assetToSymbol = "";

            var checkAmountValid = function checkAmountValid() {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = from_barter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        var amountValue = parseFloat(String.prototype.replace.call(item.from_amount, /,/g, ""));
                        if (isNaN(amountValue) || amountValue === 0) return false;
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

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = to_barter[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _item = _step2.value;

                        var amountValue = parseFloat(String.prototype.replace.call(_item.to_amount, /,/g, ""));
                        if (isNaN(amountValue) || amountValue === 0) return false;
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

                return true;
            };
            var explictPrice = function explictPrice() {
                var result = "";
                if (checkAmountValid()) {
                    var fromAmount = parseFloat(from_barter[0].from_amount);
                    var toAmount = parseFloat(to_barter[0].to_amount);
                    result = fromAmount / toAmount;
                }
                return result;
            };

            var fee = function fee(from) {
                console.log(from_barter);
                var fee = 0;
                if (from) {
                    fee = fee;
                    from_barter.forEach(function (item) {
                        fee += item.from_feeAsset._real_amount;
                    });
                } else {
                    to_barter.forEach(function (item) {
                        fee += item.to_feeAsset._real_amount;
                    });
                }

                return fee;
            };
            var balanceError = function balanceError() {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = from_barter[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var item = _step3.value;

                        if (item.from_balanceError) {
                            return true;
                        }
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

                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = to_barter[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _item2 = _step4.value;

                        if (_item2.from_balanceError) {
                            return true;
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

                return false;
            };

            var isEscrowNotValid = this.state.showEscrow && !this.state.escrow_account;

            // should the user be only allowed to request for existing funds?
            // balanceError() ||
            var isSubmitNotValid = !from_account || !to_account || from_account.get("id") == to_account.get("id") || to_error || !checkAmountValid() || from_error || isEscrowNotValid;

            var balance = function balance(account, balanceError, asset_types, asset) {
                if (account && account.get("balances")) {
                    var account_balances = account.get("balances").toJS();

                    var _error = balanceError ? "has-error" : "";
                    if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAsset(asset_types[0]);
                    if (asset_types.length > 0) {
                        var current_asset_id = asset ? asset.get("id") : asset_types[0];

                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "span",
                                content: "transfer.available"
                            }),
                            ":",
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                {
                                    className: _error,
                                    style: {
                                        borderBottom: "#A09F9F 1px dotted",
                                        cursor: "pointer"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    balance: account_balances[current_asset_id]
                                })
                            )
                        );
                    } else {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: _error },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.noFunds" })
                            )
                        );
                    }
                }
            };

            var fromAmountSelector = from_barter.map(function (item, index) {
                var assetSymbol = "";
                if (item.from_asset) {
                    assetSymbol = item.from_asset.get("symbol");
                    assetFromList.push([item.from_amount || 0, assetSymbol].join(" "));
                }

                var isMemoShown = _this6.state.memo["from_barter"][index] && _this6.state.memo["from_barter"][index].shown;
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { key: amount_index++ },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { position: "relative" } },
                        !isMemoShown && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.add_memo_field"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                                onClick: _this6.handleMemoOpen("from_barter", index),
                                size: "small",
                                icon: "message",
                                className: "add-memo-btn"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            label: "showcases.barter.bartering_asset",
                            style: {
                                marginBottom: "1rem"
                            },
                            amount: item.from_amount,
                            onChange: _this6.onFromAmountChanged.bind(_this6, index),
                            asset: from_asset_types.length > 0 && item.from_asset ? item.from_asset.get("id") : item.from_asset_id ? item.from_asset_id : from_asset_types[0],
                            assets: from_asset_types,
                            display_balance: balance(from_account, item.from_balanceError, from_asset_types, item.from_asset),
                            allowNaN: true
                        })
                    ),
                    isMemoShown && _this6.renderMemoField("from_barter", index)
                );

                assetFromSymbol = assetSymbol;
            });

            var toAmountSelector = to_barter.map(function (item, index) {
                var assetSymbol = "";
                if (item.to_asset) {
                    assetSymbol = item.to_asset.get("symbol");
                    assetToList.push([item.to_amount || 0, item.to_asset.get("symbol")].join(" "));
                }
                var isMemoShown = _this6.state.memo["to_barter"][index] && _this6.state.memo["to_barter"][index].shown;

                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { key: amount_index++ },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { position: "relative" } },
                        !isMemoShown && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.add_memo_field"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                                onClick: _this6.handleMemoOpen("to_barter", index),
                                size: "small",
                                icon: "message",
                                className: "add-memo-btn"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            label: "showcases.barter.bartering_asset",
                            style: {
                                marginBottom: "1rem"
                            },
                            amount: item.to_amount,
                            onChange: _this6.onToAmountChanged.bind(_this6, index),
                            asset: to_asset_types.length > 0 && item.to_asset ? item.to_asset.get("id") : item.to_asset_id ? item.to_asset_id : to_asset_types[0],
                            assets: to_asset_types,
                            display_balance: balance(to_account, item.to_balanceError, to_asset_types, item.to_asset),
                            allowNaN: true
                        })
                    ),
                    isMemoShown && _this6.renderMemoField("to_barter", index)
                );

                assetToSymbol = assetSymbol;
            });

            var account_from = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                { style: { borderRadius: "10px" } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.barter.peer_left" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "showcases.barter.account",
                    placeholder: "placeholder",
                    style: {
                        marginTop: "0.5rem",
                        marginBottom: "1rem"
                    },
                    allowPubKey: true,
                    allowUppercase: true,
                    account: from_account,
                    accountName: from_name,
                    onChange: this.fromChanged.bind(this),
                    onAccountChanged: this.onFromAccountChanged.bind(this),
                    hideImage: true,
                    typeahead: true
                }),
                from_account && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    fromAmountSelector,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            style: { paddingTop: "10px", paddingBottom: "10px" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                            {
                                onClick: this.addFromAmount.bind(this),
                                disabled: !from_account || !this.state.from_barter[this.state.from_barter.length - 1].from_amount
                            },
                            "+ Add asset"
                        )
                    )
                )
            );

            var account_to = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                { style: { borderRadius: "10px" } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.barter.peer_right" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "showcases.barter.account",
                    placeholder: "placeholder",
                    style: {
                        marginTop: "0.5rem",
                        marginBottom: "1rem"
                    },
                    allowPubKey: true,
                    allowUppercase: true,
                    account: to_account,
                    accountName: to_name,
                    onChange: this.toChanged.bind(this),
                    onAccountChanged: this.onToAccountChanged.bind(this),
                    hideImage: true,
                    typeahead: true
                }),
                to_account && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    toAmountSelector,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            style: { paddingTop: "10px", paddingBottom: "10px" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                            {
                                onClick: this.addToAmount.bind(this),
                                disabled: !to_account || !this.state.to_barter[this.state.to_barter.length - 1].to_amount
                            },
                            "+ Add asset"
                        )
                    )
                )
            );

            var action_error_key = "showcases.barter.not_complete";
            if (isSubmitNotValid) {
                if (!from_account) {
                    action_error_key = "showcases.barter.error_fill_in_peer_left_name";
                } else if (!to_account) {
                    action_error_key = "showcases.barter.error_fill_in_peer_right_name";
                } else if (from_account.get("id") == to_account.get("id")) {
                    action_error_key = "showcases.barter.error_same_name";
                } else if (!checkAmountValid()) {
                    action_error_key = "showcases.barter.error_fill_in_valid_asset_amount";
                } else if (isEscrowNotValid) {
                    action_error_key = "showcases.barter.error_fill_in_escrow_name";
                } else if (this.state.showEscrow && (from_account.get("id") == this.state.escrow_account.get("id") || to_account.get("id") == this.state.escrow_account.get("id"))) {
                    action_error_key = "showcases.barter.error_same_name_escrow";
                }
            }

            var offers = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                { style: { borderRadius: "10px" } },
                !isSubmitNotValid && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "left-label", style: { fontSize: "1rem" } },
                    counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.action", {
                        peer_left: from_name,
                        assets_left: assetFromList.join(", "),
                        peer_right: to_name,
                        assets_right: assetToList.join(", ")
                    }),
                    this.state.showEscrow && !this.state.send_to_escrow && counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.escrow_as_witness", {
                        escrow: this.state.escrow_account.get("name")
                    }),
                    this.state.showEscrow && this.state.send_to_escrow && counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.escrow_as_custodian", {
                        escrow: this.state.escrow_account.get("name")
                    })
                ),
                isSubmitNotValid && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "left-label",
                        style: {
                            fontSize: "1rem"
                        }
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate(action_error_key)
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.add_escrow_tooltip"),
                        placement: "topRight"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                        {
                            key: this.state.showEscrow ? "remove_escrow" : "add_escrow",
                            onClick: this.toggleEscrow.bind(this),
                            style: {
                                float: "right"
                            }
                        },
                        counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate(this.state.showEscrow ? "showcases.barter.remove_escrow" : "showcases.barter.add_escrow")
                    )
                ),
                from_barter.length === 500 && to_barter.length === 500 ? // deactivate for now
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "amount-selector", style: this.props.style },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        className: "left-label",
                        component: "label",
                        content: "transfer.explict_price"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                            disabled: false,
                            type: "text",
                            value: explictPrice()
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    null,
                                    assetFromSymbol + "/" + assetToSymbol
                                )
                            )
                        )
                    )
                ) : ""
            );

            var totalFeeFrom = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                { style: { borderRadius: "10px" } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.barter.peer_left" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate(this.state.send_to_escrow ? "showcases.barter.fee_due_now_tooltip" : "showcases.barter.fee_when_proposal_executes_tooltip")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "barter-fee-selector" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            label: this.state.send_to_escrow ? "showcases.barter.fee_due_now" : "showcases.barter.fee_when_proposal_executes",
                            account: from_account,
                            transaction: {
                                type: "transfer",
                                options: ["price_per_kbyte"],
                                data: {
                                    type: "memo",
                                    content: null
                                }
                            },
                            onChange: this.onFeeChangedPeer1InProposal.bind(this),
                            multiplier: from_barter.length
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.proposal_fee_tooltip")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "barter-fee-selector" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            label: "showcases.barter.proposal_fee",
                            account: from_account,
                            transaction: {
                                type: "proposal_create",
                                options: ["price_per_kbyte"],
                                data: {
                                    type: "memo",
                                    content: null
                                }
                            },
                            onChange: this.onFeeChangedPeer1CreateProposal.bind(this)
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.total_fees_tooltip")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { style: { marginTop: "1rem" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            content: "showcases.barter.total_fees",
                            className: "left-label",
                            component: "label",
                            fee: fee(true) + this.state.proposal_fee._real_amount,
                            asset: "BTS"
                        })
                    )
                )
            );

            var totalFeeTo = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                { style: { borderRadius: "10px" } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.barter.peer_right" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.fee_when_proposal_executes_tooltip")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "barter-fee-selector" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            label: "showcases.barter.fee_when_proposal_executes",
                            account: to_account,
                            transaction: {
                                type: "transfer",
                                options: ["price_per_kbyte"],
                                data: {
                                    type: "memo",
                                    content: null
                                }
                            },
                            onChange: this.onFeeChangedPeer2InProposal.bind(this),
                            multiplier: to_barter.length
                        })
                    )
                )
            );

            var feeForEscrow = null;
            if (this.state.showEscrow) {
                feeForEscrow = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                    { style: { borderRadius: "10px" } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.barter.escrow_account" }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.fee_when_proposal_executes_tooltip")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "barter-fee-selector" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                label: "showcases.barter.fee_when_proposal_executes",
                                account: this.state.escrow_account,
                                transaction: {
                                    type: "transfer",
                                    options: ["price_per_kbyte"],
                                    data: {
                                        type: "memo",
                                        content: null
                                    }
                                },
                                onChange: this.onEscrowFeeChanged.bind(this),
                                multiplier: from_barter.length
                            })
                        )
                    )
                );
            }

            var intro = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                {
                    style: {
                        borderRadius: "10px"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.new_barter_tooltip"),
                        placement: "bottom"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "h2",
                        { style: { textAlign: "center" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.barter.new_barter" }),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], { type: "question-circle", theme: "filled" })
                    )
                )
            );

            var escrow = null;
            var isEscrowMemoShown = this.state.memo["escrow"][0] && this.state.memo["escrow"][0].shown;
            var escrow_payment = this.state.escrow_payment_changed ? this.state.escrow_payment : fee(true);
            if (this.state.showEscrow) {
                escrow = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                    { style: { borderRadius: "10px" } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        label: "showcases.barter.escrow_account",
                        placeholder: "placeholder",
                        style: {
                            marginBottom: "1rem"
                        },
                        allowPubKey: true,
                        allowUppercase: true,
                        account: this.state.escrow_account,
                        accountName: this.state.escrow_account_name,
                        onChange: this.escrowAccountChanged.bind(this),
                        onAccountChanged: this.onEscrowAccountChanged.bind(this),
                        hideImage: true,
                        typeahead: true
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.send_to_escrow_tooltip")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
                                style: { margin: 6 },
                                checked: this.state.send_to_escrow,
                                onChange: this.onToggleSendToEscrow.bind(this)
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.barter.send_to_escrow" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { position: "relative" } },
                        !isEscrowMemoShown && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.add_memo_field"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                                onClick: this.handleMemoOpen("escrow", 0),
                                size: "small",
                                icon: "message",
                                className: "add-memo-btn"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.escrow_payment_tooltip"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    label: "showcases.barter.escrow_payment",
                                    disabled: false,
                                    amount: escrow_payment,
                                    onChange: this._updateEscrowFee.bind(this),
                                    style: {
                                        margin: "1rem 0"
                                    },
                                    asset: "1.3.0",
                                    assets: ["1.3.0"],
                                    error: this.state.hasPoolBalance === false ? "transfer.errors.insufficient" : null,
                                    scroll_length: 2
                                })
                            )
                        ),
                        isEscrowMemoShown && this.renderMemoField("escrow", 0)
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    className: "center",
                    style: {
                        padding: "10px",
                        maxWidth: "80rem",
                        width: "100%",
                        margin: "0 auto"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                    null,
                    smallScreen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                intro
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                account_from
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                account_to
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                offers
                            )
                        ),
                        escrow && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                escrow
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                totalFeeFrom
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                totalFeeTo
                            )
                        ),
                        feeForEscrow != null && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                feeForEscrow
                            )
                        )
                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                intro
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { span: 12, style: { padding: "10px" } },
                                account_from
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { span: 12, style: { padding: "10px" } },
                                account_to
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                offers
                            )
                        ),
                        escrow && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { style: { padding: "10px" } },
                                escrow
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { span: 12, style: { padding: "10px" } },
                                totalFeeFrom
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                                { span: 12, style: { padding: "10px" } },
                                totalFeeTo,
                                feeForEscrow
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "barter-footer" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("showcases.barter.propose_tooltip"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                                {
                                    key: "propose",
                                    disabled: isSubmitNotValid,
                                    onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
                                },
                                counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("propose")
                            )
                        ),
                        !isSubmitNotValid && this.renderBalanceWarnings()
                    )
                )
            );
        }
    }, {
        key: "_updateEscrowFee",
        value: function _updateEscrowFee(e) {
            this.setState({
                escrow_payment_changed: true,
                escrow_payment: e.amount
            });
        }
    }, {
        key: "onToggleSendToEscrow",
        value: function onToggleSendToEscrow() {
            this.setState({
                send_to_escrow: !this.state.send_to_escrow
            });
        }
    }, {
        key: "toggleEscrow",
        value: function toggleEscrow() {
            this.setState({ showEscrow: !this.state.showEscrow });
        }
    }]);

    return Barter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Barter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(417).Buffer))

/***/ }),

/***/ 3293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1987);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2025);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3294);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(655);





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, 3));
}

/* harmony default export */ __webpack_exports__["default"] = (map);


/***/ }),

/***/ 3294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2020);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(669);



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection) ? Array(collection.length) : [];

  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMap);


/***/ }),

/***/ 3295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2109);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2097);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1854);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(410);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(595);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2826);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(544);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1863);
/* harmony import */ var _Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2099);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(400);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_13__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var Borrow = function (_Component) {
    _inherits(Borrow, _Component);

    function Borrow() {
        _classCallCheck(this, Borrow);

        var _this = _possibleConstructorReturn(this, (Borrow.__proto__ || Object.getPrototypeOf(Borrow)).call(this));

        _this.state = {
            isBorrowBaseModalVisible: false,
            selectedAsset: null,
            step: 0
        };
        _this.steps = [{
            key: "introduction",
            icon: "borrow"
        }, {
            key: "concept",
            has_legend: true
        }, {
            key: "setup",
            has_legend: true
        }, {
            key: "benefits",
            has_legend: true
        }, {
            key: "risks",
            has_legend: true
        }];
        _this.showBorrowModal = _this.showBorrowModal.bind(_this);
        _this.hideBorrowModal = _this.hideBorrowModal.bind(_this);
        return _this;
    }

    _createClass(Borrow, [{
        key: "showBorrowModal",
        value: function showBorrowModal() {
            var _this2 = this;

            // needs a known account
            if (!this.props.currentAccount) {
                actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock().then(function () {
                    _this2.setState({
                        isBorrowBaseModalVisible: true
                    });
                }).catch(function () {});
            } else {
                this.setState({
                    isBorrowBaseModalVisible: true
                });
            }
        }
    }, {
        key: "hideBorrowModal",
        value: function hideBorrowModal() {
            this.setState({
                isBorrowBaseModalVisible: false
            });
        }
    }, {
        key: "next",
        value: function next() {
            var step = this.state.step + 1;
            if (step >= this.steps.length) step = this.steps.length;
            this.setState({ step: step });
        }
    }, {
        key: "prev",
        value: function prev() {
            var step = this.state.step - 1;
            if (step < 0) step = 0;
            this.setState({ step: step });
        }
    }, {
        key: "onAssetChange",
        value: function onAssetChange(selected_asset) {
            this.setState({
                selectedAsset: selected_asset
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainStore"].getAccount(this.props.currentAccount);
            var accountLoaded = !(!currentAccount || typeof currentAccount === "string");
            var current = this.state.step;
            var tinyScreen = window.innerWidth <= 800;
            var started = this.state.step > 0;

            var selectedAssetObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainStore"].getAsset(this.state.selectedAsset);
            var steps = this.steps;
            var legend = null;
            if (current < steps.length) {
                try {
                    if (steps[current].has_legend) {
                        legend = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("showcases.borrow.steps_" + steps[current].key + ".text_legend");
                        legend = legend.split("\n").map(function (item) {
                            return item.split(":");
                        });
                    }
                } catch (err) {
                    legend = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("showcases.borrow.steps_" + steps[current].key + ".text_legend");
                }
            }

            var finishedCard = null;
            if (current >= steps.length) {
                finishedCard = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            content: "showcases.borrow.choose",
                            component: "h4"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                style: {
                                    width: "12rem",
                                    marginBottom: "1rem"
                                },
                                assets: ["1.3.113", "1.3.120", "1.3.121", "1.3.1325", "1.3.105", "1.3.106", "1.3.103"],
                                value: this.state.selectedAsset,
                                onChange: this.onAssetChange.bind(this)
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("showcases.borrow.borrow_tooltip"),
                                    placement: "bottom"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                                    {
                                        type: "primary",
                                        style: {
                                            width: "12rem"
                                        },
                                        disabled: this.state.selectedAsset !== null && accountLoaded ? currentAccount.get("id") === "1.2.3" : true,
                                        onClick: this.showBorrowModal
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.borrow" })
                                )
                            )
                        )
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    style: {
                        align: "center",
                        display: "flex",
                        paddingTop: "1rem",
                        justifyContent: "center"
                    },
                    onKeyDown: this.onKeyDown.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                    {
                        style: {
                            borderRadius: "50px",
                            width: "70%",
                            maxWidth: "70rem",
                            paddingTop: "1rem",
                            paddingBottom: "1rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h1",
                            content: finishedCard != null ? "showcases.borrow.now_ready" : "showcases.borrow.title_long"
                        })
                    ),
                    started && (!tinyScreen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Steps"],
                        { progressDot: true, current: current - 1 },
                        steps.map(function (item, index) {
                            if (index == 0) return null;
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Steps"].Step, {
                                key: item.key,
                                title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("showcases.borrow.steps_" + item.key + ".title")
                            });
                        })
                    ) : current < this.steps.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        current + ". ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            content: "showcases.borrow.steps_" + steps[current].key + ".title"
                        })
                    ) : null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                paddingTop: "1rem",
                                paddingBottom: "1rem"
                            }
                        },
                        finishedCard != null && finishedCard,
                        finishedCard == null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Card"],
                            { onKeyDown: this.onKeyDown.bind(this) },
                            !!steps[current].icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], { name: "steps[current].icon" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "h2",
                                content: "showcases.borrow.steps_" + steps[current].key + ".title_within"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "p",
                                content: "showcases.borrow.steps_" + steps[current].key + ".text"
                            }),
                            !!steps[current].has_legend && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                                null,
                                legend.map(function (content, index) {
                                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { key: "borrow_subp_" + index },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "strong",
                                            null,
                                            content[0]
                                        ),
                                        ": ",
                                        content[1]
                                    );
                                })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "steps-action" },
                        current < steps.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                            {
                                title: current == 0 ? counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("showcases.borrow.navigate_with_keys") : null
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                                {
                                    type: "primary",
                                    onClick: function onClick() {
                                        return _this3.next();
                                    },
                                    tabIndex: "0",
                                    ref: "next",
                                    onKeyDown: this.onKeyDown.bind(this)
                                },
                                current == 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "showcases.borrow.get_started"
                                }),
                                current > 0 && current < steps.length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "showcases.borrow.next"
                                }),
                                current === steps.length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "showcases.borrow.do_it"
                                })
                            )
                        ),
                        current > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                            {
                                style: { marginLeft: 8 },
                                onClick: function onClick() {
                                    return _this3.prev();
                                },
                                ref: "previous",
                                onKeyDown: this.onKeyDown.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "showcases.borrow.previous"
                            })
                        )
                    )
                ),
                accountLoaded && !!selectedAssetObject && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    visible: this.state.isBorrowBaseModalVisible,
                    hideModal: this.hideBorrowModal,
                    quoteAssetObj: selectedAssetObject.get("id"),
                    backingAssetObj: selectedAssetObject.getIn(["bitasset", "options", "short_backing_asset"]),
                    accountObj: currentAccount
                })
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.focusDiv();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.focusDiv();
        }
    }, {
        key: "focusDiv",
        value: function focusDiv() {
            var current = this.state.step;
            var steps = this.steps;
            if (current < steps.length && !!this.refs.next) {
                react_dom__WEBPACK_IMPORTED_MODULE_13__["findDOMNode"](this.refs.next).focus();
            } else if (current == steps.length && !!this.refs.previous) {
                react_dom__WEBPACK_IMPORTED_MODULE_13__["findDOMNode"](this.refs.previous).focus();
            }
        }
    }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
            // arrow up/down button should select next/previous list element
            if (e.keyCode === 39 || e.key == "ArrowRight") {
                e.preventDefault();
                e.stopPropagation();
                this.next();
            } else if (e.keyCode === 37 || e.key == "ArrowLeft") {
                e.preventDefault();
                e.stopPropagation();
                this.prev();
            }
        }
    }]);

    return Borrow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Borrow = react_debounce_render__WEBPACK_IMPORTED_MODULE_4___default()(Borrow, 50, { leading: false });

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(Borrow, {
    listenTo: function listenTo() {
        return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().passwordAccount
        };
    }
}));

/***/ }),

/***/ 3296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var _Modal_HtlcModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3297);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2419);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2723);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Htlc = function (_Component) {
    _inherits(Htlc, _Component);

    function Htlc(props) {
        var _this2 = this;

        _classCallCheck(this, Htlc);

        var _this = _possibleConstructorReturn(this, (Htlc.__proto__ || Object.getPrototypeOf(Htlc)).call(this, props));

        _this.showModal = function (operation) {
            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!operation.payload) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 3;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount, [operation.payload.transfer.to], undefined, {});

                            case 3:
                                _context.next = 5;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount, [operation.payload.transfer.from], undefined, {});

                            case 5:
                                _context.next = 7;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset, [operation.payload.transfer.asset_id]);

                            case 7:
                                _this.setState({
                                    isModalVisible: true,
                                    operationData: operation
                                });

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));
        };

        _this.hideModal = function () {
            _this.setState({
                isModalVisible: false,
                operation: null
            });
        };

        _this._onFilter = function (e) {
            e.preventDefault();
            _this.setState({ filterString: e.target.value.toLowerCase() });
        };

        _this.state = {
            isModalVisible: false,
            filterString: "",
            operationData: undefined,
            htlc_list: [],
            tableIsLoading: false
        };
        _this.hasLoadedOnce = null;
        return _this;
    }

    _createClass(Htlc, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this.props.currentAccount !== np.currentAccount || JSON.stringify(this.state.htlc_list) !== JSON.stringify(ns.htlc_list) || this.state.isModalVisible !== ns.isModalVisible || this.state.tableIsLoading !== ns.tableIsLoading || this.state.filterString !== ns.filterString;
        }
    }, {
        key: "_update",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var currentAccount, accountId, htlc_from, htlc_to;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                currentAccount = this.props.currentAccount;
                                accountId = currentAccount.get("id");


                                if (false) {}
                                this.hasLoadedOnce = currentAccount.get("id");
                                this.setState({
                                    tableIsLoading: true
                                });
                                htlc_from = this.props.currentAccount.get("htlcs_from").toJS() || [];
                                htlc_to = this.props.currentAccount.get("htlcs_to").toJS() || [];

                                this.setState({
                                    htlc_list: htlc_from.concat(htlc_to).map(function (_item) {
                                        return bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(_item);
                                    }).map(function (_item) {
                                        return !!_item.toJS ? _item.toJS() : undefined;
                                    }),
                                    tableIsLoading: false
                                });

                            case 8:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function _update() {
                return _ref2.apply(this, arguments);
            }

            return _update;
        }()
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._update();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            // always update, relies on push from backend when account permission change
            this._update();
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                isModalVisible = _state.isModalVisible,
                htlc_list = _state.htlc_list,
                operationData = _state.operationData,
                filterString = _state.filterString;

            var currentAccount = this.props.currentAccount;

            var dataSource = null;

            if (htlc_list.length) {
                dataSource = htlc_list.map(function (item) {
                    var to = item.transfer.to;
                    var from = item.transfer.from;
                    var amount = {
                        amount: item.transfer.amount,
                        asset_id: item.transfer.asset_id
                    };
                    var expiration = item.conditions.time_lock.expiration;
                    var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset(amount.asset_id, false);
                    var toAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccountName(to) || to;
                    var fromAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccountName(from) || from;
                    return {
                        key: item.id,
                        id: item.id,
                        type: to == currentAccount.get("id") ? "payee" : "payer",
                        from: fromAccountName,
                        to: toAccountName,
                        amount: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            asset ? common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_amount(amount.amount, asset) + " " : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__["default"], { asset: amount.asset_id })
                        ),
                        hash: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("htlc.preimage_hash_explanation")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                "(" + item.conditions.hash_lock.preimage_size + "," + item.conditions.hash_lock.preimage_hash[0] + "): " + item.conditions.hash_lock.preimage_hash[1]
                            )
                        ),
                        expires: expiration,
                        rawData: _extends({}, item)
                    };
                });
                dataSource.length && dataSource.filter(function (item) {
                    // if filter is chained to map, possible bugs with initial render of table
                    return item.to && item.to.indexOf(filterString) !== -1;
                });
            }

            var columns = [{
                title: "#",
                dataIndex: "id",
                key: "id",
                sorter: function sorter(a, b) {
                    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.from"),
                dataIndex: "from",
                key: "from",
                sorter: function sorter(a, b) {
                    return a.from > b.from ? 1 : a.from < b.from ? -1 : 0;
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.to"),
                dataIndex: "to",
                key: "to",
                sorter: function sorter(a, b) {
                    return a.to > b.to ? 1 : a.to < b.to ? -1 : 0;
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.amount"),
                dataIndex: "amount",
                key: "amount",
                sorter: function sorter(a, b) {
                    var limit1 = a.rawData.op[1].amount.amount;
                    var limit2 = b.rawData.op[1].amount.amount;

                    return limit1 - limit2;
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.hash"),
                dataIndex: "hash",
                key: "hash"
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.expires"),
                dataIndex: "expires",
                key: "expires",
                sorter: function sorter(a, b) {
                    return a.expires > b.expires ? 1 : a.expires < b.expires ? -1 : 0;
                },
                render: function render(text, record) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.localize(new Date(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].makeISODateString(text)), {
                        type: "date",
                        format: "full"
                    });
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.actions"),
                dataIndex: "action",
                key: "action",
                render: function render(text, record) {
                    if (record.type) {
                        return record.type === "payer" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                                {
                                    style: { marginRight: "10px" },
                                    onClick: _this3.showModal({
                                        type: "extend",
                                        payload: record.rawData
                                    })
                                },
                                counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.extend")
                            )
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                onClick: _this3.showModal({
                                    type: "redeem",
                                    payload: record.rawData
                                })
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                                null,
                                counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.redeem")
                            )
                        );
                    } else {
                        return null;
                    }
                }
            }];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "direct-debit-view" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Card"],
                    { className: "direct-debit-table-card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Row"],
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Col"],
                            { span: 24, style: { padding: "10px" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        marginBottom: "30px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                    className: "direct-debit-table__filter-input",
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("explorer.witnesses.filter_by_name"),
                                    onChange: this._onFilter,
                                    style: {
                                        width: "200px",
                                        marginRight: "30px"
                                    },
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], { type: "search" })
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                                    {
                                        onClick: this.showModal({
                                            type: "create",
                                            payload: null
                                        }),
                                        style: {
                                            marginRight: "30px"
                                        }
                                    },
                                    counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("showcases.htlc.create_htlc")
                                ),
                                !!this.state.errorMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { className: "red" },
                                    this.state.errorMessage
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Table"], {
                                columns: columns,
                                dataSource: dataSource,
                                pagination: false,
                                className: "direct-debit-table",
                                loading: this.state.tableIsLoading
                            })
                        )
                    ),
                    isModalVisible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_HtlcModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        isModalVisible: isModalVisible,
                        hideModal: this.hideModal,
                        operation: operationData,
                        fromAccount: this.props.currentAccount
                    }) : null
                )
            );
        }
    }]);

    return Htlc;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Htlc = Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_7__["bindToCurrentAccount"])(Htlc);

/* harmony default export */ __webpack_exports__["default"] = (Htlc);

/***/ }),

/***/ 3297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2094);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2096);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2110);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(544);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2115);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(589);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(588);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2116);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2319);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1854);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(717);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(790);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var actions_HtlcActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3298);
/* harmony import */ var _assets_stylesheets_components_htlc_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3299);
/* harmony import */ var _assets_stylesheets_components_htlc_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_htlc_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1973);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2723);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2107);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



























var getUninitializedFeeAmount = function getUninitializedFeeAmount() {
    return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Asset"]({ amount: 0, asset_id: "1.3.0" });
};

var Preimage = function (_React$Component) {
    _inherits(Preimage, _React$Component);

    function Preimage(props) {
        _classCallCheck(this, Preimage);

        var _this = _possibleConstructorReturn(this, (Preimage.__proto__ || Object.getPrototypeOf(Preimage)).call(this, props));

        _this.state = _this.getInitialState();
        _this.hasRandomHash = false;
        return _this;
    }

    _createClass(Preimage, [{
        key: "getInitialState",
        value: function getInitialState() {
            return {
                stage: 1,
                preimage_hash_calculated: null,
                ciphers: ["sha256", "ripemd160"]
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.preimage_hash && !this.hasRandomHash) {
                // make sure there is always a hash if no hash given
                this.generateRandom({ target: {} });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.preimage_hash !== this.props.preimage_hash && !this.props.preimage_hash) {
                this.hasRandomHash = false;
            }
            if (!this.props.preimage_hash && !this.hasRandomHash) {
                // make sure there is always a hash if no hash given
                this.generateRandom({ target: {} });
            }
        }
    }, {
        key: "onClick",
        value: function onClick(e) {
            var _this2 = this;

            var redo = false;
            if (this.state.stage !== e.target.value && e.target.value == 1) {
                redo = true;
            }
            this.setState({
                stage: e.target.value
            }, function () {
                return redo ? _this2.generateRandom() : null;
            });
        }
    }, {
        key: "onSizeChanged",
        value: function onSizeChanged(e) {
            this.props.onAction({
                preimage_size: !e.target.value ? null : parseInt(e.target.value)
            });
        }
    }, {
        key: "onHashChanged",
        value: function onHashChanged(e) {
            this.props.onAction({
                preimage_hash: e.target.value
            });
        }
    }, {
        key: "onInputChanged",
        value: function onInputChanged(e) {
            var _props = this.props,
                preimage = _props.preimage,
                preimage_cipher = _props.preimage_cipher;

            if (!preimage_cipher) {
                preimage_cipher = "sha256";
            }
            if (e.target) {
                preimage = e.target.value;
                this.hashingInProgress = false;
            } else {
                preimage_cipher = e;
            }
            if (this.state.stage == 2) {
                this.props.onAction({
                    preimage_cipher: preimage_cipher
                });
            } else {
                var _HtlcActions$calculat = actions_HtlcActions__WEBPACK_IMPORTED_MODULE_19__["default"].calculateHash(preimage, preimage_cipher),
                    hash = _HtlcActions$calculat.hash;

                if (this.props.type !== "create") {
                    // user tries to match hash
                    this.props.onAction({
                        preimage: preimage,
                        preimage_cipher: preimage_cipher,
                        preimage_size: preimage.length
                    });
                    this.setState({
                        preimage_hash_calculated: hash
                    });
                } else {
                    this.props.onAction({
                        preimage: preimage,
                        preimage_cipher: preimage_cipher,
                        preimage_hash: hash,
                        preimage_size: preimage.length
                    });
                }
            }
        }
    }, {
        key: "generateRandom",
        value: function generateRandom() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { target: {} };

            this.hasRandomHash = true;
            e.target.value = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["key"].get_random_key().toWif().substr(10, 30);
            this.onInputChanged(e);
        }
    }, {
        key: "render",
        value: function render() {
            var label = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                null,
                counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate(this.props.label),
                this.props.type == "create" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"].Group,
                    {
                        value: this.state.stage,
                        onChange: this.onClick.bind(this),
                        style: {
                            marginBottom: "7px",
                            marginLeft: "24px"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"],
                        { value: 1 },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.htlc.first_stage" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"],
                        { value: 2 },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.htlc.second_stage" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"],
                        { value: 3 },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "showcases.htlc.custom" })
                    )
                )
            );

            // if user redeems, indicate if it matches
            var hashMatch = this.props.type !== "create" && this.state.preimage_hash_calculated !== null ? this.state.preimage_hash_calculated == this.props.preimage_hash : null;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Form"].Item,
                { label: label },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.preimage_has_been_created")
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"].Group,
                    { className: "content-block transfer-input preimage-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate(this.props.type !== "create" ? "showcases.htlc.tooltip.enter_preimage" : "showcases.htlc.tooltip.preimage_random"),
                            mouseEnterDelay: 0.5
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                            style: {
                                width: "60%",
                                color: hashMatch == null ? undefined : hashMatch ? "green" : "red"
                            },
                            name: "preimage",
                            id: "preimage",
                            type: "text",
                            onChange: this.onInputChanged.bind(this),
                            value: this.state.stage == 2 ? "" : this.props.preimage,
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate(this.props.hash ? "showcases.htlc.enter_secret_preimage" : "showcases.htlc.preimage"),
                            disabled: this.props.type !== "create" ? false : this.state.stage == 1 || this.state.stage == 2
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"],
                        {
                            optionLabelProp: "value",
                            style: { width: "19.5%" },
                            onChange: this.onInputChanged.bind(this),
                            value: this.props.preimage_cipher
                        },
                        this.state.ciphers.map(function (cipher) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"].Option,
                                { key: cipher, value: cipher },
                                cipher
                            );
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.tooltip.new_random"),
                            mouseEnterDelay: 0.5
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"], {
                            type: "primary",
                            icon: "deployment-unit",
                            style: { verticalAlign: "top" },
                            onClick: this.generateRandom.bind(this)
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { float: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
                            dataPlace: "top",
                            text: "preimage: " + this.props.preimage + " hash type: " + this.props.preimage_cipher
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"].Group,
                    { className: "content-block transfer-input preimage-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.tooltip.preimage_hash"),
                            mouseEnterDelay: 0.5
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                            style: { width: "78%" },
                            name: "hash",
                            id: "hash",
                            type: "text",
                            onChange: this.onHashChanged.bind(this),
                            value: this.props.preimage_hash || "",
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.hash"),
                            disabled: this.state.stage == 1
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.tooltip.preimage_size"),
                            mouseEnterDelay: 0.5
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                            style: { width: "53px", marginRight: "0.2rem" },
                            name: "size",
                            id: "size",
                            type: "text",
                            onChange: this.onSizeChanged.bind(this),
                            value: this.props.preimage_size || "",
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.size"),
                            disabled: this.state.stage == 1
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { float: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
                            dataPlace: "top",
                            text: "hash: " + this.props.preimage_hash + " preimage size: " + this.props.preimage_size
                        })
                    )
                )
            );
        }
    }]);

    return Preimage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Preimage.propTypes = {
    preimage_hash: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.string,
    preimage_size: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.number,
    preimage: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.string,
    preimage_cipher: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.string
};

var HtlcModal = function (_React$Component2) {
    _inherits(HtlcModal, _React$Component2);

    function HtlcModal(props) {
        _classCallCheck(this, HtlcModal);

        var _this3 = _possibleConstructorReturn(this, (HtlcModal.__proto__ || Object.getPrototypeOf(HtlcModal)).call(this, props));

        _this3.onSubmit = function (e) {
            e.preventDefault();
            var _this3$state = _this3.state,
                from_account = _this3$state.from_account,
                to_account = _this3$state.to_account,
                amount = _this3$state.amount,
                asset = _this3$state.asset,
                asset_id = _this3$state.asset_id,
                preimage = _this3$state.preimage,
                preimage_size = _this3$state.preimage_size,
                preimage_hash = _this3$state.preimage_hash,
                preimage_cipher = _this3$state.preimage_cipher,
                claim_period = _this3$state.claim_period,
                feeAmount = _this3$state.feeAmount;
            var operationType = _this3.props.operation.type;


            if (operationType === "create") {
                actions_HtlcActions__WEBPACK_IMPORTED_MODULE_19__["default"].create({
                    from_account_id: from_account.get("id"),
                    to_account_id: to_account.get("id"),
                    asset_id: asset_id,
                    amount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convert_typed_to_satoshi(amount, asset),
                    lock_time: claim_period,
                    preimage: preimage,
                    preimage_size: preimage_size,
                    preimage_hash: preimage_hash,
                    preimage_cipher: preimage_cipher,
                    fee_asset: feeAmount.asset_id
                }).then(function (result) {
                    _this3.props.hideModal();
                }).catch(function (err) {
                    // todo: visualize error somewhere
                    console.error(err);
                });
            } else if (operationType === "redeem") {
                actions_HtlcActions__WEBPACK_IMPORTED_MODULE_19__["default"].redeem({
                    htlc_id: _this3.props.operation.payload.id,
                    user_id: to_account.get("id"),
                    preimage: preimage
                }).then(function (result) {
                    _this3.props.hideModal();
                }).catch(function (err) {
                    // todo: visualize error somewhere
                    console.error(err);
                });
            } else if (operationType === "extend") {
                actions_HtlcActions__WEBPACK_IMPORTED_MODULE_19__["default"].extend({
                    htlc_id: _this3.props.operation.payload.id,
                    user_id: from_account.get("id"),
                    seconds_to_add: claim_period
                }).then(function (result) {
                    _this3.props.hideModal();
                }).catch(function (err) {
                    // todo: visualize error somewhere
                    console.error(err);
                });
            }
            _this3.props.hideModal();
        };

        _this3.onToAccountChanged = function (to_account) {
            _this3.setState({ to_account: to_account, error: null });
        };

        _this3.onAmountChanged = function (_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            if (!asset) {
                return;
            }

            if ((typeof asset === "undefined" ? "undefined" : _typeof(asset)) !== "object") {
                asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset(asset);
            }

            _this3.setState({
                amount: amount,
                asset: asset,
                asset_id: asset.get("id"),
                error: null,
                maxAmount: false
            }, _this3._checkBalance);
        };

        _this3.toChanged = function (to_name) {
            _this3.setState({ to_name: to_name, error: null });
        };

        _this3.onExpirationDateChanged = function (utcValue) {
            if (utcValue) {
                var period_start_time = _this3.state.period_start_time;

                var exp = utcValue.valueOf();
                var start = period_start_time.valueOf();
                var claim_period = Math.floor((exp - start) / 1000);
                _this3.setState({
                    claim_period: claim_period,
                    period: null,
                    expirationDate: utcValue
                });
            } else {
                _this3.setState({
                    claim_period: 0,
                    period: null,
                    expirationDate: null
                });
            }
        };

        _this3.setPeriod = function (days) {
            var estimatedExpiry = moment__WEBPACK_IMPORTED_MODULE_18___default()().add(days, "day");
            var period = "one_day";
            var claim_period = days * 60 * 60 * 24; // convert day to seconds
            switch (days) {
                case 1:
                    period = "one_day";
                    break;
                case 2:
                    period = "two_days";
                    break;
                case 7:
                    period = "one_week";
                    break;
            }

            _this3.setState({
                claim_period: claim_period,
                period: period,
                expirationDate: estimatedExpiry
            });
        };

        _this3.state = _this3.getInitialState(props);
        _this3.onTrxIncluded = _this3.onTrxIncluded.bind(_this3);
        _this3._checkBalance = _this3._checkBalance.bind(_this3);
        return _this3;
    }

    _createClass(HtlcModal, [{
        key: "getInitialState",
        value: function getInitialState() {
            var now = moment__WEBPACK_IMPORTED_MODULE_18___default()().add("seconds", 120);
            return {
                from_name: "",
                to_name: "",
                from_account: null,
                to_account: null,
                amount: "",
                asset_id: null,
                asset: null,
                error: null,
                feeAmount: getUninitializedFeeAmount(),
                maxAmount: false,
                num_of_periods: "",
                period_start_time: now,
                htlcId: "",
                balanceError: false,
                preimage: null,
                preimage_cipher: null,
                preimage_hash: null,
                preimage_size: null,
                claim_period: 86400,
                period: "one_day",
                expirationDate: moment__WEBPACK_IMPORTED_MODULE_18___default()().add("seconds", 180).add(1, "day")
            };
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (nextProps.fromAccount && !Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_23__["hasLoaded"])(nextProps.fromAccount)) {
                return false;
            }
            return true;
        }
    }, {
        key: "_syncOperation",
        value: function _syncOperation(operation) {
            if (operation && operation.payload && operation.type !== "create") {
                var to = operation.payload.transfer.to;
                var from = operation.payload.transfer.from;
                var amount = {
                    amount: operation.payload.transfer.amount,
                    asset_id: operation.payload.transfer.asset_id
                };
                var expiration = new Date(operation.payload.conditions.time_lock.expiration);
                var toAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount(to);
                var fromAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount(from);
                if (toAccount && fromAccount && toAccount.get && fromAccount.get) {
                    var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset(amount.asset_id, false);
                    this.setState({
                        to_account: toAccount,
                        to_name: toAccount.get("name"),
                        from_account: fromAccount,
                        from_name: fromAccount.get("name"),
                        asset: asset,

                        amount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convert_satoshi_to_typed(amount.amount, asset),
                        asset_id: amount.asset_id,
                        period_start_time: expiration, // no selection for that
                        htlcId: operation.payload.id,
                        preimage_hash: operation.payload.conditions.hash_lock.preimage_hash[1],
                        preimage_size: operation.payload.conditions.hash_lock.preimage_hash[0],
                        expirationDate: moment__WEBPACK_IMPORTED_MODULE_18___default()(new Date(common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].makeISODateString(operation.payload.conditions.time_lock.expiration))),
                        period: null
                    });
                } else {
                    this.setState({
                        htlcId: operation.payload.id,
                        preimage_hash: operation.payload.conditions.hash_lock.preimage_hash[1],
                        preimage_size: operation.payload.conditions.hash_lock.preimage_hash[0],
                        expirationDate: moment__WEBPACK_IMPORTED_MODULE_18___default()(new Date(common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].makeISODateString(operation.payload.conditions.time_lock.expiration))),
                        period: null
                    });
                }
            } else {
                // ensure it's always in-sync
                this.setState({
                    htlcId: null,
                    preimage_hash: null,
                    preimage_size: null
                });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._syncOperation(this.props.operation);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            var operation = this.props.operation;

            if (this.props.fromAccount !== prevProps.fromAccount || this.state.from_account == null) {
                // refesh balances and fee
                // write props to state
                this.setState({
                    from_account: this.props.fromAccount,
                    from_name: this.props.fromAccount.get("name")
                });
            }
            if (prevProps.operation !== this.props.operation) {
                this._syncOperation(operation);
            }
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                amount = _state.amount,
                from_account = _state.from_account,
                asset = _state.asset;

            if (!asset || !from_account) return;
            var balanceID = from_account.getIn(["balances", asset.get("id")]);
            var feeBalanceID = from_account.getIn(["balances", feeAmount.asset_id]);
            if (!asset || !from_account) return;
            if (!balanceID) return this.setState({ balanceError: true });
            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(balanceID);
            var feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(feeBalanceID) : null;
            if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
                this.setState({ feeAmount: getUninitializedFeeAmount() });
            }
            if (!balanceObject || !feeAmount) return;
            if (!amount) return this.setState({ balanceError: false });
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_10__["checkBalance"])(amount, asset, feeAmount, balanceObject);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
        }
    }, {
        key: "_setTotal",
        value: function _setTotal(asset_id, balance_id) {
            var feeAmount = this.state.feeAmount;

            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(balance_id);
            var transferAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(asset_id);

            var balance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Asset"]({
                amount: balanceObject.get("balance"),
                asset_id: transferAsset.get("id"),
                precision: transferAsset.get("precision")
            });

            if (balanceObject) {
                if (feeAmount.asset_id === balance.asset_id) {
                    balance.minus(feeAmount);
                }
                this.setState({ maxAmount: true, amount: balance.getAmount({ real: true }) }, this._checkBalance);
            }
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account,
                from_error = state.from_error;

            var asset_types = [];
            if (!(from_account && from_account.get("balances") && !from_error)) {
                return { asset_types: asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].sortID);
            for (var _key in account_balances) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(account_balances[_key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    asset_types.splice(asset_types.indexOf(_key), 1);
                }
            }
            return { asset_types: asset_types };
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(fee) {
            if (!fee) return;
            this.setState({
                feeAmount: fee,
                error: null
            }, this._checkBalance);
        }
    }, {
        key: "onTrxIncluded",
        value: function onTrxIncluded(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].reset();
            } else if (confirm_store_state.closed) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].reset();
            }
        }
    }, {
        key: "onDatepickerRef",
        value: function onDatepickerRef(el) {
            if (el && el.picker.input) {
                el.picker.input.readOnly = false;
            }
        }
    }, {
        key: "onPreimageChanged",
        value: function onPreimageChanged(_ref2) {
            var preimage = _ref2.preimage,
                preimage_cipher = _ref2.preimage_cipher,
                preimage_hash = _ref2.preimage_hash,
                preimage_size = _ref2.preimage_size;

            var stateChange = {};
            if (preimage !== undefined) {
                stateChange.preimage = preimage;
            }
            if (preimage_cipher !== undefined) {
                stateChange.preimage_cipher = preimage_cipher;
            }
            if (preimage_hash !== undefined) {
                stateChange.preimage_hash = preimage_hash;
            }
            if (preimage_size !== undefined) {
                stateChange.preimage_size = preimage_size;
            }
            this.setState(stateChange);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _state2 = this.state,
                from_account = _state2.from_account,
                to_account = _state2.to_account,
                asset = _state2.asset,
                asset_id = _state2.asset_id,
                feeAmount = _state2.feeAmount,
                amount = _state2.amount,
                from_name = _state2.from_name,
                to_name = _state2.to_name,
                balanceError = _state2.balanceError,
                preimage = _state2.preimage,
                preimage_cipher = _state2.preimage_cipher,
                claim_period = _state2.claim_period,
                preimage_hash = _state2.preimage_hash,
                preimage_size = _state2.preimage_size,
                period_start_time = _state2.period_start_time,
                expirationDate = _state2.expirationDate;

            var from_my_account = stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"].isMyAccount(from_account) || from_name === this.props.passwordAccount;
            var from_error = from_account && !from_my_account ? true : false;

            var operation = this.props.operation;


            var isExtend = operation && operation.type === "extend";
            var isRedeem = operation && operation.type === "redeem";

            var _getAvailableAssets2 = this._getAvailableAssets(),
                asset_types = _getAvailableAssets2.asset_types;

            var balance = null;

            if (from_account && from_account.get("balances") && !from_error) {
                var account_balances = from_account.get("balances").toJS();
                var _error = this.state.balanceError ? "has-error" : "";
                if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset(asset_types[0]);
                if (asset_types.length > 0) {
                    var current_asset_id = asset ? asset.get("id") : asset_types[0];

                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: _error,
                                style: {
                                    borderBottom: "#A09F9F 1px dotted",
                                    cursor: "pointer"
                                },
                                onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], feeAmount.getAmount({ real: true }), feeAmount.asset_id)
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                balance: account_balances[current_asset_id]
                            })
                        )
                    );
                } else {
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: _error },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.noFunds" })
                        )
                    );
                }
            }

            var amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
            var isAmountValid = amountValue && !Object(lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__["default"])(amountValue);

            var isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || balanceError || from_account.get("id") == to_account.get("id") || !(preimage_cipher && preimage || preimage_hash) || !claim_period;
            var modalTitle = operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.create_htlc") : isExtend ? counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.extend_htlc") : counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.redeem_htlc");
            var sendButtonText = operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.direct_debit.create") : counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.direct_debit.update");

            var amountHeader = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "form-input-header--label" },
                counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.expiration_date"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "form-input-header--right" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("period-row", {
                                "is-active": this.state.period === "one_day"
                            }),
                            onClick: function onClick() {
                                return _this4.setPeriod(1);
                            }
                        },
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.expiration_period.one_day")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("period-row", {
                                "is-active": this.state.period === "two_days"
                            }),
                            onClick: function onClick() {
                                return _this4.setPeriod(2);
                            }
                        },
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.expiration_period.two_days")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("period-row", {
                                "is-active": this.state.period === "one_week"
                            }),
                            onClick: function onClick() {
                                return _this4.setPeriod(7);
                            }
                        },
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.expiration_period.one_week")
                    )
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Modal"],
                {
                    title: modalTitle,
                    visible: this.props.isModalVisible,
                    overlay: true,
                    onCancel: this.props.hideModal,
                    footer: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                        {
                            key: "send",
                            disabled: isSubmitNotValid,
                            onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
                        },
                        sendButtonText
                    ), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                        { key: "Cancel", onClick: this.props.hideModal },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.cancel" })
                    )]
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Form"],
                        { className: "full-width", layout: "vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            label: "showcases.htlc.sender",
                            accountName: from_name,
                            account: from_account,
                            size: 60,
                            typeahead: true,
                            hideImage: true,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            label: "showcases.htlc.recipient",
                            accountName: to_name,
                            account: to_account,
                            onChange: this.toChanged.bind(this),
                            onAccountChanged: this.onToAccountChanged,
                            size: 60,
                            typeahead: true,
                            hideImage: true,
                            disabled: isExtend || isRedeem
                        }),
                        !isRedeem ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            label: "showcases.htlc.amount",
                            amount: amount,
                            onChange: this.onAmountChanged.bind(this),
                            asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0],
                            assets: asset_types,
                            display_balance: isExtend || isRedeem ? undefined : balance,
                            allowNaN: true,
                            disabled: isExtend || isRedeem,
                            selectDisabled: isExtend || isRedeem
                        }) : null,
                        isExtend ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Form"].Item,
                            {
                                label: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.preimage")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                                type: "text",
                                value: preimage_hash || "",
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("showcases.htlc.hash"),
                                readOnly: true,
                                disabled: true
                            })
                        ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Preimage, {
                            ref: function ref(tmp) {
                                return _this4.preimage = tmp;
                            },
                            label: "showcases.htlc.preimage",
                            onAction: this.onPreimageChanged.bind(this),
                            preimage_hash: preimage_hash,
                            preimage_size: preimage_size,
                            preimage: preimage,
                            preimage_cipher: preimage_cipher,
                            type: operation && operation.type ? operation.type : "create"
                        }),
                        !isRedeem ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Form"].Item,
                                {
                                    label: amountHeader,
                                    validateStatus: "",
                                    className: "form-input-header"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["DatePicker"], {
                                    showToday: true,
                                    showTime: true,
                                    placeholder: "",
                                    onChange: this.onExpirationDateChanged,
                                    className: "date-picker-width100",
                                    style: { width: "100%" },
                                    ref: function ref(el) {
                                        return _this4.onDatepickerRef(el);
                                    },
                                    disabledDate: function disabledDate(current) {
                                        return current && current < period_start_time;
                                    },
                                    value: expirationDate
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "content-block transfer-input" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "no-margin no-padding" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_24__["default"], {
                                        account: from_account,
                                        transaction: {
                                            type: "htlc_create",
                                            options: ["price_per_kbyte"],
                                            data: {
                                                type: "memo",
                                                content: null
                                            }
                                        },
                                        onChange: this.onFeeChanged.bind(this)
                                    })
                                )
                            )
                        ) : null
                    )
                )
            );
        }
    }]);

    return HtlcModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

HtlcModal.propTypes = {
    isModalVisible: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.bool.isRequired,
    hideModal: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.func.isRequired,
    fromAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_21__["default"].ChainObject.isRequired,
    operation: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.object // optional, only when editing
};


/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_15__["connect"])(HtlcModal, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
    },
    getProps: function getProps(props) {
        return {
            fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().settings.get("fee_asset")
        };
    }
}));

/***/ }),

/***/ 3298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(593);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(596);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(410);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var _calculateHash = function _calculateHash(cipher, preimage) {
    var preimage_hash_calculated = null;
    switch (cipher) {
        case "sha256":
            preimage_hash_calculated = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["hash"].sha256(preimage);
            break;
        case "ripemd160":
            preimage_hash_calculated = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["hash"].ripemd160(preimage);
            break;
        case "sha1":
            throw new Error("sha1 is not considered a secure hashing algorithm, plaase use sha256");
            break;
        default:
            throw new Error("Wrong cipher name provided when creating htlc op");
    }
    return preimage_hash_calculated;
};
var getCipherInt = function getCipherInt(cipher) {
    var preimage_hash_cipher = null;
    switch (cipher) {
        case "sha256":
            preimage_hash_cipher = 2;
            break;
        case "ripemd160":
            preimage_hash_cipher = 0;
            break;
        case "sha1":
            throw new Error("sha1 is not considered a secure hashing algorithm, plaase use sha256");
            break;
        default:
            throw new Error("Wrong cipher name provided when creating htlc op");
    }
    return preimage_hash_cipher;
};

var HtlcActions = function () {
    function HtlcActions() {
        _classCallCheck(this, HtlcActions);
    }

    _createClass(HtlcActions, [{
        key: "create",
        value: function create(_ref) {
            var from_account_id = _ref.from_account_id,
                to_account_id = _ref.to_account_id,
                asset_id = _ref.asset_id,
                amount = _ref.amount,
                lock_time = _ref.lock_time,
                preimage_cipher = _ref.preimage_cipher,
                _ref$preimage = _ref.preimage,
                preimage = _ref$preimage === undefined ? null : _ref$preimage,
                _ref$preimage_hash = _ref.preimage_hash,
                preimage_hash = _ref$preimage_hash === undefined ? null : _ref$preimage_hash,
                _ref$preimage_size = _ref.preimage_size,
                preimage_size = _ref$preimage_size === undefined ? null : _ref$preimage_size,
                _ref$fee_asset = _ref.fee_asset,
                fee_asset = _ref$fee_asset === undefined ? null : _ref$fee_asset;

            if (!fee_asset) {
                fee_asset = "1.3.0";
            }
            if (typeof fee_asset !== "string") {
                fee_asset = fee_asset.get("id");
            }
            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_2__["default"].new_transaction();

            var preimage_hash_cipher = getCipherInt(preimage_cipher);
            if (preimage && !preimage_hash) {
                preimage_hash = _calculateHash(preimage_cipher, preimage);
            }
            if (!preimage_size) {
                if (preimage) {
                    preimage_size = preimage.length;
                } else {
                    throw Error("Preimage must be given if size is empty");
                }
            }

            tr.add_type_operation("htlc_create", {
                from: from_account_id,
                to: to_account_id,
                fee: {
                    amount: 0,
                    asset_id: fee_asset
                },
                amount: {
                    amount: amount,
                    asset_id: asset_id
                },
                preimage_hash: [preimage_hash_cipher, preimage_hash],
                preimage_size: preimage_size,
                claim_period_seconds: lock_time
            });

            return function (dispatch) {
                return stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].process_transaction(tr, null, true).then(function () {
                    dispatch(true);
                }).catch(function (error) {
                    console.log("[HtlcActions.js:69] ----- htlc create error ----->", error);
                    dispatch(false);
                });
            };
        }
    }, {
        key: "redeem",
        value: function redeem(_ref2) {
            var htlc_id = _ref2.htlc_id,
                user_id = _ref2.user_id,
                preimage = _ref2.preimage;

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_2__["default"].new_transaction();

            tr.add_type_operation("htlc_redeem", {
                preimage: new Buffer(preimage).toString("hex"),
                fee: {
                    amount: 0,
                    asset_id: "1.3.0"
                },
                htlc_id: htlc_id,
                redeemer: user_id
            });

            return function (dispatch) {
                return stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].process_transaction(tr, null, true).then(function () {
                    dispatch(true);
                }).catch(function (error) {
                    console.log("[HtlcActions.js:98] ----- htlc redeem error ----->", error);
                    dispatch(false);
                });
            };
        }
    }, {
        key: "extend",
        value: function extend(_ref3) {
            var htlc_id = _ref3.htlc_id,
                user_id = _ref3.user_id,
                seconds_to_add = _ref3.seconds_to_add;

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_2__["default"].new_transaction();

            tr.add_type_operation("htlc_extend", {
                fee: {
                    amount: 0,
                    asset_id: "1.3.0"
                },
                htlc_id: htlc_id,
                update_issuer: user_id,
                seconds_to_add: seconds_to_add
            });

            return function (dispatch) {
                return stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].process_transaction(tr, null, true).then(function () {
                    dispatch(true);
                }).catch(function (error) {
                    console.log("[HtlcActions.js:127] ----- htlc extend error ----->", error);
                    dispatch(false);
                });
            };
        }
    }, {
        key: "calculateHash",
        value: function calculateHash(preimage, cipher) {
            var preimage_hash_calculated = _calculateHash(cipher, preimage);
            var size = preimage_hash_calculated.length;
            var hash = new Buffer(preimage_hash_calculated).toString("hex");
            return { hash: hash, size: size };
        }
    }]);

    return HtlcActions;
}();

/* harmony default export */ __webpack_exports__["default"] = (alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(HtlcActions));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(417).Buffer))

/***/ }),

/***/ 3299:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(410);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var _Modal_DirectDebitModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3302);
/* harmony import */ var _Modal_DirectDebitClaimModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3304);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2419);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(594);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2723);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var DirectDebit = function (_Component) {
    _inherits(DirectDebit, _Component);

    function DirectDebit(props) {
        _classCallCheck(this, DirectDebit);

        var _this = _possibleConstructorReturn(this, (DirectDebit.__proto__ || Object.getPrototypeOf(DirectDebit)).call(this, props));

        _this.showModal = function (operation) {
            return function () {
                _this.setState({
                    isModalVisible: true,
                    operationData: operation
                });
            };
        };

        _this.hideModal = function () {
            _this.setState({
                isModalVisible: false,
                operation: null
            });
        };

        _this.showClaimModal = function (operation) {
            return function () {
                _this.setState({
                    isClaimModalVisible: true,
                    operationClaimData: operation
                });
            };
        };

        _this.hideClaimModal = function () {
            _this.setState({
                isClaimModalVisible: false
            });
        };

        _this._onFilter = function (e) {
            e.preventDefault();
            _this.setState({ filterString: e.target.value.toLowerCase() });
        };

        _this.handleDeleteProposal = function (permission) {
            console.log("delete permissin");
            _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_9__["default"].deleteWithdrawPermission(permission.id, permission.withdraw_from_account, permission.authorized_account).then(function () {
                // nothing to do, user will see popup
            }).catch(function (err) {
                _this.setState({ errorMessage: err.toString() });
                console.error(err);
            });
        };

        _this.state = {
            isModalVisible: false,
            isClaimModalVisible: false,
            filterString: "",
            operationData: "",
            operationClaimData: "",
            withdraw_permission_list: []
        };
        return _this;
    }

    _createClass(DirectDebit, [{
        key: "_update",
        value: function _update() {
            var _this2 = this;

            var currentAccount = this.props.currentAccount;

            if (Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_10__["hasLoaded"])(currentAccount)) {
                // for now, fetch manually
                Promise.all([bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__["Apis"].instance().db_api().exec("get_withdraw_permissions_by_giver", [currentAccount.get("id"), "1.12.0", 100]), bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__["Apis"].instance().db_api().exec("get_withdraw_permissions_by_recipient", [currentAccount.get("id"), "1.12.0", 100])]).then(function (results) {
                    var withdraw_permission_list = [];
                    withdraw_permission_list = withdraw_permission_list.concat(results[0]);
                    withdraw_permission_list = withdraw_permission_list.concat(results[1]);
                    withdraw_permission_list.forEach(function (item) {
                        try {
                            // to trigger caching for modal
                            bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAccount(item.authorized_account, false);
                            bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAccount(item.withdraw_from_account, false);
                        } catch (err) {}
                    });
                    _this2.setState({
                        withdraw_permission_list: withdraw_permission_list
                    });
                });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._update();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
            // always update, relies on push from backend when account permission change
            this._update();
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                isModalVisible = _state.isModalVisible,
                isClaimModalVisible = _state.isClaimModalVisible,
                withdraw_permission_list = _state.withdraw_permission_list,
                operationData = _state.operationData,
                operationClaimData = _state.operationClaimData,
                filterString = _state.filterString;

            var currentAccount = this.props.currentAccount;

            var dataSource = null;

            if (withdraw_permission_list.length) {
                dataSource = withdraw_permission_list.map(function (item) {
                    var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getObject(item.withdrawal_limit.asset_id, false);
                    var authorizedAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAccountName(item.authorized_account);
                    var withdrawFromAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__["ChainStore"].getAccountName(item.withdraw_from_account);
                    var period_start = new Date(item.period_start_time + "Z").getTime();
                    var now = new Date().getTime();
                    var timePassed = now - period_start;
                    var currentPeriodExpires = "";
                    var periodMs = item.withdrawal_period_sec * 1000;

                    if (timePassed < 0) {
                        console.log("first period is not started");
                    } else {
                        var currentPeriodNum = Math.ceil(timePassed / periodMs);
                        currentPeriodExpires = period_start + periodMs * currentPeriodNum;
                    }

                    return {
                        key: item.id,
                        id: item.id,
                        type: item.authorized_account == currentAccount.get("id") ? "payee" : "payer",
                        authorized: authorizedAccountName,
                        from: withdrawFromAccountName,
                        to: authorizedAccountName,
                        limit: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(item.withdrawal_limit.amount, asset) + " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                asset: item.withdrawal_limit.asset_id
                            })
                        ),
                        until: currentPeriodExpires ? counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.localize(new Date(currentPeriodExpires), {
                            type: "date",
                            format: "full"
                        }) : counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("showcases.direct_debit.first_period_not_started"),
                        expires: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.localize(new Date(item.expiration + "Z"), {
                            type: "date",
                            format: "full"
                        }),
                        claimed: item.claimed_this_period == 0 ? "-" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(item.claimed_this_period, asset) + " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                asset: item.withdrawal_limit.asset_id
                            })
                        ),
                        rawData: _extends({}, item)
                    };
                });
                dataSource.length && dataSource.filter(function (item) {
                    // if filter is chained to map, possible bugs with initial render of table
                    return item.authorized && item.authorized.indexOf(filterString) !== -1;
                });
            }

            var columns = [{
                title: "#",
                dataIndex: "id",
                key: "id",
                sorter: function sorter(a, b) {
                    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
                }
            }, {
                title: "From",
                dataIndex: "from",
                key: "from",
                sorter: function sorter(a, b) {
                    return a.from > b.from ? 1 : a.from < b.from ? -1 : 0;
                }
            }, {
                title: "To",
                dataIndex: "to",
                key: "to",
                sorter: function sorter(a, b) {
                    return a.to > b.to ? 1 : a.to < b.to ? -1 : 0;
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("showcases.direct_debit.current_period_expires"),
                dataIndex: "until",
                key: "until",
                sorter: function sorter(a, b) {
                    return a.until > b.until ? 1 : a.until < b.until ? -1 : 0;
                }
            }, {
                title: "Limit",
                dataIndex: "limit",
                key: "limit",
                sorter: function sorter(a, b) {
                    var limit1 = a.rawData.withdrawal_limit.amount;
                    var limit2 = b.rawData.withdrawal_limit.amount;

                    return limit1 - limit2;
                }
            }, {
                title: "Claimed",
                dataIndex: "claimed",
                key: "claimed",
                sorter: function sorter(a, b) {
                    var available1 = a.rawData.claimed_this_period;
                    var available2 = a.rawData.claimed_this_period;
                    return available2 - available1;
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("showcases.direct_debit.expires"),
                dataIndex: "expires",
                key: "expires",
                sorter: function sorter(a, b) {
                    return a.expires > b.expires ? 1 : a.expires < b.expires ? -1 : 0;
                }
            }, {
                title: "Actions",
                dataIndex: "action",
                key: "action",
                render: function render(text, record) {
                    if (record.type) {
                        return record.type === "payer" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Button"],
                                {
                                    style: { marginRight: "10px" },
                                    onClick: function onClick() {
                                        return _this3.handleDeleteProposal(record.rawData);
                                    }
                                },
                                counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("showcases.direct_debit.delete")
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Button"],
                                {
                                    onClick: _this3.showModal({
                                        type: "update",
                                        payload: record.rawData
                                    })
                                },
                                counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("showcases.direct_debit.update")
                            )
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                onClick: _this3.showClaimModal({
                                    type: "claim",
                                    payload: record.rawData
                                })
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Button"],
                                null,
                                counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("showcases.direct_debit.claim")
                            )
                        );
                    } else {
                        return null;
                    }
                }
            }];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "direct-debit-view" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Card"],
                    { className: "direct-debit-table-card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Row"],
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Col"],
                            { span: 24, style: { padding: "10px" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        marginBottom: "30px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Input"], {
                                    className: "direct-debit-table__filter-input",
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("explorer.witnesses.filter_by_name"),
                                    onChange: this._onFilter,
                                    style: {
                                        width: "200px",
                                        marginRight: "30px"
                                    },
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Icon"], { type: "search" })
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Button"],
                                    {
                                        onClick: this.showModal({
                                            type: "create",
                                            payload: null
                                        }),
                                        style: {
                                            marginRight: "30px"
                                        }
                                    },
                                    counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("showcases.direct_debit.create_new_mandate")
                                ),
                                !!this.state.errorMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { className: "red" },
                                    this.state.errorMessage
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Table"], {
                                columns: columns,
                                dataSource: dataSource,
                                pagination: false,
                                className: "direct-debit-table"
                            })
                        )
                    ),
                    isModalVisible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_DirectDebitModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        isModalVisible: isModalVisible,
                        hideModal: this.hideModal,
                        operation: operationData
                    }) : null,
                    isClaimModalVisible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_DirectDebitClaimModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        isModalVisible: isClaimModalVisible,
                        hideModal: this.hideClaimModal,
                        operation: operationClaimData
                    }) : null
                )
            );
        }
    }]);

    return DirectDebit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DirectDebit = Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_10__["bindToCurrentAccount"])(DirectDebit);

/* harmony default export */ __webpack_exports__["default"] = (DirectDebit);

/***/ }),

/***/ 3302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2094);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2909);
/* harmony import */ var _Utility_PeriodSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3303);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2107);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(544);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2110);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2115);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(589);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(588);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2116);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1854);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(717);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(729);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(594);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(790);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
























var DirectDebitModal = function (_React$Component) {
    _inherits(DirectDebitModal, _React$Component);

    function DirectDebitModal(props) {
        _classCallCheck(this, DirectDebitModal);

        var _this = _possibleConstructorReturn(this, (DirectDebitModal.__proto__ || Object.getPrototypeOf(DirectDebitModal)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            var _this$state = _this.state,
                from_account = _this$state.from_account,
                to_account = _this$state.to_account,
                amount = _this$state.amount,
                asset = _this$state.asset,
                asset_id = _this$state.asset_id,
                fee_asset_id = _this$state.fee_asset_id,
                period = _this$state.period,
                num_of_periods = _this$state.num_of_periods,
                period_start_time = _this$state.period_start_time,
                permissionId = _this$state.permissionId;
            var operationType = _this.props.operation.type;


            if (operationType === "create") {
                _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_19__["default"].createWithdrawPermission(from_account, to_account, asset_id, common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].convert_typed_to_satoshi(amount, asset), period.type.seconds * Number(period.amount), num_of_periods, period_start_time.valueOf(), fee_asset_id).then(function (result) {
                    _this.props.hideModal();
                }).catch(function (err) {
                    // todo: visualize error somewhere
                    console.error(err);
                });
            } else if (operationType === "update") {
                _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_19__["default"].updateWithdrawPermission(permissionId, from_account, to_account, asset_id, common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].convert_typed_to_satoshi(amount, asset), period.type.seconds * Number(period.amount), num_of_periods, period_start_time.valueOf(), fee_asset_id).then(function (result) {
                    _this.props.hideModal();
                }).catch(function (err) {
                    // todo: visualize error somewhere
                    console.error(err);
                });
            }
        };

        _this.onToAccountChanged = function (to_account) {
            _this.setState({ to_account: to_account, error: null });
        };

        _this.onAmountChanged = function (_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            if (!asset) {
                return;
            }

            _this.setState({
                amount: amount,
                asset: asset,
                asset_id: asset.get("id"),
                error: null,
                maxAmount: false
            }, _this._checkBalance);
        };

        _this.toChanged = function (to_name) {
            _this.setState({ to_name: to_name, error: null });
        };

        _this.onNumOfPeriodsChanged = function (e) {
            var newValue = parseInt(e.target.value, 10);
            if (!Object(lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__["default"])(newValue) && typeof newValue === "number" && newValue >= 0) {
                _this.setState({ num_of_periods: newValue });
            }
        };

        _this.onPeriodChanged = function (_ref2) {
            var amount = _ref2.amount,
                type = _ref2.type;

            _this.setState({ period: { amount: amount, type: type } });
        };

        _this.onStartDateChanged = function (utcValue) {
            if (utcValue) {
                _this.setState({ period_start_time: utcValue });
            } else {
                _this.setState({ period_start_time: null });
            }
        };

        _this.state = _this.getInitialState(props);
        _this.onTrxIncluded = _this.onTrxIncluded.bind(_this);
        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._isMounted = false;
        return _this;
    }

    _createClass(DirectDebitModal, [{
        key: "getInitialState",
        value: function getInitialState() {
            return {
                to_name: "",
                from_account: null,
                to_account: null,
                amount: "",
                asset_id: null,
                asset: null,
                error: null,
                fee_asset_id: bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].assets_by_symbol.get(this.props.fee_asset_symbol) || "1.3.0",
                feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({ amount: 0 }),
                feeStatus: {},
                maxAmount: false,
                num_of_periods: "",
                period: { amount: "", type: { seconds: 604800, name: "Week" } },
                period_start_time: moment__WEBPACK_IMPORTED_MODULE_20___default()().add("seconds", 120),
                permissionId: "",
                balanceError: false
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._isMounted = true;
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            var _props = this.props,
                operation = _props.operation,
                currentAccount = _props.currentAccount;

            if (currentAccount !== prevProps.currentAccount || this.state.from_account == null) {
                this.setState({
                    from_account: bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount(currentAccount)
                });
            }

            // Update operation
            if (operation && operation.type === "update" && operation.payload.id !== prevState.permissionId) {
                var toAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAccount(operation.payload.authorized_account);

                if (toAccount && toAccount.get) {
                    var timeStart = moment__WEBPACK_IMPORTED_MODULE_20___default.a.utc(operation.payload.period_start_time).valueOf();
                    var timeEnd = moment__WEBPACK_IMPORTED_MODULE_20___default.a.utc(operation.payload.expiration).valueOf();
                    var numberOfPeriods = (timeEnd - timeStart) / (operation.payload.withdrawal_period_sec * 1000);

                    var periodTypes = [{ seconds: 604800, name: "Week" }, { seconds: 86400, name: "Day" }, { seconds: 3600, name: "Hour" }, { seconds: 60, name: "Minute" }];

                    var periodSecs = void 0,
                        periodName = void 0,
                        periodAmount = void 0;

                    for (var i = 0; i < periodTypes.length; i++) {
                        if (operation.payload.withdrawal_period_sec >= periodTypes[i].seconds) {
                            var currentPeriod = periodTypes[i];

                            periodName = currentPeriod.name;
                            periodSecs = currentPeriod.seconds;
                            periodAmount = Math.round(operation.payload.withdrawal_period_sec / currentPeriod.seconds);
                            break;
                        }
                    }
                    var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset(operation.payload.withdrawal_limit.asset_id);
                    this.setState({
                        to_account: toAccount,
                        to_name: toAccount.get("name"),
                        asset: asset,
                        permissionId: operation.payload.id,
                        amount: common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].convert_satoshi_to_typed(operation.payload.withdrawal_limit.amount, asset),
                        asset_id: operation.payload.withdrawal_limit.asset_id,
                        num_of_periods: numberOfPeriods,
                        period: {
                            amount: periodAmount,
                            type: {
                                seconds: periodSecs,
                                name: periodName
                            }
                        },
                        period_start_time: moment__WEBPACK_IMPORTED_MODULE_20___default.a.utc(operation.payload.period_start_time)
                    });
                }
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this._isMounted = false;
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                amount = _state.amount,
                from_account = _state.from_account,
                asset = _state.asset;

            if (!asset || !from_account) return;
            var balanceID = from_account.getIn(["balances", asset.get("id")]);
            var feeBalanceID = from_account.getIn(["balances", feeAmount.asset_id]);
            if (!asset || !from_account) return;
            if (!balanceID) return this.setState({ balanceError: true });
            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(balanceID);
            var feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(feeBalanceID) : null;
            if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
                this.setState({ fee_asset_id: this.state.fee_asset_id });
            }
            if (!balanceObject || !feeAmount) return;
            if (!amount) return this.setState({ balanceError: false });
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_11__["checkBalance"])(amount, asset, feeAmount, balanceObject);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
        }
    }, {
        key: "_setTotal",
        value: function _setTotal(asset_id, balance_id) {
            var feeAmount = this.state.feeAmount;

            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(balance_id);
            var transferAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(asset_id);

            var balance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__["Asset"]({
                amount: balanceObject.get("balance"),
                asset_id: transferAsset.get("id"),
                precision: transferAsset.get("precision")
            });

            if (balanceObject) {
                if (feeAmount.asset_id === balance.asset_id) {
                    balance.minus(feeAmount);
                }
                this.setState({ maxAmount: true, amount: balance.getAmount({ real: true }) }, this._checkBalance);
            }
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account;

            var asset_types = [],
                fee_asset_types = [];
            if (!(from_account && from_account.get("balances"))) {
                return { asset_types: asset_types, fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].sortID);
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].sortID);
            for (var key in account_balances) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    asset_types.splice(asset_types.indexOf(key), 1);
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }
            return { asset_types: asset_types, fee_asset_types: fee_asset_types };
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(asset) {
            this.setState({ fee_asset_id: asset.asset_id, error: null });
        }
    }, {
        key: "onTrxIncluded",
        value: function onTrxIncluded(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_9__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_9__["default"].reset();
            } else if (confirm_store_state.closed) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_9__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_9__["default"].reset();
            }
        }
    }, {
        key: "onDatepickerRef",
        value: function onDatepickerRef(el) {
            if (el && el.picker.input) {
                el.picker.input.readOnly = false;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                from_account = _state2.from_account,
                to_account = _state2.to_account,
                asset = _state2.asset,
                asset_id = _state2.asset_id,
                amount = _state2.amount,
                to_name = _state2.to_name,
                fee_asset_id = _state2.fee_asset_id,
                balanceError = _state2.balanceError,
                num_of_periods = _state2.num_of_periods,
                period = _state2.period,
                period_start_time = _state2.period_start_time;
            var operation = this.props.operation;

            var _getAvailableAssets2 = this._getAvailableAssets(),
                asset_types = _getAvailableAssets2.asset_types;

            var balance = null;

            // Estimate fee
            var fee = this.state.feeAmount.getAmount({ real: true });

            if (from_account && from_account.get("balances")) {
                var account_balances = from_account.get("balances").toJS();
                var _error = this.state.balanceError ? "has-error" : "";
                if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].getAsset(asset_types[0]);
                if (asset_types.length > 0) {
                    var current_asset_id = asset ? asset.get("id") : asset_types[0];
                    var feeID = fee_asset_id;

                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: _error,
                                style: {
                                    borderBottom: "#A09F9F 1px dotted",
                                    cursor: "pointer"
                                },
                                onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], fee, feeID)
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                balance: account_balances[current_asset_id]
                            })
                        )
                    );

                    if (feeID == current_asset_id && this.state.balanceError) {
                        balance_fee = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: _error },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.insufficient" })
                            )
                        );
                    }
                } else {
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: _error },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.noFunds" })
                        )
                    );
                    balance_fee = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: _error },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.noFunds" })
                        )
                    );
                }
            }

            var amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
            var isAmountValid = amountValue && !Object(lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__["default"])(amountValue);
            var isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || balanceError || from_account.get("id") == to_account.get("id") || !period.amount || !num_of_periods || !period_start_time;

            if (false) {}

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Modal"],
                {
                    title: operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.create_new_mandate") : counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.update_mandate"),
                    visible: this.props.isModalVisible,
                    overlay: true,
                    onCancel: this.props.hideModal,
                    footer: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                        {
                            key: "send",
                            disabled: isSubmitNotValid,
                            onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
                        },
                        operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.create") : counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.update")
                    ), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                        { key: "Cancel", onClick: this.props.hideModal },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.cancel" })
                    )]
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Form"],
                        { className: "full-width", layout: "vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.tooltip.authorized_account"),
                                    mouseEnterDelay: 0.5
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "content-block" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        label: "showcases.direct_debit.authorized_account",
                                        accountName: to_name,
                                        account: to_account,
                                        onChange: this.toChanged.bind(this),
                                        onAccountChanged: this.onToAccountChanged,
                                        size: 60,
                                        typeahead: true,
                                        hideImage: true
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.tooltip.limit_per_period"),
                                mouseEnterDelay: 0.5
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "content-block transfer-input" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    label: "showcases.direct_debit.limit_per_period",
                                    amount: amount,
                                    onChange: this.onAmountChanged,
                                    asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0],
                                    assets: asset_types,
                                    display_balance: balance,
                                    allowNaN: true
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.tooltip.period"),
                                mouseEnterDelay: 0.5
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "content-block transfer-input" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_PeriodSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    label: "showcases.direct_debit.period",
                                    inputValue: period.amount,
                                    entries: ["Minute", "Hour", "Day", "Week"],
                                    values: {
                                        Minute: { seconds: 60, name: "Minute" },
                                        Hour: { seconds: 60 * 60, name: "Hour" },
                                        Day: {
                                            seconds: 60 * 60 * 24,
                                            name: "Day"
                                        },
                                        Week: {
                                            seconds: 60 * 60 * 24 * 7,
                                            name: "Week"
                                        }
                                    },
                                    periodType: period.type,
                                    onChange: this.onPeriodChanged
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.tooltip.num_of_periods"),
                                mouseEnterDelay: 0.5
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "content-block transfer-input" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.num_of_periods")
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                    type: "number",
                                    value: num_of_periods,
                                    onChange: this.onNumOfPeriodsChanged
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "content-block transfer-input" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.start_date")
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("showcases.direct_debit.tooltip.start_time"),
                                    mouseEnterDelay: 0.5
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_18__["DatePicker"], {
                                    value: period_start_time,
                                    showToday: false,
                                    showTime: true,
                                    placeholder: "",
                                    onChange: this.onStartDateChanged,
                                    className: "date-picker-width100",
                                    style: { width: "100%" },
                                    ref: function ref(el) {
                                        return _this2.onDatepickerRef(el);
                                    },
                                    disabledDate: function disabledDate(current) {
                                        return current && current < moment__WEBPACK_IMPORTED_MODULE_20___default()().add(2, "minutes");
                                    }
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "content-block transfer-input" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "no-margin no-padding" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    account: from_account,
                                    transaction: {
                                        type: operation && operation.type === "update" ? "withdraw_permission_update" : "withdraw_permission_create",
                                        options: ["price_per_kbyte"],
                                        data: {
                                            type: "memo",
                                            content: null
                                        }
                                    },
                                    onChange: this.onFeeChanged.bind(this)
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DirectDebitModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_15__["connect"])(DirectDebitModal, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().currentAccount,
            passwordAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().passwordAccount,
            fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().settings.get("fee_asset")
        };
    }
}));

/***/ }),

/***/ 3303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2117);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2809);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2097);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(562);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var PeriodSelector = function (_React$Component) {
    _inherits(PeriodSelector, _React$Component);

    function PeriodSelector() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PeriodSelector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PeriodSelector.__proto__ || Object.getPrototypeOf(PeriodSelector)).call.apply(_ref, [this].concat(args))), _this), _this.onInputChange = function (e) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                periodType = _this$props.periodType;

            if (onChange) {
                onChange({
                    amount: _this.getNumericEventValue(e),
                    type: periodType
                });
            }
        }, _this.onTypeChange = function (type) {
            var _this$props2 = _this.props,
                onChange = _this$props2.onChange,
                inputValue = _this$props2.inputValue;

            if (onChange) {
                onChange({
                    amount: inputValue,
                    type: type
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PeriodSelector, [{
        key: "getNumericEventValue",
        value: function getNumericEventValue(e) {
            var input = null;
            if (e.target.value == "" || e.target.value == null || e.target.value < 0) {
                return "";
            } else if (e.target.value === 0) {
                return 0;
            } else if (parseFloat(e.target.value) == e.target.value) {
                input = e.target.value.trim();
            } else {
                input = parseFloat(e.target.value.trim().replace(/[^\d.-]/g, "")) || 0;
            }
            return input;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                inputValue = _props.inputValue,
                values = _props.values,
                entries = _props.entries,
                periodType = _props.periodType,
                tabIndex = _props.tabIndex,
                placeholder = _props.placeholder,
                disabled = _props.disabled,
                scroll_length = _props.scroll_length;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "amount-selector", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    className: "left-label",
                    component: "label",
                    content: this.props.label
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "inline-label input-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "input-addon-before" },
                        "Each"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        disabled: disabled,
                        type: "number",
                        value: inputValue || "",
                        placeholder: placeholder,
                        onChange: this.onInputChange,
                        tabIndex: tabIndex,
                        style: { paddingLeft: "70px" }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "form-label select floating-dropdown" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            entries: entries,
                            values: values,
                            value: periodType && periodType.name,
                            onChange: this.onTypeChange,
                            scroll_length: scroll_length
                        })
                    )
                )
            );
        }
    }]);

    return PeriodSelector;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PeriodSelector.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, // a translation key for the label
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
    error: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    scroll_length: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
PeriodSelector.defaultProps = {
    disabled: false,
    tabIndex: 0
};


/* harmony default export */ __webpack_exports__["default"] = (PeriodSelector);

/***/ }),

/***/ 3304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2094);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2096);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2109);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(544);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2110);
/* harmony import */ var _Utility_LimitToWithdraw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3305);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(594);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2107);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2444);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var DirectDebitClaimModal = function (_React$Component) {
    _inherits(DirectDebitClaimModal, _React$Component);

    function DirectDebitClaimModal(props) {
        _classCallCheck(this, DirectDebitClaimModal);

        var _this = _possibleConstructorReturn(this, (DirectDebitClaimModal.__proto__ || Object.getPrototypeOf(DirectDebitClaimModal)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            var _this$state = _this.state,
                from_account = _this$state.from_account,
                to_account = _this$state.to_account,
                feeAsset = _this$state.feeAsset,
                permissionId = _this$state.permissionId,
                amount = _this$state.amount,
                asset = _this$state.asset,
                asset_id = _this$state.asset_id,
                memo = _this$state.memo;


            _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_12__["default"].claimWithdrawPermission(permissionId, from_account, to_account, asset_id, common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].convert_typed_to_satoshi(amount, asset), memo ? new Buffer(memo, "utf-8") : memo, feeAsset.asset_id).then(function (result) {
                _this.props.hideModal();
            }).catch(function (err) {
                _this.setState({ errorMessage: err });
            });
        };

        _this.setTotalLimit = function (limit) {
            return function () {
                var _this$state2 = _this.state,
                    asset = _this$state2.asset,
                    claimedAmount = _this$state2.claimedAmount;

                var amount = common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].get_asset_amount(limit - claimedAmount, asset);
                _this.setState({ maxAmount: true, amount: amount });
            };
        };

        _this.onAmountChanged = function (_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            if (!asset) {
                return;
            }

            _this.setState({
                amount: amount,
                asset: asset,
                asset_id: asset.get("id"),
                error: null,
                maxAmount: false
            });
        };

        _this.state = _this.getInitialState(props);
        return _this;
    }

    _createClass(DirectDebitClaimModal, [{
        key: "getInitialState",
        value: function getInitialState() {
            return {
                to_name: "",
                from_account: null,
                from_account_balance: null,
                to_account: null,
                amount: "",
                asset_id: null,
                asset: null,
                memo: "",
                error: null,
                feeAsset: null, // will be filled by FeeAssetSelector
                maxAmount: false,
                permissionId: "",
                firstPeriodError: false,
                payerBalanceWarning: false,
                withdrawal_limit: this.props.operation.payload.withdrawal_limit,
                current_period_expires: "",
                claimedAmount: "",
                errorMessage: null
            };
        }
    }, {
        key: "componentDidUpdate",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(prevProps, prevState) {
                var _props, operation, isModalVisible, timeStart, timePassed, currentPeriodNum, currentPeriodExpires, periodMs, to, from, asset, from_account_balance;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props = this.props, operation = _props.operation, isModalVisible = _props.isModalVisible;

                                if (!(isModalVisible && operation && prevState.permissionId !== operation.payload.id)) {
                                    _context.next = 21;
                                    break;
                                }

                                timeStart = new Date(operation.payload.period_start_time + "Z").getTime();
                                timePassed = new Date().getTime() - timeStart;
                                currentPeriodNum = void 0;
                                currentPeriodExpires = "";
                                periodMs = operation.payload.withdrawal_period_sec * 1000;

                                if (timePassed < 0) {
                                    console.log("first period is not started");
                                } else {
                                    currentPeriodNum = Math.ceil(timePassed / periodMs);
                                    currentPeriodExpires = timeStart + periodMs * currentPeriodNum;
                                }

                                _context.next = 10;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAccount", operation.payload.authorized_account);

                            case 10:
                                to = _context.sent;
                                _context.next = 13;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAccount", operation.payload.withdraw_from_account);

                            case 13:
                                from = _context.sent;
                                _context.next = 16;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAsset", operation.payload.withdrawal_limit.asset_id);

                            case 16:
                                asset = _context.sent;
                                _context.next = 19;
                                return this._checkBalance(from, operation.payload.withdrawal_limit);

                            case 19:
                                from_account_balance = _context.sent;

                                this.setState({
                                    to_account: to,
                                    from_account: from,
                                    permissionId: operation.payload.id,
                                    withdrawal_limit: operation.payload.withdrawal_limit,
                                    claimedAmount: operation.payload.claimed_this_period,
                                    current_period_expires_date: currentPeriodExpires,
                                    asset: asset,
                                    from_account_balance: from_account_balance
                                });

                            case 21:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidUpdate(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return componentDidUpdate;
        }()
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(asset) {
            this.setState({ feeAsset: asset });
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value });
        }
    }, {
        key: "_checkBalance",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var from_account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var withdrawal_limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var setState, balanceID, from_account_balance;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                setState = false;

                                if (from_account == null) {
                                    from_account = this.state.from_account;
                                    setState = true;
                                }
                                if (withdrawal_limit == null) {
                                    withdrawal_limit = this.state.withdrawal_limit;
                                    setState = true;
                                }
                                balanceID = from_account.getIn(["balances", withdrawal_limit.asset_id]);
                                from_account_balance = 0;

                                if (!balanceID) {
                                    _context2.next = 9;
                                    break;
                                }

                                _context2.next = 8;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getObject", balanceID);

                            case 8:
                                from_account_balance = _context2.sent.get("balance");

                            case 9:
                                if (setState) {
                                    this.setState({ from_account_balance: from_account_balance });
                                }
                                return _context2.abrupt("return", from_account_balance);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function _checkBalance() {
                return _ref3.apply(this, arguments);
            }

            return _checkBalance;
        }()
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                from_account = _state.from_account,
                from_account_balance = _state.from_account_balance,
                to_account = _state.to_account,
                asset = _state.asset,
                amount = _state.amount,
                memo = _state.memo,
                payerBalanceWarning = _state.payerBalanceWarning,
                withdrawal_limit = _state.withdrawal_limit,
                current_period_expires_date = _state.current_period_expires_date;


            var enteredMoreThanAvailable = false;
            var balanceError = false;
            var maximumToClaim = 0;
            if (withdrawal_limit) {
                maximumToClaim = from_account_balance !== null ? Math.min(from_account_balance, withdrawal_limit.amount) : withdrawal_limit.amount;
                if (asset && amount) enteredMoreThanAvailable = common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].convert_typed_to_satoshi(amount, asset) > maximumToClaim;
                if (from_account_balance !== null && from_account_balance < withdrawal_limit.amount) {
                    balanceError = true;
                }
            }

            var balance = null;

            // balance
            if (from_account && from_account.get("balances")) {
                balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "span",
                        content: "showcases.direct_debit.limit"
                    }),
                    ":",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            className: enteredMoreThanAvailable ? "has-error" : "",
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            },
                            onClick: this.setTotalLimit(maximumToClaim)
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_LimitToWithdraw__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            amount: maximumToClaim,
                            assetId: withdrawal_limit && withdrawal_limit.asset_id
                        })
                    ),
                    "\xA0",
                    balanceError && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Tooltip"],
                        {
                            placement: "topRight",
                            title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                string: "showcases.direct_debit.payer_balance_not_sufficient",
                                keys: [{
                                    type: "amount",
                                    value: withdrawal_limit,
                                    arg: "limit"
                                }]
                            })
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
                            type: "exclamation-circle",
                            theme: "filled",
                            style: { color: "#fe8c00" }
                        })
                    )
                );
            }

            var amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
            var isAmountValid = amountValue && !Object(lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__["default"])(amountValue);
            var isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || balanceError || enteredMoreThanAvailable || payerBalanceWarning || !current_period_expires_date || from_account.get("id") == to_account.get("id");

            if (false) {}

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("showcases.direct_debit.claim_funds"),
                    visible: this.props.isModalVisible,
                    overlay: true,
                    onCancel: this.props.hideModal,
                    footer: [this.state.errorMessage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "red", style: { marginRight: "10px" } },
                        this.state.errorMessage
                    ), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                        {
                            key: "send",
                            disabled: isSubmitNotValid,
                            onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
                        },
                        counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("showcases.direct_debit.claim")
                    ), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                        { key: "Cancel", onClick: this.props.hideModal },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.cancel" })
                    )]
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Form"],
                        { className: "full-width", layout: "vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            label: "showcases.direct_debit.authorizing_account",
                            accountName: !!to_account ? to_account.get("name") : "",
                            account: to_account,
                            size: 60,
                            hideImage: true,
                            disabled: true,
                            noForm: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Form"].Item,
                            {
                                label: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("showcases.direct_debit.current_period_expires")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Input"], {
                                type: "text",
                                value: current_period_expires_date ? counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.localize(new Date(current_period_expires_date), {
                                    type: "date",
                                    format: "full"
                                }) : counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("showcases.direct_debit.first_period_not_started"),
                                disabled: true,
                                className: current_period_expires_date ? "" : "error-area"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            label: "showcases.direct_debit.amount_to_withdraw",
                            amount: amount,
                            onChange: this.onAmountChanged,
                            asset: withdrawal_limit && withdrawal_limit.asset_id,
                            assets: withdrawal_limit && [withdrawal_limit.asset_id],
                            display_balance: balance,
                            allowNaN: true
                        }),
                        memo && memo.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "right-label" },
                            memo.length
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Form"].Item,
                            {
                                label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Tooltip"],
                                    {
                                        placement: "top",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("tooltip.memo_tip")
                                    },
                                    counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("transfer.memo")
                                )
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Input"].TextArea, {
                                style: { marginBottom: 0 },
                                rows: "3",
                                value: memo,
                                onChange: this.onMemoChanged.bind(this)
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                            account: to_account,
                            transaction: {
                                type: "withdraw_permission_claim",
                                options: ["price_per_kbyte"],
                                data: {
                                    type: "memo",
                                    content: memo
                                }
                            },
                            onChange: this.onFeeChanged.bind(this)
                        })
                    )
                )
            );
        }
    }]);

    return DirectDebitClaimModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DirectDebitClaimModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(417).Buffer))

/***/ }),

/***/ 3305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2117);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var LimitToWithdraw = function (_React$Component) {
    _inherits(LimitToWithdraw, _React$Component);

    function LimitToWithdraw() {
        _classCallCheck(this, LimitToWithdraw);

        return _possibleConstructorReturn(this, (LimitToWithdraw.__proto__ || Object.getPrototypeOf(LimitToWithdraw)).apply(this, arguments));
    }

    _createClass(LimitToWithdraw, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                amount: this.props.amount,
                asset: this.props.assetId,
                asPercentage: this.props.asPercentage,
                assetInfo: this.props.assetInfo,
                replace: this.props.replace,
                hide_asset: this.props.hide_asset
            });
        }
    }]);

    return LimitToWithdraw;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

LimitToWithdraw.propTypes = {
    hide_asset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
LimitToWithdraw.defaultProps = {
    hide_asset: false
};


/* harmony default export */ __webpack_exports__["default"] = (LimitToWithdraw);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuNmZmZjkxMDE1Mzg3OTY0ZjdhZDYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DdXJyZW50QWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc2V0LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9TZXR0aW5nc0VudHJ5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvRmVlQXNzZXRTZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0FjY291bnRzU2V0dGluZ3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9XYWxsZXRTZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1Bhc3N3b3JkU2V0dGluZ3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9SZXN0b3JlU2V0dGluZ3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9SZXN0b3JlRmF2b3JpdGVzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvUmVzZXRTZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0JhY2t1cFNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvQmFja3VwRmF2b3JpdGVzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2hvd2Nhc2VzL0JhcnRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZU1hcC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2hvd2Nhc2VzL0JvcnJvdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1Nob3djYXNlcy9IdGxjLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTW9kYWwvSHRsY01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2FjdGlvbnMvSHRsY0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL19odGxjLnNjc3M/MzIzZCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2hvd2Nhc2VzL0RpcmVjdERlYml0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTW9kYWwvRGlyZWN0RGViaXRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGVyaW9kU2VsZWN0b3IuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Nb2RhbC9EaXJlY3REZWJpdENsYWltTW9kYWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0xpbWl0VG9XaXRoZHJhdy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzTG9hZGVkID0gZnVuY3Rpb24gaGFzTG9hZGVkKGN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICByZXR1cm4gISFjdXJyZW50QWNjb3VudCAmJiAhIWN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZnVuY3Rpb24gYmluZFRvQ3VycmVudEFjY291bnQoXHJcbiAgICBXcmFwcGVkQ29tcG9uZW50XHJcbikge1xyXG4gICAgLy8gLi4uYW5kIHJldHVybnMgYW5vdGhlciBjb21wb25lbnQuLi5cclxuICAgIGxldCBCaW5kVG9DdXJyZW50QWNjb3VudCA9IGNsYXNzIEJpbmRUb0N1cnJlbnRBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgICAgICAvLyBzZXQgc3Vic2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGF1dG9zdWJzY3JpYmU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNMb2FkZWQodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCaW5kVG9DdXJyZW50QWNjb3VudCk7XHJcblxyXG4gICAgQmluZFRvQ3VycmVudEFjY291bnQgPSBkZWJvdW5jZVJlbmRlcihCaW5kVG9DdXJyZW50QWNjb3VudCwgMTAwLCB7XHJcbiAgICAgICAgbGVhZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb25uZWN0KFxyXG4gICAgICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxlYXNlLWxvZ2luXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBuZXcgTWFwKFtbXCJuYW1lXCIsIGN1cnJlbnRBY2NvdW50XV0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IEludGxTdG9yZSBmcm9tIFwic3RvcmVzL0ludGxTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzT2JqZWN0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJbnRsU3RvcmUuZ2V0U3RhdGUoKS5sb2NhbGVzT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTGF0ZW5jaWVzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuYXBpTGF0ZW5jaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZXR0aW5ncyB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBJbnRsQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9JbnRsQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBXZWJzb2NrZXRBZGRNb2RhbCBmcm9tIFwiLi9XZWJzb2NrZXRBZGRNb2RhbFwiO1xuaW1wb3J0IFNldHRpbmdzRW50cnkgZnJvbSBcIi4vU2V0dGluZ3NFbnRyeVwiO1xuaW1wb3J0IEFjY291bnRzU2V0dGluZ3MgZnJvbSBcIi4vQWNjb3VudHNTZXR0aW5nc1wiO1xuaW1wb3J0IFdhbGxldFNldHRpbmdzIGZyb20gXCIuL1dhbGxldFNldHRpbmdzXCI7XG5pbXBvcnQgUGFzc3dvcmRTZXR0aW5ncyBmcm9tIFwiLi9QYXNzd29yZFNldHRpbmdzXCI7XG5pbXBvcnQgUmVzdG9yZVNldHRpbmdzIGZyb20gXCIuL1Jlc3RvcmVTZXR0aW5nc1wiO1xuaW1wb3J0IFJlc2V0U2V0dGluZ3MgZnJvbSBcIi4vUmVzZXRTZXR0aW5nc1wiO1xuaW1wb3J0IEJhY2t1cFNldHRpbmdzIGZyb20gXCIuL0JhY2t1cFNldHRpbmdzXCI7XG5pbXBvcnQgQWNjZXNzU2V0dGluZ3MgZnJvbSBcIi4vQWNjZXNzU2V0dGluZ3NcIjtcbmltcG9ydCB7c2V0fSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge2dldEFsbG93ZWRMb2dpbnMsIGdldEZhdWNldH0gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge0lucHV0LCBGb3JtfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgbWVudUVudHJpZXMgPSB0aGlzLl9nZXRNZW51RW50cmllcyhwcm9wcyk7XG4gICAgICAgIGxldCBhY3RpdmVTZXR0aW5nID0gMDtcblxuICAgICAgICBsZXQgdGFiSW5kZXggPSAhIXByb3BzLm1hdGNoLnBhcmFtcy50YWJcbiAgICAgICAgICAgID8gbWVudUVudHJpZXMuaW5kZXhPZihwcm9wcy5tYXRjaC5wYXJhbXMudGFiKVxuICAgICAgICAgICAgOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlU2V0dGluZ1wiLCAwKTtcbiAgICAgICAgaWYgKHRhYkluZGV4ID49IDApIGFjdGl2ZVNldHRpbmcgPSB0YWJJbmRleDtcblxuICAgICAgICBsZXQgZ2VuZXJhbCA9IFtcbiAgICAgICAgICAgIFwibG9jYWxlXCIsXG4gICAgICAgICAgICBcInVuaXRcIixcbiAgICAgICAgICAgIFwiZmVlX2Fzc2V0XCIsXG4gICAgICAgICAgICBcImZpbHRlcmVkU2VydmljZVByb3ZpZGVyc1wiLFxuICAgICAgICAgICAgXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgICAgIFwic2hvd1NldHRsZXNcIixcbiAgICAgICAgICAgIFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgIFwidGhlbWVzXCIsXG4gICAgICAgICAgICBcInNob3dBc3NldFBlcmNlbnRcIixcbiAgICAgICAgICAgIFwidmlld09ubHlNb2RlXCIsXG4gICAgICAgICAgICBcInNob3dQcm9wb3NlZFR4XCJcbiAgICAgICAgXTtcbiAgICAgICAgLy8gZGlzYWJsZSB0aGF0IHRoZSB1c2VyIGNhbiBjaGFuZ2UgbG9naW4gbWV0aG9kIGlmIG9ubHkgb25lIGlzIGFsbG93ZWRcbiAgICAgICAgaWYgKGdldEFsbG93ZWRMb2dpbnMoKS5sZW5ndGggPiAxKSBnZW5lcmFsLnB1c2goXCJwYXNzd29yZExvZ2luXCIpO1xuICAgICAgICBnZW5lcmFsLnB1c2goXCJyZXNldFwiKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNBZGROb2RlTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcGlTZXJ2ZXI6IHByb3BzLnNldHRpbmdzLmdldChcImFwaVNlcnZlclwiKSxcbiAgICAgICAgICAgIGFjdGl2ZVNldHRpbmcsXG4gICAgICAgICAgICBtZW51RW50cmllcyxcbiAgICAgICAgICAgIHNldHRpbmdFbnRyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhbDogZ2VuZXJhbCxcbiAgICAgICAgICAgICAgICBhY2Nlc3M6IFtcImFwaVNlcnZlclwiLCBcImZhdWNldF9hZGRyZXNzXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zaG93QWRkTm9kZU1vZGFsID0gdGhpcy5zaG93QWRkTm9kZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZUFkZE5vZGVNb2RhbCA9IHRoaXMuaGlkZUFkZE5vZGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwgPSB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsID0gdGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcmV2UHJvcHMubWF0Y2gucGFyYW1zLnRhYiAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudGFiICYmXG4gICAgICAgICAgICAhIXRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnRhYlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlTWVudSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy50YWIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBucC5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpICE9PVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEVudHJpZXMgPSB0aGlzLl9nZXRNZW51RW50cmllcyh0aGlzLnByb3BzKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVFbnRyaWVzID0gdGhpcy5fZ2V0TWVudUVudHJpZXMobnApO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZSA9IGN1cnJlbnRFbnRyaWVzW3RoaXMuc3RhdGUuYWN0aXZlU2V0dGluZ107XG4gICAgICAgICAgICBjb25zdCBuZXdBY3RpdmVJbmRleCA9IG1lbnVFbnRyaWVzLmluZGV4T2YoY3VycmVudEFjdGl2ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdBY3RpdmUgPSBtZW51RW50cmllc1tuZXdBY3RpdmVJbmRleF07XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtZW51RW50cmllc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobmV3QWN0aXZlSW5kZXggJiYgbmV3QWN0aXZlSW5kZXggIT09IHRoaXMuc3RhdGUuYWN0aXZlU2V0dGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZXR0aW5nOiBtZW51RW50cmllcy5pbmRleE9mKGN1cnJlbnRBY3RpdmUpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFuZXdBY3RpdmUgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVNldHRpbmcgPiBtZW51RW50cmllcy5sZW5ndGggLSAxXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2V0dGluZzogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0FkZE5vZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0FkZE5vZGVNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZUFkZE5vZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0FkZE5vZGVNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dSZW1vdmVOb2RlTW9kYWwodXJsLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNSZW1vdmVOb2RlTW9kYWxWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgcmVtb3ZlTm9kZToge1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVSZW1vdmVOb2RlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNSZW1vdmVOb2RlTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlbW92ZU5vZGU6IHtcbiAgICAgICAgICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgICAgICAgICAgbmFtZTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0TWVudUVudHJpZXMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmRlcHJlY2F0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJ3YWxsZXRcIiwgXCJiYWNrdXBcIl07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lbnVFbnRyaWVzID0gW107XG5cbiAgICAgICAgbWVudUVudHJpZXMucHVzaChcImdlbmVyYWxcIik7XG4gICAgICAgIGlmICghcHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSkgbWVudUVudHJpZXMucHVzaChcIndhbGxldFwiKTtcbiAgICAgICAgbWVudUVudHJpZXMucHVzaChcImFjY291bnRzXCIpO1xuICAgICAgICBpZiAoIXByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikpIG1lbnVFbnRyaWVzLnB1c2goXCJwYXNzd29yZFwiKTtcbiAgICAgICAgaWYgKCFwcm9wcy5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpKSBtZW51RW50cmllcy5wdXNoKFwiYmFja3VwXCIpO1xuICAgICAgICBpZiAoIXByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikpIG1lbnVFbnRyaWVzLnB1c2goXCJyZXN0b3JlXCIpO1xuICAgICAgICBtZW51RW50cmllcy5wdXNoKFwiYWNjZXNzXCIpO1xuXG4gICAgICAgIGlmIChnZXRGYXVjZXQoKS5zaG93KSBtZW51RW50cmllcy5wdXNoKFwiZmF1Y2V0X2FkZHJlc3NcIik7XG5cbiAgICAgICAgbWVudUVudHJpZXMucHVzaChcInJlc2V0XCIpO1xuXG4gICAgICAgIHJldHVybiBtZW51RW50cmllcztcbiAgICB9XG5cbiAgICB0cmlnZ2VyTW9kYWwoZSwgLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlZnMud3NfbW9kYWwuc2hvdyhlLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlKHBhdGgsIHZhbHVlKSB7XG4gICAgICAgIC8vIHVzZSBkaWZmZXJlbnQgY2hhbmdlIGhhbmRsZXIgYmVjYXVzZSBjaGVja2JveCBkb2Vzbid0IHdvcmtcbiAgICAgICAgLy8gbm9ybWFsIHdpdGggZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHNldChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFwiYnJvd3Nlcl9ub3RpZmljYXRpb25zXCIpLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgc2V0dGluZzogXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgICAgIHZhbHVlOiB1cGRhdGVkVmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZVNldHRpbmdzRW50cnlDaGFuZ2Uoc2V0dGluZywgaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dC50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlU2V0dGluZyhzZXR0aW5nLCB7dGFyZ2V0OiB7dmFsdWU6IGlucHV0fX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VTZXR0aW5nKHNldHRpbmcsIGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkNoYW5nZVNldHRpbmcoc2V0dGluZywgZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCB7ZGVmYXVsdHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgICAgICBmdW5jdGlvbiBmaW5kRW50cnkodGFyZ2V0VmFsdWUsIHRhcmdldERlZmF1bHRzKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldERlZmF1bHRzKSByZXR1cm4gdGFyZ2V0VmFsdWU7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGVmYXVsdHNbMF0udHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXREZWZhdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNldHRpbmdzLiR7dGFyZ2V0RGVmYXVsdHNbaV0udHJhbnNsYXRlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IHRhcmdldFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXREZWZhdWx0cy5pbmRleE9mKHRhcmdldFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoc2V0dGluZykge1xuICAgICAgICAgICAgY2FzZSBcImxvY2FsZVwiOlxuICAgICAgICAgICAgICAgIGxldCBteUxvY2FsZSA9IGNvdW50ZXJwYXJ0LmdldExvY2FsZSgpO1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gbXlMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgSW50bEFjdGlvbnMuc3dpdGNoTG9jYWxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZzogXCJsb2NhbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0aGVtZXNcIjpcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwidGhlbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdE1hcmtldHNcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndhbGxldExvY2tUaW1lb3V0XCI6XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4obmV3VmFsdWUpKSBuZXdWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihuZXdWYWx1ZSkgJiYgdHlwZW9mIG5ld1ZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJpbnZlcnNlTWFya2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwiY29uZmlybU1hcmtldE9yZGVyXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRzW3NldHRpbmddKSA9PT0gMDsgLy8gVVNEL0JUUyBpcyB0cnVlLCBCVFMvVVNEIGlzIGZhbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhcGlTZXJ2ZXJcIjpcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwiYXBpU2VydmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhcGlTZXJ2ZXI6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzaG93UHJvcG9zZWRUeFwiOlxuICAgICAgICAgICAgY2FzZSBcInNob3dTZXR0bGVzXCI6XG4gICAgICAgICAgICBjYXNlIFwic2hvd0Fzc2V0UGVyY2VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInBhc3N3b3JkTG9naW5cIjpcbiAgICAgICAgICAgIGNhc2UgXCJ2aWV3T25seU1vZGVcIjpcbiAgICAgICAgICAgICAgICBsZXQgcmVmZXJlbmNlID0gZGVmYXVsdHNbc2V0dGluZ11bMF07XG4gICAgICAgICAgICAgICAgaWYgKHJlZmVyZW5jZS50cmFuc2xhdGUpIHJlZmVyZW5jZSA9IHJlZmVyZW5jZS50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWUgPT09IHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZmlsdGVyZWRTZXJ2aWNlUHJvdmlkZXJzXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmVlX2Fzc2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwidW5pdFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IGRlZmF1bHRzW1widW5pdFwiXTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBzZXR0aW5nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGVmYXVsdFNldHRpbmdzW2luZGV4XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhbHVlID0gZmluZEVudHJ5KGUudGFyZ2V0LnZhbHVlLCBkZWZhdWx0c1tzZXR0aW5nXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtzZXR0aW5nOiBzZXR0aW5nLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVzZXQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jbGVhclNldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgX3JlZGlyZWN0VG9FbnRyeShlbnRyeSkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9zZXR0aW5ncy9cIiArIGVudHJ5KTtcbiAgICB9XG5cbiAgICBfb25DaGFuZ2VNZW51KGVudHJ5KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUubWVudUVudHJpZXMuaW5kZXhPZihlbnRyeSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlU2V0dGluZzogaW5kZXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHthY3RpdmVTZXR0aW5nOiBpbmRleH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtzZXR0aW5ncywgZGVmYXVsdHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge21lbnVFbnRyaWVzLCBhY3RpdmVTZXR0aW5nLCBzZXR0aW5nRW50cmllc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgZW50cmllcztcbiAgICAgICAgbGV0IGFjdGl2ZUVudHJ5ID0gbWVudUVudHJpZXNbYWN0aXZlU2V0dGluZ10gfHwgbWVudUVudHJpZXNbMF07XG5cbiAgICAgICAgc3dpdGNoIChhY3RpdmVFbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImFjY291bnRzXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IDxBY2NvdW50c1NldHRpbmdzIC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid2FsbGV0XCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IDxXYWxsZXRTZXR0aW5ncyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8UGFzc3dvcmRTZXR0aW5ncyAvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImJhY2t1cFwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8QmFja3VwU2V0dGluZ3MgLz47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJyZXN0b3JlXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IChcbiAgICAgICAgICAgICAgICAgICAgPFJlc3RvcmVTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRMb2dpbj17dGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhY2Nlc3NcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gKFxuICAgICAgICAgICAgICAgICAgICA8QWNjZXNzU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdWNldD17c2V0dGluZ3MuZ2V0KFwiZmF1Y2V0X2FkZHJlc3NcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlcz17ZGVmYXVsdHMuYXBpU2VydmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlU2V0dGluZy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FkZE5vZGVNb2RhbD17dGhpcy5zaG93QWRkTm9kZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1JlbW92ZU5vZGVNb2RhbD17dGhpcy5zaG93UmVtb3ZlTm9kZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmF1Y2V0X2FkZHJlc3NcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gKFxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZ2V0RmF1Y2V0KCkuZWRpdGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NldHRpbmdzLmdldChcImZhdWNldF9hZGRyZXNzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZhdWNldCgpLmVkaXRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fb25DaGFuZ2VTZXR0aW5nLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmF1Y2V0X2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInJlc2V0XCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IDxSZXNldFNldHRpbmdzIC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSBzZXR0aW5nRW50cmllc1thY3RpdmVFbnRyeV0ubWFwKHNldHRpbmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NldHRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz17c2V0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17c2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0c1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcgPT09IFwiZmVlX2Fzc2V0XCIgPyBcInVuaXRcIiA6IHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlU2V0dGluZ3NFbnRyeUNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5vdGlmaWNhdGlvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVzPXt0aGlzLnByb3BzLmxvY2FsZXNPYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtIGxheW91dD17XCJ2ZXJ0aWNhbFwifT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlcHJlY2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZ3JpZC1ibG9jayBzZXR0aW5ncy1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IG1hcmdpbi1ibG9jayB3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNocmluayBzZXR0aW5ncy1tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxMCwgcGFkZGluZ0xlZnQ6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiaGVhZGVyLnNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInBhbmVsLWJnLWNvbG9yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVFbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGFjdGl2ZVNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9yZWRpcmVjdFRvRW50cnkuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJzZXR0aW5ncy5cIiArIGVudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBuby1tYXJnaW4gdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuXCIgKyBtZW51RW50cmllc1thY3RpdmVTZXR0aW5nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRW50cnkgIT0gXCJhY2Nlc3NcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zYWZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YHNldHRpbmdzLiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVFbnRyaWVzW2FjdGl2ZVNldHRpbmddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV90ZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1iZy1jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50cmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFdlYnNvY2tldEFkZE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlPXt0aGlzLnN0YXRlLnJlbW92ZU5vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkZE5vZGVNb2RhbFZpc2libGU9e3RoaXMuc3RhdGUuaXNBZGROb2RlTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZW1vdmVOb2RlTW9kYWxWaXNpYmxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BZGROb2RlQ2xvc2U9e3RoaXMuaGlkZUFkZE5vZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlTm9kZUNsb3NlPXt0aGlzLmhpZGVSZW1vdmVOb2RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlzPXtkZWZhdWx0c1tcImFwaVNlcnZlclwiXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaT17ZGVmYXVsdHNbXCJhcGlTZXJ2ZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS51cmwgPT09IHRoaXMuc3RhdGUuYXBpU2VydmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYiAmJiBiLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbm5lY3Rpb249e2FwaVNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXBpU2VydmVyfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iLCJpbXBvcnQgYmFzZVNldCBmcm9tICcuL19iYXNlU2V0LmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIGEgcG9ydGlvbiBvZiBgcGF0aGAgZG9lc24ndCBleGlzdCxcbiAqIGl0J3MgY3JlYXRlZC4gQXJyYXlzIGFyZSBjcmVhdGVkIGZvciBtaXNzaW5nIGluZGV4IHByb3BlcnRpZXMgd2hpbGUgb2JqZWN0c1xuICogYXJlIGNyZWF0ZWQgZm9yIGFsbCBvdGhlciBtaXNzaW5nIHByb3BlcnRpZXMuIFVzZSBgXy5zZXRXaXRoYCB0byBjdXN0b21pemVcbiAqIGBwYXRoYCBjcmVhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5zZXQob2JqZWN0LCAnYVswXS5iLmMnLCA0KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC5hWzBdLmIuYyk7XG4gKiAvLyA9PiA0XG4gKlxuICogXy5zZXQob2JqZWN0LCBbJ3gnLCAnMCcsICd5JywgJ3onXSwgNSk7XG4gKiBjb25zb2xlLmxvZyhvYmplY3QueFswXS55LnopO1xuICogLy8gPT4gNVxuICovXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBvYmplY3QgOiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgTm90aWZ5IGZyb20gXCJub3RpZnlqc1wiO1xyXG5pbXBvcnQgRmVlQXNzZXRTZXR0aW5ncyBmcm9tIFwiLi9GZWVBc3NldFNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQge0NoZWNrYm94LCBTZWxlY3QsIElucHV0LCBGb3JtLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEdhdGV3YXlTZWxlY3Rvck1vZGFsIGZyb20gXCIuLi9HYXRld2F5cy9HYXRld2F5U2VsZWN0b3JNb2RhbFwiO1xyXG5cclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc0VudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgIGlzR2F0ZXdheVNlbGVjdG9yTW9kYWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNHYXRld2F5U2VsZWN0b3JNb2RhbFJlbmRlcmVkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlID0gdGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUdhdGV3YXlTZWxlY3Rvck1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0dhdGV3YXlTZWxlY3Rvck1vZGFsVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R2F0ZXdheVNlbGVjdG9yTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzR2F0ZXdheVNlbGVjdG9yTW9kYWxSZW5kZXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgaXNHYXRld2F5U2VsZWN0b3JNb2RhbFZpc2libGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0TWVzc2FnZShrZXkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKGtleSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBudWxsfSk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZShwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Ob3RpZmljYXRpb25DaGFuZ2UocGF0aCwgISFldnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2V0dGluZyA9PT0gXCJmaWx0ZXJlZFNlcnZpY2VQcm92aWRlcnNcIikge1xyXG4gICAgICAgICAgICAvLyBvbmx5IHJlcmVuZGVyIGZvciB0aGUgbW9kYWwsIG5vdCB3aGVuIHNldHRpbmdzIGNoYW5nZWQgKHZpc3VhbGl6ZWQgaW4gdGhlIG1vZGFsISlcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5pc0dhdGV3YXlTZWxlY3Rvck1vZGFsVmlzaWJsZSAhPT1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNHYXRld2F5U2VsZWN0b3JNb2RhbFZpc2libGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7ZGVmYXVsdHMsIHNldHRpbmcsIHNldHRpbmdzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMsXHJcbiAgICAgICAgICAgIG9wdGlvbmFsLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkID0gc2V0dGluZ3MuZ2V0KHNldHRpbmcpO1xyXG4gICAgICAgIGxldCBub0hlYWRlciA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHNldHRpbmcpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvY2FsZVwiOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0cy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbktleSA9IFwibGFuZ3VhZ2VzLlwiICsgZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKHRyYW5zbGF0aW9uS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2VudHJ5fSB2YWx1ZT17ZW50cnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidGhlbWVzXCI6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRzLm1hcChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uS2V5ID0gXCJzZXR0aW5ncy5cIiArIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtlbnRyeX0gdmFsdWU9e2VudHJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJyb3dzZXJfbm90aWZpY2F0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zLS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJyb3dzZXJfbm90aWZpY2F0aW9ucy5hbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyEhdmFsdWUuYWxsb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuYnJvd3Nlcl9ub3RpZmljYXRpb25zX2FsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zLS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJyb3dzZXJfbm90aWZpY2F0aW9ucy5hZGRpdGlvbmFsLnRyYW5zZmVyVG9NZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXZhbHVlLmFsbG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF2YWx1ZS5hZGRpdGlvbmFsLnRyYW5zZmVyVG9NZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbC50cmFuc2ZlclRvTWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmJyb3dzZXJfbm90aWZpY2F0aW9uc19hZGRpdGlvbmFsX3RyYW5zZmVyX3RvX21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshIXZhbHVlLmFsbG93ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZnkubmVlZHNQZXJtaXNzaW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvelo3TkhZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zLS1uby1icm93c2VyLXN1cHBvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInNldHRpbmdzLmJyb3dzZXJfbm90aWZpY2F0aW9uc19kaXNhYmxlZF9ieV9icm93c2VyX25vdGlmeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZmVlX2Fzc2V0XCI6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IDxGZWVBc3NldFNldHRpbmdzIGtleT1cImZlZV9hc3NldF9jb21wb25lbnRcIiAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZpbHRlcmVkU2VydmljZVByb3ZpZGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dHYXRld2F5U2VsZWN0b3JNb2RhbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2UgZXh0ZXJuYWwgU2VydmljZSBQcm92aWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzR2F0ZXdheVNlbGVjdG9yTW9kYWxSZW5kZXJlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2F0ZXdheVNlbGVjdG9yTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0dhdGV3YXlTZWxlY3Rvck1vZGFsVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZUdhdGV3YXlTZWxlY3Rvck1vZGFsLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRNYXJrZXRzXCI6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIndhbGxldExvY2tUaW1lb3V0XCI6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKHRoaXMsIHNldHRpbmcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RlZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGVmYXVsdHNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0ZWQgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGVmYXVsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RlZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRzLm1hcChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBlbnRyeS50cmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNldHRpbmdzLiR7ZW50cnkudHJhbnNsYXRlfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmcgPT09IFwidW5pdFwiIHx8IHNldHRpbmcgPT09IFwiZmVlX2Fzc2V0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IDxBc3NldE5hbWUgbmFtZT17ZW50cnl9IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBlbnRyeS50cmFuc2xhdGUgPyBlbnRyeS50cmFuc2xhdGUgOiBlbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRyYW5zbGF0ZSA/IGVudHJ5LnRyYW5zbGF0ZSA6IGVudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKHRoaXMsIHNldHRpbmcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiAmJiAhdmFsdWUgJiYgIW9wdGlvbnMpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUudHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJhbnNsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgRW50cnlMYXlvdXQgPSAoe25vSGVhZGVyLCBzZXR0aW5nLCBjaGlsZHJlbn0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB7KG5vSGVhZGVyICYmIGNoaWxkcmVuKSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShgc2V0dGluZ3MuJHtzZXR0aW5nfWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibm8tYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPEVudHJ5TGF5b3V0IG5vSGVhZGVyPXtub0hlYWRlcn0gc2V0dGluZz17c2V0dGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1widW5zdHlsZWQtbGlzdFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAge2lucHV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInVuc3R5bGVkLWxpc3RcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2lucHV0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21wb25lbnQgPyBjb21wb25lbnQgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9FbnRyeUxheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjb2xvci1zdWNjZXNzXCI+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5cclxuaW1wb3J0IFNldERlZmF1bHRGZWVBc3NldE1vZGFsIGZyb20gXCIuLi9Nb2RhbC9TZXREZWZhdWx0RmVlQXNzZXRNb2RhbFwiO1xyXG5cclxuY2xhc3MgRmVlQXNzZXRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50X2Fzc2V0OlxyXG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5hc3NldHNfYnlfc3ltYm9sLmdldChwcm9wcy5mZWVfYXNzZXQpIHx8IFwiMS4zLjBcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQodGhpcy5zdGF0ZS5jdXJyZW50X2Fzc2V0KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJzZXR0aW5ncy5jdXJyZW50X2ZlZV9hc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHthc3NldCA/IDxBc3NldE5hbWUgbmFtZT17YXNzZXQuZ2V0KFwic3ltYm9sXCIpfSAvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjE1cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwib3Blbl9jaGFuZ2VfZmVlX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNldHRpbmdzLmNoYW5nZV9kZWZhdWx0X2ZlZV9hc3NldFwiKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8U2V0RGVmYXVsdEZlZUFzc2V0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2hhbmdlX2ZlZV9hc3NldF9tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNzZXQ9e3RoaXMuc3RhdGUuY3VycmVudF9hc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZlZXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZURlZmF1bHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50X2Fzc2V0OiB2YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgRmVlQXNzZXRTZXR0aW5ncyxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXQ6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXCJmZWVfYXNzZXRcIilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWNjb3VudHNTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLm15QWNjb3VudHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm15QWNjb3VudHNcclxuICAgICAgICAgICAgKSB8fCBuZXh0UHJvcHMuaGlkZGVuQWNjb3VudHMgIT09IHRoaXMucHJvcHMuaGlkZGVuQWNjb3VudHNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlSGlkZShhY2NvdW50LCBoaWRlLCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRvZ2dsZUhpZGVBY2NvdW50KGFjY291bnQsIGhpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge215QWNjb3VudHMsIGhpZGRlbkFjY291bnRzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBhY2NvdW50cyA9IGhpZGRlbkFjY291bnRzXHJcbiAgICAgICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAgICAgLmNvbmNhdChteUFjY291bnRzKVxyXG4gICAgICAgICAgICAuc29ydCgpO1xyXG5cclxuICAgICAgICBpZiAoIWFjY291bnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5ub19hY2NvdW50c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50cy5tYXAoYWNjb3VudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0lnbm9yZWQgPSBoaWRkZW5BY2NvdW50cy5oYXMoYWNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaWRlTGluayA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSWdub3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uVG9nZ2xlSGlkZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub25Ub2dnbGVIaWRlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0lnbm9yZWQgPyBcInVuaWdub3JlXCIgOiBcImlnbm9yZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9hY2NvdW50LyR7YWNjb3VudH0vcGVybWlzc2lvbnNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy52aWV3X2tleXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2hpZGVMaW5rfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BY2NvdW50c1NldHRpbmdzID0gY29ubmVjdChBY2NvdW50c1NldHRpbmdzLCB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbXlBY2NvdW50czogQWNjb3VudFN0b3JlLmdldE15QWNjb3VudHMoKSxcclxuICAgICAgICAgICAgaGlkZGVuQWNjb3VudHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15SGlkZGVuQWNjb3VudHNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q2hhbmdlQWN0aXZlV2FsbGV0LCBXYWxsZXREZWxldGV9IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0TWFuYWdlclwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi4vV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCB7Rm9ybSwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsZXRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvb2t1cEFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICByZXNldE1lc3NhZ2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkxvb2t1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb29rdXBBY3RpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZXNldEJyYWlua2V5U2VxdWVuY2UoKSB7XG4gICAgICAgIFdhbGxldERiLnJlc2V0QnJhaW5LZXlTZXF1ZW5jZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlc2V0TWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmJyYWlua2V5X3Jlc2V0X3N1Y2Nlc3NcIilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2xvb2t1cEFjdGl2ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge2RlcHJlY2F0ZWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoZGVwcmVjYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q2hhbmdlQWN0aXZlV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxXYWxsZXREZWxldGUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2hhbmdlQWN0aXZlV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgPFdhbGxldERlbGV0ZSAvPlxuXG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQuYmFsYW5jZV9jbGFpbXNcIil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW9mZnNldFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxNXB4IDBcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmxvb2t1cF90ZXh0XCIgLz46XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Mb29rdXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYmFsYW5jZV9jbGFpbV9sb29rdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICAgICAge2xvb2t1cEFjdGl2ZSA/IDxCYWxhbmNlQ2xhaW1BY3RpdmUgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQuYnJhaW5rZXlfc2VxX3Jlc2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vZmZzZXRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMTVweFwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5icmFpbmtleV9zZXFfcmVzZXRfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXRCcmFpbmtleVNlcXVlbmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3NlcV9yZXNldF9idXR0b25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXNldE1lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhY29sb3Itc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXNldE1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXYWxsZXRDaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi4vV2FsbGV0L1dhbGxldENoYW5nZVBhc3N3b3JkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPFdhbGxldENoYW5nZVBhc3N3b3JkIC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYWNrdXBSZXN0b3JlfSBmcm9tIFwiLi4vV2FsbGV0L0JhY2t1cFwiO1xyXG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi4vV2FsbGV0L0ltcG9ydEtleXNcIjtcclxuaW1wb3J0IHtDcmVhdGVXYWxsZXRGcm9tQnJhaW5rZXl9IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0Q3JlYXRlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgUmVzdG9yZUZhdm9yaXRlcyBmcm9tIFwiLi9SZXN0b3JlRmF2b3JpdGVzXCI7XHJcbmltcG9ydCB7QnV0dG9uLCBTZWxlY3R9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogMCxcclxuICAgICAgICAgICAgdHlwZXM6IFtcImJhY2t1cFwiLCBcImtleVwiLCBcImxlZ2FjeVwiLCBcImJyYWlua2V5XCIsIFwiZmF2b3JpdGVzXCJdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0V2FsbGV0TW9kZSgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IFwicGFzc3dvcmRMb2dpblwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hhbmdlVHlwZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogdGhpcy5zdGF0ZS50eXBlcy5pbmRleE9mKHZhbHVlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3Bhc3N3b3JkTG9naW59ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkTG9naW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwic2V0dGluZ3Mud2FsbGV0X3JlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGFyay10ZXh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLndhbGxldF9yZXF1aXJlZF90ZXh0XCIgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0V2FsbGV0TW9kZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmVuYWJsZV93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7dHlwZXMsIHJlc3RvcmVUeXBlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0eXBlcy5tYXAodHlwZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17dHlwZX0gdmFsdWU9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoYHNldHRpbmdzLmJhY2t1cF8ke3R5cGV9YCl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGVzW3Jlc3RvcmVUeXBlXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrdXBSZXN0b3JlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYnJhaW5rZXlcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXhXaWR0aDogXCI0MHJlbVwiLCBwYWRkaW5nQm90dG9tOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MucmVzdG9yZV9icmFpbmtleV90ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlV2FsbGV0RnJvbUJyYWlua2V5IG5lc3RlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZhdm9yaXRlc1wiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzdG9yZUZhdm9yaXRlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8SW1wb3J0S2V5cyBwcml2YXRlS2V5PXtyZXN0b3JlVHlwZSA9PT0gMX0gLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2NoYW5nZVR5cGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZXNbcmVzdG9yZVR5cGVdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtCdXR0b24sIE5vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5cclxuY2xhc3MgUmVzdG9yZUZhdm9yaXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAganNvbjogbnVsbCxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChldnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogZmFsc2UsIGpzb246IG51bGx9KTtcclxuXHJcbiAgICAgICAgbGV0IGZpbGUgPSBldnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBldnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudHMgPSBldnQudGFyZ2V0LnJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoY29udGVudHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldCA9IGpzb25ba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQge3F1b3RlLCBiYXNlfSA9IG1hcmtldDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxdW90ZSB8fCAhYmFzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBhcnNlIGpzb24gZGF0YS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7anNvbn0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maW5pc2goKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHtqc29ufSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jbGVhclN0YXJyZWRNYXJrZXRzKCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXJrZXQgPSBqc29uW2tleV07XHJcbiAgICAgICAgICAgIGxldCB7cXVvdGUsIGJhc2V9ID0gbWFya2V0O1xyXG5cclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmFkZFN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydChcInNldHRpbmdzLmJhY2t1cF9mYXZvcml0ZXNfc3VjY2Vzc1wiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7c3RhdGV9ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qc29uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxNVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBsb2FkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzX2Vycm9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7c3RhdGUuanNvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wicHJpbWFyeVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5maW5pc2guYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc19maW5pc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0b3JlRmF2b3JpdGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgd2lsbFRyYW5zaXRpb25UbyBmcm9tIFwiLi4vLi4vcm91dGVyVHJhbnNpdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZXRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0TWVzc2FnZShrZXkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKGtleSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBudWxsfSk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuby1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG8tTWVkaXVtLCBhcmlhbCwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2V0dGluZ3MucmVzZXRfdGV4dF9kZXNjcmlwdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsTmFtZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwic2V0dGluZ3MuZ2VuZXJhbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhbE5hbWU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmdlbmVyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc05hbWU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmFjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF1Y2V0TmFtZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuZmF1Y2V0X2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiA2MCwgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMzBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jbGVhclNldHRpbmdzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRNZXNzYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MucmVzdG9yZV9kZWZhdWx0X3N1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbGxUcmFuc2l0aW9uVG8oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5yZXNldFwiKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNvbG9yLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjE4cHhcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmFja3VwQ3JlYXRlfSBmcm9tIFwiLi4vV2FsbGV0L0JhY2t1cFwiO1xyXG5pbXBvcnQgQmFja3VwQnJhaW5rZXkgZnJvbSBcIi4uL1dhbGxldC9CYWNrdXBCcmFpbmtleVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBCYWNrdXBGYXZvcml0ZXMgZnJvbSBcIi4vQmFja3VwRmF2b3JpdGVzXCI7XHJcbmltcG9ydCB7U2VsZWN0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogMCxcclxuICAgICAgICAgICAgdHlwZXM6IFtcImJhY2t1cFwiLCBcImJyYWlua2V5XCIsIFwiZmF2b3JpdGVzXCJdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hhbmdlVHlwZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogdGhpcy5zdGF0ZS50eXBlcy5pbmRleE9mKHZhbHVlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3R5cGVzLCByZXN0b3JlVHlwZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdHlwZXMubWFwKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3R5cGV9IHZhbHVlPXt0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKGBzZXR0aW5ncy5iYWNrdXBjcmVhdGVfJHt0eXBlfWApfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlc1tyZXN0b3JlVHlwZV0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhY2t1cFwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxCYWNrdXBDcmVhdGUgLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJicmFpbmtleVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxCYWNrdXBCcmFpbmtleSAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZhdm9yaXRlc1wiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxCYWNrdXBGYXZvcml0ZXMgLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2NoYW5nZVR5cGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZXNbcmVzdG9yZVR5cGVdfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjE2cHhcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmNsYXNzIEJhY2t1cEZhdm9yaXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBtYWtlQmFja3VwKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy50b0pTKCk7XHJcblxyXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEpXSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXMtYXNjaWlcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzYXZlQXMoYmxvYiwgXCJmYXZvcml0ZXMuanNvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmJhY2t1cF9mYXZvcml0ZXN0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm1ha2VCYWNrdXAuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc2J0blwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIEJhY2t1cEZhdm9yaXRlcyxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0c1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gICAgSW5wdXQsXG4gICAgQ2FyZCxcbiAgICBDb2wsXG4gICAgUm93LFxuICAgIEJ1dHRvbixcbiAgICBTd2l0Y2gsXG4gICAgVG9vbHRpcCxcbiAgICBJY29uLFxuICAgIFBvcG92ZXIsXG4gICAgQWxlcnRcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcbmltcG9ydCBGZWVBc3NldFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgQXBwbGljYXRpb25BcGkgZnJvbSBcIi4uLy4uL2FwaS9BcHBsaWNhdGlvbkFwaVwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcblxuZnVuY3Rpb24gbW92ZURlY2ltYWwobnVtLCBkZWNpbWFscykge1xuICAgIGlmICghbnVtKSByZXR1cm47XG4gICAgcmV0dXJuIG51bSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJ0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZnJvbV9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgdG9fbmFtZTogXCJcIixcbiAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnVsbCxcbiAgICAgICAgICAgIHRvX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBmcm9tX2JhcnRlcjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2hhc1Bvb2xCYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhbGFuY2VFcnJvcjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9fYmFydGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0b19hc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRvX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pLFxuICAgICAgICAgICAgICAgICAgICB0b19oYXNQb29sQmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFsYW5jZUVycm9yOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhbW91bnRfY291bnRlcjogW10sXG4gICAgICAgICAgICBhbW91bnRfaW5kZXg6IDAsXG4gICAgICAgICAgICBmcm9tX2Vycm9yOiBudWxsLFxuICAgICAgICAgICAgdG9fZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBtZW1vOiB7XG4gICAgICAgICAgICAgICAgZnJvbV9iYXJ0ZXI6IFt7bWVzc2FnZTogXCJcIiwgc2hvd246IGZhbHNlfV0sXG4gICAgICAgICAgICAgICAgdG9fYmFydGVyOiBbe21lc3NhZ2U6IFwiXCIsIHNob3duOiBmYWxzZX1dLFxuICAgICAgICAgICAgICAgIGVzY3JvdzogW3ttZXNzYWdlOiBcIlwiLCBzaG93bjogZmFsc2V9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3Bvc2FsX2ZlZToge1xuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0VzY3JvdzogZmFsc2UsXG4gICAgICAgICAgICBlc2Nyb3dfYWNjb3VudF9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgZXNjcm93X2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBzZW5kX3RvX2VzY3JvdzogZmFsc2UsXG4gICAgICAgICAgICBlc2Nyb3dfcGF5bWVudDogMCxcbiAgICAgICAgICAgIGVzY3Jvd19wYXltZW50X2NoYW5nZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXNjcm93RmVlQXNzZXRJZDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgYmFsYW5jZVdhcm5pbmc6IHtwZWVyMTogW10sIHBlZXIyOiBbXX1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25UcnhJbmNsdWRlZCA9IHRoaXMub25UcnhJbmNsdWRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQ7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5mcm9tX25hbWUpIHRoaXMuc2V0U3RhdGUoe2Zyb21fbmFtZTogY3VycmVudEFjY291bnR9KTtcbiAgICB9XG5cbiAgICBmcm9tQ2hhbmdlZChmcm9tX25hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9uYW1lfSk7XG4gICAgfVxuXG4gICAgZXNjcm93QWNjb3VudENoYW5nZWQoZXNjcm93X2FjY291bnRfbmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlc2Nyb3dfYWNjb3VudF9uYW1lfSk7XG4gICAgfVxuXG4gICAgb25Gcm9tQWNjb3VudENoYW5nZWQoZnJvbV9hY2NvdW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgZnJvbV9iYXJ0ZXI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2hhc1Bvb2xCYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhbGFuY2VFcnJvcjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXNjcm93QWNjb3VudENoYW5nZWQoZXNjcm93X2FjY291bnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlc2Nyb3dfYWNjb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b0NoYW5nZWQodG9fbmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lfSk7XG4gICAgfVxuXG4gICAgb25Ub0FjY291bnRDaGFuZ2VkKHRvX2FjY291bnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgdG9fYmFydGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b19hbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0b19hc3NldDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fZmVlQXNzZXQ6IG5ldyBBc3NldCh7YW1vdW50OiAwLCBhc3NldF9pZDogXCIxLjMuMFwifSksXG4gICAgICAgICAgICAgICAgICAgIHRvX2hhc1Bvb2xCYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0b19iYWxhbmNlRXJyb3I6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZyb21BbW91bnRDaGFuZ2VkKGluZGV4LCBlKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gZS5hc3NldDtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZS5hbW91bnQ7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJvbV9iYXJ0ZXIgPSBbLi4udGhpcy5zdGF0ZS5mcm9tX2JhcnRlcl07XG5cbiAgICAgICAgZnJvbV9iYXJ0ZXJbaW5kZXhdID0ge1xuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBmcm9tX2Ftb3VudDogYW1vdW50LFxuICAgICAgICAgICAgZnJvbV9hc3NldDogYXNzZXQsXG4gICAgICAgICAgICBmcm9tX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGZyb21fYmFsYW5jZUVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGZyb21fZmVlQXNzZXQ6IGZyb21fYmFydGVyW2luZGV4XS5mcm9tX2ZlZUFzc2V0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tX2JhcnRlcjogZnJvbV9iYXJ0ZXIsXG4gICAgICAgICAgICAgICAgZnJvbV9lcnJvcjogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYmFydGVyW2luZGV4XS5mcm9tX2ZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYmFydGVyW2luZGV4XS5mcm9tX2ZlZUFzc2V0LmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhcnRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0Ftb3VudHNUb3RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVG9BbW91bnRDaGFuZ2VkKGluZGV4LCBlKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gZS5hc3NldDtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZS5hbW91bnQ7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9fYmFydGVyID0gWy4uLnRoaXMuc3RhdGUudG9fYmFydGVyXTtcblxuICAgICAgICB0b19iYXJ0ZXJbaW5kZXhdID0ge1xuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICB0b19hbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIHRvX2Fzc2V0OiBhc3NldCxcbiAgICAgICAgICAgIHRvX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRvX2ZlZUFzc2V0OiB0b19iYXJ0ZXJbaW5kZXhdLnRvX2ZlZUFzc2V0LFxuICAgICAgICAgICAgdG9fYmFsYW5jZUVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9fYmFydGVyOiB0b19iYXJ0ZXIsXG4gICAgICAgICAgICAgICAgdG9fZXJyb3I6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICB0b19iYXJ0ZXJbaW5kZXhdLnRvX2ZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFydGVyW2luZGV4XS50b19mZWVBc3NldC5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFydGVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQW1vdW50c1RvdGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2NoZWNrQmFsYW5jZShcbiAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGFzc2V0LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgZmVlX2Fzc2V0X2lkLFxuICAgICAgICBiYXJ0ZXJcbiAgICApIHtcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhYWNjb3VudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBiYWxhbmNlSUQgPSBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGFzc2V0LmdldChcImlkXCIpXSk7XG4gICAgICAgIGNvbnN0IGZlZUJhbGFuY2VJRCA9IGFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgZmVlQW1vdW50LmFzc2V0X2lkXSk7XG4gICAgICAgIGlmICghYXNzZXQgfHwgIWFjY291bnQpIHJldHVybjtcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpXG4gICAgICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgICAgIGJhcnRlcltpbmRleF0uZnJvbV9iYWxhbmNlRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtmcm9tX2JhcnRlcjogYmFydGVyfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhcnRlcltpbmRleF0udG9fYmFsYW5jZUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlSUQpO1xuICAgICAgICBsZXQgZmVlQmFsYW5jZU9iamVjdCA9IGZlZUJhbGFuY2VJRFxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmICghZmVlQmFsYW5jZU9iamVjdCB8fCBmZWVCYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYmFsYW5jZU9iamVjdCB8fCAhZmVlQW1vdW50KSByZXR1cm47XG4gICAgICAgIGlmICghYW1vdW50KVxuICAgICAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgICAgICBiYXJ0ZXJbaW5kZXhdLmZyb21fYmFsYW5jZUVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2Zyb21fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFydGVyW2luZGV4XS50b19iYWxhbmNlRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICAgICAgYmFsYW5jZU9iamVjdFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICBiYXJ0ZXJbaW5kZXhdLmZyb21fYmFsYW5jZUVycm9yID0gIWhhc0JhbGFuY2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFydGVyW2luZGV4XS50b19iYWxhbmNlRXJyb3IgPSAhaGFzQmFsYW5jZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHt0b19iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZnJvbV9lcnJvciwgdG9fYWNjb3VudCwgdG9fZXJyb3J9ID0gc3RhdGU7XG5cbiAgICAgICAgbGV0IGdldEFzc2V0VHlwZXMgPSAoYWNjb3VudCwgZXJyKSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcbiAgICAgICAgICAgIGlmICghKGFjY291bnQgJiYgYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSAmJiAhZXJyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7YXNzZXRfdHlwZXMsIGZlZV9hc3NldF90eXBlc307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICAgICAgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50X2JhbGFuY2VzW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0ICYmIGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzLCBmZWVfYXNzZXRfdHlwZXN9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBmcm9tID0gZ2V0QXNzZXRUeXBlcyhmcm9tX2FjY291bnQsIGZyb21fZXJyb3IpO1xuICAgICAgICBsZXQgdG8gPSBnZXRBc3NldFR5cGVzKHRvX2FjY291bnQsIHRvX2Vycm9yKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbV9hc3NldF90eXBlczogZnJvbS5hc3NldF90eXBlcyB8fCBbXSxcbiAgICAgICAgICAgIHRvX2Fzc2V0X3R5cGVzOiB0by5hc3NldF90eXBlcyB8fCBbXSxcbiAgICAgICAgICAgIGZyb21fZmVlX2Fzc2V0X3R5cGVzOiBmcm9tLmZlZV9hc3NldF90eXBlcyB8fCBbXSxcbiAgICAgICAgICAgIHRvX2ZlZV9hc3NldF90eXBlczogdG8uZmVlX2Fzc2V0X3R5cGVzIHx8IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRnJvbUFtb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2JhcnRlci5wdXNoKHtcbiAgICAgICAgICAgIGZyb21fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgZnJvbV9hc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgIGZyb21fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICBmcm9tX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2JhcnRlcjogdGhpcy5zdGF0ZS5mcm9tX2JhcnRlcn0pO1xuICAgIH1cblxuICAgIGFkZFRvQW1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRlLnRvX2JhcnRlci5wdXNoKHtcbiAgICAgICAgICAgIHRvX2Ftb3VudDogXCJcIixcbiAgICAgICAgICAgIHRvX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgdG9fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICB0b19mZWVBc3NldDogbmV3IEFzc2V0KHthbW91bnQ6IDAsIGFzc2V0X2lkOiBcIjEuMy4wXCJ9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiB0aGlzLnN0YXRlLnRvX2JhcnRlcn0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2Vycm9yOiBudWxsLCB0b19lcnJvcjogbnVsbH0pO1xuICAgICAgICBsZXQgc2VuZEFtb3VudDtcbiAgICAgICAgbGV0IHRyYW5zZmVyX2xpc3QgPSBbXTtcblxuICAgICAgICBsZXQgcHJvcG9zZXIgPSBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudDtcblxuICAgICAgICBsZXQgbGVmdF9hY2NvdW50ID0gdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQ7XG4gICAgICAgIGxldCBlc2Nyb3dNZW1vID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcImVzY3Jvd1wiXVswXSAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZXNjcm93XCJdWzBdLm1lc3NhZ2U7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0VzY3JvdyAmJiB0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93KSB7XG4gICAgICAgICAgICBsZWZ0X2FjY291bnQgPSB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0VzY3Jvdykge1xuICAgICAgICAgICAgbGV0IGVzY3Jvd19wYXltZW50ID0gdGhpcy5zdGF0ZS5lc2Nyb3dfcGF5bWVudF9jaGFuZ2VkXG4gICAgICAgICAgICAgICAgPyBuZXcgQXNzZXQoe3JlYWw6IHRoaXMuc3RhdGUuZXNjcm93X3BheW1lbnR9KS5nZXRBbW91bnQoKVxuICAgICAgICAgICAgICAgIDogZmVlKHRydWUpO1xuICAgICAgICAgICAgaWYgKGVzY3Jvd19wYXltZW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZXNjcm93X3BheW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBcIjEuMy4wXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lbW86IGVzY3Jvd01lbW8gPyBuZXcgQnVmZmVyKGVzY3Jvd01lbW8sIFwidXRmLThcIikgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmZWVBc3NldDogdGhpcy5zdGF0ZS5lc2Nyb3dGZWVBc3NldElkLFxuICAgICAgICAgICAgICAgICAgICBwcm9wb3NlX2FjY291bnQ6IHByb3Bvc2VyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLmZyb21fYmFydGVyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3NldCA9IGl0ZW0uZnJvbV9hc3NldDtcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBpdGVtLmZyb21fYW1vdW50O1xuICAgICAgICAgICAgc2VuZEFtb3VudCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgcmVhbDogYW1vdW50LFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IGFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tQmFydGVyTWVtbyA9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiYgdGhpcy5zdGF0ZS5zZW5kX3RvX2VzY3Jvdykge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogc2VuZEFtb3VudC5nZXRBbW91bnQoKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBtZW1vOiBlc2Nyb3dNZW1vID8gbmV3IEJ1ZmZlcihlc2Nyb3dNZW1vLCBcInV0Zi04XCIpIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZmVlQXNzZXQ6IGl0ZW0uZnJvbV9mZWVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmZyb21fZmVlQXNzZXQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyYW5zZmVyX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBsZWZ0X2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdGhpcy5zdGF0ZS50b19hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogc2VuZEFtb3VudC5nZXRBbW91bnQoKSxcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgbWVtbzogZnJvbUJhcnRlck1lbW9cbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgQnVmZmVyKGZyb21CYXJ0ZXJNZW1vLCBcInV0Zi04XCIpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBmZWVBc3NldDogaXRlbS5mcm9tX2ZlZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgID8gaXRlbS5mcm9tX2ZlZUFzc2V0LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudDogcHJvcG9zZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXNjcm93ICYmICF0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93KSB7XG4gICAgICAgICAgICB0cmFuc2Zlcl9saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5zdGF0ZS5lc2Nyb3dfYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0aGlzLnN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgICAgICAgICAgYXNzZXQ6IFwiMS4zLjBcIixcbiAgICAgICAgICAgICAgICBtZW1vOiBudWxsLFxuICAgICAgICAgICAgICAgIGZlZUFzc2V0OiB0aGlzLnN0YXRlLmVzY3Jvd0ZlZUFzc2V0SWQsXG4gICAgICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50OiBwcm9wb3NlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLnRvX2JhcnRlci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBpdGVtLnRvX2Fzc2V0O1xuICAgICAgICAgICAgbGV0IGFtb3VudCA9IGl0ZW0udG9fYW1vdW50O1xuICAgICAgICAgICAgbGV0IHRvQmFydGVyTWVtbyA9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1widG9fYmFydGVyXCJdW2luZGV4XSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcInRvX2JhcnRlclwiXVtpbmRleF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHNlbmRBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIHJlYWw6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJhbnNmZXJfbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IHRoaXMuc3RhdGUudG9fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0aGlzLnN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHNlbmRBbW91bnQuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIG1lbW86IHRvQmFydGVyTWVtbyA/IG5ldyBCdWZmZXIodG9CYXJ0ZXJNZW1vLCBcInV0Zi04XCIpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBmZWVBc3NldDogaXRlbS50b19mZWVBc3NldFxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0udG9fZmVlQXNzZXQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBcIjEuMy4wXCIsXG4gICAgICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50OiBwcm9wb3NlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFwcGxpY2F0aW9uQXBpLnRyYW5zZmVyX2xpc3QoXG4gICAgICAgICAgICB0cmFuc2Zlcl9saXN0LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9wb3NhbF9mZWUuYXNzZXRfaWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblRyeEluY2x1ZGVkKGNvbmZpcm1fc3RvcmVfc3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5pbmNsdWRlZCAmJlxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5icm9hZGNhc3RlZF90cmFuc2FjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpcm1fc3RvcmVfc3RhdGUuY2xvc2VkKSB7XG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTWVtb0NoYW5nZWQgPSAodHlwZSwgaW5kZXgpID0+IGUgPT4ge1xuICAgICAgICBjb25zdCBtZW1vcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUubWVtbyk7XG4gICAgICAgIG1lbW9zW3R5cGVdW2luZGV4XSA9IHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZSwgc2hvd246IHRydWV9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBtZW1vc30pO1xuICAgIH07XG5cbiAgICByZW5kZXJNZW1vRmllbGQodHlwZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3Qge21lbW99ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgbWVtb1ZhbHVlID1cbiAgICAgICAgICAgIG1lbW9bdHlwZV1baW5kZXhdICYmIG1lbW9bdHlwZV1baW5kZXhdLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA/IG1lbW9bdHlwZV1baW5kZXhdLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5tZW1vXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbW9WYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NZW1vQ2hhbmdlZCh0eXBlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZU1lbW9PcGVuID0gKHR5cGUsIGluZGV4KSA9PiBlID0+IHtcbiAgICAgICAgY29uc3QgbWVtb3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm1lbW8pO1xuICAgICAgICBtZW1vc1t0eXBlXVtpbmRleF0gPSB7bWVzc2FnZTogXCJcIiwgc2hvd246IHRydWV9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBtZW1vc30pO1xuICAgIH07XG5cbiAgICBnZXRCYWxhbmNlKGFjY291bnQsIGFzc2V0VHlwZSkge1xuICAgICAgICByZXR1cm4gQ2hhaW5TdG9yZS5nZXRBY2NvdW50QmFsYW5jZShhY2NvdW50LCBhc3NldFR5cGUpO1xuICAgIH1cblxuICAgIGNoZWNrQW1vdW50c1RvdGFsKCkge1xuICAgICAgICBjb25zdCB7ZnJvbV9iYXJ0ZXIsIHRvX2JhcnRlciwgZnJvbV9hY2NvdW50LCB0b19hY2NvdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBwZWVyMUFtb3VudHMgPSB7fTtcbiAgICAgICAgbGV0IHBlZXIyQW1vdW50cyA9IHt9O1xuXG4gICAgICAgIC8vIGZvciBwZWVyMVxuICAgICAgICBmcm9tX2JhcnRlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmZyb21fYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBlZXIxQW1vdW50cy5oYXNPd25Qcm9wZXJ0eShpdGVtLmZyb21fYXNzZXRfaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZXIxQW1vdW50c1tpdGVtLmZyb21fYXNzZXRfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwZWVyMUFtb3VudHNbaXRlbS5mcm9tX2Fzc2V0X2lkXS5hbW91bnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaXRlbS5mcm9tX2Ftb3VudCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IGl0ZW0uZnJvbV9hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGl0ZW0uZnJvbV9hc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZWVyMUFtb3VudHNbaXRlbS5mcm9tX2Fzc2V0X2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGl0ZW0uZnJvbV9hbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBpdGVtLmZyb21fYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBpdGVtLmZyb21fYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcGVlcjFBbW91bnRzRm9ybWF0ZWQgPSBtYXAocGVlcjFBbW91bnRzLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9mQ3VycmVudEFzc2V0ID0gdGhpcy5nZXRCYWxhbmNlKGZyb21fYWNjb3VudCwga2V5KTtcbiAgICAgICAgICAgIGxldCBkZWNpbWFscyA9IE1hdGgubWF4KDAsIGl0ZW0ucHJlY2lzaW9uKTtcbiAgICAgICAgICAgIGxldCBmb3JtYXRlZEJhbGFuY2UgPSBiYWxhbmNlT2ZDdXJyZW50QXNzZXRcbiAgICAgICAgICAgICAgICA/IG1vdmVEZWNpbWFsKGJhbGFuY2VPZkN1cnJlbnRBc3NldCwgZGVjaW1hbHMpXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgaXRlbS5hc3NldElkID0ga2V5O1xuICAgICAgICAgICAgaWYgKGl0ZW0uYW1vdW50ID4gZm9ybWF0ZWRCYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgaXRlbS53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmJhbGFuY2UgPSBmb3JtYXRlZEJhbGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZm9yIHBlZXIyXG4gICAgICAgIHRvX2JhcnRlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnRvX2Ftb3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwZWVyMkFtb3VudHMuaGFzT3duUHJvcGVydHkoaXRlbS50b19hc3NldF9pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcjJBbW91bnRzW2l0ZW0udG9fYXNzZXRfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwZWVyMkFtb3VudHNbaXRlbS50b19hc3NldF9pZF0uYW1vdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0udG9fYW1vdW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogaXRlbS50b19hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGl0ZW0udG9fYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcjJBbW91bnRzW2l0ZW0udG9fYXNzZXRfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBOdW1iZXIoaXRlbS50b19hbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBpdGVtLnRvX2Fzc2V0LmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogaXRlbS50b19hc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwZWVyMkFtb3VudHNGb3JtYXRlZCA9IG1hcChwZWVyMkFtb3VudHMsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2ZDdXJyZW50QXNzZXQgPSB0aGlzLmdldEJhbGFuY2UodG9fYWNjb3VudCwga2V5KTtcbiAgICAgICAgICAgIGxldCBkZWNpbWFscyA9IE1hdGgubWF4KDAsIGl0ZW0ucHJlY2lzaW9uKTtcbiAgICAgICAgICAgIGxldCBmb3JtYXRlZEJhbGFuY2UgPSBiYWxhbmNlT2ZDdXJyZW50QXNzZXRcbiAgICAgICAgICAgICAgICA/IG1vdmVEZWNpbWFsKGJhbGFuY2VPZkN1cnJlbnRBc3NldCwgZGVjaW1hbHMpXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgaXRlbS5hc3NldElkID0ga2V5O1xuICAgICAgICAgICAgaWYgKGl0ZW0uYW1vdW50ID4gZm9ybWF0ZWRCYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgaXRlbS53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmJhbGFuY2UgPSBmb3JtYXRlZEJhbGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiYWxhbmNlV2FybmluZzoge1xuICAgICAgICAgICAgICAgIHBlZXIxOiBwZWVyMUFtb3VudHNGb3JtYXRlZCxcbiAgICAgICAgICAgICAgICBwZWVyMjogcGVlcjJBbW91bnRzRm9ybWF0ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyQmFsYW5jZVdhcm5pbmdzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiYWxhbmNlV2FybmluZzoge3BlZXIxLCBwZWVyMn1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBpc1BlZXIxV2FybmluZyA9IHBlZXIxLnNvbWUoaXRlbSA9PiAhIWl0ZW0ud2FybmluZyk7XG4gICAgICAgIGxldCBpc1BlZXIyV2FybmluZyA9IHBlZXIyLnNvbWUoaXRlbSA9PiAhIWl0ZW0ud2FybmluZyk7XG5cbiAgICAgICAgbGV0IHBlZXIxVGV4dCA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9sZWZ0XCIpO1xuICAgICAgICBsZXQgcGVlcjJUZXh0ID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmJhcnRlci5wZWVyX3JpZ2h0XCIpO1xuICAgICAgICBsZXQgcGVlcjFDb21wb25lbnQgPSBpc1BlZXIxV2FybmluZyA/IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXhXaWR0aDogXCIyNXJlbVwifX0+XG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ190b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXI6IHBlZXIxVGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7cGVlcjEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS53YXJuaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uYXNzZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ19saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3N5bWJvbDogaXRlbS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9iYWxhbmNlOiBpdGVtLmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9hbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcbiAgICAgICAgbGV0IHBlZXIyQ29tcG9uZW50ID0gaXNQZWVyMldhcm5pbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6IFwiMjVyZW1cIn19PlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdfdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZWVyOiBwZWVyMlRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3BlZXIyLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ud2FybmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5hc3NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ19saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfc3ltYm9sOiBpdGVtLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9iYWxhbmNlOiBpdGVtLmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJ0ZXItYmFsYW5jZS13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAge2lzUGVlcjFXYXJuaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3BlZXIxQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuYmFsYW5jZV93YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiBcImhlbHBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXIxVGV4dCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc1BlZXIyV2FybmluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwZWVyMkNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogXCJoZWxwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWVyMlRleHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWRQZWVyMUNyZWF0ZVByb3Bvc2FsKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb3Bvc2FsX2ZlZTogYXNzZXR9KTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWRQZWVyMUluUHJvcG9zYWwoYXNzZXQpIHtcbiAgICAgICAgbGV0IF9iYXJ0ZXIgPSB0aGlzLnN0YXRlLmZyb21fYmFydGVyLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0udG9fZmVlQXNzZXQgPSBhc3NldDtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IF9iYXJ0ZXJ9KTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWRQZWVyMkluUHJvcG9zYWwoYXNzZXQpIHtcbiAgICAgICAgbGV0IF9iYXJ0ZXIgPSB0aGlzLnN0YXRlLnRvX2JhcnRlci5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnRvX2ZlZUFzc2V0ID0gYXNzZXQ7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JhcnRlcjogX2JhcnRlcn0pO1xuICAgIH1cblxuICAgIG9uRXNjcm93RmVlQ2hhbmdlZChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlc2Nyb3dGZWVBc3NldElkOiBhc3NldC5hc3NldF9pZH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZyb21fbmFtZSxcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgZnJvbV9iYXJ0ZXIsXG4gICAgICAgICAgICB0b19iYXJ0ZXIsXG4gICAgICAgICAgICBhbW91bnRfaW5kZXgsXG4gICAgICAgICAgICBmcm9tX2Vycm9yLFxuICAgICAgICAgICAgdG9fZXJyb3JcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7ZnJvbV9hc3NldF90eXBlcywgdG9fYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG4gICAgICAgIGxldCBzbWFsbFNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDwgODUwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBsZXQgYXNzZXRGcm9tTGlzdCA9IFtdO1xuICAgICAgICBsZXQgYXNzZXRUb0xpc3QgPSBbXTtcbiAgICAgICAgbGV0IGFzc2V0RnJvbVN5bWJvbCA9IFwiXCI7XG4gICAgICAgIGxldCBhc3NldFRvU3ltYm9sID0gXCJcIjtcblxuICAgICAgICBjb25zdCBjaGVja0Ftb3VudFZhbGlkID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBmcm9tX2JhcnRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoaXRlbS5mcm9tX2Ftb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihhbW91bnRWYWx1ZSkgfHwgYW1vdW50VmFsdWUgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0b19iYXJ0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGl0ZW0udG9fYW1vdW50LCAvLC9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKGFtb3VudFZhbHVlKSB8fCBhbW91bnRWYWx1ZSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGV4cGxpY3RQcmljZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGNoZWNrQW1vdW50VmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21BbW91bnQgPSBwYXJzZUZsb2F0KGZyb21fYmFydGVyWzBdLmZyb21fYW1vdW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b0Ftb3VudCA9IHBhcnNlRmxvYXQodG9fYmFydGVyWzBdLnRvX2Ftb3VudCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZnJvbUFtb3VudCAvIHRvQW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmZWUgPSBmcm9tID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyb21fYmFydGVyKTtcbiAgICAgICAgICAgIGxldCBmZWUgPSAwO1xuICAgICAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgICAgICBmZWUgPSBmZWU7XG4gICAgICAgICAgICAgICAgZnJvbV9iYXJ0ZXIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlICs9IGl0ZW0uZnJvbV9mZWVBc3NldC5fcmVhbF9hbW91bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvX2JhcnRlci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWUgKz0gaXRlbS50b19mZWVBc3NldC5fcmVhbF9hbW91bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmZWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJhbGFuY2VFcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZnJvbV9iYXJ0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5mcm9tX2JhbGFuY2VFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRvX2JhcnRlcikge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmZyb21fYmFsYW5jZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaXNFc2Nyb3dOb3RWYWxpZCA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiYgIXRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQ7XG5cbiAgICAgICAgLy8gc2hvdWxkIHRoZSB1c2VyIGJlIG9ubHkgYWxsb3dlZCB0byByZXF1ZXN0IGZvciBleGlzdGluZyBmdW5kcz9cbiAgICAgICAgLy8gYmFsYW5jZUVycm9yKCkgfHxcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgIHRvX2Vycm9yIHx8XG4gICAgICAgICAgICAhY2hlY2tBbW91bnRWYWxpZCgpIHx8XG4gICAgICAgICAgICBmcm9tX2Vycm9yIHx8XG4gICAgICAgICAgICBpc0VzY3Jvd05vdFZhbGlkO1xuXG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSAoYWNjb3VudCwgYmFsYW5jZUVycm9yLCBhc3NldF90eXBlcywgYXNzZXQpID0+IHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50ICYmIGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9lcnJvciA9IGJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhc3NldF90eXBlc1swXSk7XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF90eXBlc1swXTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBmcm9tQW1vdW50U2VsZWN0b3IgPSBmcm9tX2JhcnRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNzZXRTeW1ib2wgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGl0ZW0uZnJvbV9hc3NldCkge1xuICAgICAgICAgICAgICAgIGFzc2V0U3ltYm9sID0gaXRlbS5mcm9tX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgICAgICBhc3NldEZyb21MaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIFtpdGVtLmZyb21fYW1vdW50IHx8IDAsIGFzc2V0U3ltYm9sXS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpc01lbW9TaG93biA9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdLnNob3duO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW1vdW50X2luZGV4Kyt9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc01lbW9TaG93biAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5hZGRfbWVtb19maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZW1vT3BlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb21fYmFydGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLW1lbW8tYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmJhcnRlcmluZ19hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmZyb21fYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRnJvbUFtb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbV9hc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGl0ZW0uZnJvbV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmZyb21fYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5mcm9tX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmZyb21fYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZyb21fYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtmcm9tX2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZyb21fYmFsYW5jZUVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0X3R5cGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZyb21fYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpc01lbW9TaG93biAmJiB0aGlzLnJlbmRlck1lbW9GaWVsZChcImZyb21fYmFydGVyXCIsIGluZGV4KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGFzc2V0RnJvbVN5bWJvbCA9IGFzc2V0U3ltYm9sO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdG9BbW91bnRTZWxlY3RvciA9IHRvX2JhcnRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNzZXRTeW1ib2wgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGl0ZW0udG9fYXNzZXQpIHtcbiAgICAgICAgICAgICAgICBhc3NldFN5bWJvbCA9IGl0ZW0udG9fYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgICAgIGFzc2V0VG9MaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIFtpdGVtLnRvX2Ftb3VudCB8fCAwLCBpdGVtLnRvX2Fzc2V0LmdldChcInN5bWJvbFwiKV0uam9pbihcIiBcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzTWVtb1Nob3duID1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9bXCJ0b19iYXJ0ZXJcIl1baW5kZXhdICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1widG9fYmFydGVyXCJdW2luZGV4XS5zaG93bjtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW1vdW50X2luZGV4Kyt9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc01lbW9TaG93biAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5hZGRfbWVtb19maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZW1vT3BlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvX2JhcnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1tZW1vLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5iYXJ0ZXJpbmdfYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS50b19hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ub0Ftb3VudENoYW5nZWQuYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b19hc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGl0ZW0udG9fYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS50b19hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLnRvX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLnRvX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b19hc3NldF90eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e3RvX2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50b19iYWxhbmNlRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvX2Fzc2V0X3R5cGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05hTj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7aXNNZW1vU2hvd24gJiYgdGhpcy5yZW5kZXJNZW1vRmllbGQoXCJ0b19iYXJ0ZXJcIiwgaW5kZXgpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgYXNzZXRUb1N5bWJvbCA9IGFzc2V0U3ltYm9sO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWNjb3VudF9mcm9tID0gKFxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9sZWZ0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5iYXJ0ZXIuYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhbGxvd1B1YktleT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dVcHBlcmNhc2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkZyb21BY2NvdW50Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBoaWRlSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zyb21fYWNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnJvbUFtb3VudFNlbGVjdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxMHB4XCIsIHBhZGRpbmdCb3R0b206IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkRnJvbUFtb3VudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mcm9tX2JhcnRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZyb21fYmFydGVyLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZnJvbV9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBBZGQgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBhY2NvdW50X3RvID0gKFxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9yaWdodFwifSAvPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dQdWJLZXk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VXBwZXJjYXNlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Ub0FjY291bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVJbWFnZVxuICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dG9fYWNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9BbW91bnRTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTBweFwiLCBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFRvQW1vdW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0b19hY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS50b19iYXJ0ZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b19iYXJ0ZXIubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50b19hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBBZGQgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBhY3Rpb25fZXJyb3Jfa2V5ID0gXCJzaG93Y2FzZXMuYmFydGVyLm5vdF9jb21wbGV0ZVwiO1xuICAgICAgICBpZiAoaXNTdWJtaXROb3RWYWxpZCkge1xuICAgICAgICAgICAgaWYgKCFmcm9tX2FjY291bnQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25fZXJyb3Jfa2V5ID1cbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmVycm9yX2ZpbGxfaW5fcGVlcl9sZWZ0X25hbWVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRvX2FjY291bnQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25fZXJyb3Jfa2V5ID1cbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmVycm9yX2ZpbGxfaW5fcGVlcl9yaWdodF9uYW1lXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uX2Vycm9yX2tleSA9IFwic2hvd2Nhc2VzLmJhcnRlci5lcnJvcl9zYW1lX25hbWVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrQW1vdW50VmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbl9lcnJvcl9rZXkgPVxuICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXJyb3JfZmlsbF9pbl92YWxpZF9hc3NldF9hbW91bnRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNFc2Nyb3dOb3RWYWxpZCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbl9lcnJvcl9rZXkgPSBcInNob3djYXNlcy5iYXJ0ZXIuZXJyb3JfZmlsbF9pbl9lc2Nyb3dfbmFtZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiZcbiAgICAgICAgICAgICAgICAoZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50LmdldChcImlkXCIpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uX2Vycm9yX2tleSA9IFwic2hvd2Nhc2VzLmJhcnRlci5lcnJvcl9zYW1lX25hbWVfZXNjcm93XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2ZmZXJzID0gKFxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgeyFpc1N1Ym1pdE5vdFZhbGlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuYmFydGVyLmFjdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlcl9sZWZ0OiBmcm9tX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzX2xlZnQ6IGFzc2V0RnJvbUxpc3Quam9pbihcIiwgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJfcmlnaHQ6IHRvX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzX3JpZ2h0OiBhc3NldFRvTGlzdC5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0VzY3JvdyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXNjcm93X2FzX3dpdG5lc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjcm93OiB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXNjcm93X2FzX2N1c3RvZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3c6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc1N1Ym1pdE5vdFZhbGlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShhY3Rpb25fZXJyb3Jfa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmFkZF9lc2Nyb3dfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RXNjcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZW1vdmVfZXNjcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFkZF9lc2Nyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVFc2Nyb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFc2Nyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5iYXJ0ZXIucmVtb3ZlX2VzY3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuYmFydGVyLmFkZF9lc2Nyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIHtmcm9tX2JhcnRlci5sZW5ndGggPT09IDUwMCAmJiB0b19iYXJ0ZXIubGVuZ3RoID09PSA1MDAgPyAoIC8vIGRlYWN0aXZhdGUgZm9yIG5vd1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmV4cGxpY3RfcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBsaWN0UHJpY2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2Fzc2V0RnJvbVN5bWJvbH0vJHthc3NldFRvU3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHRvdGFsRmVlRnJvbSA9IChcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJzaG93Y2FzZXMuYmFydGVyLnBlZXJfbGVmdFwifSAvPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5iYXJ0ZXIuZmVlX2R1ZV9ub3dfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3djYXNlcy5iYXJ0ZXIuZmVlX3doZW5fcHJvcG9zYWxfZXhlY3V0ZXNfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnRlci1mZWUtc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKm5lZWRlZCB0byByZW5kZXIgdG9vbHRpcCBwcm9wZXJseSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlZUFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaG93Y2FzZXMuYmFydGVyLmZlZV9kdWVfbm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuYmFydGVyLmZlZV93aGVuX3Byb3Bvc2FsX2V4ZWN1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkUGVlcjFJblByb3Bvc2FsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXI9e2Zyb21fYmFydGVyLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLnByb3Bvc2FsX2ZlZV90b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZlZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5wcm9wb3NhbF9mZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByb3Bvc2FsX2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWRQZWVyMUNyZWF0ZVByb3Bvc2FsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIudG90YWxfZmVlc190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJhcnRlci50b3RhbF9mZWVzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZSh0cnVlKSArIHRoaXMuc3RhdGUucHJvcG9zYWxfZmVlLl9yZWFsX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XCJCVFNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHRvdGFsRmVlVG8gPSAoXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJhcnRlci5wZWVyX3JpZ2h0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZlZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZFBlZXIySW5Qcm9wb3NhbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyPXt0b19iYXJ0ZXIubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBmZWVGb3JFc2Nyb3cgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXNjcm93KSB7XG4gICAgICAgICAgICBmZWVGb3JFc2Nyb3cgPSAoXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJzaG93Y2FzZXMuYmFydGVyLmVzY3Jvd19hY2NvdW50XCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZlZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKm5lZWRlZCB0byByZW5kZXIgdG9vbHRpcCBwcm9wZXJseSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuZXNjcm93X2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkVzY3Jvd0ZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllcj17ZnJvbV9iYXJ0ZXIubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW50cm8gPSAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIubmV3X2JhcnRlcl90b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIubmV3X2JhcnRlclwifSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBlc2Nyb3cgPSBudWxsO1xuICAgICAgICBsZXQgaXNFc2Nyb3dNZW1vU2hvd24gPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZXNjcm93XCJdWzBdICYmIHRoaXMuc3RhdGUubWVtb1tcImVzY3Jvd1wiXVswXS5zaG93bjtcbiAgICAgICAgbGV0IGVzY3Jvd19wYXltZW50ID0gdGhpcy5zdGF0ZS5lc2Nyb3dfcGF5bWVudF9jaGFuZ2VkXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGUuZXNjcm93X3BheW1lbnRcbiAgICAgICAgICAgIDogZmVlKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXNjcm93KSB7XG4gICAgICAgICAgICBlc2Nyb3cgPSAoXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5lc2Nyb3dfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93UHViS2V5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dVcHBlcmNhc2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RoaXMuc3RhdGUuZXNjcm93X2FjY291bnRfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVzY3Jvd0FjY291bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRXNjcm93QWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5zZW5kX3RvX2VzY3Jvd190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDZ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZVNlbmRUb0VzY3Jvdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2hvd2Nhc2VzLmJhcnRlci5zZW5kX3RvX2VzY3Jvd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0VzY3Jvd01lbW9TaG93biAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5hZGRfbWVtb19maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZW1vT3BlbihcImVzY3Jvd1wiLCAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtbWVtby1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmVzY3Jvd19wYXltZW50X3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmVzY3Jvd19wYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZXNjcm93X3BheW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fdXBkYXRlRXNjcm93RmVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxcmVtIDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcIjEuMy4wXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tcIjEuMy4wXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGFzUG9vbEJhbGFuY2UgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzRXNjcm93TWVtb1Nob3duICYmIHRoaXMucmVuZGVyTWVtb0ZpZWxkKFwiZXNjcm93XCIsIDApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI4MHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIHtzbWFsbFNjcmVlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e2ludHJvfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnRfZnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudF90b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e29mZmVyc308L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXNjcm93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc2Nyb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbEZlZUZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsRmVlVG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVGb3JFc2Nyb3cgIT0gbnVsbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlRm9yRXNjcm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e2ludHJvfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50X2Zyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudF90b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e29mZmVyc308L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXNjcm93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc2Nyb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxGZWVGcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsRmVlVG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlRm9yRXNjcm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnRlci1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLnByb3Bvc2VfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJwcm9wb3NlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByb3Bvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzU3VibWl0Tm90VmFsaWQgJiYgdGhpcy5yZW5kZXJCYWxhbmNlV2FybmluZ3MoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUVzY3Jvd0ZlZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXNjcm93X3BheW1lbnRfY2hhbmdlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVzY3Jvd19wYXltZW50OiBlLmFtb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZVNlbmRUb0VzY3JvdygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZW5kX3RvX2VzY3JvdzogIXRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRXNjcm93KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXNjcm93OiAhdGhpcy5zdGF0ZS5zaG93RXNjcm93fSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vX2FycmF5TWFwLmpzJztcbmltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBiYXNlTWFwIGZyb20gJy4vX2Jhc2VNYXAuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyBieSBydW5uaW5nIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhydVxuICogYGl0ZXJhdGVlYC4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXG4gKiBgXy5ldmVyeWAsIGBfLmZpbHRlcmAsIGBfLm1hcGAsIGBfLm1hcFZhbHVlc2AsIGBfLnJlamVjdGAsIGFuZCBgXy5zb21lYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhcnlgLCBgY2h1bmtgLCBgY3VycnlgLCBgY3VycnlSaWdodGAsIGBkcm9wYCwgYGRyb3BSaWdodGAsIGBldmVyeWAsXG4gKiBgZmlsbGAsIGBpbnZlcnRgLCBgcGFyc2VJbnRgLCBgcmFuZG9tYCwgYHJhbmdlYCwgYHJhbmdlUmlnaHRgLCBgcmVwZWF0YCxcbiAqIGBzYW1wbGVTaXplYCwgYHNsaWNlYCwgYHNvbWVgLCBgc29ydEJ5YCwgYHNwbGl0YCwgYHRha2VgLCBgdGFrZVJpZ2h0YCxcbiAqIGB0ZW1wbGF0ZWAsIGB0cmltYCwgYHRyaW1FbmRgLCBgdHJpbVN0YXJ0YCwgYW5kIGB3b3Jkc2BcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIHNxdWFyZShuKSB7XG4gKiAgIHJldHVybiBuICogbjtcbiAqIH1cbiAqXG4gKiBfLm1hcChbNCwgOF0sIHNxdWFyZSk7XG4gKiAvLyA9PiBbMTYsIDY0XVxuICpcbiAqIF8ubWFwKHsgJ2EnOiA0LCAnYic6IDggfSwgc3F1YXJlKTtcbiAqIC8vID0+IFsxNiwgNjRdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5tYXAodXNlcnMsICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAqL1xuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5TWFwIDogYmFzZU1hcDtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcDtcbiIsImltcG9ydCBiYXNlRWFjaCBmcm9tICcuL19iYXNlRWFjaC5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWFwYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXAoY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBpc0FycmF5TGlrZShjb2xsZWN0aW9uKSA/IEFycmF5KGNvbGxlY3Rpb24ubGVuZ3RoKSA6IFtdO1xuXG4gIGJhc2VFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBpdGVyYXRlZSh2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNYXA7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b24sIENhcmQsIFN0ZXBzLCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcblxuaW1wb3J0IEJvcnJvd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9Cb3Jyb3dNb2RhbFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IEFzc2V0U2VsZWN0IGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0U2VsZWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIEJvcnJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0JvcnJvd0Jhc2VNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRBc3NldDogbnVsbCxcbiAgICAgICAgICAgIHN0ZXA6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGVwcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJib3Jyb3dcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29uY2VwdFwiLFxuICAgICAgICAgICAgICAgIGhhc19sZWdlbmQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwXCIsXG4gICAgICAgICAgICAgICAgaGFzX2xlZ2VuZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYmVuZWZpdHNcIixcbiAgICAgICAgICAgICAgICBoYXNfbGVnZW5kOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJyaXNrc1wiLFxuICAgICAgICAgICAgICAgIGhhc19sZWdlbmQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zaG93Qm9ycm93TW9kYWwgPSB0aGlzLnNob3dCb3Jyb3dNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVCb3Jyb3dNb2RhbCA9IHRoaXMuaGlkZUJvcnJvd01vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd0JvcnJvd01vZGFsKCkge1xuICAgICAgICAvLyBuZWVkcyBhIGtub3duIGFjY291bnRcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSB7XG4gICAgICAgICAgICBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQm9ycm93QmFzZU1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0JvcnJvd0Jhc2VNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUJvcnJvd01vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQm9ycm93QmFzZU1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnN0YXRlLnN0ZXAgKyAxO1xuICAgICAgICBpZiAoc3RlcCA+PSB0aGlzLnN0ZXBzLmxlbmd0aCkgc3RlcCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwfSk7XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnN0YXRlLnN0ZXAgLSAxO1xuICAgICAgICBpZiAoc3RlcCA8IDApIHN0ZXAgPSAwO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwfSk7XG4gICAgfVxuXG4gICAgb25Bc3NldENoYW5nZShzZWxlY3RlZF9hc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkQXNzZXQ6IHNlbGVjdGVkX2Fzc2V0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpO1xuICAgICAgICBsZXQgYWNjb3VudExvYWRlZCA9ICEoXG4gICAgICAgICAgICAhY3VycmVudEFjY291bnQgfHwgdHlwZW9mIGN1cnJlbnRBY2NvdW50ID09PSBcInN0cmluZ1wiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnN0ZXA7XG4gICAgICAgIGNvbnN0IHRpbnlTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA4MDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWQgPSB0aGlzLnN0YXRlLnN0ZXAgPiAwO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQXNzZXRPYmplY3QgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEFzc2V0XG4gICAgICAgICk7XG4gICAgICAgIGxldCBzdGVwcyA9IHRoaXMuc3RlcHM7XG4gICAgICAgIGxldCBsZWdlbmQgPSBudWxsO1xuICAgICAgICBpZiAoY3VycmVudCA8IHN0ZXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RlcHNbY3VycmVudF0uaGFzX2xlZ2VuZCkge1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cuc3RlcHNfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBzW2N1cnJlbnRdLmtleSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIudGV4dF9sZWdlbmRcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQgPSBsZWdlbmQuc3BsaXQoXCJcXG5cIikubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsZWdlbmQgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5zdGVwc19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIudGV4dF9sZWdlbmRcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmluaXNoZWRDYXJkID0gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnQgPj0gc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaW5pc2hlZENhcmQgPSAoXG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNlbnRlci1jb250ZW50XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJvcnJvdy5jaG9vc2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1wiaDRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4xMTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjEyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMTIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4xMzI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4xMDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjEwNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMTAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Bc3NldENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5ib3Jyb3dfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEFzc2V0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudExvYWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4yLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0JvcnJvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5ib3Jyb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjcwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNzByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkQ2FyZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2hvd2Nhc2VzLmJvcnJvdy5ub3dfcmVhZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3djYXNlcy5ib3Jyb3cudGl0bGVfbG9uZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtzdGFydGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIXRpbnlTY3JlZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBzIHByb2dyZXNzRG90IGN1cnJlbnQ9e2N1cnJlbnQgLSAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXBzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBzLlN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5zdGVwc19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjdXJyZW50IDwgdGhpcy5zdGVwcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCArIFwiLiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LnN0ZXBzX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmluaXNoZWRDYXJkICE9IG51bGwgJiYgZmluaXNoZWRDYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmlzaGVkQ2FyZCA9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFzdGVwc1tjdXJyZW50XS5pY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzdGVwc1tjdXJyZW50XS5pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LnN0ZXBzX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRpdGxlX3dpdGhpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cuc3RlcHNfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBzW2N1cnJlbnRdLmtleSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhc3RlcHNbY3VycmVudF0uaGFzX2xlZ2VuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlZ2VuZC5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e1wiYm9ycm93X3N1YnBfXCIgKyBpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7Y29udGVudFsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHMtYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA8IHN0ZXBzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93Lm5hdmlnYXRlX3dpdGhfa2V5c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMubmV4dCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LmdldF9zdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA8IHN0ZXBzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cubmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBzdGVwcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJvcnJvdy5kb19pdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJldigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJvcnJvdy5wcmV2aW91c1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIHthY2NvdW50TG9hZGVkICYmXG4gICAgICAgICAgICAgICAgICAgICEhc2VsZWN0ZWRBc3NldE9iamVjdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9ycm93TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzQm9ycm93QmFzZU1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZUJvcnJvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRPYmo9e3NlbGVjdGVkQXNzZXRPYmplY3QuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2luZ0Fzc2V0T2JqPXtzZWxlY3RlZEFzc2V0T2JqZWN0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50T2JqPXtjdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mb2N1c0RpdigpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5mb2N1c0RpdigpO1xuICAgIH1cblxuICAgIGZvY3VzRGl2KCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGUuc3RlcDtcbiAgICAgICAgbGV0IHN0ZXBzID0gdGhpcy5zdGVwcztcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBzdGVwcy5sZW5ndGggJiYgISF0aGlzLnJlZnMubmV4dCkge1xuICAgICAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm5leHQpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PSBzdGVwcy5sZW5ndGggJiYgISF0aGlzLnJlZnMucHJldmlvdXMpIHtcbiAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5wcmV2aW91cykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIC8vIGFycm93IHVwL2Rvd24gYnV0dG9uIHNob3VsZCBzZWxlY3QgbmV4dC9wcmV2aW91cyBsaXN0IGVsZW1lbnRcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQm9ycm93ID0gZGVib3VuY2VSZW5kZXIoQm9ycm93LCA1MCwge2xlYWRpbmc6IGZhbHNlfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgQm9ycm93LFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBJbnB1dCxcclxuICAgIENhcmQsXHJcbiAgICBDb2wsXHJcbiAgICBSb3csXHJcbiAgICBCdXR0b24sXHJcbiAgICBJY29uLFxyXG4gICAgVGFibGUsXHJcbiAgICBUb29sdGlwXHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwgRmV0Y2hDaGFpbk9iamVjdHN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgSHRsY01vZGFsIGZyb20gXCIuLi9Nb2RhbC9IdGxjTW9kYWxcIjtcclxuaW1wb3J0IExpbmtUb0Fzc2V0QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9Bc3NldEJ5SWRcIjtcclxuaW1wb3J0IHtiaW5kVG9DdXJyZW50QWNjb3VudH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuXHJcbmNsYXNzIEh0bGMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaWx0ZXJTdHJpbmc6IFwiXCIsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaHRsY19saXN0OiBbXSxcclxuICAgICAgICAgICAgdGFibGVJc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhc0xvYWRlZE9uY2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50ICE9PSBucC5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmh0bGNfbGlzdCkgIT09XHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShucy5odGxjX2xpc3QpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb2RhbFZpc2libGUgIT09IG5zLmlzTW9kYWxWaXNpYmxlIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFibGVJc0xvYWRpbmcgIT09IG5zLnRhYmxlSXNMb2FkaW5nIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlsdGVyU3RyaW5nICE9PSBucy5maWx0ZXJTdHJpbmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF91cGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudDtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIEhUTEMgdGFibGUgZm9yXCIsIGFjY291bnRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzTG9hZGVkT25jZSA9IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWJsZUlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGh0bGNfZnJvbSA9XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaHRsY3NfZnJvbVwiKS50b0pTKCkgfHwgW107XHJcbiAgICAgICAgY29uc3QgaHRsY190byA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaHRsY3NfdG9cIikudG9KUygpIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBodGxjX2xpc3Q6IGh0bGNfZnJvbVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChodGxjX3RvKVxyXG4gICAgICAgICAgICAgICAgLm1hcChfaXRlbSA9PiBDaGFpblN0b3JlLmdldE9iamVjdChfaXRlbSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKF9pdGVtID0+ICghIV9pdGVtLnRvSlMgPyBfaXRlbS50b0pTKCkgOiB1bmRlZmluZWQpKSxcclxuICAgICAgICAgICAgdGFibGVJc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vIGFsd2F5cyB1cGRhdGUsIHJlbGllcyBvbiBwdXNoIGZyb20gYmFja2VuZCB3aGVuIGFjY291bnQgcGVybWlzc2lvbiBjaGFuZ2VcclxuICAgICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TW9kYWwgPSBvcGVyYXRpb24gPT4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChvcGVyYXRpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAvLyBjYWNoZSBmb3IgbW9kYWxcclxuICAgICAgICAgICAgYXdhaXQgRmV0Y2hDaGFpbk9iamVjdHMoXHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICBbb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIudG9dLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYXdhaXQgRmV0Y2hDaGFpbk9iamVjdHMoXHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICBbb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIuZnJvbV0sXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB7fVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhd2FpdCBGZXRjaENoYWluT2JqZWN0cyhDaGFpblN0b3JlLmdldEFzc2V0LCBbXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC50cmFuc2Zlci5hc3NldF9pZFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBvcGVyYXRpb25EYXRhOiBvcGVyYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25GaWx0ZXIgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyU3RyaW5nOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgICAgICBodGxjX2xpc3QsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIGZpbHRlclN0cmluZ1xyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQ7XHJcblxyXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGh0bGNfbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IGh0bGNfbGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0byA9IGl0ZW0udHJhbnNmZXIudG87XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gaXRlbS50cmFuc2Zlci5mcm9tO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS50cmFuc2Zlci5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGl0ZW0udHJhbnNmZXIuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uID0gaXRlbS5jb25kaXRpb25zLnRpbWVfbG9jay5leHBpcmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFtb3VudC5hc3NldF9pZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9BY2NvdW50TmFtZSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudE5hbWUodG8pIHx8IHRvO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbUFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TmFtZShmcm9tKSB8fCBmcm9tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdG8gPT0gY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIikgPyBcInBheWVlXCIgOiBcInBheWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbUFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiB0b0FjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChhbW91bnQuYW1vdW50LCBhc3NldCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkIGFzc2V0PXthbW91bnQuYXNzZXRfaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodGxjLnByZWltYWdlX2hhc2hfZXhwbGFuYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiKFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb25kaXRpb25zLmhhc2hfbG9jay5wcmVpbWFnZV9zaXplICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbmRpdGlvbnMuaGFzaF9sb2NrLnByZWltYWdlX2hhc2hbMF0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb25kaXRpb25zLmhhc2hfbG9jay5wcmVpbWFnZV9oYXNoWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBleHBpcmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhU291cmNlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgZmlsdGVyIGlzIGNoYWluZWQgdG8gbWFwLCBwb3NzaWJsZSBidWdzIHdpdGggaW5pdGlhbCByZW5kZXIgb2YgdGFibGVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50byAmJiBpdGVtLnRvLmluZGV4T2YoZmlsdGVyU3RyaW5nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPiBiLmlkID8gMSA6IGEuaWQgPCBiLmlkID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMuZnJvbVwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmcm9tXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZnJvbVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmZyb20gPiBiLmZyb20gPyAxIDogYS5mcm9tIDwgYi5mcm9tID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMudG9cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidG9cIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJ0b1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRvID4gYi50byA/IDEgOiBhLnRvIDwgYi50byA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmFtb3VudFwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW1pdDEgPSBhLnJhd0RhdGEub3BbMV0uYW1vdW50LmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW1pdDIgPSBiLnJhd0RhdGEub3BbMV0uYW1vdW50LmFtb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbWl0MSAtIGxpbWl0MjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmhhc2hcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaGFzaFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImhhc2hcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMuZXhwaXJlc1wiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJleHBpcmVzXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXhwaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmV4cGlyZXMgPiBiLmV4cGlyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5leHBpcmVzIDwgYi5leHBpcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LmxvY2FsaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh1dGlscy5tYWtlSVNPRGF0ZVN0cmluZyh0ZXh0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmFjdGlvbnNcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID09PSBcInBheWVyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJleHRlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlY29yZC5yYXdEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuZXh0ZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlZGVlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZWNvcmQucmF3RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnJlZGVlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXRhYmxlLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVEFCTEUgSEVBREVSICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdGFibGVfX2ZpbHRlci1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLndpdG5lc3Nlcy5maWx0ZXJfYnlfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjMwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuY3JlYXRlX2h0bGNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC10YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS50YWJsZUlzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNNb2RhbFZpc2libGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIdGxjTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbkRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSHRsYyA9IGJpbmRUb0N1cnJlbnRBY2NvdW50KEh0bGMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHRsYztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlIGZyb20gXCJzdG9yZXMvVHJhbnNhY3Rpb25Db25maXJtU3RvcmVcIjtcclxuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCB7aXNOYU59IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IHtjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tIFwiLi4vVXRpbGl0eS9Db3B5QnV0dG9uXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICAgIEZvcm0sXHJcbiAgICBNb2RhbCxcclxuICAgIEJ1dHRvbixcclxuICAgIFNlbGVjdCxcclxuICAgIElucHV0LFxyXG4gICAgRGF0ZVBpY2tlcixcclxuICAgIFRvb2x0aXAsXHJcbiAgICBSYWRpb1xyXG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBIdGxjQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9IdGxjQWN0aW9uc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9faHRsYy5zY3NzXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge2hhc0xvYWRlZH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xyXG5cclxuY29uc3QgZ2V0VW5pbml0aWFsaXplZEZlZUFtb3VudCA9ICgpID0+XHJcbiAgICBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pO1xyXG5cclxuY2xhc3MgUHJlaW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBwcmVpbWFnZV9oYXNoOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHByZWltYWdlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcHJlaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJlaW1hZ2VfY2lwaGVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuaGFzUmFuZG9tSGFzaCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGFnZTogMSxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkOiBudWxsLFxyXG4gICAgICAgICAgICBjaXBoZXJzOiBbXCJzaGEyNTZcIiwgXCJyaXBlbWQxNjBcIl1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoICYmICF0aGlzLmhhc1JhbmRvbUhhc2gpIHtcclxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlIGlzIGFsd2F5cyBhIGhhc2ggaWYgbm8gaGFzaCBnaXZlblxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tKHt0YXJnZXQ6IHt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcHJldlByb3BzLnByZWltYWdlX2hhc2ggIT09IHRoaXMucHJvcHMucHJlaW1hZ2VfaGFzaCAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzUmFuZG9tSGFzaCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMucHJlaW1hZ2VfaGFzaCAmJiAhdGhpcy5oYXNSYW5kb21IYXNoKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSBpcyBhbHdheXMgYSBoYXNoIGlmIG5vIGhhc2ggZ2l2ZW5cclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbSh7dGFyZ2V0OiB7fX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBsZXQgcmVkbyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YWdlICE9PSBlLnRhcmdldC52YWx1ZSAmJiBlLnRhcmdldC52YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlZG8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGFnZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gKHJlZG8gPyB0aGlzLmdlbmVyYXRlUmFuZG9tKCkgOiBudWxsKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaXplQ2hhbmdlZChlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbih7XHJcbiAgICAgICAgICAgIHByZWltYWdlX3NpemU6ICFlLnRhcmdldC52YWx1ZSA/IG51bGwgOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhhc2hDaGFuZ2VkKGUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKHtcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0Q2hhbmdlZChlKSB7XHJcbiAgICAgICAgbGV0IHtwcmVpbWFnZSwgcHJlaW1hZ2VfY2lwaGVyfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKCFwcmVpbWFnZV9jaXBoZXIpIHtcclxuICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyID0gXCJzaGEyNTZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHByZWltYWdlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzaGluZ0luUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXIgPSBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGFnZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyOiBwcmVpbWFnZV9jaXBoZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qge2hhc2h9ID0gSHRsY0FjdGlvbnMuY2FsY3VsYXRlSGFzaChwcmVpbWFnZSwgcHJlaW1hZ2VfY2lwaGVyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlciB0cmllcyB0byBtYXRjaCBoYXNoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXI6IHByZWltYWdlX2NpcGhlcixcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBwcmVpbWFnZS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkOiBoYXNoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2NpcGhlcjogcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6IGhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTogcHJlaW1hZ2UubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJhbmRvbShlID0ge3RhcmdldDoge319KSB7XHJcbiAgICAgICAgdGhpcy5oYXNSYW5kb21IYXNoID0gdHJ1ZTtcclxuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGtleVxyXG4gICAgICAgICAgICAuZ2V0X3JhbmRvbV9rZXkoKVxyXG4gICAgICAgICAgICAudG9XaWYoKVxyXG4gICAgICAgICAgICAuc3Vic3RyKDEwLCAzMCk7XHJcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlZChlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHlwZSA9PSBcImNyZWF0ZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI3cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2hvd2Nhc2VzLmh0bGMuZmlyc3Rfc3RhZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2hvd2Nhc2VzLmh0bGMuc2Vjb25kX3N0YWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNob3djYXNlcy5odGxjLmN1c3RvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciByZWRlZW1zLCBpbmRpY2F0ZSBpZiBpdCBtYXRjaGVzXHJcbiAgICAgICAgbGV0IGhhc2hNYXRjaCA9XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByZWltYWdlX2hhc2hfY2FsY3VsYXRlZCAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnByZWltYWdlX2hhc2hfY2FsY3VsYXRlZCA9PVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWltYWdlX2hhc2hcclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17bGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy5wcmVpbWFnZV9oYXNfYmVlbl9jcmVhdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPElucHV0Lkdyb3VwIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXQgcHJlaW1hZ2Utcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaG93Y2FzZXMuaHRsYy50b29sdGlwLmVudGVyX3ByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2hvd2Nhc2VzLmh0bGMudG9vbHRpcC5wcmVpbWFnZV9yYW5kb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaE1hdGNoID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGhhc2hNYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJlaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0YWdlID09IDIgPyBcIlwiIDogdGhpcy5wcm9wcy5wcmVpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5odGxjLmVudGVyX3NlY3JldF9wcmVpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuaHRsYy5wcmVpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5zdGFnZSA9PSAxIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFnZSA9PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wPXtcInZhbHVlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTkuNSVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZWltYWdlX2NpcGhlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNpcGhlcnMubWFwKGNpcGhlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2NpcGhlcn0gdmFsdWU9e2NpcGhlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpcGhlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMudG9vbHRpcC5uZXdfcmFuZG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZGVwbG95bWVudC11bml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmVydGljYWxBbGlnbjogXCJ0b3BcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUmFuZG9tLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVpbWFnZTogXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlaW1hZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGhhc2ggdHlwZTogXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlaW1hZ2VfY2lwaGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0Lkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5Hcm91cCBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0IHByZWltYWdlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnRvb2x0aXAucHJlaW1hZ2VfaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjc4JVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkhhc2hDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhZ2UgPT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMudG9vbHRpcC5wcmVpbWFnZV9zaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiNTNweFwiLCBtYXJnaW5SaWdodDogXCIwLjJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TaXplQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucHJlaW1hZ2Vfc2l6ZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YWdlID09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXNoOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBwcmVpbWFnZSBzaXplOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVpbWFnZV9zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0Lkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEh0bGNNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGlzTW9kYWxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGhpZGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBmcm9tQWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9wZXJhdGlvbjogUHJvcFR5cGVzLm9iamVjdCAvLyBvcHRpb25hbCwgb25seSB3aGVuIGVkaXRpbmdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uVHJ4SW5jbHVkZWQgPSB0aGlzLm9uVHJ4SW5jbHVkZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UgPSB0aGlzLl9jaGVja0JhbGFuY2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkuYWRkKFwic2Vjb25kc1wiLCAxMjApO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZyb21fbmFtZTogXCJcIixcclxuICAgICAgICAgICAgdG9fbmFtZTogXCJcIixcclxuICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBudWxsLFxyXG4gICAgICAgICAgICB0b19hY2NvdW50OiBudWxsLFxyXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiBudWxsLFxyXG4gICAgICAgICAgICBhc3NldDogbnVsbCxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGZlZUFtb3VudDogZ2V0VW5pbml0aWFsaXplZEZlZUFtb3VudCgpLFxyXG4gICAgICAgICAgICBtYXhBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBudW1fb2ZfcGVyaW9kczogXCJcIixcclxuICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWU6IG5vdyxcclxuICAgICAgICAgICAgaHRsY0lkOiBcIlwiLFxyXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmVpbWFnZTogbnVsbCxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyOiBudWxsLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoOiBudWxsLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBudWxsLFxyXG4gICAgICAgICAgICBjbGFpbV9wZXJpb2Q6IDg2NDAwLFxyXG4gICAgICAgICAgICBwZXJpb2Q6IFwib25lX2RheVwiLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogbW9tZW50KClcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJzZWNvbmRzXCIsIDE4MClcclxuICAgICAgICAgICAgICAgIC5hZGQoMSwgXCJkYXlcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIHByZWltYWdlLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9zaXplLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXIsXHJcbiAgICAgICAgICAgIGNsYWltX3BlcmlvZCxcclxuICAgICAgICAgICAgZmVlQW1vdW50XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBvcGVyYXRpb246IHt0eXBlOiBvcGVyYXRpb25UeXBlfVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAob3BlcmF0aW9uVHlwZSA9PT0gXCJjcmVhdGVcIikge1xyXG4gICAgICAgICAgICBIdGxjQWN0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50X2lkOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50X2lkOiB0b19hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShhbW91bnQsIGFzc2V0KSxcclxuICAgICAgICAgICAgICAgIGxvY2tfdGltZTogY2xhaW1fcGVyaW9kLFxyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplLFxyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaCxcclxuICAgICAgICAgICAgICAgIHByZWltYWdlX2NpcGhlcixcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldDogZmVlQW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogdmlzdWFsaXplIGVycm9yIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uVHlwZSA9PT0gXCJyZWRlZW1cIikge1xyXG4gICAgICAgICAgICBIdGxjQWN0aW9ucy5yZWRlZW0oe1xyXG4gICAgICAgICAgICAgICAgaHRsY19pZDogdGhpcy5wcm9wcy5vcGVyYXRpb24ucGF5bG9hZC5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRvX2FjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZTogcHJlaW1hZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiB2aXN1YWxpemUgZXJyb3Igc29tZXdoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb25UeXBlID09PSBcImV4dGVuZFwiKSB7XHJcbiAgICAgICAgICAgIEh0bGNBY3Rpb25zLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBodGxjX2lkOiB0aGlzLnByb3BzLm9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kc190b19hZGQ6IGNsYWltX3BlcmlvZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IHZpc3VhbGl6ZSBlcnJvciBzb21ld2hlcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuZnJvbUFjY291bnQgJiYgIWhhc0xvYWRlZChuZXh0UHJvcHMuZnJvbUFjY291bnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX3N5bmNPcGVyYXRpb24ob3BlcmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKG9wZXJhdGlvbiAmJiBvcGVyYXRpb24ucGF5bG9hZCAmJiBvcGVyYXRpb24udHlwZSAhPT0gXCJjcmVhdGVcIikge1xyXG4gICAgICAgICAgICBjb25zdCB0byA9IG9wZXJhdGlvbi5wYXlsb2FkLnRyYW5zZmVyLnRvO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tID0gb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIuZnJvbTtcclxuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBvcGVyYXRpb24ucGF5bG9hZC50cmFuc2Zlci5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIuYXNzZXRfaWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy50aW1lX2xvY2suZXhwaXJhdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCB0b0FjY291bnQgPSBDaGFpblN0b3JlLmdldEFjY291bnQodG8pO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tQWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChmcm9tKTtcclxuICAgICAgICAgICAgaWYgKHRvQWNjb3VudCAmJiBmcm9tQWNjb3VudCAmJiB0b0FjY291bnQuZ2V0ICYmIGZyb21BY2NvdW50LmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFtb3VudC5hc3NldF9pZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdG9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvX25hbWU6IHRvQWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogZnJvbUFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9uYW1lOiBmcm9tQWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1dGlscy5jb252ZXJ0X3NhdG9zaGlfdG9fdHlwZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYW1vdW50LmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lOiBleHBpcmF0aW9uLCAvLyBubyBzZWxlY3Rpb24gZm9yIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICBodGxjSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMuaGFzaF9sb2NrLnByZWltYWdlX2hhc2hbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2VfaGFzaFswXSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogbW9tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLm1ha2VJU09EYXRlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMudGltZV9sb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBodGxjSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMuaGFzaF9sb2NrLnByZWltYWdlX2hhc2hbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2VfaGFzaFswXSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogbW9tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLm1ha2VJU09EYXRlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMudGltZV9sb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBlbnN1cmUgaXQncyBhbHdheXMgaW4tc3luY1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGh0bGNJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9zeW5jT3BlcmF0aW9uKHRoaXMucHJvcHMub3BlcmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7b3BlcmF0aW9ufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZyb21BY2NvdW50ICE9PSBwcmV2UHJvcHMuZnJvbUFjY291bnQgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQgPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyByZWZlc2ggYmFsYW5jZXMgYW5kIGZlZVxyXG4gICAgICAgICAgICAvLyB3cml0ZSBwcm9wcyB0byBzdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5wcm9wcy5mcm9tQWNjb3VudCxcclxuICAgICAgICAgICAgICAgIGZyb21fbmFtZTogdGhpcy5wcm9wcy5mcm9tQWNjb3VudC5nZXQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJldlByb3BzLm9wZXJhdGlvbiAhPT0gdGhpcy5wcm9wcy5vcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fc3luY09wZXJhdGlvbihvcGVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tCYWxhbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGFtb3VudCwgZnJvbV9hY2NvdW50LCBhc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICghYXNzZXQgfHwgIWZyb21fYWNjb3VudCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldC5nZXQoXCJpZFwiKV0pO1xyXG4gICAgICAgIGNvbnN0IGZlZUJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZXNcIixcclxuICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhZnJvbV9hY2NvdW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IHRydWV9KTtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VJRCk7XHJcbiAgICAgICAgbGV0IGZlZUJhbGFuY2VPYmplY3QgPSBmZWVCYWxhbmNlSURcclxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBpZiAoIWZlZUJhbGFuY2VPYmplY3QgfHwgZmVlQmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZUFtb3VudDogZ2V0VW5pbml0aWFsaXplZEZlZUFtb3VudCgpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYmFsYW5jZU9iamVjdCB8fCAhZmVlQW1vdW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFhbW91bnQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IGZhbHNlfSk7XHJcbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgZmVlQW1vdW50LFxyXG4gICAgICAgICAgICBiYWxhbmNlT2JqZWN0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogIWhhc0JhbGFuY2V9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0VG90YWwoYXNzZXRfaWQsIGJhbGFuY2VfaWQpIHtcclxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlX2lkKTtcclxuICAgICAgICBsZXQgdHJhbnNmZXJBc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0X2lkKTtcclxuXHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRyYW5zZmVyQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHJhbnNmZXJBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGZlZUFtb3VudC5hc3NldF9pZCA9PT0gYmFsYW5jZS5hc3NldF9pZCkge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZS5taW51cyhmZWVBbW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7bWF4QW1vdW50OiB0cnVlLCBhbW91bnQ6IGJhbGFuY2UuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSl9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZnJvbV9lcnJvcn0gPSBzdGF0ZTtcclxuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBbXTtcclxuICAgICAgICBpZiAoIShmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBzdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG4gICAgICAgIGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudF9iYWxhbmNlc1trZXldKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzfTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvQWNjb3VudENoYW5nZWQgPSB0b19hY2NvdW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19hY2NvdW50LCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkFtb3VudENoYW5nZWQgPSAoe2Ftb3VudCwgYXNzZXR9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFhc3NldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhc3NldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4QW1vdW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0b0NoYW5nZWQgPSB0b19uYW1lID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lLCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkZlZUNoYW5nZWQoZmVlKSB7XHJcbiAgICAgICAgaWYgKCFmZWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IGZlZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UcnhJbmNsdWRlZChjb25maXJtX3N0b3JlX3N0YXRlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjb25maXJtX3N0b3JlX3N0YXRlLmluY2x1ZGVkICYmXHJcbiAgICAgICAgICAgIGNvbmZpcm1fc3RvcmVfc3RhdGUuYnJvYWRjYXN0ZWRfdHJhbnNhY3Rpb25cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUudW5saXN0ZW4odGhpcy5vblRyeEluY2x1ZGVkKTtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUucmVzZXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpcm1fc3RvcmVfc3RhdGUuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZXBpY2tlclJlZihlbCkge1xyXG4gICAgICAgIGlmIChlbCAmJiBlbC5waWNrZXIuaW5wdXQpIHtcclxuICAgICAgICAgICAgZWwucGlja2VyLmlucHV0LnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhwaXJhdGlvbkRhdGVDaGFuZ2VkID0gdXRjVmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh1dGNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7cGVyaW9kX3N0YXJ0X3RpbWV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgZXhwID0gdXRjVmFsdWUudmFsdWVPZigpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHBlcmlvZF9zdGFydF90aW1lLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgY29uc3QgY2xhaW1fcGVyaW9kID0gTWF0aC5mbG9vcigoZXhwIC0gc3RhcnQpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2xhaW1fcGVyaW9kLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGU6IHV0Y1ZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2xhaW1fcGVyaW9kOiAwLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGU6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvblByZWltYWdlQ2hhbmdlZCh7XHJcbiAgICAgICAgcHJlaW1hZ2UsXHJcbiAgICAgICAgcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgIHByZWltYWdlX2hhc2gsXHJcbiAgICAgICAgcHJlaW1hZ2Vfc2l6ZVxyXG4gICAgfSkge1xyXG4gICAgICAgIGxldCBzdGF0ZUNoYW5nZSA9IHt9O1xyXG4gICAgICAgIGlmIChwcmVpbWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlQ2hhbmdlLnByZWltYWdlID0gcHJlaW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVpbWFnZV9jaXBoZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdGF0ZUNoYW5nZS5wcmVpbWFnZV9jaXBoZXIgPSBwcmVpbWFnZV9jaXBoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVpbWFnZV9oYXNoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RhdGVDaGFuZ2UucHJlaW1hZ2VfaGFzaCA9IHByZWltYWdlX2hhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVpbWFnZV9zaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RhdGVDaGFuZ2UucHJlaW1hZ2Vfc2l6ZSA9IHByZWltYWdlX3NpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBlcmlvZCA9IGRheXMgPT4ge1xyXG4gICAgICAgIGxldCBlc3RpbWF0ZWRFeHBpcnkgPSBtb21lbnQoKS5hZGQoZGF5cywgXCJkYXlcIik7XHJcbiAgICAgICAgbGV0IHBlcmlvZCA9IFwib25lX2RheVwiO1xyXG4gICAgICAgIGNvbnN0IGNsYWltX3BlcmlvZCA9IGRheXMgKiA2MCAqIDYwICogMjQ7IC8vIGNvbnZlcnQgZGF5IHRvIHNlY29uZHNcclxuICAgICAgICBzd2l0Y2ggKGRheXMpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0gXCJvbmVfZGF5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0gXCJ0d29fZGF5c1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHBlcmlvZCA9IFwib25lX3dlZWtcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNsYWltX3BlcmlvZCxcclxuICAgICAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogZXN0aW1hdGVkRXhwaXJ5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXHJcbiAgICAgICAgICAgIHRvX2FjY291bnQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICAgICAgZmVlQW1vdW50LFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIGZyb21fbmFtZSxcclxuICAgICAgICAgICAgdG9fbmFtZSxcclxuICAgICAgICAgICAgYmFsYW5jZUVycm9yLFxyXG4gICAgICAgICAgICBwcmVpbWFnZSxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgICAgICBjbGFpbV9wZXJpb2QsXHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2gsXHJcbiAgICAgICAgICAgIHByZWltYWdlX3NpemUsXHJcbiAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZVxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBmcm9tX215X2FjY291bnQgPVxyXG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoZnJvbV9hY2NvdW50KSB8fFxyXG4gICAgICAgICAgICBmcm9tX25hbWUgPT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50O1xyXG4gICAgICAgIGxldCBmcm9tX2Vycm9yID0gZnJvbV9hY2NvdW50ICYmICFmcm9tX215X2FjY291bnQgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHtvcGVyYXRpb259ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXNFeHRlbmQgPSBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiZXh0ZW5kXCI7XHJcbiAgICAgICAgY29uc3QgaXNSZWRlZW0gPSBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwicmVkZWVtXCI7XHJcblxyXG4gICAgICAgIGxldCB7YXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSAmJiAhZnJvbV9lcnJvcikge1xyXG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcclxuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gYXNzZXQgPyBhc3NldC5nZXQoXCJpZFwiKSA6IGFzc2V0X3R5cGVzWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRUb3RhbC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vRnVuZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChhbW91bnQsIC8sL2csIFwiXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBpc0Ftb3VudFZhbGlkID0gYW1vdW50VmFsdWUgJiYgIWlzTmFOKGFtb3VudFZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XHJcbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcclxuICAgICAgICAgICAgIWFzc2V0IHx8XHJcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKSB8fFxyXG4gICAgICAgICAgICAhKChwcmVpbWFnZV9jaXBoZXIgJiYgcHJlaW1hZ2UpIHx8IHByZWltYWdlX2hhc2gpIHx8XHJcbiAgICAgICAgICAgICFjbGFpbV9wZXJpb2Q7XHJcbiAgICAgICAgbGV0IG1vZGFsVGl0bGUgPVxyXG4gICAgICAgICAgICBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMuY3JlYXRlX2h0bGNcIilcclxuICAgICAgICAgICAgICAgIDogaXNFeHRlbmRcclxuICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmV4dGVuZF9odGxjXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5yZWRlZW1faHRsY1wiKTtcclxuICAgICAgICBsZXQgc2VuZEJ1dHRvblRleHQgPVxyXG4gICAgICAgICAgICBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jcmVhdGVcIilcclxuICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudEhlYWRlciA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0LWhlYWRlci0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5leHBpcmF0aW9uX2RhdGVcIil9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXQtaGVhZGVyLS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwicGVyaW9kLXJvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWFjdGl2ZVwiOiB0aGlzLnN0YXRlLnBlcmlvZCA9PT0gXCJvbmVfZGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGVyaW9kKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuZXhwaXJhdGlvbl9wZXJpb2Qub25lX2RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwicGVyaW9kLXJvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWFjdGl2ZVwiOiB0aGlzLnN0YXRlLnBlcmlvZCA9PT0gXCJ0d29fZGF5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFBlcmlvZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLmV4cGlyYXRpb25fcGVyaW9kLnR3b19kYXlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJwZXJpb2Qtcm93XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtYWN0aXZlXCI6IHRoaXMuc3RhdGUucGVyaW9kID09PSBcIm9uZV93ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGVyaW9kKDcpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuZXhwaXJhdGlvbl9wZXJpb2Qub25lX3dlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXttb2RhbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy5pc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VuZEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiQ2FuY2VsXCIgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuY2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU2VuZGVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5odGxjLnNlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuaHRsYy5yZWNpcGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9DaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNFeHRlbmQgfHwgaXNSZWRlZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUmVkZWVtID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuaHRsYy5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X3R5cGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17YXNzZXRfdHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFeHRlbmQgfHwgaXNSZWRlZW0gPyB1bmRlZmluZWQgOiBiYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0V4dGVuZCB8fCBpc1JlZGVlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3REaXNhYmxlZD17aXNFeHRlbmQgfHwgaXNSZWRlZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgUHJlaW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0V4dGVuZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmVpbWFnZV9oYXNoIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLmhhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZWltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0bXAgPT4gKHRoaXMucHJlaW1hZ2UgPSB0bXApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmh0bGMucHJlaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXt0aGlzLm9uUHJlaW1hZ2VDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaD17cHJlaW1hZ2VfaGFzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplPXtwcmVpbWFnZV9zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWltYWdlPXtwcmVpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXI9e3ByZWltYWdlX2NpcGhlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uICYmIG9wZXJhdGlvbi50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9wZXJhdGlvbi50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1JlZGVlbSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBFeHBpcmF0aW9uICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXthbW91bnRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0LWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRXhwaXJhdGlvbkRhdGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItd2lkdGgxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB0aGlzLm9uRGF0ZXBpY2tlclJlZihlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9e2N1cnJlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA8IHBlcmlvZF9zdGFydF90aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXhwaXJhdGlvbkRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaHRsY19jcmVhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIEh0bGNNb2RhbCxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfc3ltYm9sOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVlX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xyXG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xyXG5pbXBvcnQgV2FsbGV0QXBpIGZyb20gXCJhcGkvV2FsbGV0QXBpXCI7XHJcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwgaGFzaCwgRmV0Y2hDaGFpbk9iamVjdHN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlSGFzaCA9IChjaXBoZXIsIHByZWltYWdlKSA9PiB7XHJcbiAgICBsZXQgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkID0gbnVsbDtcclxuICAgIHN3aXRjaCAoY2lwaGVyKSB7XHJcbiAgICAgICAgY2FzZSBcInNoYTI1NlwiOlxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQgPSBoYXNoLnNoYTI1NihwcmVpbWFnZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyaXBlbWQxNjBcIjpcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkID0gaGFzaC5yaXBlbWQxNjAocHJlaW1hZ2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2hhMVwiOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcInNoYTEgaXMgbm90IGNvbnNpZGVyZWQgYSBzZWN1cmUgaGFzaGluZyBhbGdvcml0aG0sIHBsYWFzZSB1c2Ugc2hhMjU2XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgY2lwaGVyIG5hbWUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBodGxjIG9wXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWltYWdlX2hhc2hfY2FsY3VsYXRlZDtcclxufTtcclxuY29uc3QgZ2V0Q2lwaGVySW50ID0gY2lwaGVyID0+IHtcclxuICAgIGxldCBwcmVpbWFnZV9oYXNoX2NpcGhlciA9IG51bGw7XHJcbiAgICBzd2l0Y2ggKGNpcGhlcikge1xyXG4gICAgICAgIGNhc2UgXCJzaGEyNTZcIjpcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jaXBoZXIgPSAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmlwZW1kMTYwXCI6XHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2hfY2lwaGVyID0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNoYTFcIjpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJzaGExIGlzIG5vdCBjb25zaWRlcmVkIGEgc2VjdXJlIGhhc2hpbmcgYWxnb3JpdGhtLCBwbGFhc2UgdXNlIHNoYTI1NlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIGNpcGhlciBuYW1lIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgaHRsYyBvcFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcmVpbWFnZV9oYXNoX2NpcGhlcjtcclxufTtcclxuY2xhc3MgSHRsY0FjdGlvbnMge1xyXG4gICAgY3JlYXRlKHtcclxuICAgICAgICBmcm9tX2FjY291bnRfaWQsXHJcbiAgICAgICAgdG9fYWNjb3VudF9pZCxcclxuICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgbG9ja190aW1lLFxyXG4gICAgICAgIHByZWltYWdlX2NpcGhlcixcclxuICAgICAgICBwcmVpbWFnZSA9IG51bGwsXHJcbiAgICAgICAgcHJlaW1hZ2VfaGFzaCA9IG51bGwsXHJcbiAgICAgICAgcHJlaW1hZ2Vfc2l6ZSA9IG51bGwsXHJcbiAgICAgICAgZmVlX2Fzc2V0ID0gbnVsbFxyXG4gICAgfSkge1xyXG4gICAgICAgIGlmICghZmVlX2Fzc2V0KSB7XHJcbiAgICAgICAgICAgIGZlZV9hc3NldCA9IFwiMS4zLjBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmZWVfYXNzZXQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZmVlX2Fzc2V0ID0gZmVlX2Fzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ciA9IFdhbGxldEFwaS5uZXdfdHJhbnNhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IHByZWltYWdlX2hhc2hfY2lwaGVyID0gZ2V0Q2lwaGVySW50KHByZWltYWdlX2NpcGhlcik7XHJcbiAgICAgICAgaWYgKHByZWltYWdlICYmICFwcmVpbWFnZV9oYXNoKSB7XHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2ggPSBjYWxjdWxhdGVIYXNoKHByZWltYWdlX2NpcGhlciwgcHJlaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXByZWltYWdlX3NpemUpIHtcclxuICAgICAgICAgICAgaWYgKHByZWltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplID0gcHJlaW1hZ2UubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQcmVpbWFnZSBtdXN0IGJlIGdpdmVuIGlmIHNpemUgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbihcImh0bGNfY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgZnJvbTogZnJvbV9hY2NvdW50X2lkLFxyXG4gICAgICAgICAgICB0bzogdG9fYWNjb3VudF9pZCxcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogZmVlX2Fzc2V0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXRfaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDogW3ByZWltYWdlX2hhc2hfY2lwaGVyLCBwcmVpbWFnZV9oYXNoXSxcclxuICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTogcHJlaW1hZ2Vfc2l6ZSxcclxuICAgICAgICAgICAgY2xhaW1fcGVyaW9kX3NlY29uZHM6IGxvY2tfdGltZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbGV0RGIucHJvY2Vzc190cmFuc2FjdGlvbih0ciwgbnVsbCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIltIdGxjQWN0aW9ucy5qczo2OV0gLS0tLS0gaHRsYyBjcmVhdGUgZXJyb3IgLS0tLS0+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZGVlbSh7aHRsY19pZCwgdXNlcl9pZCwgcHJlaW1hZ2V9KSB7XHJcbiAgICAgICAgbGV0IHRyID0gV2FsbGV0QXBpLm5ld190cmFuc2FjdGlvbigpO1xyXG5cclxuICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJodGxjX3JlZGVlbVwiLCB7XHJcbiAgICAgICAgICAgIHByZWltYWdlOiBuZXcgQnVmZmVyKHByZWltYWdlKS50b1N0cmluZyhcImhleFwiKSxcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGh0bGNfaWQ6IGh0bGNfaWQsXHJcbiAgICAgICAgICAgIHJlZGVlbWVyOiB1c2VyX2lkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiW0h0bGNBY3Rpb25zLmpzOjk4XSAtLS0tLSBodGxjIHJlZGVlbSBlcnJvciAtLS0tLT5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZXh0ZW5kKHtodGxjX2lkLCB1c2VyX2lkLCBzZWNvbmRzX3RvX2FkZH0pIHtcclxuICAgICAgICBsZXQgdHIgPSBXYWxsZXRBcGkubmV3X3RyYW5zYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbihcImh0bGNfZXh0ZW5kXCIsIHtcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGh0bGNfaWQ6IGh0bGNfaWQsXHJcbiAgICAgICAgICAgIHVwZGF0ZV9pc3N1ZXI6IHVzZXJfaWQsXHJcbiAgICAgICAgICAgIHNlY29uZHNfdG9fYWRkOiBzZWNvbmRzX3RvX2FkZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbGV0RGIucHJvY2Vzc190cmFuc2FjdGlvbih0ciwgbnVsbCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIltIdGxjQWN0aW9ucy5qczoxMjddIC0tLS0tIGh0bGMgZXh0ZW5kIGVycm9yIC0tLS0tPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVIYXNoKHByZWltYWdlLCBjaXBoZXIpIHtcclxuICAgICAgICBjb25zdCBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQgPSBjYWxjdWxhdGVIYXNoKGNpcGhlciwgcHJlaW1hZ2UpO1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQubGVuZ3RoO1xyXG4gICAgICAgIGxldCBoYXNoID0gbmV3IEJ1ZmZlcihwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQpLnRvU3RyaW5nKFwiaGV4XCIpO1xyXG4gICAgICAgIHJldHVybiB7aGFzaCwgc2l6ZX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEh0bGNBY3Rpb25zKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcclxuaW1wb3J0IHtcclxuICAgIElucHV0LFxyXG4gICAgQ2FyZCxcclxuICAgIENvbCxcclxuICAgIFJvdyxcclxuICAgIEJ1dHRvbixcclxuICAgIFN3aXRjaCxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBJY29uLFxyXG4gICAgVGFibGVcclxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IERpcmVjdERlYml0TW9kYWwgZnJvbSBcIi4uL01vZGFsL0RpcmVjdERlYml0TW9kYWxcIjtcclxuaW1wb3J0IERpcmVjdERlYml0Q2xhaW1Nb2RhbCBmcm9tIFwiLi4vTW9kYWwvRGlyZWN0RGViaXRDbGFpbU1vZGFsXCI7XHJcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XHJcbmltcG9ydCBBcHBsaWNhdGlvbkFwaSBmcm9tIFwiLi4vLi4vYXBpL0FwcGxpY2F0aW9uQXBpXCI7XHJcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnQsIGhhc0xvYWRlZH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuXHJcbmNsYXNzIERpcmVjdERlYml0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNDbGFpbU1vZGFsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpbHRlclN0cmluZzogXCJcIixcclxuICAgICAgICAgICAgb3BlcmF0aW9uRGF0YTogXCJcIixcclxuICAgICAgICAgICAgb3BlcmF0aW9uQ2xhaW1EYXRhOiBcIlwiLFxyXG4gICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3Q6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQ7XHJcblxyXG4gICAgICAgIGlmIChoYXNMb2FkZWQoY3VycmVudEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgIC8vIGZvciBub3csIGZldGNoIG1hbnVhbGx5XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X3dpdGhkcmF3X3Blcm1pc3Npb25zX2J5X2dpdmVyXCIsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4xMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICAgICAgQXBpcy5pbnN0YW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfd2l0aGRyYXdfcGVybWlzc2lvbnNfYnlfcmVjaXBpZW50XCIsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4xMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0pLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QgPSB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbMF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QgPSB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbMV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byB0cmlnZ2VyIGNhY2hpbmcgZm9yIG1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QWNjb3VudChpdGVtLmF1dGhvcml6ZWRfYWNjb3VudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndpdGhkcmF3X2Zyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3Q6IHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xyXG4gICAgICAgIC8vIGFsd2F5cyB1cGRhdGUsIHJlbGllcyBvbiBwdXNoIGZyb20gYmFja2VuZCB3aGVuIGFjY291bnQgcGVybWlzc2lvbiBjaGFuZ2VcclxuICAgICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TW9kYWwgPSBvcGVyYXRpb24gPT4gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uRGF0YTogb3BlcmF0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcGVyYXRpb246IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc2hvd0NsYWltTW9kYWwgPSBvcGVyYXRpb24gPT4gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0NsYWltTW9kYWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBvcGVyYXRpb25DbGFpbURhdGE6IG9wZXJhdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoaWRlQ2xhaW1Nb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDbGFpbU1vZGFsVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uRmlsdGVyID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclN0cmluZzogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVEZWxldGVQcm9wb3NhbCA9IHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIHBlcm1pc3NpblwiKTtcclxuICAgICAgICBBcHBsaWNhdGlvbkFwaS5kZWxldGVXaXRoZHJhd1Blcm1pc3Npb24oXHJcbiAgICAgICAgICAgIHBlcm1pc3Npb24uaWQsXHJcbiAgICAgICAgICAgIHBlcm1pc3Npb24ud2l0aGRyYXdfZnJvbV9hY2NvdW50LFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uLmF1dGhvcml6ZWRfYWNjb3VudFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbywgdXNlciB3aWxsIHNlZSBwb3B1cFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyLnRvU3RyaW5nKCl9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgICAgICBpc0NsYWltTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkNsYWltRGF0YSxcclxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudDtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAod2l0aGRyYXdfcGVybWlzc2lvbl9saXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkYXRhU291cmNlID0gd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS53aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aG9yaXplZEFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TmFtZShcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmF1dGhvcml6ZWRfYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhkcmF3RnJvbUFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TmFtZShcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLndpdGhkcmF3X2Zyb21fYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmlvZF9zdGFydCA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGVyaW9kX3N0YXJ0X3RpbWUgKyBcIlpcIlxyXG4gICAgICAgICAgICAgICAgKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBub3cgLSBwZXJpb2Rfc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBlcmlvZEV4cGlyZXMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyaW9kTXMgPSBpdGVtLndpdGhkcmF3YWxfcGVyaW9kX3NlYyAqIDEwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVQYXNzZWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdCBwZXJpb2QgaXMgbm90IHN0YXJ0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQZXJpb2ROdW0gPSBNYXRoLmNlaWwodGltZVBhc3NlZCAvIHBlcmlvZE1zKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kRXhwaXJlcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZF9zdGFydCArIHBlcmlvZE1zICogY3VycmVudFBlcmlvZE51bTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmF1dGhvcml6ZWRfYWNjb3VudCA9PSBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInBheWVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJwYXllclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6ZWQ6IGF1dGhvcml6ZWRBY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiB3aXRoZHJhd0Zyb21BY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogYXV0aG9yaXplZEFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmdldF9hc3NldF9hbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS53aXRoZHJhd2FsX2xpbWl0LmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0Fzc2V0QnlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLndpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB1bnRpbDogY3VycmVudFBlcmlvZEV4cGlyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC5sb2NhbGl6ZShuZXcgRGF0ZShjdXJyZW50UGVyaW9kRXhwaXJlcyksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmZpcnN0X3BlcmlvZF9ub3Rfc3RhcnRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBjb3VudGVycGFydC5sb2NhbGl6ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5leHBpcmF0aW9uICsgXCJaXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhaW1lZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFpbWVkX3RoaXNfcGVyaW9kID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmdldF9hc3NldF9hbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhaW1lZF90aGlzX3BlcmlvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0Fzc2V0QnlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS53aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2UubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBmaWx0ZXIgaXMgY2hhaW5lZCB0byBtYXAsIHBvc3NpYmxlIGJ1Z3Mgd2l0aCBpbml0aWFsIHJlbmRlciBvZiB0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXV0aG9yaXplZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmF1dGhvcml6ZWQuaW5kZXhPZihmaWx0ZXJTdHJpbmcpICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPiBiLmlkID8gMSA6IGEuaWQgPCBiLmlkID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGcm9tXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZnJvbVwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImZyb21cIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5mcm9tID4gYi5mcm9tID8gMSA6IGEuZnJvbSA8IGIuZnJvbSA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVG9cIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ0b1wiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcInRvXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudG8gPiBiLnRvID8gMSA6IGEudG8gPCBiLnRvID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jdXJyZW50X3BlcmlvZF9leHBpcmVzXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidW50aWxcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJ1bnRpbFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnVudGlsID4gYi51bnRpbCA/IDEgOiBhLnVudGlsIDwgYi51bnRpbCA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTGltaXRcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJsaW1pdFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImxpbWl0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGltaXQxID0gYS5yYXdEYXRhLndpdGhkcmF3YWxfbGltaXQuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbWl0MiA9IGIucmF3RGF0YS53aXRoZHJhd2FsX2xpbWl0LmFtb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbWl0MSAtIGxpbWl0MjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xhaW1lZFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNsYWltZWRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJjbGFpbWVkXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlMSA9IGEucmF3RGF0YS5jbGFpbWVkX3RoaXNfcGVyaW9kO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZTIgPSBhLnJhd0RhdGEuY2xhaW1lZF90aGlzX3BlcmlvZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXZhaWxhYmxlMiAtIGF2YWlsYWJsZTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmV4cGlyZXNcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZXhwaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImV4cGlyZXNcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5leHBpcmVzID4gYi5leHBpcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuZXhwaXJlcyA8IGIuZXhwaXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID09PSBcInBheWVyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlUHJvcG9zYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLnJhd0RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5kZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlY29yZC5yYXdEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dDbGFpbU1vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjbGFpbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZWNvcmQucmF3RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuY2xhaW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC10YWJsZS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRBQkxFIEhFQURFUiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXRhYmxlX19maWx0ZXItaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjcmVhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuY3JlYXRlX25ld19tYW5kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01vZGFsVmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpcmVjdERlYml0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbkRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQ2xhaW1Nb2RhbFZpc2libGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXJlY3REZWJpdENsYWltTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc0NsYWltTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVDbGFpbU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb25DbGFpbURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkRpcmVjdERlYml0ID0gYmluZFRvQ3VycmVudEFjY291bnQoRGlyZWN0RGViaXQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0RGViaXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IFBlcmlvZFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L1BlcmlvZFNlbGVjdG9yXCI7XHJcbmltcG9ydCBGZWVBc3NldFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xyXG5cclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUgZnJvbSBcInN0b3Jlcy9UcmFuc2FjdGlvbkNvbmZpcm1TdG9yZVwiO1xyXG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQge2NoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtNb2RhbCwgQnV0dG9uLCBUb29sdGlwLCBGb3JtfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEFwcGxpY2F0aW9uQXBpIGZyb20gXCIuLi8uLi9hcGkvQXBwbGljYXRpb25BcGlcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5jbGFzcyBEaXJlY3REZWJpdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZShwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vblRyeEluY2x1ZGVkID0gdGhpcy5vblRyeEluY2x1ZGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvX25hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnVsbCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudDogbnVsbCxcclxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogbnVsbCxcclxuICAgICAgICAgICAgYXNzZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQ6XHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmFzc2V0c19ieV9zeW1ib2wuZ2V0KHRoaXMucHJvcHMuZmVlX2Fzc2V0X3N5bWJvbCkgfHxcclxuICAgICAgICAgICAgICAgIFwiMS4zLjBcIixcclxuICAgICAgICAgICAgZmVlQW1vdW50OiBuZXcgQXNzZXQoe2Ftb3VudDogMH0pLFxyXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxyXG4gICAgICAgICAgICBtYXhBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBudW1fb2ZfcGVyaW9kczogXCJcIixcclxuICAgICAgICAgICAgcGVyaW9kOiB7YW1vdW50OiBcIlwiLCB0eXBlOiB7c2Vjb25kczogNjA0ODAwLCBuYW1lOiBcIldlZWtcIn19LFxyXG4gICAgICAgICAgICBwZXJpb2Rfc3RhcnRfdGltZTogbW9tZW50KCkuYWRkKFwic2Vjb25kc1wiLCAxMjApLFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZCxcclxuICAgICAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgICAgICBudW1fb2ZfcGVyaW9kcyxcclxuICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWUsXHJcbiAgICAgICAgICAgIHBlcm1pc3Npb25JZFxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uOiB7dHlwZTogb3BlcmF0aW9uVHlwZX1cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKG9wZXJhdGlvblR5cGUgPT09IFwiY3JlYXRlXCIpIHtcclxuICAgICAgICAgICAgQXBwbGljYXRpb25BcGkuY3JlYXRlV2l0aGRyYXdQZXJtaXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgdXRpbHMuY29udmVydF90eXBlZF90b19zYXRvc2hpKGFtb3VudCwgYXNzZXQpLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kLnR5cGUuc2Vjb25kcyAqIE51bWJlcihwZXJpb2QuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIG51bV9vZl9wZXJpb2RzLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWUudmFsdWVPZigpLFxyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X2lkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiB2aXN1YWxpemUgZXJyb3Igc29tZXdoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb25UeXBlID09PSBcInVwZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uQXBpLnVwZGF0ZVdpdGhkcmF3UGVybWlzc2lvbihcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25JZCxcclxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICAgICAgICAgIHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShhbW91bnQsIGFzc2V0KSxcclxuICAgICAgICAgICAgICAgIHBlcmlvZC50eXBlLnNlY29uZHMgKiBOdW1iZXIocGVyaW9kLmFtb3VudCksXHJcbiAgICAgICAgICAgICAgICBudW1fb2ZfcGVyaW9kcyxcclxuICAgICAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lLnZhbHVlT2YoKSxcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogdmlzdWFsaXplIGVycm9yIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7b3BlcmF0aW9uLCBjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQgIT09IHByZXZQcm9wcy5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZyb21fYWNjb3VudCA9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBDaGFpblN0b3JlLmdldEFjY291bnQoY3VycmVudEFjY291bnQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIG9wZXJhdGlvblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgb3BlcmF0aW9uICYmXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbi50eXBlID09PSBcInVwZGF0ZVwiICYmXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmlkICE9PSBwcmV2U3RhdGUucGVybWlzc2lvbklkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvQWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmF1dGhvcml6ZWRfYWNjb3VudFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvQWNjb3VudCAmJiB0b0FjY291bnQuZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lU3RhcnQgPSBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAudXRjKG9wZXJhdGlvbi5wYXlsb2FkLnBlcmlvZF9zdGFydF90aW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lRW5kID0gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnV0YyhvcGVyYXRpb24ucGF5bG9hZC5leHBpcmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJPZlBlcmlvZHMgPVxyXG4gICAgICAgICAgICAgICAgICAgICh0aW1lRW5kIC0gdGltZVN0YXJ0KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgKG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfcGVyaW9kX3NlYyAqIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmlvZFR5cGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtzZWNvbmRzOiA2MDQ4MDAsIG5hbWU6IFwiV2Vla1wifSxcclxuICAgICAgICAgICAgICAgICAgICB7c2Vjb25kczogODY0MDAsIG5hbWU6IFwiRGF5XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWNvbmRzOiAzNjAwLCBuYW1lOiBcIkhvdXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZHM6IDYwLCBuYW1lOiBcIk1pbnV0ZVwifVxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGVyaW9kU2VjcywgcGVyaW9kTmFtZSwgcGVyaW9kQW1vdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW9kVHlwZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfcGVyaW9kX3NlYyA+PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RUeXBlc1tpXS5zZWNvbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGVyaW9kID0gcGVyaW9kVHlwZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2ROYW1lID0gY3VycmVudFBlcmlvZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RTZWNzID0gY3VycmVudFBlcmlvZC5zZWNvbmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RBbW91bnQgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9wZXJpb2Rfc2VjIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kLnNlY29uZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdG9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvX25hbWU6IHRvQWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXRpbHMuY29udmVydF9zYXRvc2hpX3RvX3R5cGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bV9vZl9wZXJpb2RzOiBudW1iZXJPZlBlcmlvZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGVyaW9kQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBwZXJpb2RTZWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcGVyaW9kTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwZXJpb2Rfc3RhcnRfdGltZTogbW9tZW50LnV0YyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQucGVyaW9kX3N0YXJ0X3RpbWVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tCYWxhbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGFtb3VudCwgZnJvbV9hY2NvdW50LCBhc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICghYXNzZXQgfHwgIWZyb21fYWNjb3VudCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldC5nZXQoXCJpZFwiKV0pO1xyXG4gICAgICAgIGNvbnN0IGZlZUJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZXNcIixcclxuICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhZnJvbV9hY2NvdW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IHRydWV9KTtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VJRCk7XHJcbiAgICAgICAgbGV0IGZlZUJhbGFuY2VPYmplY3QgPSBmZWVCYWxhbmNlSURcclxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBpZiAoIWZlZUJhbGFuY2VPYmplY3QgfHwgZmVlQmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZV9hc3NldF9pZDogdGhpcy5zdGF0ZS5mZWVfYXNzZXRfaWR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlT2JqZWN0IHx8ICFmZWVBbW91bnQpIHJldHVybjtcclxuICAgICAgICBpZiAoIWFtb3VudCkgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogZmFsc2V9KTtcclxuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBmZWVBbW91bnQsXHJcbiAgICAgICAgICAgIGJhbGFuY2VPYmplY3RcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRUb3RhbChhc3NldF9pZCwgYmFsYW5jZV9pZCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VfaWQpO1xyXG4gICAgICAgIGxldCB0cmFuc2ZlckFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYXNzZXRfaWQpO1xyXG5cclxuICAgICAgICBsZXQgYmFsYW5jZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdHJhbnNmZXJBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0cmFuc2ZlckFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZmVlQW1vdW50LmFzc2V0X2lkID09PSBiYWxhbmNlLmFzc2V0X2lkKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlLm1pbnVzKGZlZUFtb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHttYXhBbW91bnQ6IHRydWUsIGFtb3VudDogYmFsYW5jZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50fSA9IHN0YXRlO1xyXG4gICAgICAgIGxldCBhc3NldF90eXBlcyA9IFtdLFxyXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcclxuICAgICAgICBpZiAoIShmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzLCBmZWVfYXNzZXRfdHlwZXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XHJcbiAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudF9iYWxhbmNlc1trZXldKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5zcGxpY2UoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHthc3NldF90eXBlcywgZmVlX2Fzc2V0X3R5cGVzfTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvQWNjb3VudENoYW5nZWQgPSB0b19hY2NvdW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19hY2NvdW50LCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkFtb3VudENoYW5nZWQgPSAoe2Ftb3VudCwgYXNzZXR9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFhc3NldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4QW1vdW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0b0NoYW5nZWQgPSB0b19uYW1lID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lLCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkZlZUNoYW5nZWQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmZWVfYXNzZXRfaWQ6IGFzc2V0LmFzc2V0X2lkLCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVHJ4SW5jbHVkZWQoY29uZmlybV9zdG9yZV9zdGF0ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5pbmNsdWRlZCAmJlxyXG4gICAgICAgICAgICBjb25maXJtX3N0b3JlX3N0YXRlLmJyb2FkY2FzdGVkX3RyYW5zYWN0aW9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnJlc2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maXJtX3N0b3JlX3N0YXRlLmNsb3NlZCkge1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk51bU9mUGVyaW9kc0NoYW5nZWQgPSBlID0+IHtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3VmFsdWUpICYmIHR5cGVvZiBuZXdWYWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBuZXdWYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe251bV9vZl9wZXJpb2RzOiBuZXdWYWx1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb25QZXJpb2RDaGFuZ2VkID0gKHthbW91bnQsIHR5cGV9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGVyaW9kOiB7YW1vdW50LCB0eXBlfX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkRhdGVwaWNrZXJSZWYoZWwpIHtcclxuICAgICAgICBpZiAoZWwgJiYgZWwucGlja2VyLmlucHV0KSB7XHJcbiAgICAgICAgICAgIGVsLnBpY2tlci5pbnB1dC5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0RGF0ZUNoYW5nZWQgPSB1dGNWYWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHV0Y1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BlcmlvZF9zdGFydF90aW1lOiB1dGNWYWx1ZX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BlcmlvZF9zdGFydF90aW1lOiBudWxsfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxyXG4gICAgICAgICAgICB0b19hY2NvdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgdG9fbmFtZSxcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkLFxyXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IsXHJcbiAgICAgICAgICAgIG51bV9vZl9wZXJpb2RzLFxyXG4gICAgICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHtvcGVyYXRpb259ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHthc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcclxuXHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBFc3RpbWF0ZSBmZWVcclxuICAgICAgICBsZXQgZmVlID0gdGhpcy5zdGF0ZS5mZWVBbW91bnQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuICAgICAgICAgICAgbGV0IF9lcnJvciA9IHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yID8gXCJoYXMtZXJyb3JcIiA6IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xyXG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZmVlSUQgPSBmZWVfYXNzZXRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2Fzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUlEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmVlSUQgPT0gY3VycmVudF9hc3NldF9pZCAmJiB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VfZmVlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZV9mZWUgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoYW1vdW50LCAvLC9nLCBcIlwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgaXNBbW91bnRWYWxpZCA9IGFtb3VudFZhbHVlICYmICFpc05hTihhbW91bnRWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XHJcbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcclxuICAgICAgICAgICAgIWFzc2V0IHx8XHJcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKSB8fFxyXG4gICAgICAgICAgICAhcGVyaW9kLmFtb3VudCB8fFxyXG4gICAgICAgICAgICAhbnVtX29mX3BlcmlvZHMgfHxcclxuICAgICAgICAgICAgIXBlcmlvZF9zdGFydF90aW1lO1xyXG5cclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpcmVjdERlYml0TW9kYWwucmVuZGVyXCIsIGZyb21fYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jcmVhdGVfbmV3X21hbmRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVfbWFuZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy5pc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmF0aW9uICYmIG9wZXJhdGlvbi50eXBlID09PSBcImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cIkNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCIgbGF5b3V0PVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBVVRIT1JJWkVEIEFDQ09VTlQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLmF1dGhvcml6ZWRfYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmF1dGhvcml6ZWRfYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Ub0FjY291bnRDaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnRvb2x0aXAubGltaXRfcGVyX3BlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgTElNSVQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5saW1pdF9wZXJfcGVyaW9kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW1vdW50Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF90eXBlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17YXNzZXRfdHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLnBlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgUEVSSU9EICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyaW9kU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnBlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e3BlcmlvZC5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM9e1tcIk1pbnV0ZVwiLCBcIkhvdXJcIiwgXCJEYXlcIiwgXCJXZWVrXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnV0ZToge3NlY29uZHM6IDYwLCBuYW1lOiBcIk1pbnV0ZVwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvdXI6IHtzZWNvbmRzOiA2MCAqIDYwLCBuYW1lOiBcIkhvdXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiA2MCAqIDYwICogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlZWs6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiA2MCAqIDYwICogMjQgKiA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiV2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZFR5cGU9e3BlcmlvZC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblBlcmlvZENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLm51bV9vZl9wZXJpb2RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBOVU1CRUVSIE9GIFBFUklPRFMgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQubnVtX29mX3BlcmlvZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtX29mX3BlcmlvZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTnVtT2ZQZXJpb2RzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIFNUQVJUIERBVEUgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuc3RhcnRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLnN0YXJ0X3RpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcmlvZF9zdGFydF90aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9kYXk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU3RhcnREYXRlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItd2lkdGgxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gdGhpcy5vbkRhdGVwaWNrZXJSZWYoZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9e2N1cnJlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPCBtb21lbnQoKS5hZGQoMiwgXCJtaW51dGVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBGIEUgRSAgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnR5cGUgPT09IFwidXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIndpdGhkcmF3X3Blcm1pc3Npb25fdXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIndpdGhkcmF3X3Blcm1pc3Npb25fY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBEaXJlY3REZWJpdE1vZGFsLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3N5bWJvbDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICBcImZlZV9hc3NldFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuL0Zsb2F0aW5nRHJvcGRvd25cIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgUGVyaW9kU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gYSB0cmFuc2xhdGlvbiBrZXkgZm9yIHRoZSBsYWJlbFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4OiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGdldE51bWVyaWNFdmVudFZhbHVlKGUpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBudWxsO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPT0gXCJcIiB8fFxyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9PSBudWxsIHx8XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlIDwgMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgPT0gZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgaW5wdXQgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQgPVxyXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZS50cmltKCkucmVwbGFjZSgvW15cXGQuLV0vZywgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge29uQ2hhbmdlLCBwZXJpb2RUeXBlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5nZXROdW1lcmljRXZlbnRWYWx1ZShlKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHBlcmlvZFR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvblR5cGVDaGFuZ2UgPSB0eXBlID0+IHtcclxuICAgICAgICBjb25zdCB7b25DaGFuZ2UsIGlucHV0VmFsdWV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpbnB1dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgcGVyaW9kVHlwZSxcclxuICAgICAgICAgICAgdGFiSW5kZXgsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtYWRkb24tYmVmb3JlXCI+RWFjaDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiNzBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0Ryb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzPXtlbnRyaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVyaW9kVHlwZSAmJiBwZXJpb2RUeXBlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblR5cGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXtzY3JvbGxfbGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcmlvZFNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQge2lzTmFOfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgTGltaXRUb1dpdGhkcmF3IGZyb20gXCIuLi9VdGlsaXR5L0xpbWl0VG9XaXRoZHJhd1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7XG4gICAgTW9kYWwsXG4gICAgQnV0dG9uLFxuICAgIFRvb2x0aXAsXG4gICAgSWNvbixcbiAgICBGb3JtLFxuICAgIElucHV0XG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBBcHBsaWNhdGlvbkFwaSBmcm9tIFwiLi4vLi4vYXBpL0FwcGxpY2F0aW9uQXBpXCI7XG5pbXBvcnQgRmVlQXNzZXRTZWxlY3RvciBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0ZlZUFzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5cbmNsYXNzIERpcmVjdERlYml0Q2xhaW1Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUocHJvcHMpO1xuICAgIH1cblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvX25hbWU6IFwiXCIsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgIHRvX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICBhc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgIGFzc2V0OiBudWxsLFxuICAgICAgICAgICAgbWVtbzogXCJcIixcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgZmVlQXNzZXQ6IG51bGwsIC8vIHdpbGwgYmUgZmlsbGVkIGJ5IEZlZUFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgIG1heEFtb3VudDogZmFsc2UsXG4gICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IFwiXCIsXG4gICAgICAgICAgICBmaXJzdFBlcmlvZEVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHBheWVyQmFsYW5jZVdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdDogdGhpcy5wcm9wcy5vcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LFxuICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlczogXCJcIixcbiAgICAgICAgICAgIGNsYWltZWRBbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcbiAgICAgICAgICAgIHRvX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBc3NldCxcbiAgICAgICAgICAgIHBlcm1pc3Npb25JZCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBtZW1vXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIEFwcGxpY2F0aW9uQXBpLmNsYWltV2l0aGRyYXdQZXJtaXNzaW9uKFxuICAgICAgICAgICAgcGVybWlzc2lvbklkLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0X2lkLFxuICAgICAgICAgICAgdXRpbHMuY29udmVydF90eXBlZF90b19zYXRvc2hpKGFtb3VudCwgYXNzZXQpLFxuICAgICAgICAgICAgbWVtbyA/IG5ldyBCdWZmZXIobWVtbywgXCJ1dGYtOFwiKSA6IG1lbW8sXG4gICAgICAgICAgICBmZWVBc3NldC5hc3NldF9pZFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnJ9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgY29uc3Qge29wZXJhdGlvbiwgaXNNb2RhbFZpc2libGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZSAmJlxuICAgICAgICAgICAgb3BlcmF0aW9uICYmXG4gICAgICAgICAgICBwcmV2U3RhdGUucGVybWlzc2lvbklkICE9PSBvcGVyYXRpb24ucGF5bG9hZC5pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdGFydCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLnBlcmlvZF9zdGFydF90aW1lICsgXCJaXCJcbiAgICAgICAgICAgICkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lUGFzc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aW1lU3RhcnQ7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50UGVyaW9kTnVtO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQZXJpb2RFeHBpcmVzID0gXCJcIjtcblxuICAgICAgICAgICAgY29uc3QgcGVyaW9kTXMgPSBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX3BlcmlvZF9zZWMgKiAxMDAwO1xuICAgICAgICAgICAgaWYgKHRpbWVQYXNzZWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdCBwZXJpb2QgaXMgbm90IHN0YXJ0ZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQZXJpb2ROdW0gPSBNYXRoLmNlaWwodGltZVBhc3NlZCAvIHBlcmlvZE1zKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kRXhwaXJlcyA9IHRpbWVTdGFydCArIHBlcmlvZE1zICogY3VycmVudFBlcmlvZE51bTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG8gPSBhd2FpdCBGZXRjaENoYWluKFxuICAgICAgICAgICAgICAgIFwiZ2V0QWNjb3VudFwiLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmF1dGhvcml6ZWRfYWNjb3VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb20gPSBhd2FpdCBGZXRjaENoYWluKFxuICAgICAgICAgICAgICAgIFwiZ2V0QWNjb3VudFwiLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3X2Zyb21fYWNjb3VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgRmV0Y2hDaGFpbihcbiAgICAgICAgICAgICAgICBcImdldEFzc2V0XCIsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb21fYWNjb3VudF9iYWxhbmNlID0gYXdhaXQgdGhpcy5fY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRvLFxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogZnJvbSxcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQ6IG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfbGltaXQsXG4gICAgICAgICAgICAgICAgY2xhaW1lZEFtb3VudDogb3BlcmF0aW9uLnBheWxvYWQuY2xhaW1lZF90aGlzX3BlcmlvZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BlcmlvZF9leHBpcmVzX2RhdGU6IGN1cnJlbnRQZXJpb2RFeHBpcmVzLFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUb3RhbExpbWl0ID0gbGltaXQgPT4gKCkgPT4ge1xuICAgICAgICBjb25zdCB7YXNzZXQsIGNsYWltZWRBbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGFtb3VudCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQobGltaXQgLSBjbGFpbWVkQW1vdW50LCBhc3NldCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21heEFtb3VudDogdHJ1ZSwgYW1vdW50fSk7XG4gICAgfTtcblxuICAgIG9uQW1vdW50Q2hhbmdlZCA9ICh7YW1vdW50LCBhc3NldH0pID0+IHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgbWF4QW1vdW50OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25GZWVDaGFuZ2VkKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZUFzc2V0OiBhc3NldH0pO1xuICAgIH1cblxuICAgIG9uTWVtb0NoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIGFzeW5jIF9jaGVja0JhbGFuY2UoZnJvbV9hY2NvdW50ID0gbnVsbCwgd2l0aGRyYXdhbF9saW1pdCA9IG51bGwpIHtcbiAgICAgICAgbGV0IHNldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgZnJvbV9hY2NvdW50ID0gdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQ7XG4gICAgICAgICAgICBzZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpdGhkcmF3YWxfbGltaXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCA9IHRoaXMuc3RhdGUud2l0aGRyYXdhbF9saW1pdDtcbiAgICAgICAgICAgIHNldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYWxhbmNlSUQgPSBmcm9tX2FjY291bnQuZ2V0SW4oW1xuICAgICAgICAgICAgXCJiYWxhbmNlc1wiLFxuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZFxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgZnJvbV9hY2NvdW50X2JhbGFuY2UgPSAwO1xuICAgICAgICBpZiAoISFiYWxhbmNlSUQpIHtcbiAgICAgICAgICAgIGZyb21fYWNjb3VudF9iYWxhbmNlID0gKGF3YWl0IEZldGNoQ2hhaW4oXG4gICAgICAgICAgICAgICAgXCJnZXRPYmplY3RcIixcbiAgICAgICAgICAgICAgICBiYWxhbmNlSURcbiAgICAgICAgICAgICkpLmdldChcImJhbGFuY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2FjY291bnRfYmFsYW5jZX0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tX2FjY291bnRfYmFsYW5jZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZSxcbiAgICAgICAgICAgIHRvX2FjY291bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIG1lbW8sXG4gICAgICAgICAgICBwYXllckJhbGFuY2VXYXJuaW5nLFxuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCxcbiAgICAgICAgICAgIGN1cnJlbnRfcGVyaW9kX2V4cGlyZXNfZGF0ZVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgZW50ZXJlZE1vcmVUaGFuQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCBiYWxhbmNlRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgbGV0IG1heGltdW1Ub0NsYWltID0gMDtcbiAgICAgICAgaWYgKHdpdGhkcmF3YWxfbGltaXQpIHtcbiAgICAgICAgICAgIG1heGltdW1Ub0NsYWltID1cbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IE1hdGgubWluKGZyb21fYWNjb3VudF9iYWxhbmNlLCB3aXRoZHJhd2FsX2xpbWl0LmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgOiB3aXRoZHJhd2FsX2xpbWl0LmFtb3VudDtcbiAgICAgICAgICAgIGlmIChhc3NldCAmJiBhbW91bnQpXG4gICAgICAgICAgICAgICAgZW50ZXJlZE1vcmVUaGFuQXZhaWxhYmxlID1cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuY29udmVydF90eXBlZF90b19zYXRvc2hpKGFtb3VudCwgYXNzZXQpID5cbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bVRvQ2xhaW07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50X2JhbGFuY2UgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZSA8IHdpdGhkcmF3YWxfbGltaXQuYW1vdW50XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIC8vIGJhbGFuY2VcbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpIHtcbiAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInNob3djYXNlcy5kaXJlY3RfZGViaXQubGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlbnRlcmVkTW9yZVRoYW5BdmFpbGFibGUgPyBcImhhcy1lcnJvclwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNldFRvdGFsTGltaXQobWF4aW11bVRvQ2xhaW0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGltaXRUb1dpdGhkcmF3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttYXhpbXVtVG9DbGFpbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldElkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCAmJiB3aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAge2JhbGFuY2VFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cInNob3djYXNlcy5kaXJlY3RfZGViaXQucGF5ZXJfYmFsYW5jZV9ub3Rfc3VmZmljaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogd2l0aGRyYXdhbF9saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImxpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZXhjbGFtYXRpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBcIiNmZThjMDBcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoYW1vdW50LCAvLC9nLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpc0Ftb3VudFZhbGlkID0gYW1vdW50VmFsdWUgJiYgIWlzTmFOKGFtb3VudFZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcbiAgICAgICAgICAgICFhc3NldCB8fFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICBlbnRlcmVkTW9yZVRoYW5BdmFpbGFibGUgfHxcbiAgICAgICAgICAgIHBheWVyQmFsYW5jZVdhcm5pbmcgfHxcbiAgICAgICAgICAgICFjdXJyZW50X3BlcmlvZF9leHBpcmVzX2RhdGUgfHxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpO1xuXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpcmVjdERlYml0Q2xhaW1Nb2RhbC5yZW5kZXJcIiwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmNsYWltX2Z1bmRzXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJyZWRcIn0gc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXROb3RWYWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jbGFpbVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cIkNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCIgbGF5b3V0PVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5kaXJlY3RfZGViaXQuYXV0aG9yaXppbmdfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRvX2FjY291bnQgPyB0b19hY2NvdW50LmdldChcIm5hbWVcIikgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmN1cnJlbnRfcGVyaW9kX2V4cGlyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlc19kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlc19kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5maXJzdF9wZXJpb2Rfbm90X3N0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BlcmlvZF9leHBpcmVzX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXJyb3ItYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5kaXJlY3RfZGViaXQuYW1vdW50X3RvX3dpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2FsX2xpbWl0ICYmIHdpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCAmJiBbd2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vICYmIG1lbW8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyaWdodC1sYWJlbFwiPnttZW1vLmxlbmd0aH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLm1lbW9fdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5tZW1vXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVtb0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3aXRoZHJhd19wZXJtaXNzaW9uX2NsYWltXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBtZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdERlYml0Q2xhaW1Nb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIExpbWl0VG9XaXRoZHJhdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGhpZGVfYXNzZXQ6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgaGlkZV9hc3NldDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnByb3BzLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICBhc1BlcmNlbnRhZ2U9e3RoaXMucHJvcHMuYXNQZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgYXNzZXRJbmZvPXt0aGlzLnByb3BzLmFzc2V0SW5mb31cclxuICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RoaXMucHJvcHMuaGlkZV9hc3NldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW1pdFRvV2l0aGRyYXc7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBWkE7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFGQTtBQW9CQTtBQXBCQTtBQXVCQTs7OztBQTFCQTtBQUNBO0FBNEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoREE7QUFtREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0VBO0FBQ0E7QUE2RUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBR0E7QUFmQTtBQW1CQTtBQUNBO0FBakZBO0FBQ0E7QUFtRkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUlBO0FBVkE7QUFZQTtBQUNBO0FBREE7QUFaQTtBQWlCQTtBQXBCQTtBQVhBO0FBbUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBVEE7QUFZQTtBQXpCQTtBQU5BO0FBcENBO0FBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQTlFQTtBQURBO0FBc0dBOzs7O0FBeGVBO0FBQ0E7QUEwZUE7Ozs7Ozs7O0FDN2ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQVRBO0FBWUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBUEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFVQTtBQVZBO0FBREE7QUFEQTtBQWRBO0FBaUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFwQ0E7QUFDQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBR0E7QUFKQTtBQVBBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBckxBO0FBdUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQVJBO0FBVUE7QUFaQTtBQURBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUtBO0FBekJBO0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1QkE7QUErQkE7Ozs7QUFqVEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFSQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUF6QkE7QUEwQ0E7Ozs7QUEzREE7QUFDQTtBQTZEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBZUE7QUFDQTtBQURBO0FBZkE7QUFDQTtBQXVCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBO0FBekNBO0FBREE7QUE4Q0E7Ozs7QUE5RUE7QUFDQTtBQWdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBQ0E7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFSQTtBQWFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBYkE7QUFMQTtBQW5CQTtBQWdEQTs7OztBQXJGQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVRBO0FBa0JBO0FBdkJBO0FBQUE7QUFBQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQVRBO0FBWUE7Ozs7QUF2R0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBbkJBO0FBOEJBOzs7O0FBekZBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFUQTtBQURBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQWRBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUExQ0E7QUFrREE7Ozs7QUEzRUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVNBO0FBVkE7QUFhQTs7OztBQTFEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTs7OztBQXRCQTtBQUNBO0FBd0JBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFnYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFqYkE7QUE2Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUE1Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQTtBQWlEQTtBQUNBO0FBcERBO0FBcURBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBYUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBYUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQVVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBVUE7QUFDQTtBQUVBOzs7QUFHQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFOQTtBQWNBOzs7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBRkE7QUFrQkE7QUFDQTtBQTlCQTtBQWlDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBaUJBO0FBQ0E7QUE1QkE7QUFDQTtBQStCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFPQTtBQUNBO0FBYkE7QUFEQTtBQU5BO0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFWQTtBQURBO0FBTkE7QUE1QkE7QUFvREE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFOQTtBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQU5BO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSUE7QUFPQTtBQUNBO0FBTUE7QUF4QkE7QUFuQkE7QUE4Q0E7QUEvQ0E7QUFDQTtBQWtEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBTkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQXJCQTtBQW5CQTtBQTJDQTtBQTVDQTtBQUNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFuQkE7QUFDQTtBQXdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFIQTtBQUZBO0FBbkJBO0FBQ0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBS0E7QUFEQTtBQU1BO0FBS0E7QUFEQTtBQXJCQTtBQTZCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQVdBO0FBWEE7QUFOQTtBQXdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFQQTtBQU5BO0FBbEVBO0FBQ0E7QUE2RkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBR0E7QUFsQkE7QUFGQTtBQVBBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFYQTtBQUZBO0FBTEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBREE7QUFMQTtBQXpEQTtBQUNBO0FBNEVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUdBO0FBZEE7QUFGQTtBQUxBO0FBRkE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFaQTtBQUZBO0FBTEE7QUFGQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQU5BO0FBTEE7QUFDQTtBQWtCQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFmQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU5BO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBZkE7QUFGQTtBQU5BO0FBMkJBO0FBNUNBO0FBakNBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBbkNBO0FBMkNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBdEJBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFUQTtBQU5BO0FBa0JBO0FBbkJBO0FBOUVBO0FBVEE7QUErR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBdmhEQTtBQUNBO0FBREE7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQTlCQTtBQStCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFTQTtBQUNBO0FBZkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU9BO0FBWkE7QUFjQTtBQWRBO0FBTkE7QUFsQkE7QUFOQTtBQVBBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBZUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBU0E7QUFiQTtBQWdCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBSUE7QUFKQTtBQU9BO0FBVkE7QUF2QkE7QUFSQTtBQStDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBRUE7QUFEQTtBQU1BO0FBR0E7QUFEQTtBQU1BO0FBRUE7QUFEQTtBQXZCQTtBQVRBO0FBdUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUExQ0E7QUFwR0E7QUEySkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBVEE7QUF0S0E7QUFvTEE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWpZQTtBQUNBO0FBbVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUF1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFtQkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF4REE7QUFpRkE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBdEZBO0FBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsNkNBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUF1Q0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBZUE7QUFDQTtBQWhDQTtBQW9DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQW5CQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFQQTtBQURBO0FBY0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQXJDQTtBQUNBO0FBd0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUxBO0FBU0E7QUFUQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUEvQkE7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUF2Q0E7QUFEQTtBQWtEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFwREE7QUFEQTtBQStEQTs7OztBQXZVQTtBQUNBO0FBeVVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUdBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZEE7QUFIQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUF0QkE7QUFSQTtBQXNDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFOQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU5BO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWhFQTtBQTZFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFWQTtBQU5BO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVZBO0FBTkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQXZDQTtBQW5GQTtBQXdJQTs7OztBQTlSQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUE4UkE7OztBQVFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEdBO0FBa1JBO0FBQ0E7QUFDQTtBQXBSQTtBQXFSQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBelNBO0FBMlNBO0FBQ0E7QUFDQTtBQTdTQTtBQTZVQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBL1ZBO0FBdVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBMVlBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBeUJBOzs7QUF1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUErQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBeUJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtCQTtBQUdBO0FBQ0E7QUF2QkE7QUFDQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQTVCQTtBQUFBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFjQTtBQUNBO0FBREE7QUFkQTtBQU5BO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFTQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFOQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFOQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFOQTtBQXJCQTtBQUZBO0FBQ0E7QUFvQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBUEE7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQWZBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQWpCQTtBQXNCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUEE7QUFMQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBZ0JBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQVpBO0FBTEE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQVZBO0FBREE7QUFEQTtBQXRCQTtBQWpGQTtBQURBO0FBcEJBO0FBb0pBOzs7O0FBdnJCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQXVyQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7OztBQzVLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFrRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFDQTtBQW5FQTtBQTBFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUEvRUE7QUFnRkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFDQTtBQWpGQTtBQXdGQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBNUZBO0FBOEZBO0FBQ0E7QUFDQTtBQUNBO0FBakdBO0FBbUdBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFVQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFrREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUxBO0FBVUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQWxEQTtBQXNEQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFRQTtBQVJBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBTkE7QUFiQTtBQXlCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFOQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBQ0E7QUFtREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFTQTtBQVRBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQS9CQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF2Q0E7QUFEQTtBQWlEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQTFEQTtBQURBO0FBb0VBOzs7O0FBMVpBO0FBQ0E7QUE0WkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFnQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4RkE7QUFpUUE7QUFDQTtBQUNBO0FBblFBO0FBb1FBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBcFJBO0FBc1JBO0FBQ0E7QUFDQTtBQXhSQTtBQTJTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoVEE7QUFpVEE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBcFRBO0FBNFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaFVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7OztBQTREQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFsQkE7QUFzQkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUEyQkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQWNBO0FBQ0E7QUFEQTtBQWRBO0FBTkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBLHlCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFQQTtBQWVBO0FBQUE7QUFDQTtBQURBO0FBN0JBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVZBO0FBREE7QUFOQTtBQUZBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFiQTtBQUZBO0FBTkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTtBQUNBO0FBakJBO0FBRkE7QUFOQTtBQTZCQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBTkE7QUFvQkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQU5BO0FBUEE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTtBQWRBO0FBSEE7QUFEQTtBQWhJQTtBQURBO0FBbENBO0FBNkxBOzs7O0FBN21CQTtBQUNBO0FBK21CQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBWkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7O0FBckNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBWkE7QUFOQTtBQThCQTs7OztBQWpHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBV0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQXdGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNkJBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVdBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBekRBO0FBZ0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBakhBO0FBc0hBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBaklBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBOzs7O0FBZ0NBOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBREE7O0FBSUE7QUFDQTs7QUFEQTs7QUFJQTtBQUNBOztBQURBOztBQUlBO0FBQ0E7O0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7Ozs7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBTkE7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBSEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBZkE7QUF2QkE7QUErQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVUEseUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBUEE7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQXRCQTtBQTJCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQWxCQTtBQUxBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQU5BO0FBRkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFaQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBVkE7QUE3RUE7QUFEQTtBQTNCQTtBQXlIQTs7OztBQTdZQTtBQUNBO0FBK1lBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBOzs7O0FBcEJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBREE7QUFDQTtBQUNBO0FBZ0JBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=