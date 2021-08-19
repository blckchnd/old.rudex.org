(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[20],{

/***/ 2842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Witnesses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2843);
/* harmony import */ var _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2846);
/* harmony import */ var _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2847);
/* harmony import */ var _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2850);
/* harmony import */ var _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2856);
/* harmony import */ var _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2858);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2860);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Explorer = function (_React$Component) {
    _inherits(Explorer, _React$Component);

    function Explorer(props) {
        _classCallCheck(this, Explorer);

        var _this = _possibleConstructorReturn(this, (Explorer.__proto__ || Object.getPrototypeOf(Explorer)).call(this, props));

        _this.state = {
            tabs: [{
                name: "blocks",
                link: "/explorer/blocks",
                translate: "explorer.blocks.title",
                content: _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__["default"]
            }, {
                name: "assets",
                link: "/explorer/assets",
                translate: "explorer.assets.title",
                content: _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
            }, {
                name: "accounts",
                link: "/explorer/accounts",
                translate: "explorer.accounts.title",
                content: _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__["default"]
            }, {
                name: "witnesses",
                link: "/explorer/witnesses",
                translate: "explorer.witnesses.title",
                content: _Witnesses__WEBPACK_IMPORTED_MODULE_1__["default"]
            }, {
                name: "committee_members",
                link: "/explorer/committee-members",
                translate: "explorer.committee_members.title",
                content: _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__["default"]
            }, {
                name: "markets",
                link: "/explorer/markets",
                translate: "markets.title",
                content: _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__["default"]
            }, {
                name: "fees",
                link: "/explorer/fees",
                translate: "fees.title",
                content: _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
            }]
        };
        return _this;
    }

    _createClass(Explorer, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var onChange = function onChange(value) {
                _this2.props.history.push(value);
            };

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__["Tabs"],
                {
                    activeKey: this.props.location.pathname,
                    animated: false,
                    style: { display: "table", height: "100%", width: "100%" },
                    onChange: onChange
                },
                this.state.tabs.map(function (tab) {
                    var TabContent = tab.content;

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__["Tabs"].TabPane,
                        {
                            key: tab.link,
                            tab: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate(tab.translate)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContent, null)
                        )
                    );
                })
            );
        }
    }]);

    return Explorer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Explorer);

/***/ }),

/***/ 2843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1974);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(410);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2117);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2532);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1854);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(718);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(717);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1836);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(563);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sanitize__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2811);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(562);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















__webpack_require__(2844);

var WitnessRow = function (_React$Component) {
    _inherits(WitnessRow, _React$Component);

    function WitnessRow() {
        _classCallCheck(this, WitnessRow);

        return _possibleConstructorReturn(this, (WitnessRow.__proto__ || Object.getPrototypeOf(WitnessRow)).apply(this, arguments));
    }

    _createClass(WitnessRow, [{
        key: "_onRowClick",
        value: function _onRowClick(e) {
            e.preventDefault();
            this.props.history.push("/account/" + this.props.witness.get("name"));
        }

        // componentWillUnmount() {
        //     ChainStore.unSubFrom("witnesses", ChainStore.getWitnessById( this.props.witness.get("id") ).get("id"));
        // }

    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                witness = _props.witness,
                isCurrent = _props.isCurrent,
                rank = _props.rank;

            var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(this.props.witness.get("id"));
            if (!witness_data) return null;
            var total_votes = witness_data.get("total_votes");

            var witness_aslot = witness_data.get("last_aslot");
            var color = {};
            if (this.props.most_recent - witness_aslot > 100) {
                color = { borderLeft: "1px solid #FCAB53" };
            } else {
                color = { borderLeft: "1px solid #50D2C2" };
            }
            var last_aslot_time = new Date(Date.now() - (this.props.most_recent - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

            var currentClass = isCurrent ? "active-witness" : "";

            var missed = witness_data.get("total_missed");
            var missedClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: missed <= 500 }, { info: missed > 500 && missed <= 1250 }, { warning: missed > 1250 && missed <= 2000 }, { error: missed >= 200 });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tr",
                { className: currentClass, onClick: this._onRowClick.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    rank
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { style: color },
                    witness.get("name")
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], { time: new Date(last_aslot_time) })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    witness_data.get("last_confirmed_block_num")
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { className: missedClass },
                    missed
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: witness_data.get("total_votes"),
                        asset: "1.3.0",
                        decimalOffset: 5
                    })
                )
            );
        }
    }]);

    return WitnessRow;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WitnessRow.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

WitnessRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessRow);
WitnessRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(WitnessRow);

var WitnessList = function (_React$Component2) {
    _inherits(WitnessList, _React$Component2);

    function WitnessList() {
        _classCallCheck(this, WitnessList);

        var _this2 = _possibleConstructorReturn(this, (WitnessList.__proto__ || Object.getPrototypeOf(WitnessList)).call(this));

        _this2.state = {
            sortBy: "rank",
            inverseSort: true
        };

        _this2.handleBlockIdClick = _this2.handleBlockIdClick.bind(_this2);
        return _this2;
    }

    _createClass(WitnessList, [{
        key: "_setSort",
        value: function _setSort(field) {
            this.setState({
                sortBy: field,
                inverseSort: field === this.state.sortBy ? !this.state.inverseSort : this.state.inverseSort
            });
        }
    }, {
        key: "handleBlockIdClick",
        value: function handleBlockIdClick(blockId) {
            var _this3 = this;

            return function () {
                _this3.props.history.push("/block/" + blockId);
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                witnesses = _props2.witnesses,
                current = _props2.current,
                cardView = _props2.cardView,
                witnessList = _props2.witnessList;
            var _state = this.state,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort;

            var most_recent_aslot = 0;
            var ranks = {};

            witnesses.filter(function (a) {
                if (!a) {
                    return false;
                }
                return witnessList.indexOf(a.get("id")) !== -1;
            }).sort(function (a, b) {
                if (a && b) {
                    return parseInt(b.get("total_votes"), 10) - parseInt(a.get("total_votes"), 10);
                }
            }).forEach(function (w, index) {
                if (w) {
                    var s = w.get("last_aslot");
                    if (most_recent_aslot < s) {
                        most_recent_aslot = s;
                    }

                    ranks[w.get("id")] = index + 1;
                }
            });

            var dataSource = [];
            if (witnesses.length > 0 && witnesses[1]) {
                dataSource = witnesses.filter(function (a) {
                    if (!a) {
                        return false;
                    }
                    var witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("witness_account"));
                    if (!witness) return false;

                    var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(witness.get("id"));
                    if (!witness_data) return false;

                    var name = witness.get("name");
                    if (!name) return false;
                    return name.indexOf(_this4.props.filter) !== -1;
                }).map(function (a) {
                    var witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("witness_account"));

                    var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(witness.get("id"));

                    var witness_aslot = witness_data.get("last_aslot");

                    var last_aslot_time = new Date(Date.now() - (_this4.props.current_aslot - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

                    return {
                        id: a.get("id"),
                        key: witness.get("name"),
                        rank: ranks[a.get("id")],
                        name: witness.get("name"),
                        signing_key: witness_data.get("signing_key"),
                        url: common_utils__WEBPACK_IMPORTED_MODULE_17__["default"].sanitize(witness_data.get("url")),
                        lastConfirmedBlock: {
                            id: witness_data.get("last_confirmed_block_num"),
                            timestamp: last_aslot_time.getTime()
                        },
                        blocksMissed: witness_data.get("total_missed"),
                        votes: witness_data.get("total_votes")
                    };
                });
            }

            var urlValid = function urlValid(item) {
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                return regex.test(item);
            };

            var urlRender = function urlRender(item) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Popover"],
                    {
                        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                href: item,
                                target: "_blank",
                                rel: "noopener noreferrer"
                            },
                            item
                        ),
                        trigger: "hover"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], { type: "link" })
                );
            };

            var keyRender = function keyRender(item) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Popover"],
                    { content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            item
                        ), trigger: "hover" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], { type: "key" })
                );
            };

            var columns = [{
                key: "#",
                title: "#",
                dataIndex: "rank",
                sorter: function sorter(a, b) {
                    return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
                }
            }, {
                key: "name",
                title: "NAME",
                dataIndex: "name",
                sorter: function sorter(a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                }
            }, {
                key: "url",
                title: "URL",
                dataIndex: "url",
                align: "center",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { width: "100%", textAlign: "center" } },
                        item && urlValid(item) && urlRender(item) || null
                    );
                }
            }, {
                key: "lastConfirmedBlock",
                title: "LAST CONFIRMED BLOCK",
                dataIndex: "lastConfirmedBlock",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                style: { display: "inline-block", minWidth: "100px" },
                                href: "javascript:void(0)",
                                onClick: _this4.handleBlockIdClick(item.id)
                            },
                            "#",
                            Number(item.id).toLocaleString()
                        ),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], { time: new Date(item.timestamp) })
                    );
                },
                sorter: function sorter(a, b) {
                    return a.lastConfirmedBlock.timestamp > b.lastConfirmedBlock.timestamp ? -1 : a.lastConfirmedBlock.timestamp < b.lastConfirmedBlock.timestamp ? 1 : 0;
                }
            }, {
                key: "blocksMissed",
                title: "BLOCKS MISSED",
                dataIndex: "blocksMissed",
                render: function render(item) {
                    var blocksMissedClassName = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: item <= 500 }, { info: item > 500 && item <= 1250 }, { warning: item > 1250 && item <= 2000 }, { error: item >= 200 });
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: blocksMissedClassName },
                        item
                    );
                },
                sorter: function sorter(a, b) {
                    return a.blocksMissed > b.blocksMissed ? 1 : a.blocksMissed < b.blocksMissed ? -1 : 0;
                }
            }, {
                key: "votes",
                title: "VOTES",
                dataIndex: "votes",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: item,
                        asset: "1.3.0",
                        decimalOffset: 5
                    });
                },
                sorter: function sorter(a, b) {
                    return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
                }
            }, {
                key: "key",
                title: "KEY",
                dataIndex: "signing_key",
                align: "center",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { textAlign: "center", width: "100%" } },
                        keyRender(item)
                    );
                }
            }];

            var getRowClassName = function getRowClassName(record) {
                if (record.id === current) return "active-witness";

                return "";
            };

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Table"], {
                rowClassName: getRowClassName,
                columns: columns,
                dataSource: dataSource,
                pagination: false
            });
        }
    }]);

    return WitnessList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WitnessList.propTypes = {
    witnesses: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
};

WitnessList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessList, {
    show_loader: true
});
WitnessList = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(WitnessList);

var Witnesses = function (_React$Component3) {
    _inherits(Witnesses, _React$Component3);

    function Witnesses(props) {
        _classCallCheck(this, Witnesses);

        var _this5 = _possibleConstructorReturn(this, (Witnesses.__proto__ || Object.getPrototypeOf(Witnesses)).call(this, props));

        _this5.state = {
            filterWitness: props.filterWitness || "",
            cardView: props.cardView
        };
        return _this5;
    }

    _createClass(Witnesses, [{
        key: "_onFilter",
        value: function _onFilter(e) {
            this.setState({ filterWitness: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                filterWitness: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "_toggleView",
        value: function _toggleView() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                cardView: !this.state.cardView
            });

            this.setState({
                cardView: !this.state.cardView
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                dynGlobalObject = _props3.dynGlobalObject,
                globalObject = _props3.globalObject;

            dynGlobalObject = dynGlobalObject.toJS();
            globalObject = globalObject.toJS();

            var current = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(dynGlobalObject.current_witness),
                currentAccount = null;
            if (current) {
                currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(current.get("witness_account"));
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-content " },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "explore-witness--info" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "table",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.current" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.blocks.active_witnesses" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.participation" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.pay" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.budget" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.next_vote" })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "tbody",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                currentAccount ? currentAccount.get("name") : null
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                Object.keys(globalObject.active_witnesses).length
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                dynGlobalObject.participation,
                                                "%"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    amount: globalObject.parameters.witness_pay_per_block,
                                                    asset: "1.3.0"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    amount: dynGlobalObject.witness_budget,
                                                    asset: "1.3.0"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                    time: new Date(dynGlobalObject.next_maintenance_time + "Z")
                                                })
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("explorer.witnesses.filter_by_name"),
                                value: this.state.filterWitness,
                                onChange: this._onFilter.bind(this),
                                style: {
                                    width: "200px",
                                    marginBottom: "12px",
                                    marginTop: "4px"
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WitnessList, {
                                current_aslot: dynGlobalObject.current_aslot,
                                current: current ? current.get("id") : null,
                                witnesses: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List(globalObject.active_witnesses),
                                witnessList: globalObject.active_witnesses,
                                filter: this.state.filterWitness,
                                cardView: this.state.cardView
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Witnesses;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Witnesses.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};
Witnesses.defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0"
};

Witnesses = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(Witnesses);

var WitnessStoreWrapper = function (_React$Component4) {
    _inherits(WitnessStoreWrapper, _React$Component4);

    function WitnessStoreWrapper() {
        _classCallCheck(this, WitnessStoreWrapper);

        return _possibleConstructorReturn(this, (WitnessStoreWrapper.__proto__ || Object.getPrototypeOf(WitnessStoreWrapper)).apply(this, arguments));
    }

    _createClass(WitnessStoreWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Witnesses, this.props);
        }
    }]);

    return WitnessStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WitnessStoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_9__["connect"])(WitnessStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("cardView"),
            filterWitness: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("filterWitness")
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (WitnessStoreWrapper);

/***/ }),

/***/ 2844:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1974);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(410);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1854);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(718);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2117);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(717);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2811);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(562);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var CommitteeMemberList = function (_React$Component) {
    _inherits(CommitteeMemberList, _React$Component);

    function CommitteeMemberList() {
        _classCallCheck(this, CommitteeMemberList);

        return _possibleConstructorReturn(this, (CommitteeMemberList.__proto__ || Object.getPrototypeOf(CommitteeMemberList)).call(this));
    }

    _createClass(CommitteeMemberList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                committee_members = _props.committee_members,
                membersList = _props.membersList;


            var dataSource = null;

            var ranks = {};

            committee_members.filter(function (a) {
                if (!a) {
                    return false;
                }
                return membersList.indexOf(a.get("id")) !== -1;
            }).forEach(function (c, index) {
                if (c) {
                    ranks[c.get("id")] = index + 1;
                }
            });

            if (committee_members.length > 0 && committee_members[1]) {
                dataSource = committee_members.filter(function (a) {
                    if (!a) {
                        return false;
                    }
                    var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("committee_member_account"));
                    if (!account) {
                        return false;
                    }

                    var account_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getCommitteeMemberById(account.get("id"));

                    if (!account_data) return false;

                    return account.get("name").indexOf(_this2.props.filter || "") !== -1;
                }).map(function (a) {
                    var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("committee_member_account"));

                    var account_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getCommitteeMemberById(account.get("id"));

                    return {
                        key: a.get("id"),
                        rank: ranks[a.get("id")],
                        name: account.get("name"),
                        votes: account_data.get("total_votes"),
                        url: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].sanitize(account_data.get("url"))
                    };
                });
            }

            var columns = [{
                key: "#",
                title: "#",
                dataIndex: "rank",
                sorter: function sorter(a, b) {
                    return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
                }
            }, {
                key: "name",
                title: "NAME",
                dataIndex: "name",
                sorter: function sorter(a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                }
            }, {
                key: "votes",
                title: "VOTES",
                dataIndex: "votes",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        amount: item,
                        asset: "1.3.0",
                        decimalOffset: 5
                    });
                },
                sorter: function sorter(a, b) {
                    return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
                }
            }, {
                key: "url",
                title: "WEBPAGE",
                dataIndex: "url",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "a",
                        { href: item, target: "_blank", rel: "noopener noreferrer" },
                        item
                    );
                }
            }];

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Table"], {
                columns: columns,
                dataSource: dataSource,
                pagination: false
            });
        }
    }]);

    return CommitteeMemberList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

CommitteeMemberList.propTypes = {
    committee_members: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
};

CommitteeMemberList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMemberList, {
    show_loader: true
});

var CommitteeMembers = function (_React$Component2) {
    _inherits(CommitteeMembers, _React$Component2);

    function CommitteeMembers(props) {
        _classCallCheck(this, CommitteeMembers);

        var _this3 = _possibleConstructorReturn(this, (CommitteeMembers.__proto__ || Object.getPrototypeOf(CommitteeMembers)).call(this, props));

        _this3.state = {
            filterCommitteeMember: props.filterCommitteeMember || ""
        };
        return _this3;
    }

    _createClass(CommitteeMembers, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.globalObject, this.props.globalObject) || nextState.filterCommitteeMember !== this.state.filterCommitteeMember || nextState.cardView !== this.state.cardView;
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(e) {
            this.setState({ filterCommitteeMember: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting({
                filterCommitteeMember: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "render",
        value: function render() {
            var globalObject = this.props.globalObject;

            globalObject = globalObject.toJS();

            var activeCommitteeMembers = [];
            for (var key in globalObject.active_committee_members) {
                if (globalObject.active_committee_members.hasOwnProperty(key)) {
                    activeCommitteeMembers.push(globalObject.active_committee_members[key]);
                }
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical medium-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-content" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("explorer.witnesses.filter_by_name"),
                                value: this.state.filterCommitteeMember,
                                onChange: this._onFilter.bind(this),
                                style: {
                                    width: "200px",
                                    marginBottom: "12px",
                                    marginTop: "4px"
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommitteeMemberList, {
                                filter: this.state.filterCommitteeMember,
                                committee_members: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List(globalObject.active_committee_members),
                                membersList: globalObject.active_committee_members
                            })
                        )
                    )
                )
            );
        }
    }]);

    return CommitteeMembers;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

CommitteeMembers.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};
CommitteeMembers.defaultProps = {
    globalObject: "2.0.0"
};

CommitteeMembers = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMembers);

var CommitteeMembersStoreWrapper = function (_React$Component3) {
    _inherits(CommitteeMembersStoreWrapper, _React$Component3);

    function CommitteeMembersStoreWrapper() {
        _classCallCheck(this, CommitteeMembersStoreWrapper);

        return _possibleConstructorReturn(this, (CommitteeMembersStoreWrapper.__proto__ || Object.getPrototypeOf(CommitteeMembersStoreWrapper)).apply(this, arguments));
    }

    _createClass(CommitteeMembersStoreWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommitteeMembers, this.props);
        }
    }]);

    return CommitteeMembersStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

CommitteeMembersStoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(CommitteeMembersStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"]];
    },
    getProps: function getProps() {
        return {
            cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("cardViewCommittee"),
            filterCommitteeMember: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("filterCommitteeMember")
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (CommitteeMembersStoreWrapper);

/***/ }),

/***/ 2847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(717);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1960);
/* harmony import */ var _Fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2848);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FeesContainer = function (_React$Component) {
    _inherits(FeesContainer, _React$Component);

    function FeesContainer() {
        _classCallCheck(this, FeesContainer);

        return _possibleConstructorReturn(this, (FeesContainer.__proto__ || Object.getPrototypeOf(FeesContainer)).apply(this, arguments));
    }

    _createClass(FeesContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fees__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)
            );
        }
    }]);

    return FeesContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FeesContainer);

/***/ }),

/***/ 2848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2133);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1974);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2117);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2849);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(410);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainTypes"].operations;

var ops = Object.keys(operations);

// Define groups and their corresponding operation ids
var fee_grouping = {
    general: [0, 25, 26, 27, 28, 32, 33, 37, 39, 41, 49, 50, 52],
    asset: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 43, 44, 47, 48],
    market: [1, 2, 3, 4, 45, 46],
    account: [5, 6, 7, 8, 9],
    business: [20, 21, 22, 23, 24, 29, 30, 31, 34, 35, 36]
};

// Operations that require LTM
var ltm_required = [5, 7, 20, 21, 34];

var FeeGroup = function (_React$Component) {
    _inherits(FeeGroup, _React$Component);

    function FeeGroup(props) {
        _classCallCheck(this, FeeGroup);

        return _possibleConstructorReturn(this, (FeeGroup.__proto__ || Object.getPrototypeOf(FeeGroup)).call(this, props));
    }

    _createClass(FeeGroup, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !immutable__WEBPACK_IMPORTED_MODULE_1___default.a.is(nextProps.globalObject, this.props.globalObject);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                globalObject = _props.globalObject,
                settings = _props.settings,
                opIds = _props.opIds,
                title = _props.title;

            globalObject = globalObject.toJSON();
            var core_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset("1.3.0");

            var current_fees = globalObject.parameters.current_fees;
            var network_fee = globalObject.parameters.network_percent_of_fee / 1e4;
            var scale = current_fees.scale;
            var feesRaw = current_fees.parameters;
            var preferredUnit = settings.get("fee_asset") || core_asset.get("symbol");

            var trxTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.trxTypes");

            var fees = opIds.map(function (opID) {
                var feeIdx = feesRaw.findIndex(function (f) {
                    return f[0] === opID;
                });
                if (feeIdx === -1) {
                    console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx", opID);
                    return; // FIXME, if I ask for a fee that does not exist?
                }

                var feeStruct = feesRaw[feeIdx];

                var opId = feeStruct[0];
                var fee = feeStruct[1];
                var operation_name = ops[opId];
                var feename = trxTypes[operation_name];

                var feeRateForLTM = network_fee;
                if (opId === 10) {
                    // See https://github.com/bitshares/bitshares-ui/issues/996
                    feeRateForLTM = 0.5 + 0.5 * network_fee;
                }

                var rows = [];
                var headIncluded = false;
                var labelClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()("label", "info");

                for (var key in fee) {
                    var amount = fee[key] * scale / 1e4;
                    var amountForLTM = amount * feeRateForLTM;
                    var feeTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.feeTypes");
                    var assetAmount = amount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], { amount: amount, asset: "1.3.0" }) : feeTypes["_none"];
                    var equivalentAmount = amount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__["EquivalentValueComponent"], {
                        fromAsset: "1.3.0",
                        fullPrecision: true,
                        amount: amount,
                        toAsset: preferredUnit,
                        fullDecimals: true
                    }) : feeTypes["_none"];
                    var assetAmountLTM = amountForLTM ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], { amount: amountForLTM, asset: "1.3.0" }) : feeTypes["_none"];
                    var equivalentAmountLTM = amountForLTM ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__["EquivalentValueComponent"], {
                        fromAsset: "1.3.0",
                        fullPrecision: true,
                        amount: amountForLTM,
                        toAsset: preferredUnit,
                        fullDecimals: true
                    }) : feeTypes["_none"];
                    var _title = null;

                    if (!headIncluded) {
                        headIncluded = true;
                        _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { rowSpan: "6", style: { width: "15em" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: labelClass },
                                feename
                            )
                        );
                    }

                    if (ltm_required.indexOf(opId) < 0) {
                        if (feeTypes[key] != "Annual Membership") {
                            rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: opId.toString() + key },
                                _title,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    feeTypes[key]
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    assetAmount,
                                    amount !== 0 && preferredUnit !== "BTS" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "\xA0/\xA0",
                                        equivalentAmount
                                    ) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    feeIdx !== 8 ? assetAmountLTM : null,
                                    feeIdx !== 8 && amount !== 0 && preferredUnit !== "BTS" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "\xA0/\xA0",
                                        equivalentAmountLTM
                                    ) : null
                                )
                            ));
                        }
                    } else {
                        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { key: opId.toString() + key },
                            _title,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                feeTypes[key]
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                "- ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "sup",
                                    null,
                                    "*"
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                assetAmountLTM,
                                amount !== 0 && preferredUnit !== "BTS" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    "\xA0/\xA0",
                                    equivalentAmountLTM
                                ) : null
                            )
                        ));
                    }
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    { key: feeIdx },
                    rows
                );
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Card"],
                    null,
                    this.props.title.toUpperCase()
                ),
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.block.op" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.type" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.fee" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.feeltm" })
                            )
                        )
                    ),
                    fees
                )
            );
        }
    }]);

    return FeeGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeeGroup.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject.isRequired
};
FeeGroup.defaultProps = {
    globalObject: "2.0.0"
};

FeeGroup = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(FeeGroup);

var Fees = function (_React$Component2) {
    _inherits(Fees, _React$Component2);

    function Fees() {
        _classCallCheck(this, Fees);

        return _possibleConstructorReturn(this, (Fees.__proto__ || Object.getPrototypeOf(Fees)).apply(this, arguments));
    }

    _createClass(Fees, [{
        key: "render",
        value: function render() {
            var FeeGroupsTitle = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.feeGroups");
            var feeGroups = [];

            for (var groupName in fee_grouping) {
                var groupNameText = FeeGroupsTitle[groupName];
                var feeIds = fee_grouping[groupName];
                feeGroups.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeeGroup, {
                    key: groupName,
                    settings: this.props.settings,
                    opIds: feeIds,
                    title: groupNameText
                }));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical", style: { overflow: "visible" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block small-12 shrink",
                        style: { overflow: "visible" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__["default"], { path: "components/Fees" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block small-12 ",
                        style: { overflow: "visible" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        feeGroups
                    )
                )
            );
        }
    }]);

    return Fees;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Fees);

/***/ }),

/***/ 2850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1858);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1960);
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2851);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlocksContainer = function (_React$Component) {
    _inherits(BlocksContainer, _React$Component);

    function BlocksContainer() {
        _classCallCheck(this, BlocksContainer);

        return _possibleConstructorReturn(this, (BlocksContainer.__proto__ || Object.getPrototypeOf(BlocksContainer)).apply(this, arguments));
    }

    _createClass(BlocksContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    stores: [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        latestBlocks: function latestBlocks() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestBlocks;
                        },
                        latestTransactions: function latestTransactions() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestTransactions;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blocks__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return BlocksContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlocksContainer);

/***/ }),

/***/ 2851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1836);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1859);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2118);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2530);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2852);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1974);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2097);
/* harmony import */ var _TransactionChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2853);
/* harmony import */ var _BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2854);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(562);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2532);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2117);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2742);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2780);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















__webpack_require__(2527);

var BlockTimeAgo = function (_React$Component) {
    _inherits(BlockTimeAgo, _React$Component);

    function BlockTimeAgo() {
        _classCallCheck(this, BlockTimeAgo);

        return _possibleConstructorReturn(this, (BlockTimeAgo.__proto__ || Object.getPrototypeOf(BlockTimeAgo)).apply(this, arguments));
    }

    _createClass(BlockTimeAgo, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.blockTime !== this.props.blockTime;
        }
    }, {
        key: "render",
        value: function render() {
            var blockTime = this.props.blockTime;

            // let timePassed = Date.now() - blockTime;

            var timePassed = new Date().getTime() - new Date(blockTime).getTime();

            var textClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: timePassed <= 6000 }, { info: timePassed > 6000 && timePassed <= 15000 }, { warning: timePassed > 15000 && timePassed <= 25000 }, { error: timePassed > 25000 });

            return blockTime ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "h3",
                { className: textClass },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__["default"], { time: blockTime })
            ) : null;
        }
    }]);

    return BlockTimeAgo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Blocks = function (_React$Component2) {
    _inherits(Blocks, _React$Component2);

    function Blocks(props) {
        _classCallCheck(this, Blocks);

        var _this2 = _possibleConstructorReturn(this, (Blocks.__proto__ || Object.getPrototypeOf(Blocks)).call(this, props));

        _this2.state = {
            animateEnter: false,
            operationsHeight: null,
            blocksHeight: null
        };

        _this2._updateHeight = _this2._updateHeight.bind(_this2);
        return _this2;
    }

    _createClass(Blocks, [{
        key: "_getBlock",
        value: function _getBlock(height, maxBlock) {
            if (height) {
                height = parseInt(height, 10);
                actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__["default"].getLatest(height, maxBlock);
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            window.addEventListener("resize", this._updateHeight, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._updateHeight);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.latestBlocks.size === 0) {
                return this._getInitialBlocks();
            } else if (!this.state.animateEnter) {
                this.setState({
                    animateEnter: true
                });
            }

            var maxBlock = nextProps.dynGlobalObject.get("head_block_number");
            if (nextProps.latestBlocks.size >= 20 && nextProps.dynGlobalObject.get("head_block_number") !== nextProps.latestBlocks.get(0).id) {
                return this._getBlock(maxBlock, maxBlock);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._getInitialBlocks();
            var oc = this.refs.operations;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(oc);
            var blocks = this.refs.blocks;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(blocks);
            this._updateHeight();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_14___default.a.is(nextProps.latestBlocks, this.props.latestBlocks) || !common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this._updateHeight();
        }
    }, {
        key: "_getInitialBlocks",
        value: function _getInitialBlocks() {
            var maxBlock = parseInt(this.props.dynGlobalObject.get("head_block_number"), 10);
            if (maxBlock) {
                for (var i = 19; i >= 0; i--) {
                    var exists = false;
                    if (this.props.latestBlocks.size > 0) {
                        for (var j = 0; j < this.props.latestBlocks.size; j++) {
                            if (this.props.latestBlocks.get(j).id === maxBlock - i) {
                                exists = true;
                                break;
                            }
                        }
                    }
                    if (!exists) {
                        this._getBlock(maxBlock - i, maxBlock);
                    }
                }
            }
        }
    }, {
        key: "_updateHeight",
        value: function _updateHeight() {
            var containerHeight = this.refs.outerWrapper.offsetHeight;
            var operationsTextHeight = this.refs.operationsText.offsetHeight;
            var blocksTextHeight = this.refs.blocksText.offsetHeight;

            this.setState({
                operationsHeight: containerHeight - operationsTextHeight,
                blocksHeight: containerHeight - blocksTextHeight
            }, this.psUpdate);
        }
    }, {
        key: "psUpdate",
        value: function psUpdate() {
            var oc = this.refs.operations;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(oc);
            var blocks = this.refs.blocks;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(blocks);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                latestBlocks = _props.latestBlocks,
                latestTransactions = _props.latestTransactions,
                globalObject = _props.globalObject,
                dynGlobalObject = _props.dynGlobalObject,
                coreAsset = _props.coreAsset;
            var _state = this.state,
                blocksHeight = _state.blocksHeight,
                operationsHeight = _state.operationsHeight;

            var dynamicObject = this.props.getDynamicObject(coreAsset.get("dynamic_asset_data_id"));
            var blocks = null,
                transactions = null;
            var headBlock = null;
            var trxCount = 0,
                blockCount = latestBlocks.size,
                trxPerSec = 0,
                blockTimes = [],
                avgTime = 0;

            if (latestBlocks && latestBlocks.size >= 20) {
                var previousTime = void 0;

                var lastBlock = void 0,
                    firstBlock = void 0;

                // Map out the block times for the latest blocks and count the number of transactions
                latestBlocks.filter(function (a, index) {
                    // Only use consecutive blocks counting back from head block
                    return a.id === dynGlobalObject.get("head_block_number") - index;
                }).sort(function (a, b) {
                    return a.id - b.id;
                }).forEach(function (block, index) {
                    trxCount += block.transactions.length;
                    if (index > 0) {
                        blockTimes.push([block.id, (block.timestamp - previousTime) / 1000]);
                        lastBlock = block.timestamp;
                    } else {
                        firstBlock = block.timestamp;
                    }
                    previousTime = block.timestamp;
                });

                // Output block rows for the last 20 blocks
                blocks = latestBlocks.sort(function (a, b) {
                    return b.id - a.id;
                }).take(20).map(function (block) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: block.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                { to: "/block/" + block.id },
                                "#",
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(block.id, 0)
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedDate"], {
                                value: block.timestamp,
                                format: "time"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__["default"], { witness: block.witness })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(block.transactions.length, 0)
                        )
                    );
                }).toArray();

                var trxIndex = 0;

                transactions = latestTransactions.sort(function (a, b) {
                    return b.block_num - a.block_num;
                }).take(20).map(function (trx) {
                    var opIndex = 0;
                    return trx.operations.map(function (op) {
                        if (trxIndex > 15) return null;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            key: trxIndex++,
                            op: op,
                            result: trx.operation_results[opIndex++],
                            block: trx.block_num,
                            hideFee: true,
                            hideOpLabel: false,
                            current: "1.2.0",
                            hideDate: true,
                            hidePending: true
                        });
                    }).filter(function (a) {
                        return !!a;
                    });
                }).toArray();

                headBlock = latestBlocks.first().timestamp;
                avgTime = blockTimes.reduce(function (previous, current, idx, array) {
                    return previous + current[1] / array.length;
                }, 0);

                trxPerSec = trxCount / ((lastBlock - firstBlock) / 1000);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "outerWrapper", className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-horizontal blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.current_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                "#",
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(dynGlobalObject.get("head_block_number"), 0)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.last_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockTimeAgo, { blockTime: headBlock })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_sec"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(trxPerSec, 2)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.avg_conf_time"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(avgTime / 2, 2),
                                "s"
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-horizontal  blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.active_witnesses"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                { className: "txtlabel success" },
                                globalObject.get("active_witnesses").size
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.active_committee_members"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                { className: "txtlabel success" },
                                globalObject.get("active_committee_members").size
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(trxCount / blockCount || 0, 2)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.recently_missed_blocks"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                {
                                    className: "txtlabel warning",
                                    style: { fontWeight: "100" }
                                },
                                dynGlobalObject.get("recently_missed_count")
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-vertical medium-horizontal blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.asset.summary.current_supply"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                { className: "txtlabel" },
                                dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    amount: dynamicObject.get("current_supply"),
                                    asset: coreAsset.get("id"),
                                    decimalOffset: 5
                                }) : null
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.block_times"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                blockTimes: blockTimes,
                                head_block_number: dynGlobalObject.get("head_block_number")
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TransactionChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                blocks: latestBlocks,
                                head_block: dynGlobalObject.get("head_block_number")
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.asset.summary.stealth_supply"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                { className: "txtlabel" },
                                dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    amount: dynamicObject.get("confidential_supply"),
                                    asset: coreAsset.get("id"),
                                    decimalOffset: 5
                                }) : null
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { ref: "transactionsBlock", className: "grid-block no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block small-12 medium-6 vertical no-overflow",
                            style: { paddingBottom: 0 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { ref: "operationsText" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "block-content-header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.recent" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.votes.info" })
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: {
                                        maxHeight: operationsHeight || "400px",
                                        overflow: "hidden"
                                    },
                                    ref: "operations"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        transactions
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block medium-6 show-for-medium vertical no-overflow",
                            style: { paddingBottom: 0, paddingLeft: 5 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { ref: "blocksText" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "block-content-header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                        component: "span",
                                        content: "explorer.blocks.recent"
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block vertical",
                                    style: {
                                        maxHeight: blocksHeight || "438px",
                                        overflow: "hidden"
                                    },
                                    ref: "blocks"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.id"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.date"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.witness"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.count"
                                                })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__["default"],
                                        {
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        blocks
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Blocks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Blocks.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired
};
Blocks.defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0",
    latestBlocks: {},
    assets: {},
    accounts: {},
    height: 1
};


Blocks = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(Blocks, { show_loader: true });
Blocks = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__["default"])(Blocks, {
    propNames: ["coreAsset"],
    withDynamic: true
});
/* harmony default export */ __webpack_exports__["default"] = (Blocks);

/***/ }),

/***/ 2852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1974);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2418);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LinkToWitnessById = function (_React$Component) {
    _inherits(LinkToWitnessById, _React$Component);

    function LinkToWitnessById() {
        _classCallCheck(this, LinkToWitnessById);

        return _possibleConstructorReturn(this, (LinkToWitnessById.__proto__ || Object.getPrototypeOf(LinkToWitnessById)).apply(this, arguments));
    }

    _createClass(LinkToWitnessById, [{
        key: "render",
        value: function render() {
            var witness_account = this.props.witness.get("witness_account");
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: witness_account });
        }
    }]);

    return LinkToWitnessById;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

LinkToWitnessById.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
};

LinkToWitnessById = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkToWitnessById);

/* harmony default export */ __webpack_exports__["default"] = (LinkToWitnessById);

/***/ }),

/***/ 2853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2824);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TransactionChart = function (_React$Component) {
    _inherits(TransactionChart, _React$Component);

    function TransactionChart() {
        _classCallCheck(this, TransactionChart);

        return _possibleConstructorReturn(this, (TransactionChart.__proto__ || Object.getPrototypeOf(TransactionChart)).apply(this, arguments));
    }

    _createClass(TransactionChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.blocks.size < 20) {
                return false;
            }
            var chart = this.refs.trx_chart ? this.refs.trx_chart.chart : null;
            if (chart && nextProps.blocks !== this.props.blocks) {
                var _getData2 = this._getData(nextProps),
                    trxData = _getData2.trxData,
                    colors = _getData2.colors;

                var series = chart.series[0];
                var finalValue = series.xData[series.xData.length - 1];

                // console.log("chart:", chart, "series:", series.data, "finalValue:", finalValue);
                if (series.xData.length) {
                    trxData.forEach(function (point) {
                        if (point[0] > finalValue) {
                            series.addPoint(point, false, series.xData.length >= 30);
                        }
                    });

                    chart.options.plotOptions.column.colors = colors;

                    chart.redraw();
                    return false;
                }
            }
            return nextProps.blocks !== this.props.blocks || nextProps.head_block !== this.props.head_block;
        }
    }, {
        key: "_getData",
        value: function _getData(props) {
            var blocks = props.blocks,
                head_block = props.head_block;


            var trxData = [];
            var max = 0;
            trxData = blocks.filter(function (a) {
                return a.id >= head_block - 30;
            }).sort(function (a, b) {
                return a.id - b.id;
            }).takeLast(30).map(function (block) {
                max = Math.max(block.transactions.length, max);
                return [block.id, block.transactions.length];
            }).toArray();

            var colors = trxData.map(function (entry) {
                // console.log("entry:", entry);
                if (entry[1] <= 5) {
                    return "#50D2C2";
                } else if (entry[1] <= 10) {
                    return "#A0D3E8";
                } else if (entry[1] <= 20) {
                    return "#FCAB53";
                } else {
                    return "#deb869";
                }
            });

            return {
                colors: colors,
                trxData: trxData,
                max: max
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _getData3 = this._getData(this.props),
                trxData = _getData3.trxData,
                colors = _getData3.colors,
                max = _getData3.max;

            var tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("explorer.blocks.transactions");

            var config = {
                chart: {
                    type: "column",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [0, 0, 5, 0],
                    height: 100
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    formatter: function formatter() {
                        return tooltipLabel + ": " + this.y;
                    }
                },
                series: [{
                    name: "Transactions",
                    data: trxData,
                    color: "#50D2C2"
                }],
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    max: Math.max(1.5, max + 0.5),
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 0,
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                plotOptions: {
                    column: {
                        animation: true,
                        minPointLength: 5,
                        colorByPoint: true,
                        colors: colors,
                        borderWidth: 0
                    }
                }
            };

            return trxData.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a, { ref: "trx_chart", config: config }) : null;
        }
    }]);

    return TransactionChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TransactionChart);

/***/ }),

/***/ 2854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2855);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2824);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlocktimeChart = function (_React$Component) {
    _inherits(BlocktimeChart, _React$Component);

    function BlocktimeChart() {
        _classCallCheck(this, BlocktimeChart);

        return _possibleConstructorReturn(this, (BlocktimeChart.__proto__ || Object.getPrototypeOf(BlocktimeChart)).apply(this, arguments));
    }

    _createClass(BlocktimeChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.blockTimes.length < 19) {
                return false;
            } else if (this.props.blockTimes.length === 0) {
                return true;
            }

            var chart = this.refs.chart ? this.refs.chart.chart : null;
            if (chart) {
                var _getData2 = this._getData(nextProps),
                    blockTimes = _getData2.blockTimes,
                    colors = _getData2.colors;

                var series = chart.series[0];
                var finalValue = series.xData[series.xData.length - 1];

                if (series.xData.length) {
                    // console.log(chart, "series:", series.data, "finalValue:", finalValue);
                    blockTimes.forEach(function (point) {
                        if (point[0] > finalValue) {
                            series.addPoint(point, false, series.xData.length >= 30);
                        }
                    });

                    chart.options.plotOptions.column.colors = colors;

                    chart.redraw();
                    return false;
                }
            }

            return nextProps.blockTimes[nextProps.blockTimes.length - 1][0] !== this.props.blockTimes[this.props.blockTimes.length - 1][0] || nextProps.blockTimes.length !== this.props.blockTimes.length;
        }
    }, {
        key: "_getData",
        value: function _getData() {
            var _props = this.props,
                blockTimes = _props.blockTimes,
                head_block = _props.head_block;


            blockTimes.filter(function (a) {
                return a[0] >= head_block - 30;
            });

            if (blockTimes && blockTimes.length) {
                blockTimes = Object(lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__["default"])(blockTimes, 30);
            }

            var colors = blockTimes.map(function (entry) {
                if (entry[1] <= 5) {
                    return "#50D2C2";
                } else if (entry[1] <= 10) {
                    return "#A0D3E8";
                } else if (entry[1] <= 20) {
                    return "#FCAB53";
                } else {
                    return "#deb869";
                }
            });

            return {
                blockTimes: blockTimes,
                colors: colors
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _getData3 = this._getData(this.props),
                blockTimes = _getData3.blockTimes,
                colors = _getData3.colors;

            var tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("explorer.blocks.block_time");

            var config = {
                chart: {
                    type: "column",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [0, 0, 5, 0],
                    height: 100
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    formatter: function formatter() {
                        return tooltipLabel + ": " + this.y + "s";
                    }
                },
                series: [{
                    name: "Block time",
                    data: blockTimes,
                    color: "#50D2C2"
                }],
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 0,
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                plotOptions: {
                    column: {
                        animation: true,
                        minPointLength: 3,
                        colorByPoint: true,
                        colors: colors,
                        borderWidth: 0
                    }
                }
            };

            return blockTimes.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_2___default.a, { ref: "chart", config: config }) : null;
        }
    }]);

    return BlocktimeChart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlocktimeChart);

/***/ }),

/***/ 2855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2009);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2086);



/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(n);
  n = length - n;
  return Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, n < 0 ? 0 : n, length);
}

/* harmony default export */ __webpack_exports__["default"] = (takeRight);


/***/ }),

/***/ 2856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2356);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(717);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1960);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2857);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AssetsContainer = function (_React$Component) {
    _inherits(AssetsContainer, _React$Component);

    function AssetsContainer() {
        _classCallCheck(this, AssetsContainer);

        return _possibleConstructorReturn(this, (AssetsContainer.__proto__ || Object.getPrototypeOf(AssetsContainer)).apply(this, arguments));
    }

    _createClass(AssetsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                    stores: [stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"]],
                    inject: {
                        assets: function assets() {
                            return stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().assets;
                        },
                        filterMPA: function filterMPA() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterMPA");
                        },
                        filterUIA: function filterUIA() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterUIA");
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets__WEBPACK_IMPORTED_MODULE_4__["default"], null)
            );
        }
    }]);

    return AssetsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetsContainer);

/***/ }),

/***/ 2857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2357);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(718);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1836);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2418);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2117);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2100);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(410);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(562);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(721);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(480);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(729);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2811);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var accountStorage = new common_localStorage__WEBPACK_IMPORTED_MODULE_14__["default"]("__graphene__");

var Assets = function (_React$Component) {
    _inherits(Assets, _React$Component);

    function Assets(props) {
        _classCallCheck(this, Assets);

        var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this));

        var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__["Apis"].instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);else chainID = "4018d784";

        _this.state = {
            chainID: chainID,
            foundLast: false,
            lastAsset: "",
            isLoading: false,
            totalAssets: _typeof(accountStorage.get("totalAssets_" + chainID)) != "object" ? accountStorage.get("totalAssets_" + chainID) : chainID && chainID === "4018d784" ? 3000 : 50, // mainnet has 3000+ assets, other chains may not have that many
            assetsFetched: 0,
            activeFilter: "market",
            filterSearch: props.filterSearch || "",
            rowsOnPage: "25"
        };

        _this._toggleFilter = _this._toggleFilter.bind(_this);
        _this.handleRowsChange = _this.handleRowsChange.bind(_this);
        _this.handleFilterChange = _this.handleFilterChange.bind(_this);
        return _this;
    }

    _createClass(Assets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_5___default.a.is(nextProps.assets, this.props.assets) || !common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkAssets(this.props.assets, true);
        }
    }, {
        key: "handleFilterChange",
        value: function handleFilterChange(e) {
            this.setState({
                filterSearch: (e.target.value || "").toUpperCase()
            });
        }
    }, {
        key: "handleRowsChange",
        value: function handleRowsChange(rows) {
            this.setState({
                rowsOnPage: rows
            });
        }
    }, {
        key: "_checkAssets",
        value: function _checkAssets(assets, force) {
            this.setState({ isLoading: true });
            var lastAsset = assets.sort(function (a, b) {
                if (a.symbol > b.symbol) {
                    return 1;
                } else if (a.symbol < b.symbol) {
                    return -1;
                } else {
                    return 0;
                }
            }).last();

            if (assets.size === 0 || force) {
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer("A", 100);
                this.setState({ assetsFetched: 100 });
            } else if (assets.size >= this.state.assetsFetched) {
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer(lastAsset.symbol, 100);
                this.setState({ assetsFetched: this.state.assetsFetched + 99 });
            }

            if (assets.size > this.state.totalAssets) {
                accountStorage.set("totalAssets_" + this.state.chainID, assets.size);
            }

            if (this.state.assetsFetched >= this.state.totalAssets - 100) {
                this.setState({ isLoading: false });
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.assets !== this.props.assets) {
                this._checkAssets(nextProps.assets);
            }
        }
    }, {
        key: "linkToAccount",
        value: function linkToAccount(name_or_id) {
            if (!name_or_id) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "-"
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__["default"], { account: name_or_id });
        }
    }, {
        key: "_toggleFilter",
        value: function _toggleFilter(e) {
            this.setState({
                activeFilter: e.target.value
            });
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(type, e) {
            this.setState(_defineProperty({}, type, e.target.value.toUpperCase()));
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeViewSetting(_defineProperty({}, type, e.target.value.toUpperCase()));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var assets = this.props.assets;
            var activeFilter = this.state.activeFilter;


            var placeholder = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("markets.filter").toUpperCase();
            var coreAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAsset("1.3.0");

            var pm = void 0;

            var dataSource = [];
            var columns = [];

            // Default sorting of the ant table is defined through defaultSortOrder prop

            if (activeFilter == "user") {
                columns = [{
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    defaultSortOrder: "ascend",
                    sorter: function sorter(a, b) {
                        return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/asset/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: item })
                        );
                    }
                }, {
                    key: "issuer",
                    title: "issuer",
                    dataIndex: "issuer",
                    sorter: function sorter(a, b) {
                        var issuerA = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(a.issuer, false);
                        var issuerB = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(b.issuer, false);
                        if (issuerA) issuerA = issuerA.get("name");
                        if (issuerB) issuerB = issuerB.get("name");
                        if (issuerA > issuerB) return 1;
                        if (issuerA < issuerB) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return _this2.linkToAccount(item);
                    }
                }, {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    sorter: function sorter(a, b) {
                        a.currentSupply = parseFloat(a.currentSupply);
                        b.currentSupply = parseFloat(b.currentSupply);
                        return a.currentSupply > b.currentSupply ? 1 : a.currentSupply < b.currentSupply ? -1 : 0;
                    },
                    render: function render(item, record) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            amount: record.currentSupply,
                            asset: record.assetId,
                            hide_asset: true
                        });
                    }
                }, {
                    key: "marketId",
                    title: "",
                    dataIndex: "marketId",
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/market/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Icon"], { type: "line-chart" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                        );
                    }
                }];

                assets.filter(function (a) {
                    return !a.market_asset && a.symbol.indexOf(_this2.state.filterSearch) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    dataSource.push({
                        symbol: asset.symbol,
                        issuer: asset.issuer,
                        currentSupply: asset.dynamic.current_supply,
                        assetId: asset.id,
                        marketId: marketID
                    });
                });
            }

            if (activeFilter == "market") {
                columns = [{
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    defaultSortOrder: "ascend",
                    sorter: function sorter(a, b) {
                        return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/asset/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: item })
                        );
                    }
                }, {
                    key: "issuer",
                    title: "issuer",
                    dataIndex: "issuer",
                    sorter: function sorter(a, b) {
                        var issuerA = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(a.issuer, false);
                        var issuerB = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(b.issuer, false);
                        if (issuerA) issuerA = issuerA.get("name");
                        if (issuerB) issuerB = issuerB.get("name");
                        if (issuerA > issuerB) return 1;
                        if (issuerA < issuerB) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return _this2.linkToAccount(item);
                    }
                }, {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    sorter: function sorter(a, b) {
                        a.currentSupply = parseFloat(a.currentSupply);
                        b.currentSupply = parseFloat(b.currentSupply);
                        return a.currentSupply > b.currentSupply ? 1 : a.currentSupply < b.currentSupply ? -1 : 0;
                    },
                    render: function render(item, record) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            amount: record.currentSupply,
                            asset: record.assetId,
                            hide_asset: true
                        });
                    }
                }, {
                    key: "marketId",
                    title: "",
                    dataIndex: "marketId",
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/market/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Icon"], { type: "line-chart" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                        );
                    }
                }];

                assets.filter(function (a) {
                    return a.bitasset_data && !a.bitasset_data.is_prediction_market && a.symbol.indexOf(_this2.state.filterSearch) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    dataSource.push({
                        symbol: asset.symbol,
                        issuer: asset.issuer,
                        currentSupply: asset.dynamic.current_supply,
                        assetId: asset.id,
                        marketId: marketID
                    });
                });
            }

            if (activeFilter == "prediction") {
                pm = assets.filter(function (a) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(a.options.description);

                    return a.bitasset_data && a.bitasset_data.is_prediction_market && (a.symbol.toLowerCase().indexOf(_this2.state.filterSearch.toLowerCase()) !== -1 || description.main.toLowerCase().indexOf(_this2.state.filterSearch.toLowerCase()) !== -1);
                }).sort(function (a, b) {
                    if (a.symbol < b.symbol) {
                        return -1;
                    } else if (a.symbol > b.symbol) {
                        return 1;
                    } else {
                        return 0;
                    }
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);
                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    return {
                        asset: asset,
                        description: description,
                        marketID: marketID
                    };
                }).toArray();
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        textAlign: "left",
                                        marginBottom: "24px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        style: {
                                            display: "inline-block",
                                            width: "0px",
                                            marginTop: "2px",
                                            float: "left",
                                            fontSize: "18px"
                                        }
                                    },
                                    this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Icon"], { type: "loading" }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                    value: this.state.filterSearch,
                                    style: { width: "200px" },
                                    onChange: this.handleFilterChange
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Radio"].Group,
                                    {
                                        value: this.state.activeFilter,
                                        onChange: this._toggleFilter,
                                        style: {
                                            marginBottom: "7px",
                                            marginLeft: "24px"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Radio"],
                                        { value: "market" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.market" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Radio"],
                                        { value: "user" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.user" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Radio"],
                                        { value: "prediction" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.prediction" })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"],
                                    {
                                        style: { width: "150px", marginLeft: "24px" },
                                        value: this.state.rowsOnPage,
                                        onChange: this.handleRowsChange
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                        { key: "10" },
                                        "10 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                        { key: "25" },
                                        "25 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                        { key: "50" },
                                        "50 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                        { key: "100" },
                                        "100 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                        { key: "200" },
                                        "200 rows"
                                    )
                                )
                            ),
                            activeFilter == "prediction" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["List"], {
                                style: { paddingBottom: 20 },
                                size: "large",
                                itemLayout: "horizontal",
                                dataSource: pm,
                                renderItem: function renderItem(item) {
                                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        antd__WEBPACK_IMPORTED_MODULE_17__["List"].Item,
                                        {
                                            key: item.asset.id.split(".")[2],
                                            actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                                {
                                                    className: "button outline",
                                                    to: "/market/" + item.marketID
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                                            )]
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["List"].Item.Meta, {
                                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        style: {
                                                            paddingTop: 10,
                                                            fontWeight: "bold"
                                                        }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                                        {
                                                            to: "/asset/" + item.asset.symbol
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                            name: item.asset.symbol
                                                        })
                                                    )
                                                ),
                                                item.description.condition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    null,
                                                    " ",
                                                    "(",
                                                    item.description.condition,
                                                    ")"
                                                ) : null
                                            ),
                                            description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "span",
                                                null,
                                                item.description ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            padding: "10px 20px 5px 0",
                                                            lineHeight: "18px"
                                                        }
                                                    },
                                                    item.description.main
                                                ) : null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        style: {
                                                            padding: "0 20px 5px 0",
                                                            lineHeight: "18px"
                                                        }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        account: item.asset.issuer
                                                    }),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "span",
                                                        null,
                                                        " ",
                                                        "-",
                                                        " ",
                                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                            amount: item.asset.dynamic.current_supply,
                                                            asset: item.asset.id
                                                        })
                                                    ),
                                                    item.description.expiry ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                        "span",
                                                        null,
                                                        " ",
                                                        "-",
                                                        " ",
                                                        item.description.expiry
                                                    ) : null
                                                )
                                            )
                                        })
                                    );
                                },
                                pagination: {
                                    position: "bottom",
                                    pageSize: 6
                                }
                            }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Table"], {
                                style: { width: "100%", marginTop: "16px" },
                                rowKey: "symbol",
                                columns: columns,
                                dataSource: dataSource
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Assets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Assets.defaultProps = {
    assets: {}
};

Assets.propTypes = {
    assets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ }),

/***/ 2858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1960);
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2859);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AccountsContainer = function (_React$Component) {
    _inherits(AccountsContainer, _React$Component);

    function AccountsContainer() {
        _classCallCheck(this, AccountsContainer);

        return _possibleConstructorReturn(this, (AccountsContainer.__proto__ || Object.getPrototypeOf(AccountsContainer)).apply(this, arguments));
    }

    _createClass(AccountsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        searchAccounts: function searchAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchAccounts;
                        },
                        searchTerm: function searchTerm() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchTerm;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accounts__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return AccountsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountsContainer);

/***/ }),

/***/ 2859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2740);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1836);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(560);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1863);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2116);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(544);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1957);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2811);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(410);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var Accounts = function (_React$Component) {
    _inherits(Accounts, _React$Component);

    function Accounts(props) {
        _classCallCheck(this, Accounts);

        var _this = _possibleConstructorReturn(this, (Accounts.__proto__ || Object.getPrototypeOf(Accounts)).call(this));

        _this.state = {
            searchTerm: props.searchTerm,
            isLoading: false,
            rowsOnPage: "25"
        };

        _this._searchAccounts = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._searchAccounts, 200);
        _this.handleRowsChange = _this.handleRowsChange.bind(_this);

        _this.balanceObjects = [];
        return _this;
    }

    _createClass(Accounts, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.searchAccounts, this.props.searchAccounts) || nextState.searchTerm !== this.state.searchTerm || nextState.isLoading !== this.state.isLoading;
        }
    }, {
        key: "_onSearchChange",
        value: function _onSearchChange(e) {
            this.setState({
                searchTerm: e.target.value.toLowerCase(),
                isLoading: true
            });
            this._searchAccounts(e.target.value);
        }
    }, {
        key: "_searchAccounts",
        value: function _searchAccounts(searchTerm) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].accountSearch(searchTerm);
            this.setState({ isLoading: false });
        }
    }, {
        key: "_onAddContact",
        value: function _onAddContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].addAccountContact(account);
            this.forceUpdate();
        }
    }, {
        key: "_onRemoveContact",
        value: function _onRemoveContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeAccountContact(account);
            this.forceUpdate();
        }
    }, {
        key: "handleRowsChange",
        value: function handleRowsChange(rows) {
            this.setState({
                rowsOnPage: rows
            });
            this.forceUpdate();
        }
    }, {
        key: "_ensureBalanceObject",
        value: function _ensureBalanceObject(object_id) {
            if (object_id && typeof object_id === "string") {
                if (!this.balanceObjects[object_id]) {
                    this.balanceObjects[object_id] = parseFloat(bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(object_id).get("balance"));
                }
            }
            if (!this.balanceObjects[object_id]) {
                this.balanceObjects[object_id] = 0;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var searchAccounts = this.props.searchAccounts;
            var searchTerm = this.state.searchTerm;


            var dataSource = [];
            var columns = [];

            columns = [{
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "explorer.assets.id" }),
                dataIndex: "accountId",
                key: "accountId",
                defaultSortOrder: "ascend",
                sorter: function sorter(a, b) {
                    return a.accountId > b.accountId ? 1 : a.accountId < b.accountId ? -1 : 0;
                },
                render: function render(id) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        id
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], { name: "user", title: "icons.user.account" }),
                dataIndex: "accountContacts",
                key: "accountContacts",
                render: function render(contacts, record) {
                    return contacts.has(record.accountName) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            onClick: _this2._onRemoveContact.bind(_this2, record.accountName)
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            name: "minus-circle",
                            title: "icons.minus_circle.remove_contact"
                        })
                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            onClick: _this2._onAddContact.bind(_this2, record.accountName)
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            name: "plus-circle",
                            title: "icons.plus_circle.add_contact"
                        })
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "account.name" }),
                dataIndex: "accountName",
                key: "accountName",
                sorter: function sorter(a, b) {
                    return a.accountName > b.accountName ? 1 : a.accountName < b.accountName ? -1 : 0;
                },
                render: function render(name) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                            { to: "/account/" + name + "/overview" },
                            name
                        )
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "gateway.balance" }),
                dataIndex: "accountBalance",
                key: "accountBalance",
                sorter: function sorter(a, b) {
                    _this2._ensureBalanceObject(a.accountBalance);
                    _this2._ensureBalanceObject(b.accountBalance);

                    return _this2.balanceObjects[a.accountBalance] > _this2.balanceObjects[b.accountBalance] ? 1 : _this2.balanceObjects[a.accountBalance] < _this2.balanceObjects[b.accountBalance] ? -1 : 0;
                },
                render: function render(balance) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_8__["default"], { balance: balance })
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "account.percent" }),
                dataIndex: "accountBalance",
                key: "accountBalancePercentage",
                sorter: function sorter(a, b) {
                    _this2._ensureBalanceObject(a.accountBalance);
                    _this2._ensureBalanceObject(b.accountBalance);

                    return _this2.balanceObjects[a.accountBalance] > _this2.balanceObjects[b.accountBalance] ? 1 : _this2.balanceObjects[a.accountBalance] < _this2.balanceObjects[b.accountBalance] ? -1 : 0;
                },
                render: function render(balance) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            balance: balance,
                            asPercentage: true
                        })
                    );
                }
            }];

            if (searchAccounts.size > 0 && searchTerm && searchTerm.length > 0) {
                searchAccounts.filter(function (a) {
                    /*
                     * This appears to return false negatives, perhaps from
                     * changed account name rules when moving to graphene?. Either
                     * way, trying to resolve invalid names fails in the ChainStore,
                     * which in turn breaks the BindToChainState wrapper
                     */
                    // if (!ChainValidation.is_account_name(a, true)) {
                    //     return false;
                    // }
                    return a.indexOf(searchTerm) !== -1;
                }).sort(function (a, b) {
                    if (a > b) {
                        return 1;
                    } else if (a < b) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).map(function (name, id) {
                    var currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAccount(id.toLowerCase());
                    var balance = currentAccount ? currentAccount.getIn(["balances", "1.3.0"]) || null : null;

                    dataSource.push({
                        accountId: id,
                        accountContacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().accountContacts,
                        accountName: name,
                        accountBalance: balance
                    });
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        textAlign: "left",
                                        marginBottom: "24px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    placeholder: "Search",
                                    value: this.state.searchTerm,
                                    style: { width: "200px" },
                                    onChange: this._onSearchChange.bind(this)
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"],
                                    {
                                        style: { width: "150px", marginLeft: "24px" },
                                        value: this.state.rowsOnPage,
                                        onChange: this.handleRowsChange
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "10" },
                                        "10 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "25" },
                                        "25 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "50" },
                                        "50 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "100" },
                                        "100 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "200" },
                                        "200 rows"
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        style: {
                                            display: "inline-block",
                                            marginLeft: "24px"
                                        }
                                    },
                                    this.state.searchTerm && this.state.searchTerm.length == 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.start_typing_to_search" }) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Table"], {
                                style: { width: "100%", marginTop: "16px" },
                                rowKey: "accountId",
                                columns: columns,
                                dataSource: dataSource,
                                pagination: {
                                    position: "bottom",
                                    pageSize: Number(this.state.rowsOnPage)
                                }
                            }),
                            this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { style: { textAlign: "center", padding: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "three-bounce" })
                            ) : null
                        )
                    )
                )
            );
        }
    }]);

    return Accounts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Accounts.defaultProps = {
    searchAccounts: {}
};

Accounts.propTypes = {
    searchAccounts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Accounts);

/***/ }),

/***/ 2860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2345);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2356);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(717);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1960);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2861);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MarketsContainer = function (_React$Component) {
    _inherits(MarketsContainer, _React$Component);

    function MarketsContainer() {
        _classCallCheck(this, MarketsContainer);

        return _possibleConstructorReturn(this, (MarketsContainer.__proto__ || Object.getPrototypeOf(MarketsContainer)).apply(this, arguments));
    }

    _createClass(MarketsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        starredMarkets: function starredMarkets() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
                        },
                        lookupResults: function lookupResults() {
                            return stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().lookupResults;
                        },
                        marketBase: function marketBase() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketBase;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_5__["default"], null)
            );
        }
    }]);

    return MarketsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MarketsContainer);

/***/ }),

/***/ 2861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Markets = function (_React$Component) {
    _inherits(Markets, _React$Component);

    function Markets() {
        _classCallCheck(this, Markets);

        var _this = _possibleConstructorReturn(this, (Markets.__proto__ || Object.getPrototypeOf(Markets)).call(this));

        _this.state = {
            height: null
        };

        _this._setDimensions = _this._setDimensions.bind(_this);
        return _this;
    }

    _createClass(Markets, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._setDimensions);
        }
    }, {
        key: "_setDimensions",
        value: function _setDimensions() {
            var height = this.refs.wrapper.offsetHeight;

            if (height !== this.state.height) {
                this.setState({ height: height });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "wrapper", className: "grid-block page-layout no-overflow" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    style: { width: "100%", padding: 20 },
                    listHeight: this.state.height ? this.state.height : null,
                    className: "no-overflow",
                    headerStyle: { paddingTop: 0, borderTop: "none" },
                    tabHeader: true,
                    columns: [{ name: "star", index: 1 }, { name: "market", index: 2 }, { name: "quoteSupply", index: 3 }, { name: "vol", index: 4 }, { name: "price", index: 5 }, { name: "change", index: 6 }]
                })
            );
        }
    }]);

    return Markets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Markets);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuNjNlMTI5YzQ1ZjYyYTAxZjE5MjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9XaXRuZXNzZXMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL3dpdG5lc3Nlcy5zY3NzPzU5MjIiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0NvbW1pdHRlZU1lbWJlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3NDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb1dpdG5lc3NCeUlkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvVHJhbnNhY3Rpb25DaGFydC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0Jsb2NrdGltZUNoYXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3Rha2VSaWdodC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQWNjb3VudHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9BY2NvdW50cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2l0bmVzc2VzIGZyb20gXCIuL1dpdG5lc3Nlc1wiO1xuaW1wb3J0IENvbW1pdHRlZU1lbWJlcnMgZnJvbSBcIi4vQ29tbWl0dGVlTWVtYmVyc1wiO1xuaW1wb3J0IEZlZXNDb250YWluZXIgZnJvbSBcIi4uL0Jsb2NrY2hhaW4vRmVlc0NvbnRhaW5lclwiO1xuaW1wb3J0IEJsb2Nrc0NvbnRhaW5lciBmcm9tIFwiLi9CbG9ja3NDb250YWluZXJcIjtcbmltcG9ydCBBc3NldHNDb250YWluZXIgZnJvbSBcIi4vQXNzZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQgQWNjb3VudHNDb250YWluZXIgZnJvbSBcIi4vQWNjb3VudHNDb250YWluZXJcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBNYXJrZXRzQ29udGFpbmVyIGZyb20gXCIuLi9FeGNoYW5nZS9NYXJrZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQge1RhYnN9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5ibG9ja3MudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQmxvY2tzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXNzZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2Fzc2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuYXNzZXRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEFzc2V0c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2FjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5hY2NvdW50cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBBY2NvdW50c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndpdG5lc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci93aXRuZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLndpdG5lc3Nlcy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBXaXRuZXNzZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21taXR0ZWVfbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9jb21taXR0ZWUtbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuY29tbWl0dGVlX21lbWJlcnMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQ29tbWl0dGVlTWVtYmVyc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtldHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvbWFya2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwibWFya2V0cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBNYXJrZXRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmVlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9mZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJmZWVzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEZlZXNDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJ0YWJsZVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBUYWJDb250ZW50ID0gdGFiLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKHRhYi50cmFuc2xhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlcjtcbiIsImltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBUaW1lQWdvIGZyb20gXCIuLi9VdGlsaXR5L1RpbWVBZ29cIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7VGFibGUsIEljb24sIElucHV0LCBQb3BvdmVyfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBzYW5pdGl6ZSBmcm9tIFwic2FuaXRpemVcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi9VdGlsaXR5L1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcblxyXG5yZXF1aXJlKFwiLi93aXRuZXNzZXMuc2Nzc1wiKTtcclxuXHJcbmNsYXNzIFdpdG5lc3NSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICB3aXRuZXNzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIF9vblJvd0NsaWNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hY2NvdW50LyR7dGhpcy5wcm9wcy53aXRuZXNzLmdldChcIm5hbWVcIil9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAvLyAgICAgQ2hhaW5TdG9yZS51blN1YkZyb20oXCJ3aXRuZXNzZXNcIiwgQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZCggdGhpcy5wcm9wcy53aXRuZXNzLmdldChcImlkXCIpICkuZ2V0KFwiaWRcIikpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3dpdG5lc3MsIGlzQ3VycmVudCwgcmFua30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB3aXRuZXNzX2RhdGEgPSBDaGFpblN0b3JlLmdldFdpdG5lc3NCeUlkKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwiaWRcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghd2l0bmVzc19kYXRhKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgdG90YWxfdm90ZXMgPSB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfdm90ZXNcIik7XHJcblxyXG4gICAgICAgIGxldCB3aXRuZXNzX2FzbG90ID0gd2l0bmVzc19kYXRhLmdldChcImxhc3RfYXNsb3RcIik7XHJcbiAgICAgICAgbGV0IGNvbG9yID0ge307XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9zdF9yZWNlbnQgLSB3aXRuZXNzX2FzbG90ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0ge2JvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNGQ0FCNTNcIn07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSB7Ym9yZGVyTGVmdDogXCIxcHggc29saWQgIzUwRDJDMlwifTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxhc3RfYXNsb3RfdGltZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICBEYXRlLm5vdygpIC1cclxuICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1vc3RfcmVjZW50IC0gd2l0bmVzc19hc2xvdCkgKlxyXG4gICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIikuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9ja19pbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgXSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIDEwMDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudENsYXNzID0gaXNDdXJyZW50ID8gXCJhY3RpdmUtd2l0bmVzc1wiIDogXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IG1pc3NlZCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF9taXNzZWRcIik7XHJcbiAgICAgICAgbGV0IG1pc3NlZENsYXNzID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgXCJ0eHRsYWJlbFwiLFxyXG4gICAgICAgICAgICB7c3VjY2VzczogbWlzc2VkIDw9IDUwMH0sXHJcbiAgICAgICAgICAgIHtpbmZvOiBtaXNzZWQgPiA1MDAgJiYgbWlzc2VkIDw9IDEyNTB9LFxyXG4gICAgICAgICAgICB7d2FybmluZzogbWlzc2VkID4gMTI1MCAmJiBtaXNzZWQgPD0gMjAwMH0sXHJcbiAgICAgICAgICAgIHtlcnJvcjogbWlzc2VkID49IDIwMH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjdXJyZW50Q2xhc3N9IG9uQ2xpY2s9e3RoaXMuX29uUm93Q2xpY2suYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Jhbmt9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y29sb3J9Pnt3aXRuZXNzLmdldChcIm5hbWVcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGltZUFnbyB0aW1lPXtuZXcgRGF0ZShsYXN0X2FzbG90X3RpbWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57d2l0bmVzc19kYXRhLmdldChcImxhc3RfY29uZmlybWVkX2Jsb2NrX251bVwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17bWlzc2VkQ2xhc3N9PnttaXNzZWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfdm90ZXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuV2l0bmVzc1JvdyA9IEJpbmRUb0NoYWluU3RhdGUoV2l0bmVzc1Jvdyk7XHJcbldpdG5lc3NSb3cgPSB3aXRoUm91dGVyKFdpdG5lc3NSb3cpO1xyXG5cclxuY2xhc3MgV2l0bmVzc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICB3aXRuZXNzZXM6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc29ydEJ5OiBcInJhbmtcIixcclxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUJsb2NrSWRDbGljayA9IHRoaXMuaGFuZGxlQmxvY2tJZENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldFNvcnQoZmllbGQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc29ydEJ5OiBmaWVsZCxcclxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6XHJcbiAgICAgICAgICAgICAgICBmaWVsZCA9PT0gdGhpcy5zdGF0ZS5zb3J0QnlcclxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLmludmVyc2VTb3J0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQmxvY2tJZENsaWNrKGJsb2NrSWQpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2Jsb2NrLyR7YmxvY2tJZH1gKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3dpdG5lc3NlcywgY3VycmVudCwgY2FyZFZpZXcsIHdpdG5lc3NMaXN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtzb3J0QnksIGludmVyc2VTb3J0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IG1vc3RfcmVjZW50X2FzbG90ID0gMDtcclxuICAgICAgICBsZXQgcmFua3MgPSB7fTtcclxuXHJcbiAgICAgICAgd2l0bmVzc2VzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2l0bmVzc0xpc3QuaW5kZXhPZihhLmdldChcImlkXCIpKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYSAmJiBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYi5nZXQoXCJ0b3RhbF92b3Rlc1wiKSwgMTApIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYS5nZXQoXCJ0b3RhbF92b3Rlc1wiKSwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZvckVhY2goKHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzID0gdy5nZXQoXCJsYXN0X2FzbG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3N0X3JlY2VudF9hc2xvdCA8IHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdF9yZWNlbnRfYXNsb3QgPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmFua3Nbdy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgICAgIGlmICh3aXRuZXNzZXMubGVuZ3RoID4gMCAmJiB3aXRuZXNzZXNbMV0pIHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IHdpdG5lc3Nlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzcyA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aXRuZXNzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRuZXNzX2RhdGEgPSBDaGFpblN0b3JlLmdldFdpdG5lc3NCeUlkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzLmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXdpdG5lc3NfZGF0YSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHdpdG5lc3MuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aXRuZXNzID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0bmVzcy5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRuZXNzX2FzbG90ID0gd2l0bmVzc19kYXRhLmdldChcImxhc3RfYXNsb3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0X2FzbG90X3RpbWUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5jdXJyZW50X2FzbG90IC0gd2l0bmVzc19hc2xvdCkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIikuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9ja19pbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB3aXRuZXNzLmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbms6IHJhbmtzW2EuZ2V0KFwiaWRcIildLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aXRuZXNzLmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pbmdfa2V5OiB3aXRuZXNzX2RhdGEuZ2V0KFwic2lnbmluZ19rZXlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXRpbHMuc2FuaXRpemUod2l0bmVzc19kYXRhLmdldChcInVybFwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb25maXJtZWRCbG9jazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2NvbmZpcm1lZF9ibG9ja19udW1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IGxhc3RfYXNsb3RfdGltZS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzTWlzc2VkOiB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfbWlzc2VkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3Rlczogd2l0bmVzc19kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsVmFsaWQgPSBpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSAvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3Kik/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiUhXFwtXFwvXSkpPy87XHJcbiAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KGl0ZW0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHVybFJlbmRlciA9IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1wiaG92ZXJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qga2V5UmVuZGVyID0gaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBjb250ZW50PXs8c3Bhbj57aXRlbX08L3NwYW4+fSB0cmlnZ2VyPXtcImhvdmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJrZXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicmFua1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJhbmsgPiBiLnJhbmsgPyAxIDogYS5yYW5rIDwgYi5yYW5rID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTkFNRVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gMSA6IGEubmFtZSA8IGIubmFtZSA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVVJMXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidXJsXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaXRlbSAmJiB1cmxWYWxpZChpdGVtKSAmJiB1cmxSZW5kZXIoaXRlbSkpIHx8IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJsYXN0Q29uZmlybWVkQmxvY2tcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxBU1QgQ09ORklSTUVEIEJMT0NLXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibGFzdENvbmZpcm1lZEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtaW5XaWR0aDogXCIxMDBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2soaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7TnVtYmVyKGl0ZW0uaWQpLnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvIHRpbWU9e25ldyBEYXRlKGl0ZW0udGltZXN0YW1wKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEubGFzdENvbmZpcm1lZEJsb2NrLnRpbWVzdGFtcCA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYi5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImJsb2Nrc01pc3NlZFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQkxPQ0tTIE1JU1NFRFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImJsb2Nrc01pc3NlZFwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja3NNaXNzZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4dGxhYmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzOiBpdGVtIDw9IDUwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvOiBpdGVtID4gNTAwICYmIGl0ZW0gPD0gMTI1MH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3YXJuaW5nOiBpdGVtID4gMTI1MCAmJiBpdGVtIDw9IDIwMDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3I6IGl0ZW0gPj0gMjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtibG9ja3NNaXNzZWRDbGFzc05hbWV9PntpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5ibG9ja3NNaXNzZWQgPiBiLmJsb2Nrc01pc3NlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmJsb2Nrc01pc3NlZCA8IGIuYmxvY2tzTWlzc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJ2b3Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVk9URVNcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ2b3Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS52b3RlcyA+IGIudm90ZXMgPyAxIDogYS52b3RlcyA8IGIudm90ZXMgPyAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJrZXlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIktFWVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInNpZ25pbmdfa2V5XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgd2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtrZXlSZW5kZXIoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCBnZXRSb3dDbGFzc05hbWUgPSByZWNvcmQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkLmlkID09PSBjdXJyZW50KSByZXR1cm4gXCJhY3RpdmUtd2l0bmVzc1wiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9e2dldFJvd0NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5XaXRuZXNzTGlzdCA9IEJpbmRUb0NoYWluU3RhdGUoV2l0bmVzc0xpc3QsIHtcclxuICAgIHNob3dfbG9hZGVyOiB0cnVlXHJcbn0pO1xyXG5XaXRuZXNzTGlzdCA9IHdpdGhSb3V0ZXIoV2l0bmVzc0xpc3QpO1xyXG5cclxuY2xhc3MgV2l0bmVzc2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIixcclxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IFwiMi4xLjBcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlsdGVyV2l0bmVzczogcHJvcHMuZmlsdGVyV2l0bmVzcyB8fCBcIlwiLFxyXG4gICAgICAgICAgICBjYXJkVmlldzogcHJvcHMuY2FyZFZpZXdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkZpbHRlcihlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyV2l0bmVzczogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xyXG5cclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBmaWx0ZXJXaXRuZXNzOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZVZpZXcoKSB7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgY2FyZFZpZXc6ICF0aGlzLnN0YXRlLmNhcmRWaWV3XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYXJkVmlldzogIXRoaXMuc3RhdGUuY2FyZFZpZXdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtkeW5HbG9iYWxPYmplY3QsIGdsb2JhbE9iamVjdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdCA9IGR5bkdsb2JhbE9iamVjdC50b0pTKCk7XHJcbiAgICAgICAgZ2xvYmFsT2JqZWN0ID0gZ2xvYmFsT2JqZWN0LnRvSlMoKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChkeW5HbG9iYWxPYmplY3QuY3VycmVudF93aXRuZXNzKSxcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQgPSBudWxsO1xyXG4gICAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxvcmUtd2l0bmVzcy0taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLmN1cnJlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX3dpdG5lc3Nlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5wYXJ0aWNpcGF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLnBheVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5idWRnZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMubmV4dF92b3RlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRBY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV93aXRuZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bkdsb2JhbE9iamVjdC5wYXJ0aWNpcGF0aW9ufSVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5wYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRuZXNzX3BheV9wZXJfYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3Qud2l0bmVzc19idWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0Lm5leHRfbWFpbnRlbmFuY2VfdGltZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyV2l0bmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2l0bmVzc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2FzbG90PXtkeW5HbG9iYWxPYmplY3QuY3VycmVudF9hc2xvdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50ID8gY3VycmVudC5nZXQoXCJpZFwiKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0bmVzc2VzPXtJbW11dGFibGUuTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV93aXRuZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3NMaXN0PXtnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyV2l0bmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkVmlldz17dGhpcy5zdGF0ZS5jYXJkVmlld31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuV2l0bmVzc2VzID0gQmluZFRvQ2hhaW5TdGF0ZShXaXRuZXNzZXMpO1xyXG5cclxuY2xhc3MgV2l0bmVzc1N0b3JlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxXaXRuZXNzZXMgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5XaXRuZXNzU3RvcmVXcmFwcGVyID0gY29ubmVjdChcclxuICAgIFdpdG5lc3NTdG9yZVdyYXBwZXIsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRWaWV3OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcImNhcmRWaWV3XCIpLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyV2l0bmVzczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJXaXRuZXNzXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRuZXNzU3RvcmVXcmFwcGVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5cclxuY2xhc3MgQ29tbWl0dGVlTWVtYmVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNvbW1pdHRlZV9tZW1iZXJzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2NvbW1pdHRlZV9tZW1iZXJzLCBtZW1iZXJzTGlzdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGxldCByYW5rcyA9IHt9O1xyXG5cclxuICAgICAgICBjb21taXR0ZWVfbWVtYmVyc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlcnNMaXN0LmluZGV4T2YoYS5nZXQoXCJpZFwiKSkgIT09IC0xO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoYywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua3NbYy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY29tbWl0dGVlX21lbWJlcnMubGVuZ3RoID4gMCAmJiBjb21taXR0ZWVfbWVtYmVyc1sxXSkge1xyXG4gICAgICAgICAgICBkYXRhU291cmNlID0gY29tbWl0dGVlX21lbWJlcnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJjb21taXR0ZWVfbWVtYmVyX2FjY291bnRcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9kYXRhID0gQ2hhaW5TdG9yZS5nZXRDb21taXR0ZWVNZW1iZXJCeUlkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50X2RhdGEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJuYW1lXCIpLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXIgfHwgXCJcIikgIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiY29tbWl0dGVlX21lbWJlcl9hY2NvdW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfZGF0YSA9IENoYWluU3RvcmUuZ2V0Q29tbWl0dGVlTWVtYmVyQnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuazogcmFua3NbYS5nZXQoXCJpZFwiKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnQuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm90ZXM6IGFjY291bnRfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1dGlscy5zYW5pdGl6ZShhY2NvdW50X2RhdGEuZ2V0KFwidXJsXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicmFua1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJhbmsgPiBiLnJhbmsgPyAxIDogYS5yYW5rIDwgYi5yYW5rID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTkFNRVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gMSA6IGEubmFtZSA8IGIubmFtZSA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcInZvdGVzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWT1RFU1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvdGVzXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnZvdGVzID4gYi52b3RlcyA/IDEgOiBhLnZvdGVzIDwgYi52b3RlcyA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV0VCUEFHRVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkNvbW1pdHRlZU1lbWJlckxpc3QgPSBCaW5kVG9DaGFpblN0YXRlKENvbW1pdHRlZU1lbWJlckxpc3QsIHtcclxuICAgIHNob3dfbG9hZGVyOiB0cnVlXHJcbn0pO1xyXG5cclxuY2xhc3MgQ29tbWl0dGVlTWVtYmVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBwcm9wcy5maWx0ZXJDb21taXR0ZWVNZW1iZXIgfHwgXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuZ2xvYmFsT2JqZWN0LCB0aGlzLnByb3BzLmdsb2JhbE9iamVjdCkgfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlciAhPT1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyIHx8XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZS5jYXJkVmlldyAhPT0gdGhpcy5zdGF0ZS5jYXJkVmlld1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRmlsdGVyKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJDb21taXR0ZWVNZW1iZXI6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCl9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7Z2xvYmFsT2JqZWN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgZ2xvYmFsT2JqZWN0ID0gZ2xvYmFsT2JqZWN0LnRvSlMoKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZUNvbW1pdHRlZU1lbWJlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVycykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21taXR0ZWVNZW1iZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1trZXldXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1pdHRlZU1lbWJlckxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZV9tZW1iZXJzPXtJbW11dGFibGUuTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyc0xpc3Q9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5Db21taXR0ZWVNZW1iZXJzID0gQmluZFRvQ2hhaW5TdGF0ZShDb21taXR0ZWVNZW1iZXJzKTtcclxuXHJcbmNsYXNzIENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8Q29tbWl0dGVlTWVtYmVycyB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIgPSBjb25uZWN0KFxyXG4gICAgQ29tbWl0dGVlTWVtYmVyc1N0b3JlV3JhcHBlcixcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZFZpZXc6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZFZpZXdDb21taXR0ZWVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGZpbHRlckNvbW1pdHRlZU1lbWJlcjogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJDb21taXR0ZWVNZW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IEZlZXMgZnJvbSBcIi4vRmVlc1wiO1xuXG5jbGFzcyBGZWVzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbU2V0dGluZ3NTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3NcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGZWVzIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVzQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCB7RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50fSBmcm9tIFwiLi4vVXRpbGl0eS9FcXVpdmFsZW50VmFsdWVDb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZSwgQ2hhaW5UeXBlcyBhcyBncmFwaGVuZUNoYWluVHlwZXN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtDYXJkfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5jb25zdCB7b3BlcmF0aW9uc30gPSBncmFwaGVuZUNoYWluVHlwZXM7XG5sZXQgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG5cbi8vIERlZmluZSBncm91cHMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIGlkc1xubGV0IGZlZV9ncm91cGluZyA9IHtcbiAgICBnZW5lcmFsOiBbMCwgMjUsIDI2LCAyNywgMjgsIDMyLCAzMywgMzcsIDM5LCA0MSwgNDksIDUwLCA1Ml0sXG4gICAgYXNzZXQ6IFsxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMzgsIDQzLCA0NCwgNDcsIDQ4XSxcbiAgICBtYXJrZXQ6IFsxLCAyLCAzLCA0LCA0NSwgNDZdLFxuICAgIGFjY291bnQ6IFs1LCA2LCA3LCA4LCA5XSxcbiAgICBidXNpbmVzczogWzIwLCAyMSwgMjIsIDIzLCAyNCwgMjksIDMwLCAzMSwgMzQsIDM1LCAzNl1cbn07XG5cbi8vIE9wZXJhdGlvbnMgdGhhdCByZXF1aXJlIExUTVxubGV0IGx0bV9yZXF1aXJlZCA9IFs1LCA3LCAyMCwgMjEsIDM0XTtcblxuY2xhc3MgRmVlR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogXCIyLjAuMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5nbG9iYWxPYmplY3QsIHRoaXMucHJvcHMuZ2xvYmFsT2JqZWN0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Z2xvYmFsT2JqZWN0LCBzZXR0aW5ncywgb3BJZHMsIHRpdGxlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTT04oKTtcbiAgICAgICAgY29uc3QgY29yZV9hc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKTtcblxuICAgICAgICBsZXQgY3VycmVudF9mZWVzID0gZ2xvYmFsT2JqZWN0LnBhcmFtZXRlcnMuY3VycmVudF9mZWVzO1xuICAgICAgICBsZXQgbmV0d29ya19mZWUgPSBnbG9iYWxPYmplY3QucGFyYW1ldGVycy5uZXR3b3JrX3BlcmNlbnRfb2ZfZmVlIC8gMWU0O1xuICAgICAgICBsZXQgc2NhbGUgPSBjdXJyZW50X2ZlZXMuc2NhbGU7XG4gICAgICAgIGxldCBmZWVzUmF3ID0gY3VycmVudF9mZWVzLnBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBwcmVmZXJyZWRVbml0ID1cbiAgICAgICAgICAgIHNldHRpbmdzLmdldChcImZlZV9hc3NldFwiKSB8fCBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICBsZXQgdHJ4VHlwZXMgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi50cnhUeXBlc1wiKTtcblxuICAgICAgICBsZXQgZmVlcyA9IG9wSWRzLm1hcChvcElEID0+IHtcbiAgICAgICAgICAgIGxldCBmZWVJZHggPSBmZWVzUmF3LmZpbmRJbmRleChmID0+IGZbMF0gPT09IG9wSUQpO1xuICAgICAgICAgICAgaWYgKGZlZUlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIFwiQXNraW5nIGZvciBub24tZXhpc3RpbmcgZmVlIGlkICVkISBDaGVjayBncm91cCBzZXR0aW5ncyBpbiBGZWVzLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICBvcElEXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIEZJWE1FLCBpZiBJIGFzayBmb3IgYSBmZWUgdGhhdCBkb2VzIG5vdCBleGlzdD9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZlZVN0cnVjdCA9IGZlZXNSYXdbZmVlSWR4XTtcblxuICAgICAgICAgICAgbGV0IG9wSWQgPSBmZWVTdHJ1Y3RbMF07XG4gICAgICAgICAgICBsZXQgZmVlID0gZmVlU3RydWN0WzFdO1xuICAgICAgICAgICAgbGV0IG9wZXJhdGlvbl9uYW1lID0gb3BzW29wSWRdO1xuICAgICAgICAgICAgbGV0IGZlZW5hbWUgPSB0cnhUeXBlc1tvcGVyYXRpb25fbmFtZV07XG5cbiAgICAgICAgICAgIGxldCBmZWVSYXRlRm9yTFRNID0gbmV0d29ya19mZWU7XG4gICAgICAgICAgICBpZiAob3BJZCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JpdHNoYXJlcy9iaXRzaGFyZXMtdWkvaXNzdWVzLzk5NlxuICAgICAgICAgICAgICAgIGZlZVJhdGVGb3JMVE0gPSAwLjUgKyAwLjUgKiBuZXR3b3JrX2ZlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGxldCBoZWFkSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBsYWJlbENsYXNzID0gY2xhc3NOYW1lcyhcImxhYmVsXCIsIFwiaW5mb1wiKTtcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGZlZSkge1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSAoZmVlW2tleV0gKiBzY2FsZSkgLyAxZTQ7XG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudEZvckxUTSA9IGFtb3VudCAqIGZlZVJhdGVGb3JMVE07XG4gICAgICAgICAgICAgICAgbGV0IGZlZVR5cGVzID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24uZmVlVHlwZXNcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0QW1vdW50ID0gYW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXQgYW1vdW50PXthbW91bnR9IGFzc2V0PVwiMS4zLjBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBlcXVpdmFsZW50QW1vdW50ID0gYW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsUHJlY2lzaW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Fzc2V0PXtwcmVmZXJyZWRVbml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbERlY2ltYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldEFtb3VudExUTSA9IGFtb3VudEZvckxUTSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YW1vdW50Rm9yTFRNfSBhc3NldD1cIjEuMy4wXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgZXF1aXZhbGVudEFtb3VudExUTSA9IGFtb3VudEZvckxUTSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFByZWNpc2lvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50Rm9yTFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Bc3NldD17cHJlZmVycmVkVW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxEZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFoZWFkSW5jbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZEluY2x1ZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93U3Bhbj1cIjZcIiBzdHlsZT17e3dpZHRoOiBcIjE1ZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGFiZWxDbGFzc30+e2ZlZW5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobHRtX3JlcXVpcmVkLmluZGV4T2Yob3BJZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmZWVUeXBlc1trZXldICE9IFwiQW5udWFsIE1lbWJlcnNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e29wSWQudG9TdHJpbmcoKSArIGtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVUeXBlc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YW1vdW50ICE9PSAwICYmIHByZWZlcnJlZFVuaXQgIT09IFwiQlRTXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VxdWl2YWxlbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlSWR4ICE9PSA4ID8gYXNzZXRBbW91bnRMVE0gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUlkeCAhPT0gOCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50ICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXJyZWRVbml0ICE9PSBcIkJUU1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcXVpdmFsZW50QW1vdW50TFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17b3BJZC50b1N0cmluZygpICsga2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVUeXBlc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSA8c3VwPio8L3N1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudCAhPT0gMCAmJiBwcmVmZXJyZWRVbml0ICE9PSBcIkJUU1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7LyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcXVpdmFsZW50QW1vdW50TFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPHRib2R5IGtleT17ZmVlSWR4fT57cm93c308L3Rib2R5PjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkPnt0aGlzLnByb3BzLnRpdGxlLnRvVXBwZXJDYXNlKCl9PC9DYXJkPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuYmxvY2sub3BcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmZlZXMudHlwZVwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmZlZXMuZmVlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuZmVlcy5mZWVsdG1cIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAge2ZlZXN9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbkZlZUdyb3VwID0gQmluZFRvQ2hhaW5TdGF0ZShGZWVHcm91cCk7XG5cbmNsYXNzIEZlZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IEZlZUdyb3Vwc1RpdGxlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24uZmVlR3JvdXBzXCIpO1xuICAgICAgICBsZXQgZmVlR3JvdXBzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgZ3JvdXBOYW1lIGluIGZlZV9ncm91cGluZykge1xuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZVRleHQgPSBGZWVHcm91cHNUaXRsZVtncm91cE5hbWVdO1xuICAgICAgICAgICAgbGV0IGZlZUlkcyA9IGZlZV9ncm91cGluZ1tncm91cE5hbWVdO1xuICAgICAgICAgICAgZmVlR3JvdXBzLnB1c2goXG4gICAgICAgICAgICAgICAgPEZlZUdyb3VwXG4gICAgICAgICAgICAgICAgICAgIGtleT17Z3JvdXBOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5wcm9wcy5zZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgb3BJZHM9e2ZlZUlkc31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2dyb3VwTmFtZVRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCIgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMTIgc2hyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50IHBhdGg9e1wiY29tcG9uZW50cy9GZWVzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+e2ZlZUdyb3Vwc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJsb2NrY2hhaW5TdG9yZSBmcm9tIFwic3RvcmVzL0Jsb2NrY2hhaW5TdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBCbG9ja3MgZnJvbSBcIi4vQmxvY2tzXCI7XHJcblxyXG5jbGFzcyBCbG9ja3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0Jsb2NrY2hhaW5TdG9yZV19XHJcbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBsYXRlc3RCbG9ja3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TdG9yZS5nZXRTdGF0ZSgpLmxhdGVzdEJsb2NrcztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdFRyYW5zYWN0aW9uczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblN0b3JlLmdldFN0YXRlKCkubGF0ZXN0VHJhbnNhY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCbG9ja3MgLz5cclxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tzQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEJsb2NrY2hhaW5BY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Jsb2NrY2hhaW5BY3Rpb25zXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtYXR0ZWREYXRlfSBmcm9tIFwicmVhY3QtaW50bFwiO1xyXG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gXCIuLi9CbG9ja2NoYWluL09wZXJhdGlvblwiO1xyXG5pbXBvcnQgTGlua1RvV2l0bmVzc0J5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvV2l0bmVzc0J5SWRcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvbkNoYXJ0IGZyb20gXCIuL1RyYW5zYWN0aW9uQ2hhcnRcIjtcclxuaW1wb3J0IEJsb2NrdGltZUNoYXJ0IGZyb20gXCIuL0Jsb2NrdGltZUNoYXJ0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgVGltZUFnbyBmcm9tIFwiLi4vVXRpbGl0eS9UaW1lQWdvXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XHJcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xyXG5cclxucmVxdWlyZShcIi4uL0Jsb2NrY2hhaW4vanNvbi1pbnNwZWN0b3Iuc2Nzc1wiKTtcclxuXHJcbmNsYXNzIEJsb2NrVGltZUFnbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5ibG9ja1RpbWUgIT09IHRoaXMucHJvcHMuYmxvY2tUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Jsb2NrVGltZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAvLyBsZXQgdGltZVBhc3NlZCA9IERhdGUubm93KCkgLSBibG9ja1RpbWU7XHJcbiAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGJsb2NrVGltZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBsZXQgdGV4dENsYXNzID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgXCJ0eHRsYWJlbFwiLFxyXG4gICAgICAgICAgICB7c3VjY2VzczogdGltZVBhc3NlZCA8PSA2MDAwfSxcclxuICAgICAgICAgICAge2luZm86IHRpbWVQYXNzZWQgPiA2MDAwICYmIHRpbWVQYXNzZWQgPD0gMTUwMDB9LFxyXG4gICAgICAgICAgICB7d2FybmluZzogdGltZVBhc3NlZCA+IDE1MDAwICYmIHRpbWVQYXNzZWQgPD0gMjUwMDB9LFxyXG4gICAgICAgICAgICB7ZXJyb3I6IHRpbWVQYXNzZWQgPiAyNTAwMH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gYmxvY2tUaW1lID8gKFxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt0ZXh0Q2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgPFRpbWVBZ28gdGltZT17YmxvY2tUaW1lfSAvPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCbG9ja3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGdsb2JhbE9iamVjdDogXCIyLjAuMFwiLFxyXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiLFxyXG4gICAgICAgIGxhdGVzdEJsb2Nrczoge30sXHJcbiAgICAgICAgYXNzZXRzOiB7fSxcclxuICAgICAgICBhY2NvdW50czoge30sXHJcbiAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcGVyYXRpb25zSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICBibG9ja3NIZWlnaHQ6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQgPSB0aGlzLl91cGRhdGVIZWlnaHQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0QmxvY2soaGVpZ2h0LCBtYXhCbG9jaykge1xyXG4gICAgICAgIGlmIChoZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LCAxMCk7XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5BY3Rpb25zLmdldExhdGVzdChoZWlnaHQsIG1heEJsb2NrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3VwZGF0ZUhlaWdodCwge1xyXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3VwZGF0ZUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZiAobmV4dFByb3BzLmxhdGVzdEJsb2Nrcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbml0aWFsQmxvY2tzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5hbmltYXRlRW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlRW50ZXI6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWF4QmxvY2sgPSBuZXh0UHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmV4dFByb3BzLmxhdGVzdEJsb2Nrcy5zaXplID49IDIwICYmXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIikgIT09XHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMubGF0ZXN0QmxvY2tzLmdldCgwKS5pZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QmxvY2sobWF4QmxvY2ssIG1heEJsb2NrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0SW5pdGlhbEJsb2NrcygpO1xyXG4gICAgICAgIGxldCBvYyA9IHRoaXMucmVmcy5vcGVyYXRpb25zO1xyXG4gICAgICAgIFBzLmluaXRpYWxpemUob2MpO1xyXG4gICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnJlZnMuYmxvY2tzO1xyXG4gICAgICAgIFBzLmluaXRpYWxpemUoYmxvY2tzKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5sYXRlc3RCbG9ja3MsIHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzKSB8fFxyXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbml0aWFsQmxvY2tzKCkge1xyXG4gICAgICAgIGxldCBtYXhCbG9jayA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKSxcclxuICAgICAgICAgICAgMTBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChtYXhCbG9jaykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTk7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzLnNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhdGVzdEJsb2Nrcy5nZXQoaikuaWQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhCbG9jayAtIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEJsb2NrKG1heEJsb2NrIC0gaSwgbWF4QmxvY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVIZWlnaHQoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMucmVmcy5vdXRlcldyYXBwZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCBvcGVyYXRpb25zVGV4dEhlaWdodCA9IHRoaXMucmVmcy5vcGVyYXRpb25zVGV4dC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGJsb2Nrc1RleHRIZWlnaHQgPSB0aGlzLnJlZnMuYmxvY2tzVGV4dC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbnNIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCAtIG9wZXJhdGlvbnNUZXh0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYmxvY2tzSGVpZ2h0OiBjb250YWluZXJIZWlnaHQgLSBibG9ja3NUZXh0SGVpZ2h0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMucHNVcGRhdGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHBzVXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBvYyA9IHRoaXMucmVmcy5vcGVyYXRpb25zO1xyXG4gICAgICAgIFBzLnVwZGF0ZShvYyk7XHJcbiAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucmVmcy5ibG9ja3M7XHJcbiAgICAgICAgUHMudXBkYXRlKGJsb2Nrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGxhdGVzdEJsb2NrcyxcclxuICAgICAgICAgICAgbGF0ZXN0VHJhbnNhY3Rpb25zLFxyXG4gICAgICAgICAgICBnbG9iYWxPYmplY3QsXHJcbiAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdCxcclxuICAgICAgICAgICAgY29yZUFzc2V0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtibG9ja3NIZWlnaHQsIG9wZXJhdGlvbnNIZWlnaHR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBkeW5hbWljT2JqZWN0ID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxyXG4gICAgICAgICAgICBjb3JlQXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYmxvY2tzID0gbnVsbCxcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zID0gbnVsbDtcclxuICAgICAgICBsZXQgaGVhZEJsb2NrID0gbnVsbDtcclxuICAgICAgICBsZXQgdHJ4Q291bnQgPSAwLFxyXG4gICAgICAgICAgICBibG9ja0NvdW50ID0gbGF0ZXN0QmxvY2tzLnNpemUsXHJcbiAgICAgICAgICAgIHRyeFBlclNlYyA9IDAsXHJcbiAgICAgICAgICAgIGJsb2NrVGltZXMgPSBbXSxcclxuICAgICAgICAgICAgYXZnVGltZSA9IDA7XHJcblxyXG4gICAgICAgIGlmIChsYXRlc3RCbG9ja3MgJiYgbGF0ZXN0QmxvY2tzLnNpemUgPj0gMjApIHtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzVGltZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsYXN0QmxvY2ssIGZpcnN0QmxvY2s7XHJcblxyXG4gICAgICAgICAgICAvLyBNYXAgb3V0IHRoZSBibG9jayB0aW1lcyBmb3IgdGhlIGxhdGVzdCBibG9ja3MgYW5kIGNvdW50IHRoZSBudW1iZXIgb2YgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGxhdGVzdEJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHVzZSBjb25zZWN1dGl2ZSBibG9ja3MgY291bnRpbmcgYmFjayBmcm9tIGhlYWQgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmlkID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIikgLSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCAtIGIuaWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeENvdW50ICs9IGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWVzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxvY2sudGltZXN0YW1wIC0gcHJldmlvdXNUaW1lKSAvIDEwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCbG9jayA9IGJsb2NrLnRpbWVzdGFtcDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEJsb2NrID0gYmxvY2sudGltZXN0YW1wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgPSBibG9jay50aW1lc3RhbXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIE91dHB1dCBibG9jayByb3dzIGZvciB0aGUgbGFzdCAyMCBibG9ja3NcclxuICAgICAgICAgICAgYmxvY2tzID0gbGF0ZXN0QmxvY2tzXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmlkIC0gYS5pZDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGFrZSgyMClcclxuICAgICAgICAgICAgICAgIC5tYXAoYmxvY2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Jsb2NrLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9ibG9jay8ke2Jsb2NrLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje3V0aWxzLmZvcm1hdF9udW1iZXIoYmxvY2suaWQsIDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLnRpbWVzdGFtcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb1dpdG5lc3NCeUlkIHdpdG5lc3M9e2Jsb2NrLndpdG5lc3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyeEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9ucyA9IGxhdGVzdFRyYW5zYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5ibG9ja19udW0gLSBhLmJsb2NrX251bTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGFrZSgyMClcclxuICAgICAgICAgICAgICAgIC5tYXAodHJ4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3BJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeC5vcGVyYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAob3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyeEluZGV4ID4gMTUpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJ4SW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A9e29wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RyeC5vcGVyYXRpb25fcmVzdWx0c1tvcEluZGV4KytdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jaz17dHJ4LmJsb2NrX251bX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZlZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wTGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtcIjEuMi4wXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICBoZWFkQmxvY2sgPSBsYXRlc3RCbG9ja3MuZmlyc3QoKS50aW1lc3RhbXA7XHJcbiAgICAgICAgICAgIGF2Z1RpbWUgPSBibG9ja1RpbWVzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQsIGlkeCwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnRbMV0gLyBhcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdHJ4UGVyU2VjID0gdHJ4Q291bnQgLyAoKGxhc3RCbG9jayAtIGZpcnN0QmxvY2spIC8gMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm91dGVyV3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBGaXJzdCByb3cgb2Ygc3RhdHMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC1ob3Jpem9udGFsIGJsb2Nrcy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmN1cnJlbnRfYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5sYXN0X2Jsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrVGltZUFnbyBibG9ja1RpbWU9e2hlYWRCbG9ja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy50cnhfcGVyX3NlY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXRpbHMuZm9ybWF0X251bWJlcih0cnhQZXJTZWMsIDIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYXZnX2NvbmZfdGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXRpbHMuZm9ybWF0X251bWJlcihhdmdUaW1lIC8gMiwgMil9czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFNlY29uZCByb3cgb2Ygc3RhdHMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC1ob3Jpem9udGFsICBibG9ja3Mtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX3dpdG5lc3Nlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0eHRsYWJlbCBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dsb2JhbE9iamVjdC5nZXQoXCJhY3RpdmVfd2l0bmVzc2VzXCIpLnNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInR4dGxhYmVsIHN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5nZXQoXCJhY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnRyeF9wZXJfYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeENvdW50IC8gYmxvY2tDb3VudCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnJlY2VudGx5X21pc3NlZF9ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCB3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiMTAwXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5HbG9iYWxPYmplY3QuZ2V0KFwicmVjZW50bHlfbWlzc2VkX2NvdW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogVGhpcmQgcm93OiBncmFwaHMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC12ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBibG9ja3Mtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5jdXJyZW50X3N1cHBseVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljT2JqZWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3N1cHBseVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVBc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmJsb2NrX3RpbWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2t0aW1lQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWVzPXtibG9ja1RpbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRfYmxvY2tfbnVtYmVyPXtkeW5HbG9iYWxPYmplY3QuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRfYmxvY2tfbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy50cnhfcGVyX2Jsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNhY3Rpb25DaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17bGF0ZXN0QmxvY2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRfYmxvY2s9e2R5bkdsb2JhbE9iamVjdC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZF9ibG9ja19udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LnN0ZWFsdGhfc3VwcGx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmZpZGVudGlhbF9zdXBwbHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlQXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRm91cnRoIHJvdzogdHJhbnNhY3Rpb25zIGFuZCBibG9ja3MgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cInRyYW5zYWN0aW9uc0Jsb2NrXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBtZWRpdW0tNiB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3cgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwib3BlcmF0aW9uc1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucmVjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgZml4ZWQtaGVpZ2h0LTJyZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC52b3Rlcy5pbmZvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBvcGVyYXRpb25zSGVpZ2h0IHx8IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm9wZXJhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBmaXhlZC1oZWlnaHQtMnJlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e3RyYW5zYWN0aW9uc308L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1lZGl1bS02IHNob3ctZm9yLW1lZGl1bSB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ0xlZnQ6IDV9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93IGdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImJsb2Nrc1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5yZWNlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBibG9ja3NIZWlnaHQgfHwgXCI0MzhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgZml4ZWQtaGVpZ2h0LTJyZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2sud2l0bmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmNvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQmxvY2tzID0gQmluZFRvQ2hhaW5TdGF0ZShCbG9ja3MsIHtzaG93X2xvYWRlcjogdHJ1ZX0pO1xyXG5CbG9ja3MgPSBBc3NldFdyYXBwZXIoQmxvY2tzLCB7XHJcbiAgICBwcm9wTmFtZXM6IFtcImNvcmVBc3NldFwiXSxcclxuICAgIHdpdGhEeW5hbWljOiB0cnVlXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBCbG9ja3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi9MaW5rVG9BY2NvdW50QnlJZFwiO1xyXG5cclxuY2xhc3MgTGlua1RvV2l0bmVzc0J5SWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICB3aXRuZXNzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB3aXRuZXNzX2FjY291bnQgPSB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpO1xyXG4gICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17d2l0bmVzc19hY2NvdW50fSAvPjtcclxuICAgIH1cclxufVxyXG5MaW5rVG9XaXRuZXNzQnlJZCA9IEJpbmRUb0NoYWluU3RhdGUoTGlua1RvV2l0bmVzc0J5SWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua1RvV2l0bmVzc0J5SWQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0SGlnaGNoYXJ0IGZyb20gXCJyZWFjdC1oaWdoY2hhcnRzXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmNsYXNzIFRyYW5zYWN0aW9uQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuYmxvY2tzLnNpemUgPCAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGFydCA9IHRoaXMucmVmcy50cnhfY2hhcnQgPyB0aGlzLnJlZnMudHJ4X2NoYXJ0LmNoYXJ0IDogbnVsbDtcclxuICAgICAgICBpZiAoY2hhcnQgJiYgbmV4dFByb3BzLmJsb2NrcyAhPT0gdGhpcy5wcm9wcy5ibG9ja3MpIHtcclxuICAgICAgICAgICAgbGV0IHt0cnhEYXRhLCBjb2xvcnN9ID0gdGhpcy5fZ2V0RGF0YShuZXh0UHJvcHMpO1xyXG4gICAgICAgICAgICBsZXQgc2VyaWVzID0gY2hhcnQuc2VyaWVzWzBdO1xyXG4gICAgICAgICAgICBsZXQgZmluYWxWYWx1ZSA9IHNlcmllcy54RGF0YVtzZXJpZXMueERhdGEubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0OlwiLCBjaGFydCwgXCJzZXJpZXM6XCIsIHNlcmllcy5kYXRhLCBcImZpbmFsVmFsdWU6XCIsIGZpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoc2VyaWVzLnhEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdHJ4RGF0YS5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRbMF0gPiBmaW5hbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5hZGRQb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMueERhdGEubGVuZ3RoID49IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQub3B0aW9ucy5wbG90T3B0aW9ucy5jb2x1bW4uY29sb3JzID0gY29sb3JzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYXJ0LnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5ibG9ja3MgIT09IHRoaXMucHJvcHMuYmxvY2tzIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5oZWFkX2Jsb2NrICE9PSB0aGlzLnByb3BzLmhlYWRfYmxvY2tcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXREYXRhKHByb3BzKSB7XHJcbiAgICAgICAgbGV0IHtibG9ja3MsIGhlYWRfYmxvY2t9ID0gcHJvcHM7XHJcblxyXG4gICAgICAgIGxldCB0cnhEYXRhID0gW107XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgdHJ4RGF0YSA9IGJsb2Nrc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPj0gaGVhZF9ibG9jayAtIDMwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgLSBiLmlkO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGFrZUxhc3QoMzApXHJcbiAgICAgICAgICAgIC5tYXAoYmxvY2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgoYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCwgbWF4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbYmxvY2suaWQsIGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGhdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudG9BcnJheSgpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3JzID0gdHJ4RGF0YS5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVudHJ5OlwiLCBlbnRyeSk7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeVsxXSA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjNTBEMkMyXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiNBMEQzRThcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0ZDQUI1M1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI2RlYjg2OVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbG9ycyxcclxuICAgICAgICAgICAgdHJ4RGF0YSxcclxuICAgICAgICAgICAgbWF4XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHt0cnhEYXRhLCBjb2xvcnMsIG1heH0gPSB0aGlzLl9nZXREYXRhKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBsZXQgdG9vbHRpcExhYmVsID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICBcImV4cGxvcmVyLmJsb2Nrcy50cmFuc2FjdGlvbnNcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAwLCAwLCAwKVwiLFxyXG4gICAgICAgICAgICAgICAgc3BhY2luZzogWzAsIDAsIDUsIDBdLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc2hhcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXBMYWJlbCArIFwiOiBcIiArIHRoaXMueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUcmFuc2FjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnhEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MEQyQzJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogTWF0aC5tYXgoMS41LCBtYXggKyAwLjUpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmlkTGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlSW5kaWNhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5Qb2ludExlbmd0aDogNSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0cnhEYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgPFJlYWN0SGlnaGNoYXJ0IHJlZj1cInRyeF9jaGFydFwiIGNvbmZpZz17Y29uZmlnfSAvPlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNoYXJ0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdEhpZ2hjaGFydCBmcm9tIFwicmVhY3QtaGlnaGNoYXJ0c1wiO1xyXG5pbXBvcnQge3Rha2VSaWdodH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5jbGFzcyBCbG9ja3RpbWVDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCA8IDE5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2hhcnQgPSB0aGlzLnJlZnMuY2hhcnQgPyB0aGlzLnJlZnMuY2hhcnQuY2hhcnQgOiBudWxsO1xyXG4gICAgICAgIGlmIChjaGFydCkge1xyXG4gICAgICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKG5leHRQcm9wcyk7XHJcbiAgICAgICAgICAgIGxldCBzZXJpZXMgPSBjaGFydC5zZXJpZXNbMF07XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gc2VyaWVzLnhEYXRhW3Nlcmllcy54RGF0YS5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXJpZXMueERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGFydCwgXCJzZXJpZXM6XCIsIHNlcmllcy5kYXRhLCBcImZpbmFsVmFsdWU6XCIsIGZpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tUaW1lcy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRbMF0gPiBmaW5hbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5hZGRQb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMueERhdGEubGVuZ3RoID49IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQub3B0aW9ucy5wbG90T3B0aW9ucy5jb2x1bW4uY29sb3JzID0gY29sb3JzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYXJ0LnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUaW1lc1tuZXh0UHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggLSAxXVswXSAhPT1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmxvY2tUaW1lc1t0aGlzLnByb3BzLmJsb2NrVGltZXMubGVuZ3RoIC0gMV1bMF0gfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrVGltZXMubGVuZ3RoICE9PSB0aGlzLnByb3BzLmJsb2NrVGltZXMubGVuZ3RoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGhlYWRfYmxvY2t9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgYmxvY2tUaW1lcy5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhWzBdID49IGhlYWRfYmxvY2sgLSAzMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGJsb2NrVGltZXMgJiYgYmxvY2tUaW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYmxvY2tUaW1lcyA9IHRha2VSaWdodChibG9ja1RpbWVzLCAzMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29sb3JzID0gYmxvY2tUaW1lcy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnlbMV0gPD0gNSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiIzUwRDJDMlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5WzFdIDw9IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjQTBEM0U4XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiNGQ0FCNTNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiNkZWI4NjlcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBibG9ja1RpbWVzLFxyXG4gICAgICAgICAgICBjb2xvcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBsZXQgdG9vbHRpcExhYmVsID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYmxvY2tzLmJsb2NrX3RpbWVcIik7XHJcblxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAwLCAwLCAwKVwiLFxyXG4gICAgICAgICAgICAgICAgc3BhY2luZzogWzAsIDAsIDUsIDBdLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc2hhcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXBMYWJlbCArIFwiOiBcIiArIHRoaXMueSArIFwic1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJsb2NrIHRpbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBibG9ja1RpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MEQyQzJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZUluZGljYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluUG9pbnRMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JCeVBvaW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYmxvY2tUaW1lcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIDxSZWFjdEhpZ2hjaGFydCByZWY9XCJjaGFydFwiIGNvbmZpZz17Y29uZmlnfSAvPlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja3RpbWVDaGFydDtcclxuIiwiaW1wb3J0IGJhc2VTbGljZSBmcm9tICcuL19iYXNlU2xpY2UuanMnO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuL3RvSW50ZWdlci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNsaWNlIG9mIGBhcnJheWAgd2l0aCBgbmAgZWxlbWVudHMgdGFrZW4gZnJvbSB0aGUgZW5kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gdGFrZS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbM11cbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10sIDIpO1xuICogLy8gPT4gWzIsIDNdXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdLCA1KTtcbiAqIC8vID0+IFsxLCAyLCAzXVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSwgMCk7XG4gKiAvLyA9PiBbXVxuICovXG5mdW5jdGlvbiB0YWtlUmlnaHQoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbiA9IChndWFyZCB8fCBuID09PSB1bmRlZmluZWQpID8gMSA6IHRvSW50ZWdlcihuKTtcbiAgbiA9IGxlbmd0aCAtIG47XG4gIHJldHVybiBiYXNlU2xpY2UoYXJyYXksIG4gPCAwID8gMCA6IG4sIGxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRha2VSaWdodDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcIi4vQXNzZXRzXCI7XHJcblxyXG5jbGFzcyBBc3NldHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0Fzc2V0U3RvcmUsIFNldHRpbmdzU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTVBBOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyTVBBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclVJQTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlclVJQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFzc2V0cyAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc3NldHNDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGxzIGZyb20gXCJjb21tb24vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtSYWRpbywgVGFibGUsIFNlbGVjdCwgSWNvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi9VdGlsaXR5L1NlYXJjaElucHV0XCI7XG5cbmxldCBhY2NvdW50U3RvcmFnZSA9IG5ldyBscyhcIl9fZ3JhcGhlbmVfX1wiKTtcblxuY2xhc3MgQXNzZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBjaGFpbklEID0gQXBpcy5pbnN0YW5jZSgpLmNoYWluX2lkO1xuICAgICAgICBpZiAoY2hhaW5JRCkgY2hhaW5JRCA9IGNoYWluSUQuc3Vic3RyKDAsIDgpO1xuICAgICAgICBlbHNlIGNoYWluSUQgPSBcIjQwMThkNzg0XCI7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYWluSUQsXG4gICAgICAgICAgICBmb3VuZExhc3Q6IGZhbHNlLFxuICAgICAgICAgICAgbGFzdEFzc2V0OiBcIlwiLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdGFsQXNzZXRzOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBhY2NvdW50U3RvcmFnZS5nZXQoYHRvdGFsQXNzZXRzXyR7Y2hhaW5JRH1gKSAhPSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudFN0b3JhZ2UuZ2V0KGB0b3RhbEFzc2V0c18ke2NoYWluSUR9YClcbiAgICAgICAgICAgICAgICAgICAgOiBjaGFpbklEICYmIGNoYWluSUQgPT09IFwiNDAxOGQ3ODRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAzMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDUwLCAvLyBtYWlubmV0IGhhcyAzMDAwKyBhc3NldHMsIG90aGVyIGNoYWlucyBtYXkgbm90IGhhdmUgdGhhdCBtYW55XG4gICAgICAgICAgICBhc3NldHNGZXRjaGVkOiAwLFxuICAgICAgICAgICAgYWN0aXZlRmlsdGVyOiBcIm1hcmtldFwiLFxuICAgICAgICAgICAgZmlsdGVyU2VhcmNoOiBwcm9wcy5maWx0ZXJTZWFyY2ggfHwgXCJcIixcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IFwiMjVcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3RvZ2dsZUZpbHRlciA9IHRoaXMuX3RvZ2dsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJvd3NDaGFuZ2UgPSB0aGlzLmhhbmRsZVJvd3NDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuYXNzZXRzLCB0aGlzLnByb3BzLmFzc2V0cykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9jaGVja0Fzc2V0cyh0aGlzLnByb3BzLmFzc2V0cywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmlsdGVyQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJTZWFyY2g6IChlLnRhcmdldC52YWx1ZSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd3NDaGFuZ2Uocm93cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IHJvd3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoZWNrQXNzZXRzKGFzc2V0cywgZm9yY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIGxldCBsYXN0QXNzZXQgPSBhc3NldHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmxhc3QoKTtcblxuICAgICAgICBpZiAoYXNzZXRzLnNpemUgPT09IDAgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIoXCJBXCIsIDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthc3NldHNGZXRjaGVkOiAxMDB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhc3NldHMuc2l6ZSA+PSB0aGlzLnN0YXRlLmFzc2V0c0ZldGNoZWQpIHtcbiAgICAgICAgICAgIEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIobGFzdEFzc2V0LnN5bWJvbCwgMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fzc2V0c0ZldGNoZWQ6IHRoaXMuc3RhdGUuYXNzZXRzRmV0Y2hlZCArIDk5fSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLnNpemUgPiB0aGlzLnN0YXRlLnRvdGFsQXNzZXRzKSB7XG4gICAgICAgICAgICBhY2NvdW50U3RvcmFnZS5zZXQoXG4gICAgICAgICAgICAgICAgYHRvdGFsQXNzZXRzXyR7dGhpcy5zdGF0ZS5jaGFpbklEfWAsXG4gICAgICAgICAgICAgICAgYXNzZXRzLnNpemVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hc3NldHNGZXRjaGVkID49IHRoaXMuc3RhdGUudG90YWxBc3NldHMgLSAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuYXNzZXRzICE9PSB0aGlzLnByb3BzLmFzc2V0cykge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBc3NldHMobmV4dFByb3BzLmFzc2V0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVG9BY2NvdW50KG5hbWVfb3JfaWQpIHtcbiAgICAgICAgaWYgKCFuYW1lX29yX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+LTwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e25hbWVfb3JfaWR9IC8+O1xuICAgIH1cblxuICAgIF90b2dnbGVGaWx0ZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uRmlsdGVyKHR5cGUsIGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W3R5cGVdOiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpfSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBbdHlwZV06IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUZpbHRlcn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1hcmtldHMuZmlsdGVyXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBjb3JlQXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFwiMS4zLjBcIik7XG5cbiAgICAgICAgbGV0IHBtO1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XG5cbiAgICAgICAgLy8gRGVmYXVsdCBzb3J0aW5nIG9mIHRoZSBhbnQgdGFibGUgaXMgZGVmaW5lZCB0aHJvdWdoIGRlZmF1bHRTb3J0T3JkZXIgcHJvcFxuXG4gICAgICAgIGlmIChhY3RpdmVGaWx0ZXIgPT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICAgIGNvbHVtbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiYXNjZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbCA+IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhLnN5bWJvbCA8IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9hc3NldC8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzc3VlckEgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5pc3N1ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJCID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGIuaXNzdWVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSkgaXNzdWVyQSA9IGlzc3VlckEuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJCKSBpc3N1ZXJCID0gaXNzdWVyQi5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEgPiBpc3N1ZXJCKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBIDwgaXNzdWVyQikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rVG9BY2NvdW50KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjdXJyZW50U3VwcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmN1cnJlbnRTdXBwbHkgPSBwYXJzZUZsb2F0KGEuY3VycmVudFN1cHBseSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiLmN1cnJlbnRTdXBwbHkgPSBwYXJzZUZsb2F0KGIuY3VycmVudFN1cHBseSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5jdXJyZW50U3VwcGx5ID4gYi5jdXJyZW50U3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmN1cnJlbnRTdXBwbHkgPCBiLmN1cnJlbnRTdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0sIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZWNvcmQuY3VycmVudFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3JlY29yZC5hc3NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtYXJrZXRJZFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9e1wibGluZS1jaGFydFwifSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmV4Y2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICFhLm1hcmtldF9hc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclNlYXJjaCkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3JlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3JlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJCVFNcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogYXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyOiBhc3NldC5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3VwcGx5OiBhc3NldC5keW5hbWljLmN1cnJlbnRfc3VwcGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJZDogbWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwibWFya2V0XCIpIHtcbiAgICAgICAgICAgIGNvbHVtbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiYXNjZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbCA+IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhLnN5bWJvbCA8IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9hc3NldC8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzc3VlckEgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5pc3N1ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJCID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGIuaXNzdWVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSkgaXNzdWVyQSA9IGlzc3VlckEuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJCKSBpc3N1ZXJCID0gaXNzdWVyQi5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEgPiBpc3N1ZXJCKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBIDwgaXNzdWVyQikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rVG9BY2NvdW50KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjdXJyZW50U3VwcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmN1cnJlbnRTdXBwbHkgPSBwYXJzZUZsb2F0KGEuY3VycmVudFN1cHBseSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiLmN1cnJlbnRTdXBwbHkgPSBwYXJzZUZsb2F0KGIuY3VycmVudFN1cHBseSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5jdXJyZW50U3VwcGx5ID4gYi5jdXJyZW50U3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmN1cnJlbnRTdXBwbHkgPCBiLmN1cnJlbnRTdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0sIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZWNvcmQuY3VycmVudFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3JlY29yZC5hc3NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtYXJrZXRJZFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9e1wibGluZS1jaGFydFwifSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmV4Y2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYml0YXNzZXRfZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWEuYml0YXNzZXRfZGF0YS5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclNlYXJjaCkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3JlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3JlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJCVFNcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogYXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyOiBhc3NldC5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3VwcGx5OiBhc3NldC5keW5hbWljLmN1cnJlbnRfc3VwcGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJZDogbWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwicHJlZGljdGlvblwiKSB7XG4gICAgICAgICAgICBwbSA9IGFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGEub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYml0YXNzZXRfZGF0YS5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKGEuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLm1haW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlclNlYXJjaC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29yZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQlRTXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTEwIG1lZGl1bS1vZmZzZXQtMSBtYWluLWNvbnRlbnQgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJsb2FkaW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIyMDBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY3RpdmVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fdG9nZ2xlRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJtYXJrZXRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLm1hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcInVzZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLnVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJwcmVkaWN0aW9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5wcmVkaWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxNTBweFwiLCBtYXJnaW5MZWZ0OiBcIjI0cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yb3dzT25QYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUm93c0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjEwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIyNVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNSByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiNTBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjEwMFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjIwMFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDAgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVGaWx0ZXIgPT0gXCJwcmVkaWN0aW9uXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmFzc2V0LmlkLnNwbGl0KFwiLlwiKVsyXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuZXhjaGFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYXNzZXQvJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmRpdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25kaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBweCAyMHB4IDVweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjE4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAgMjBweCA1cHggMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzc3VlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZHluYW1pY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW50X3N1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcnkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0tleT1cInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldHMuZGVmYXVsdFByb3BzID0ge1xuICAgIGFzc2V0czoge31cbn07XG5cbkFzc2V0cy5wcm9wVHlwZXMgPSB7XG4gICAgYXNzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBBY2NvdW50cyBmcm9tIFwiLi9BY2NvdW50c1wiO1xyXG5cclxuY2xhc3MgQWNjb3VudHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0FjY291bnRTdG9yZV19XHJcbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hBY2NvdW50czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuc2VhcmNoQWNjb3VudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5zZWFyY2hUZXJtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50cyAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50c0NvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IHtUYWJsZSwgU2VsZWN0LCBJY29uIGFzIEljb25TdHlsZUd1aWRlfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxuY2xhc3MgQWNjb3VudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IHByb3BzLnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IFwiMjVcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX3NlYXJjaEFjY291bnRzID0gZGVib3VuY2UodGhpcy5fc2VhcmNoQWNjb3VudHMsIDIwMCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3dzQ2hhbmdlID0gdGhpcy5oYW5kbGVSb3dzQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsYW5jZU9iamVjdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLnNlYXJjaEFjY291bnRzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hBY2NvdW50c1xyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZS5zZWFyY2hUZXJtICE9PSB0aGlzLnN0YXRlLnNlYXJjaFRlcm0gfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLmlzTG9hZGluZyAhPT0gdGhpcy5zdGF0ZS5pc0xvYWRpbmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblNlYXJjaENoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaEFjY291bnRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2VhcmNoQWNjb3VudHMoc2VhcmNoVGVybSkge1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLmFjY291bnRTZWFyY2goc2VhcmNoVGVybSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkFkZENvbnRhY3QoYWNjb3VudCwgZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBBY2NvdW50QWN0aW9ucy5hZGRBY2NvdW50Q29udGFjdChhY2NvdW50KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uUmVtb3ZlQ29udGFjdChhY2NvdW50LCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnJlbW92ZUFjY291bnRDb250YWN0KGFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSb3dzQ2hhbmdlKHJvd3MpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcm93c09uUGFnZTogcm93c1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfZW5zdXJlQmFsYW5jZU9iamVjdChvYmplY3RfaWQpIHtcclxuICAgICAgICBpZiAob2JqZWN0X2lkICYmIHR5cGVvZiBvYmplY3RfaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJhbGFuY2VPYmplY3RzW29iamVjdF9pZF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZU9iamVjdHNbb2JqZWN0X2lkXSA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRPYmplY3Qob2JqZWN0X2lkKS5nZXQoXCJiYWxhbmNlXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5iYWxhbmNlT2JqZWN0c1tvYmplY3RfaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsYW5jZU9iamVjdHNbb2JqZWN0X2lkXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3NlYXJjaEFjY291bnRzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtzZWFyY2hUZXJtfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29sdW1ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmlkXCIgLz5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWNjb3VudElkXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWNjb3VudElkXCIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImFzY2VuZFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFjY291bnRJZCA+IGIuYWNjb3VudElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuYWNjb3VudElkIDwgYi5hY2NvdW50SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj57aWR9PC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPEljb24gbmFtZT1cInVzZXJcIiB0aXRsZT1cImljb25zLnVzZXIuYWNjb3VudFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnRDb250YWN0c1wiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnRDb250YWN0c1wiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGFjdHMsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWN0cy5oYXMocmVjb3JkLmFjY291bnROYW1lKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmVDb250YWN0LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuYWNjb3VudE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbnVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5taW51c19jaXJjbGUucmVtb3ZlX2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25BZGRDb250YWN0LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuYWNjb3VudE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsdXMtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnBsdXNfY2lyY2xlLmFkZF9jb250YWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwiYWNjb3VudC5uYW1lXCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWNjb3VudE5hbWVcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhY2NvdW50TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFjY291bnROYW1lID4gYi5hY2NvdW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmFjY291bnROYW1lIDwgYi5hY2NvdW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogbmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2FjY291bnQvJHtuYW1lfS9vdmVydmlld2B9PntuYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhY2NvdW50QmFsYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnRCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5zdXJlQmFsYW5jZU9iamVjdChhLmFjY291bnRCYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbnN1cmVCYWxhbmNlT2JqZWN0KGIuYWNjb3VudEJhbGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iYWxhbmNlT2JqZWN0c1thLmFjY291bnRCYWxhbmNlXSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZU9iamVjdHNbYi5hY2NvdW50QmFsYW5jZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5iYWxhbmNlT2JqZWN0c1thLmFjY291bnRCYWxhbmNlXSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlT2JqZWN0c1tiLmFjY291bnRCYWxhbmNlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogYmFsYW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshYmFsYW5jZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm4vYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e2JhbGFuY2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cImFjY291bnQucGVyY2VudFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnRCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWNjb3VudEJhbGFuY2VQZXJjZW50YWdlXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5zdXJlQmFsYW5jZU9iamVjdChhLmFjY291bnRCYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbnN1cmVCYWxhbmNlT2JqZWN0KGIuYWNjb3VudEJhbGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iYWxhbmNlT2JqZWN0c1thLmFjY291bnRCYWxhbmNlXSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZU9iamVjdHNbYi5hY2NvdW50QmFsYW5jZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5iYWxhbmNlT2JqZWN0c1thLmFjY291bnRCYWxhbmNlXSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlT2JqZWN0c1tiLmFjY291bnRCYWxhbmNlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogYmFsYW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshYmFsYW5jZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm4vYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzUGVyY2VudGFnZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hBY2NvdW50cy5zaXplID4gMCAmJiBzZWFyY2hUZXJtICYmIHNlYXJjaFRlcm0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWFyY2hBY2NvdW50c1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFRoaXMgYXBwZWFycyB0byByZXR1cm4gZmFsc2UgbmVnYXRpdmVzLCBwZXJoYXBzIGZyb21cclxuICAgICAgICAgICAgICAgICAgICAgKiBjaGFuZ2VkIGFjY291bnQgbmFtZSBydWxlcyB3aGVuIG1vdmluZyB0byBncmFwaGVuZT8uIEVpdGhlclxyXG4gICAgICAgICAgICAgICAgICAgICAqIHdheSwgdHJ5aW5nIHRvIHJlc29sdmUgaW52YWxpZCBuYW1lcyBmYWlscyBpbiB0aGUgQ2hhaW5TdG9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgKiB3aGljaCBpbiB0dXJuIGJyZWFrcyB0aGUgQmluZFRvQ2hhaW5TdGF0ZSB3cmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFDaGFpblZhbGlkYXRpb24uaXNfYWNjb3VudF9uYW1lKGEsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXhPZihzZWFyY2hUZXJtKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSA+IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhIDwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG5hbWUsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IGN1cnJlbnRBY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY3VycmVudEFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgXCIxLjMuMFwiXSkgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRDb250YWN0czogQWNjb3VudFN0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY2NvdW50Q29udGFjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QmFsYW5jZTogYmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTEwIG1lZGl1bS1vZmZzZXQtMSBtYWluLWNvbnRlbnQgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJTZWFyY2hcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVGVybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIyMDBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjE1MHB4XCIsIG1hcmdpbkxlZnQ6IFwiMjRweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucm93c09uUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUm93c0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIxMFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwIHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMjVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNSByb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjUwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAgcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIxMDBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIyMDBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDAgcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoVGVybSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFRlcm0ubGVuZ3RoID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnN0YXJ0X3R5cGluZ190b19zZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTZweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dLZXk9XCJhY2NvdW50SWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogTnVtYmVyKHRoaXMuc3RhdGUucm93c09uUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BY2NvdW50cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzZWFyY2hBY2NvdW50czoge31cclxufTtcclxuXHJcbkFjY291bnRzLnByb3BUeXBlcyA9IHtcclxuICAgIHNlYXJjaEFjY291bnRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcclxuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBNYXJrZXRzIGZyb20gXCIuL01hcmtldHNcIjtcclxuXHJcbmNsYXNzIE1hcmtldHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmUsIEFzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV19XHJcbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9va3VwUmVzdWx0czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmxvb2t1cFJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRCYXNlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRCYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNYXJrZXRzIC8+XHJcbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtldHNDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE15TWFya2V0cyBmcm9tIFwiLi9NeU1hcmtldHNcIjtcclxuXHJcbmNsYXNzIE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XHJcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnJlZnMud3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlaWdodH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiByZWY9XCJ3cmFwcGVyXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dCBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgPE15TWFya2V0c1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEhlaWdodD17dGhpcy5zdGF0ZS5oZWlnaHQgPyB0aGlzLnN0YXRlLmhlaWdodCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tb3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPXt7cGFkZGluZ1RvcDogMCwgYm9yZGVyVG9wOiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSGVhZGVyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwic3RhclwiLCBpbmRleDogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIm1hcmtldFwiLCBpbmRleDogMn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcInF1b3RlU3VwcGx5XCIsIGluZGV4OiAzfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwidm9sXCIsIGluZGV4OiA0fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicHJpY2VcIiwgaW5kZXg6IDV9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJjaGFuZ2VcIiwgaW5kZXg6IDZ9XHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtldHM7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBdENBO0FBSEE7QUFpREE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFuQkE7QUFzQkE7Ozs7QUFoRkE7QUFDQTtBQWtGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFSQTtBQWlCQTs7OztBQXBFQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFWQTtBQVlBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUxBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFMQTtBQU1BO0FBQ0E7QUFSQTtBQURBO0FBWUE7QUFDQTtBQU9BO0FBeEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUF0QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BOzs7O0FBbFJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQWtSQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQVdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQURBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFGQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFsQ0E7QUFEQTtBQXZCQTtBQURBO0FBMkVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQXpGQTtBQURBO0FBREE7QUFEQTtBQTJHQTs7OztBQS9KQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBMEpBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFYQTtBQUNBO0FBY0E7Ozs7Ozs7QUNqakJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBSkE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7OztBQTNIQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUEySEE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBU0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBYkE7QUFEQTtBQURBO0FBREE7QUE4QkE7Ozs7QUE3RUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBeUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUUE7QUFiQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQU5BO0FBU0E7Ozs7QUFaQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQVNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFMQTtBQVpBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSEE7QUFOQTtBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVZBO0FBREE7QUFnQkE7QUFqQkE7QUFGQTtBQXVCQTs7OztBQXRMQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUFrTEE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFQQTtBQWVBOzs7O0FBbENBO0FBQ0E7QUFvQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFXQTtBQVhBO0FBY0E7Ozs7QUFqQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXhCQTtBQUNBO0FBMEJBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFmQTtBQXVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQXZDQTtBQXFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQVBBO0FBREE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBUEE7QUFEQTtBQWhEQTtBQW1FQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFMQTtBQUZBO0FBUEE7QUFEQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBTEE7QUFGQTtBQVBBO0FBREE7QUF0REE7QUE4RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBREE7QUFKQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUkE7QUFmQTtBQUpBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQW5CQTtBQURBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUE5QkE7QUFSQTtBQVRBO0FBSkE7QUFsQ0E7QUF4TUE7QUEwU0E7Ozs7QUExaUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBcWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNubUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUE1REE7QUFDQTtBQXNFQTtBQUdBOzs7O0FBM0pBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQTNEQTtBQUNBO0FBcUVBO0FBR0E7Ozs7QUFuSkE7QUFDQTtBQXFKQTs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBYkE7QUFGQTtBQWtCQTtBQWxCQTtBQXFCQTs7OztBQXhCQTtBQUNBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQTFCQTtBQTJCQTtBQUNBOzs7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFsQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBckJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQVhBO0FBQ0E7QUFjQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFsQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBckJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQVhBO0FBQ0E7QUFjQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFkQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBM0NBO0FBa0VBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFOQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQU5BO0FBUEE7QUFzQkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7QUFBQTtBQXpCQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQURBO0FBU0E7QUFUQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFQQTtBQUhBO0FBaUJBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBSkE7QUFqQ0E7QUFqQkE7QUF6Q0E7QUFiQTtBQURBO0FBeUhBO0FBQ0E7QUFDQTtBQUZBO0FBOUhBO0FBcUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF4TUE7QUFEQTtBQURBO0FBREE7QUF1TkE7Ozs7QUFybUJBO0FBQ0E7QUF1bUJBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFXQTtBQVhBO0FBY0E7Ozs7QUFqQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBWUE7QUFDQTs7O0FBQ0E7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFZQTtBQTlCQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBakJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBMUJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBRkE7QUFKQTtBQVdBO0FBN0JBO0FBQ0E7QUFnQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQU5BO0FBbkNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQTVEQTtBQURBO0FBREE7QUFEQTtBQXdFQTs7OztBQW5VQTtBQUNBO0FBcVVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFGQTtBQWlCQTtBQWpCQTtBQW9CQTs7OztBQXZCQTtBQUNBO0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQWtCQTs7OztBQXJEQTtBQUNBO0FBdURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=