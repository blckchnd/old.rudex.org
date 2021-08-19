(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[25],{

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

/***/ 2927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTransactions", function() { return RecentTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionWrapper", function() { return TransactionWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1974);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var components_Modal_JSONModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2526);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(410);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1863);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2897);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1957);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1836);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2117);
/* harmony import */ var _Blockchain_BlockTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2531);
/* harmony import */ var _Blockchain_OperationAnt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2928);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(717);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1854);
/* harmony import */ var _Utility_PendingBlock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2929);
/* harmony import */ var _services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2930);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(723);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









//import ps from "perfect-scrollbar";





var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainTypes"].operations;



var ops = Object.keys(operations);








var operation = new _Blockchain_OperationAnt__WEBPACK_IMPORTED_MODULE_17__["default"]();

var Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"].Option;



function compareOps(b, a) {
    if (a.block_num === b.block_num) {
        if (a.trx_in_block !== b.trx_in_block) {
            return a.trx_in_block - b.trx_in_block;
        }

        if (a.op_in_trx !== b.op_in_trx) {
            return a.op_in_trx - b.op_in_trx;
        }
        return a.virtual_op - b.virtual_op;
    } else {
        return a.block_num - b.block_num;
    }
}

var RecentTransactions = function (_React$Component) {
    _inherits(RecentTransactions, _React$Component);

    function RecentTransactions(props) {
        _classCallCheck(this, RecentTransactions);

        // fixme access to ES could be wrapped in a store or something else

        var _this = _possibleConstructorReturn(this, (RecentTransactions.__proto__ || Object.getPrototypeOf(RecentTransactions)).call(this));

        _this.closeJSONModal = function () {
            _this.setState({ visibleId: "" });
        };

        _this.state = {
            limit: props.limit,
            fetchingAccountHistory: false,
            headerHeight: 85,
            filter: "all",
            accountHistoryError: false,
            rows: [],
            showModal: false,
            esNodeCustom: false,
            esNode: api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST.length > 0 ? api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST[0].url : null,
            visibleId: ""
        };
        _this.getDataSource = _this.getDataSource.bind(_this);

        _this.useCustom = counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.export_modal.use_custom");
        // https://eswrapper.bitshares.eu/ is not alive
        // https://wrapper.elasticsearch.bitshares.ws/ is not alive
        // http://bts-es.clockwork.gr:5000/ is alive
        // https://explorer.bitshares-kibana.info/ is not alive
        // http://185.208.208.184:5000/es/ is alive
        _this.showExportModal = _this.showExportModal.bind(_this);
        _this.hideExportModal = _this.hideExportModal.bind(_this);
        _this.esNodeChange = _this.esNodeChange.bind(_this);
        _this._generateCSV = _this._generateCSV.bind(_this);
        return _this;
    }

    _createClass(RecentTransactions, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.fullHeight) {
                var t = this.refs.transactions;
                //ps.initialize(t);

                this._setHeaderHeight();
            }
        }
    }, {
        key: "esNodeChange",
        value: function esNodeChange(e) {
            var newValue = null;
            if (e.target) {
                newValue = e.target.value;
            } else {
                newValue = e;
            }
            if (newValue == this.useCustom) {
                this.setState({
                    esNode: "",
                    esNodeCustom: true
                });
            } else {
                this.setState({
                    esNode: newValue
                });
            }
        }
    }, {
        key: "showExportModal",
        value: function showExportModal() {
            this.setState({
                showModal: true
            });
        }
    }, {
        key: "hideExportModal",
        value: function hideExportModal() {
            this.setState({
                showModal: false
            });
        }
    }, {
        key: "_setHeaderHeight",
        value: function _setHeaderHeight() {
            var height = this.refs.header.offsetHeight;

            if (height !== this.state.headerHeight) {
                this.setState({
                    headerHeight: height
                });
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(this.props.accountsList, nextProps.accountsList)) return true;
            if (this.props.maxHeight !== nextProps.maxHeight) return true;
            if (this.state.headerHeight !== nextState.headerHeight) return true;
            if (this.state.filter !== nextState.filter) return true;
            if (this.props.customFilter) {
                if (!common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(this.props.customFilter.fields, nextProps.customFilter.fields) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(this.props.customFilter.values, nextProps.customFilter.values)) {
                    return true;
                }
            }

            if (this.props.maxHeight !== nextProps.maxHeight) return true;
            if (nextState.limit !== this.state.limit || nextState.fetchingAccountHistory !== this.state.fetchingAccountHistory) return true;
            for (var key = 0; key < nextProps.accountsList.length; ++key) {
                var npa = nextProps.accountsList[key];
                var nsa = this.props.accountsList[key];
                if (npa && nsa && npa.get("history") !== nsa.get("history")) return true;
            }
            if (this.state.showModal !== nextState.showModal) return true;
            if (this.state.esNode !== nextState.esNode) return true;
            if (this.state.esNodeCustom !== nextState.esNodeCustom) return true;
            if (this.state.visibleId !== nextState.visibleId) return true;
            return false;
        }
    }, {
        key: "_onIncreaseLimit",
        value: function _onIncreaseLimit() {
            this.setState({
                limit: this.state.limit + 30
            });
        }
    }, {
        key: "_getHistory",
        value: function _getHistory(accountsList, filterOp, customFilter) {
            var history = [];
            var seen_ops = new Set();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = accountsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var account = _step.value;

                    if (account) {
                        var h = account.get("history");
                        if (h) history = history.concat(h.toJS().filter(function (op) {
                            return !seen_ops.has(op.id) && seen_ops.add(op.id);
                        }));
                    }
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

            if (filterOp) {
                history = history.filter(function (a) {
                    return a.op[0] === operations[filterOp];
                });
            }

            if (customFilter) {
                history = history.filter(function (a) {
                    var finalValue = customFilter.fields.reduce(function (final, filter) {
                        switch (filter) {
                            case "asset_id":
                                return final && a.op[1]["amount"][filter] === customFilter.values[filter];
                                break;
                            default:
                                return final && a.op[1][filter] === customFilter.values[filter];
                                break;
                        }
                    }, true);
                    return finalValue;
                });
            }
            return history;
        }
    }, {
        key: "_generateCSV",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(exportType) {
                var AHE;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (false) {}
                                _context.prev = 1;
                                AHE = new _services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__["default"]();


                                this.setState({
                                    fetchingAccountHistory: true,
                                    showModal: false
                                });

                                _context.next = 6;
                                return AHE.generateCSV(this.props.accountsList, this.state.esNode, exportType);

                            case 6:

                                this.setState({
                                    fetchingAccountHistory: false,
                                    accountHistoryError: null
                                });
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](1);

                                console.error(_context.t0);
                                this.setState({
                                    fetchingAccountHistory: false,
                                    accountHistoryError: _context.t0,
                                    esNodeCustom: false,
                                    esNode: api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST.length > 0 ? api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST[0].url : null
                                });

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 9]]);
            }));

            function _generateCSV(_x) {
                return _ref.apply(this, arguments);
            }

            return _generateCSV;
        }()
    }, {
        key: "_onChangeFilter",
        value: function _onChangeFilter(value) {
            this.setState({
                filter: value
            });
        }
    }, {
        key: "openJSONModal",
        value: function openJSONModal(id) {
            this.setState({ visibleId: id });
        }
    }, {
        key: "getDataSource",
        value: function getDataSource(o, current_account_id) {
            var _this2 = this;

            var fee = o.op[1].fee;
            var trxTypes = counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("transaction.trxTypes");
            var info = operation.getColumn(o.op, current_account_id, o.block_num, o.result, this.props.marketDirections);
            fee.amount = parseInt(fee.amount, 10);
            var dynGlobalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainStore"].getObject("2.1.0");
            var lastIrreversibleBlockNum = dynGlobalObject.get("last_irreversible_block_num");
            return {
                key: o.id,
                id: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            className: "cursor-pointer",
                            onClick: function onClick() {
                                return _this2.openJSONModal(o.id);
                            }
                        },
                        o.id,
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Icon"], { type: "file-search" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Modal_JSONModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        visible: this.state.visibleId === o.id,
                        operation: o.op,
                        title: trxTypes[ops[o.op[0]] || ""],
                        hideModal: this.closeJSONModal
                    })
                ),
                type: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"],
                    {
                        className: "inline-block",
                        "data-place": "bottom",
                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("tooltip.show_block", {
                            block: common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(o.block_num, 0)
                        }),
                        to: "/block/" + o.block_num + "/" + o.trx_in_block
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("label", info.color || "info") },
                        trxTypes[ops[o.op[0]]]
                    )
                ),
                info: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            info.column
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { fontSize: 14, paddingTop: 5 } },
                        o.block_num > lastIrreversibleBlockNum ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PendingBlock__WEBPACK_IMPORTED_MODULE_20__["default"], { blockNumber: o.block_num }) : null
                    )
                ),
                fee: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__["default"], { amount: fee.amount, asset: fee.asset_id }),
                time: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_BlockTime__WEBPACK_IMPORTED_MODULE_16__["default"], { block_number: o.block_num, fullDate: true })
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                accountsList = _props.accountsList,
                compactView = _props.compactView,
                filter = _props.filter,
                customFilter = _props.customFilter,
                style = _props.style,
                maxHeight = _props.maxHeight;
            var _state = this.state,
                limit = _state.limit,
                headerHeight = _state.headerHeight;

            var current_account_id = accountsList.length === 1 && accountsList[0] ? accountsList[0].get("id") : null;
            var history = this._getHistory(accountsList, this.props.showFilters && this.state.filter !== "all" ? this.state.filter : filter, customFilter).sort(compareOps);
            var historyCount = history.length;

            style = style ? style : { width: "100%", height: "100%" };

            var options = null;
            if (true) {
                options = ["all", "transfer", "limit_order_create", "limit_order_cancel", "fill_order", "account_create", "account_update", "asset_create", "witness_withdraw_pay", "vesting_balance_withdraw"].map(function (type) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        Option,
                        { value: type, key: type },
                        counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("transaction.trxTypes." + type)
                    );
                });
            }

            var hideFee = false;

            var display_history = history.length ? history.slice(0, limit).map(function (o) {
                return _this3.getDataSource(o, current_account_id);
            }) : [];
            var action = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "total-value", key: "total_value" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: { textAlign: "center" } },
                    "\xA0"
                )
            );

            var footer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                    { onClick: function onClick() {
                            return _this3._generateCSV(_services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__["FULL"]);
                        }, type: "primary" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.full_report" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                    {
                        onClick: function onClick() {
                            return _this3._generateCSV(_services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__["COINBASE"]);
                        },
                        type: "primary"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.coinbase_report" })
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "recent-transactions no-overflow", style: style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Modal"],
                    {
                        wrapClassName: "modal--transaction-confirm",
                        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.title" }),
                        visible: this.state.showModal,
                        id: "transaction_confirm_modal",
                        ref: "modal",
                        footer: footer,
                        overlay: true,
                        onCancel: this.hideExportModal,
                        noCloseBtn: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.description" })
                    ),
                    this.state.esNodeCustom ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                        type: "text",
                        value: this.state.esNode,
                        onChange: this.esNodeChange
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"],
                        {
                            showSearch: true,
                            value: this.state.esNode,
                            onChange: this.esNodeChange,
                            style: {
                                width: "100%"
                            }
                        },
                        api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST.concat([{ url: this.useCustom }]).map(function (wrapper) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"].Option,
                                { key: wrapper.url },
                                wrapper.url
                            );
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "generic-bordered-box" },
                    this.props.dashboard ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { ref: "header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "block-content-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                this.props.title ? this.props.title : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.recent" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "header-selector" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "filter inline-block" },
                            this.props.showFilters ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("tooltip.filter_ops")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"],
                                    {
                                        style: {
                                            width: "210px"
                                        },
                                        value: this.state.filter,
                                        onChange: this._onChangeFilter.bind(this)
                                    },
                                    options
                                )
                            ) : null,
                            historyCount > 0 && this.props.dashboard && this.state.esNode !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("transaction.csv_tip")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        className: "inline-block iconLinkAndLabel",
                                        onClick: this.showExportModal,
                                        style: {
                                            marginLeft: "1rem"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], { name: "excel", size: "1x" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.download_history" })
                                )
                            ) : null
                        ),
                        this.state.accountHistoryError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "has-error",
                                style: { paddingLeft: "0.75rem" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.history_error" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        withTransition: true,
                        className: "table table-striped " + (compactView ? "compact" : "") + (this.props.dashboard ? " dashboard-table table-hover" : ""),
                        header: [{
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.id" }),
                            dataIndex: "id",
                            align: "left",
                            render: function render(item) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { style: { whiteSpace: "nowrap" } },
                                    item
                                );
                            }
                        }, !compactView ? {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.type" }),
                            dataIndex: "type",
                            align: "left"
                        } : {}, {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.info" }),
                            dataIndex: "info",
                            align: "left",
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
                        }, !hideFee ? {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.fee" }),
                            dataIndex: "fee",
                            align: "left",
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
                        } : {}, {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                style: { whiteSpace: "nowrap" },
                                content: "account.transactions.time"
                            }),
                            dataIndex: "time",
                            render: function render(item) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { style: { whiteSpace: "nowrap" } },
                                    item
                                );
                            }
                        }],
                        rows: display_history,
                        label: "utility.total_x_operations",
                        extraRow: action
                    }),
                    this.state.fetchingAccountHistory && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], null)
                )
            );
        }
    }]);

    return RecentTransactions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RecentTransactions.propTypes = {
    accountsList: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList.isRequired,
    compactView: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
    maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
    fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
    showFilters: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
RecentTransactions.defaultProps = {
    limit: 25,
    maxHeight: 500,
    fullHeight: false,
    showFilters: false
};

RecentTransactions = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentTransactions);

RecentTransactions = Object(alt_react__WEBPACK_IMPORTED_MODULE_19__["connect"])(RecentTransactions, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"]];
    },
    getProps: function getProps() {
        return {
            marketDirections: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().marketDirections
        };
    }
});

var TransactionWrapper = function (_React$Component2) {
    _inherits(TransactionWrapper, _React$Component2);

    function TransactionWrapper() {
        _classCallCheck(this, TransactionWrapper);

        return _possibleConstructorReturn(this, (TransactionWrapper.__proto__ || Object.getPrototypeOf(TransactionWrapper)).apply(this, arguments));
    }

    _createClass(TransactionWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "wrapper" },
                this.props.children(this.props)
            );
        }
    }]);

    return TransactionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TransactionWrapper.propTypes = {
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    to: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    fromAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired
};
TransactionWrapper.defaultProps = {
    asset: "1.3.0"
};

TransactionWrapper = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(TransactionWrapper);



/***/ }),

/***/ 2928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2117);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1836);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2418);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2419);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1974);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2444);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(410);
/* harmony import */ var chain_account_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2440);
/* harmony import */ var chain_account_constants__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chain_account_constants__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MemoText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2445);
/* harmony import */ var _ProposedOperation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2441);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2344);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


















var ShortObjectId = function ShortObjectId(_ref) {
    var objectId = _ref.objectId;

    if (typeof objectId === "string") {
        var parts = objectId.split(".");
        var length = parts.length;

        if (length > 0) return "#" + parts[length - 1];
    }
    return objectId;
};

var Operation = function () {
    function Operation() {
        _classCallCheck(this, Operation);
    }

    _createClass(Operation, [{
        key: "linkToAccount",
        value: function linkToAccount(name_or_id) {
            if (!name_or_id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "-"
            );
            return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].is_object_id(name_or_id) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__["default"], { account: name_or_id }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                { to: "/account/" + name_or_id },
                name_or_id
            );
        }
    }, {
        key: "linkToAsset",
        value: function linkToAsset(symbol_or_id) {
            if (!symbol_or_id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "-"
            );
            return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].is_object_id(symbol_or_id) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__["default"], { asset: symbol_or_id }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                { to: "/asset/" + symbol_or_id },
                symbol_or_id
            );
        }
    }, {
        key: "getColumn",
        value: function getColumn(op, current, block, result, marketDirections) {
            var _this = this;

            var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainTypes"].operations;

            var ops = Object.keys(operations);
            var listings = chain_account_constants__WEBPACK_IMPORTED_MODULE_10___default.a.account_listing;
            var column = null,
                color = "info";
            var memoComponent = null;

            switch (ops[op[0]] // For a list of trx types, see chain_types.coffee
            ) {case "transfer":
                    if (op[1].memo) {
                        memoComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MemoText__WEBPACK_IMPORTED_MODULE_11__["default"], { memo: op[1].memo });
                    }

                    color = "success";
                    op[1].amount.amount = parseFloat(op[1].amount.amount);

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.transfer",
                            keys: [{
                                type: "account",
                                value: op[1].from,
                                arg: "from"
                            }, {
                                type: "amount",
                                value: op[1].amount,
                                arg: "amount",
                                decimalOffset: op[1].amount.asset_id === "1.3.0" ? 5 : null
                            }, { type: "account", value: op[1].to, arg: "to" }]
                        }),
                        memoComponent
                    );

                    break;

                case "limit_order_create":
                    color = "warning";
                    var o = op[1];
                    /*
                    marketName = OPEN.ETH_USD
                    if (!inverted) (default)
                        price = USD / OPEN.ETH
                        buy / sell OPEN.ETH
                        isBid = amount_to_sell.asset_symbol = USD
                        amount = to_receive
                    if (inverted)
                        price =  OPEN.ETH / USD
                        buy / sell USD
                        isBid = amount_to_sell.asset_symbol = OPEN.ETH
                        amount =
                    */
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"].Wrapper,
                            {
                                base: o.min_to_receive.asset_id,
                                quote: o.amount_to_sell.asset_id
                            },
                            function (_ref2) {
                                var base = _ref2.base,
                                    quote = _ref2.quote;

                                var _marketUtils$getMarke = common_market_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getMarketName(base, quote),
                                    marketName = _marketUtils$getMarke.marketName,
                                    first = _marketUtils$getMarke.first,
                                    second = _marketUtils$getMarke.second;

                                var inverted = marketDirections.get(marketName);
                                // const paySymbol = base.get("symbol");
                                // const receiveSymbol = quote.get("symbol");

                                var isBid = o.amount_to_sell.asset_id === (inverted ? first.get("id") : second.get("id"));

                                var priceBase = isBid ? o.amount_to_sell : o.min_to_receive;
                                var priceQuote = isBid ? o.min_to_receive : o.amount_to_sell;
                                var amount = isBid ? op[1].min_to_receive : op[1].amount_to_sell;
                                var orderId = result ? typeof result[1] == "string" ? "#" + result[1].substring(4) : "" : "";

                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    string: isBid ? "operation.limit_order_buy" : "operation.limit_order_sell",
                                    keys: [{
                                        type: "account",
                                        value: op[1].seller,
                                        arg: "account"
                                    }, {
                                        type: "amount",
                                        value: amount,
                                        arg: "amount"
                                    }, {
                                        type: "price",
                                        value: {
                                            base: priceBase,
                                            quote: priceQuote
                                        },
                                        arg: "price"
                                    }],
                                    params: {
                                        order: orderId
                                    }
                                });
                            }
                        )
                    );
                    break;

                case "limit_order_cancel":
                    color = "cancel";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.limit_order_cancel",
                            keys: [{
                                type: "account",
                                value: op[1].fee_paying_account,
                                arg: "account"
                            }],
                            params: {
                                order: op[1].order.substring(4)
                            }
                        })
                    );
                    break;

                case "call_order_update":
                    color = "warning";

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.call_order_update",
                            keys: [{
                                type: "account",
                                value: op[1].funding_account,
                                arg: "account"
                            }, {
                                type: "asset",
                                value: op[1].delta_debt.asset_id,
                                arg: "debtSymbol"
                            }, {
                                type: "amount",
                                value: op[1].delta_debt,
                                arg: "debt"
                            }, {
                                type: "amount",
                                value: op[1].delta_collateral,
                                arg: "collateral"
                            }]
                        })
                    );
                    break;

                case "key_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.create_key"
                        })
                    );
                    break;

                case "account_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.reg_account",
                        keys: [{
                            type: "account",
                            value: op[1].registrar,
                            arg: "registrar"
                        }, {
                            type: "account",
                            value: op[1].name,
                            arg: "new_account"
                        }]
                    });
                    break;

                case "account_update":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.update_account",
                            keys: [{
                                type: "account",
                                value: op[1].account,
                                arg: "account"
                            }]
                        })
                    );

                    break;

                case "account_whitelist":
                    var label = op[1].new_listing === listings.no_listing ? "unlisted_by" : op[1].new_listing === listings.white_listed ? "whitelisted_by" : "blacklisted_by";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation." + label,
                            keys: [{
                                type: "account",
                                value: op[1].authorizing_account,
                                arg: "lister"
                            }, {
                                type: "account",
                                value: op[1].account_to_list,
                                arg: "listee"
                            }]
                        })
                    );
                    break;

                case "account_upgrade":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: op[1].upgrade_to_lifetime_member ? "operation.lifetime_upgrade_account" : "operation.annual_upgrade_account",
                            keys: [{
                                type: "account",
                                value: op[1].account_to_upgrade,
                                arg: "account"
                            }]
                        })
                    );
                    break;

                case "account_transfer":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.account_transfer",
                            keys: [{
                                type: "account",
                                value: op[1].account_id,
                                arg: "account"
                            }, {
                                type: "account",
                                value: op[1].new_owner,
                                arg: "to"
                            }]
                        })
                    );
                    break;

                case "asset_create":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.asset_create",
                            keys: [{
                                type: "account",
                                value: op[1].issuer,
                                arg: "account"
                            }, {
                                type: "asset",
                                value: op[1].symbol,
                                arg: "asset"
                            }]
                        })
                    );
                    break;

                case "asset_update":
                case "asset_update_bitasset":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.asset_update",
                            keys: [{
                                type: "account",
                                value: op[1].issuer,
                                arg: "account"
                            }, {
                                type: "asset",
                                value: op[1].asset_to_update,
                                arg: "asset"
                            }]
                        })
                    );
                    break;

                case "asset_update_feed_producers":
                    color = "warning";

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.asset_update_feed_producers",
                            keys: [{
                                type: "account",
                                value: op[1].issuer,
                                arg: "account"
                            }, {
                                type: "asset",
                                value: op[1].asset_to_update,
                                arg: "asset"
                            }]
                        })
                    );
                    break;

                case "asset_issue":
                    color = "warning";

                    if (op[1].memo) {
                        memoComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MemoText__WEBPACK_IMPORTED_MODULE_11__["default"], { memo: op[1].memo });
                    }

                    op[1].asset_to_issue.amount = parseInt(op[1].asset_to_issue.amount, 10);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.asset_issue",
                            keys: [{
                                type: "account",
                                value: op[1].issuer,
                                arg: "account"
                            }, {
                                type: "amount",
                                value: op[1].asset_to_issue,
                                arg: "amount"
                            }, {
                                type: "account",
                                value: op[1].issue_to_account,
                                arg: "to"
                            }]
                        }),
                        memoComponent
                    );
                    break;

                case "asset_fund_fee_pool":
                    color = "warning";

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.asset_fund_fee_pool",
                            keys: [{
                                type: "account",
                                value: op[1].from_account,
                                arg: "account"
                            }, {
                                type: "asset",
                                value: op[1].asset_id,
                                arg: "asset"
                            }, {
                                type: "amount",
                                value: {
                                    amount: op[1].amount,
                                    asset_id: "1.3.0"
                                },
                                arg: "amount"
                            }]
                        })
                    );
                    break;

                case "asset_settle":
                    color = "warning";
                    var baseAmount = op[1].amount;
                    var instantSettleCode = 2;
                    if (result && result[0] == instantSettleCode) {
                        var quoteAmount = result[1];
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.asset_settle_instant",
                                keys: [{
                                    type: "account",
                                    value: op[1].account,
                                    arg: "account"
                                }, {
                                    type: "amount",
                                    value: baseAmount,
                                    arg: "amount"
                                }, {
                                    type: "price",
                                    value: {
                                        base: baseAmount,
                                        quote: quoteAmount
                                    },
                                    arg: "price"
                                }]
                            })
                        );
                    } else {
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.asset_settle",
                                keys: [{
                                    type: "account",
                                    value: op[1].account,
                                    arg: "account"
                                }, {
                                    type: "amount",
                                    value: op[1].amount,
                                    arg: "amount"
                                }]
                            })
                        );
                    }

                    break;

                case "asset_global_settle":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.asset_global_settle",
                            keys: [{
                                type: "account",
                                value: op[1].issuer,
                                arg: "account"
                            }, {
                                type: "asset",
                                value: op[1].asset_to_settle,
                                arg: "asset"
                            }, {
                                type: "price",
                                value: op[1].settle_price,
                                arg: "price"
                            }]
                        })
                    );
                    break;

                case "asset_publish_feed":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.publish_feed",
                            keys: [{
                                type: "account",
                                value: op[1].publisher,
                                arg: "account"
                            }, {
                                type: "price",
                                value: op[1].feed.settlement_price,
                                arg: "price"
                            }]
                        })
                    );
                    break;

                case "witness_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.witness_create",
                            keys: [{
                                type: "account",
                                value: op[1].witness_account,
                                arg: "account"
                            }]
                        })
                    );

                    break;

                case "witness_update":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.witness_update",
                            keys: [{
                                type: "account",
                                value: op[1].witness_account,
                                arg: "account"
                            }]
                        })
                    );

                    break;

                case "witness_withdraw_pay":
                    console.log("witness_withdraw_pay:", op[1].witness_account);
                    if (current === op[1].witness_account) {
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.witness_pay"
                            }),
                            "\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                amount: op[1].amount,
                                asset: "1.3.0"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.to"
                            }),
                            "\xA0",
                            this.linkToAccount(op[1].witness_account)
                        );
                    } else {
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.received"
                            }),
                            "\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                amount: op[1].amount,
                                asset: "1.3.0"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.from"
                            }),
                            "\xA0",
                            this.linkToAccount(op[1].witness_account)
                        );
                    }
                    break;

                case "proposal_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.proposal_create",
                                keys: [{
                                    type: "account",
                                    value: op[1].fee_paying_account,
                                    arg: "account"
                                }, {
                                    value: result ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortObjectId, {
                                        objectId: result[1]
                                    }) : "",
                                    arg: "proposal"
                                }]
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            op[1].proposed_ops.map(function (o, index) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProposedOperation__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    op: o.op,
                                    key: index,
                                    index: index,
                                    inverted: false,
                                    hideFee: true,
                                    hideOpLabel: true,
                                    hideDate: true,
                                    proposal: true
                                });
                            })
                        )
                    );
                    break;

                case "proposal_update":
                    var fields = ["active_approvals_to_add", "active_approvals_to_remove", "owner_approvals_to_add", "owner_approvals_to_remove", "key_approvals_to_add", "key_approvals_to_remove"];
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.proposal_update",
                                keys: [{
                                    type: "account",
                                    value: op[1].fee_paying_account,
                                    arg: "account"
                                }, {
                                    value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortObjectId, {
                                        objectId: op[1].proposal
                                    }),
                                    arg: "proposal"
                                }]
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "proposal-update" },
                            fields.map(function (field) {
                                if (op[1][field].length) {
                                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { key: field },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                            content: "proposal.updated." + field
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "ul",
                                            null,
                                            op[1][field].map(function (value) {
                                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    { key: value },
                                                    field.startsWith("key") ? value : _this.linkToAccount(value)
                                                );
                                            })
                                        )
                                    );
                                } else return null;
                            })
                        )
                    );
                    break;

                case "proposal_delete":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.proposal_delete",
                            keys: [{
                                type: "account",
                                value: op[1].fee_paying_account,
                                arg: "account"
                            }, {
                                value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortObjectId, {
                                    objectId: op[1].proposal
                                }),
                                arg: "proposal"
                            }]
                        })
                    );
                    break;

                case "withdraw_permission_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_create"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].authorized_account)
                    );
                    break;

                case "withdraw_permission_update":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_update"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].authorized_account)
                    );
                    break;

                case "withdraw_permission_claim":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_claim"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_to_account)
                    );
                    break;

                case "withdraw_permission_delete":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_delete"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].authorized_account)
                    );
                    break;

                case "fill_order":
                    color = "success";
                    o = op[1];

                    /*
                    marketName = OPEN.ETH_USD
                    if (!inverted) (default)
                        price = USD / OPEN.ETH
                        buy / sell OPEN.ETH
                        isBid = amount_to_sell.asset_symbol = USD
                        amount = to_receive
                    if (inverted)
                        price =  OPEN.ETH / USD
                        buy / sell USD
                        isBid = amount_to_sell.asset_symbol = OPEN.ETH
                        amount =
                         const {marketName, first, second} = marketUtils.getMarketName(base, quote);
                        const inverted = this.props.marketDirections.get(marketName);
                        // const paySymbol = base.get("symbol");
                        // const receiveSymbol = quote.get("symbol");
                         const isBid = o.amount_to_sell.asset_id === (inverted ? first.get("id") : second.get("id"));
                         let priceBase = (isBid) ? o.amount_to_sell : o.min_to_receive;
                        let priceQuote = (isBid) ? o.min_to_receive : o.amount_to_sell;
                        const amount = isBid ? op[1].min_to_receive : op[1].amount_to_sell;
                    */

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"].Wrapper,
                            {
                                base: o.receives.asset_id,
                                quote: o.pays.asset_id
                            },
                            function (_ref3) {
                                var base = _ref3.base,
                                    quote = _ref3.quote;

                                var _marketUtils$getMarke2 = common_market_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getMarketName(base, quote),
                                    marketName = _marketUtils$getMarke2.marketName,
                                    first = _marketUtils$getMarke2.first,
                                    second = _marketUtils$getMarke2.second;

                                var inverted = marketDirections.get(marketName);
                                var isBid = o.pays.asset_id === (inverted ? first.get("id") : second.get("id"));

                                // const paySymbol = base.get("symbol");
                                // const receiveSymbol = quote.get("symbol");
                                var priceBase = isBid ? o.receives : o.pays;
                                var priceQuote = isBid ? o.pays : o.receives;
                                var amount = isBid ? o.receives : o.pays;
                                var receivedAmount = o.fee.asset_id === amount.asset_id ? amount.amount - o.fee.amount : amount.amount;

                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    string: "operation.fill_order_" + (isBid ? "buy" : "sell"),
                                    keys: [{
                                        type: "account",
                                        value: op[1].account_id,
                                        arg: "account"
                                    }, {
                                        type: "amount",
                                        value: {
                                            amount: receivedAmount,
                                            asset_id: amount.asset_id
                                        },
                                        arg: "amount"
                                    }, {
                                        type: "price",
                                        value: {
                                            base: priceBase,
                                            quote: priceQuote
                                        },
                                        arg: "price"
                                    }],
                                    params: {
                                        order: o.order_id.substring(4)
                                    }
                                });
                            }
                        )
                    );
                    break;

                case "global_parameters_update":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.global_parameters_update"
                        })
                    );
                    break;

                case "vesting_balance_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "\xA0",
                        this.linkToAccount(op[1].creator),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.vesting_balance_create"
                        }),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: op[1].amount.amount,
                            asset: op[1].amount.asset_id
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].owner)
                    );
                    break;

                case "vesting_balance_withdraw":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.vesting_balance_withdraw",
                            keys: [{
                                type: "account",
                                value: op[1].owner,
                                arg: "account"
                            }, {
                                type: "amount",
                                value: op[1].amount,
                                arg: "amount"
                            }]
                        })
                    );
                    break;

                case "worker_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.worker_create",
                            keys: [{
                                type: "account",
                                value: op[1].owner,
                                arg: "account"
                            }, {
                                type: "amount",
                                value: {
                                    amount: op[1].daily_pay,
                                    asset_id: "1.3.0"
                                },
                                arg: "pay"
                            }],
                            params: {
                                name: op[1].name
                            }
                        })
                    );
                    break;

                case "balance_claim":
                    color = "success";
                    op[1].total_claimed.amount = parseInt(op[1].total_claimed.amount, 10);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.balance_claim",
                            keys: [{
                                type: "account",
                                value: op[1].deposit_to_account,
                                arg: "account"
                            }, {
                                type: "amount",
                                value: op[1].total_claimed,
                                arg: "amount"
                            }]
                        })
                    );
                    break;

                case "committee_member_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.committee_member_create"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].committee_member_account)
                    );
                    break;

                case "transfer_to_blind":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.linkToAccount(op[1].from),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.sent"
                        }),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: op[1].amount.amount,
                            asset: op[1].amount.asset_id
                        })
                    );
                    break;

                case "transfer_from_blind":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.linkToAccount(op[1].to),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.received"
                        }),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: op[1].amount.amount,
                            asset: op[1].amount.asset_id
                        })
                    );
                    break;

                case "asset_claim_fees":
                    color = "success";
                    op[1].amount_to_claim.amount = parseInt(op[1].amount_to_claim.amount, 10);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.linkToAccount(op[1].issuer),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"].Wrapper,
                            {
                                asset: op[1].amount_to_claim.asset_id
                            },
                            function (_ref4) {
                                var asset = _ref4.asset;
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    string: "transaction.asset_claim_fees",
                                    keys: [{
                                        type: "amount",
                                        value: op[1].amount_to_claim,
                                        arg: "balance_amount"
                                    }, {
                                        type: "asset",
                                        value: asset.get("id"),
                                        arg: "asset"
                                    }]
                                });
                            }
                        )
                    );
                    break;

                case "custom":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.custom"
                        })
                    );
                    break;

                case "asset_reserve":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.asset_reserve",
                            keys: [{
                                type: "account",
                                value: op[1].payer,
                                arg: "account"
                            }, {
                                type: "amount",
                                value: op[1].amount_to_reserve,
                                arg: "amount"
                            }]
                        })
                    );
                    break;

                case "committee_member_update_global_parameters":
                    console.log("committee_member_update_global_parameters op:", op);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.committee_member_update_global_parameters",
                            keys: [{
                                type: "account",
                                value: "1.2.0",
                                arg: "account"
                            }]
                        })
                    );
                    break;

                case "override_transfer":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.override_transfer",
                        keys: [{
                            type: "account",
                            value: op[1].issuer,
                            arg: "issuer"
                        }, { type: "account", value: op[1].from, arg: "from" }, { type: "account", value: op[1].to, arg: "to" }, { type: "amount", value: op[1].amount, arg: "amount" }]
                    });
                    break;

                case "asset_settle_cancel":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.asset_settle_cancel",
                        keys: [{
                            type: "account",
                            value: op[1].account,
                            arg: "account"
                        }, { type: "amount", value: op[1].amount, arg: "amount" }]
                    });
                    break;

                case "asset_claim_pool":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.asset_claim_pool",
                        keys: [{
                            type: "account",
                            value: op[1].issuer,
                            arg: "account"
                        }, {
                            type: "asset",
                            value: op[1].asset_id,
                            arg: "asset"
                        }, {
                            type: "amount",
                            value: op[1].amount_to_claim,
                            arg: "amount"
                        }]
                    });
                    break;

                case "asset_update_issuer":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.asset_update_issuer",
                        keys: [{
                            type: "account",
                            value: op[1].issuer,
                            arg: "from_account"
                        }, {
                            type: "account",
                            value: op[1].new_issuer,
                            arg: "to_account"
                        }, {
                            type: "asset",
                            value: op[1].asset_to_update,
                            arg: "asset"
                        }]
                    });
                    break;

                case "bid_collateral":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.bid_collateral",
                        keys: [{
                            type: "account",
                            value: op[1].bidder,
                            arg: "bid_account"
                        }, {
                            type: "amount",
                            value: op[1].additional_collateral,
                            arg: "collateral"
                        }, {
                            type: "amount",
                            value: op[1].debt_covered,
                            arg: "debt"
                        }]
                    });
                    break;
                case "htlc_create":
                    var globalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject("2.0.0");
                    var dynGlobalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject("2.1.0");
                    var block_time = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].calc_block_time(block, globalObject, dynGlobalObject);
                    var estimated = false;
                    if (!block_time) {
                        block_time = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].calc_block_time(block, globalObject, dynGlobalObject, true);
                        estimated = true;
                    }

                    op[1].amount.amount = parseFloat(op[1].amount.amount);

                    var expiryTime = new Date();

                    expiryTime.setTime(block_time.getTime() + op[1].claim_period_seconds * 1000);

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "right-td" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.htlc_create",
                                keys: [{
                                    type: "date",
                                    arg: "lock_period",
                                    value: expiryTime
                                }, {
                                    type: "account",
                                    value: op[1].from,
                                    arg: "from"
                                }, {
                                    type: "amount",
                                    value: op[1].amount,
                                    arg: "amount"
                                }, {
                                    type: "account",
                                    value: op[1].to,
                                    arg: "to"
                                }]
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                { title: "Estimated" },
                                estimated ? "*" : ""
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "memo",
                                style: { paddingTop: 5, cursor: "help" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage_hash_explanation")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { className: "inline-block" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage_hash") + " (" + op[1].preimage_size + ", " + op[1].preimage_hash[0] + "): " + op[1].preimage_hash[1]
                                )
                            )
                        )
                    );
                    break;
                case "htlc_redeem":
                    color = "success";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "right-td" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.htlc_redeem",
                                keys: [{
                                    type: "account",
                                    value: op[1].redeemer,
                                    arg: "redeemer"
                                }, {
                                    value: op[1].htlc_id,
                                    arg: "htlc_id"
                                }]
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "memo",
                                style: { paddingTop: 5, cursor: "help" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage_explanation")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { className: "inline-block" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage") + ": " + op[1].preimage
                                )
                            )
                        )
                    );
                    break;
                case "htlc_extend":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.htlc_extend",
                            keys: [{
                                type: "account",
                                value: op[1].update_issuer,
                                arg: "update_issuer"
                            }, {
                                type: "amount",
                                arg: "seconds_to_add",
                                value: op[1].seconds_to_add
                            }, {
                                value: op[1].htlc_id,
                                arg: "htlc_id"
                            }]
                        })
                    );
                    break;
                case "htlc_redeemed":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.htlc_redeemed",
                            keys: [{
                                type: "account",
                                value: op[1].to,
                                arg: "to"
                            }, {
                                type: "account",
                                value: op[1].from,
                                arg: "from"
                            }, {
                                type: "amount",
                                value: op[1].amount,
                                arg: "amount",
                                decimalOffset: op[1].amount.asset_id === "1.3.0" ? 5 : null
                            }, {
                                value: op[1].htlc_id,
                                arg: "htlc_id"
                            }]
                        })
                    );
                    break;
                case "htlc_refund":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.htlc_refund",
                            keys: [{
                                value: op[1].htlc_id,
                                arg: "htlc_id"
                            }, {
                                type: "account",
                                value: op[1].to,
                                arg: "to"
                            }]
                        })
                    );

                    break;
                case "ticket_create":
                    var ticket_type = Object.keys(bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainTypes"].ticket_type).find(function (key) {
                        return bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainTypes"].ticket_type[key] === op[1].target_type;
                    });
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.ticket_create",
                            keys: [{
                                type: "account",
                                value: op[1].account,
                                arg: "account"
                            }, {
                                type: "amount",
                                value: op[1].amount,
                                arg: "amount"
                            }]
                        }),
                        "\xA0 (",
                        counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("operation.ticket_types." + ticket_type),
                        ")"
                    );

                    break;
                default:
                    console.log("unimplemented op '" + ops[op[0]] + "':", op);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                            { to: "/block/" + block },
                            "#",
                            block
                        )
                    );
            }
            return { column: column, color: color };
        }
    }]);

    return Operation;
}();

/* harmony default export */ __webpack_exports__["default"] = (Operation);

/***/ }),

/***/ 2929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1973);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1974);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var PendingBlock = function (_React$Component) {
    _inherits(PendingBlock, _React$Component);

    function PendingBlock() {
        _classCallCheck(this, PendingBlock);

        return _possibleConstructorReturn(this, (PendingBlock.__proto__ || Object.getPrototypeOf(PendingBlock)).apply(this, arguments));
    }

    _createClass(PendingBlock, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !immutable__WEBPACK_IMPORTED_MODULE_3___default.a.is(this.props.dynGlobalObject, nextProps.dynGlobalObject);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                blockNumber = _props.blockNumber,
                dynGlobalObject = _props.dynGlobalObject;

            var lastIrreversibleBlockNum = dynGlobalObject.get("last_irreversible_block_num");

            return blockNumber > lastIrreversibleBlockNum ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                " - ",
                "(",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    content: "operation.pending",
                    blocks: blockNumber - lastIrreversibleBlockNum
                }),
                ")"
            ) : null;
        }
    }]);

    return PendingBlock;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PendingBlock.propTypes = {
    blockNumber: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    dynGlobalObject: _ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject.isRequired
};
PendingBlock.defaultProps = {
    dynGlobalObject: "2.1.0"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(PendingBlock));

/***/ }),

/***/ 2930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL", function() { return FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COINBASE", function() { return COINBASE; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2541);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(410);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2931);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_report__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["ChainTypes"].operations;

var ops = Object.keys(operations);

var FULL = "FULL";
var COINBASE = "COINBASE";



var AccountHistoryExporter = function () {
    function AccountHistoryExporter() {
        _classCallCheck(this, AccountHistoryExporter);
    }

    _createClass(AccountHistoryExporter, [{
        key: "pad",
        value: function pad(number, length) {
            var str = "" + number;
            while (str.length < length) {
                str = "0" + str;
            }
            return str;
        }
    }, {
        key: "formatDate",
        value: function formatDate(d) {
            return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2) + " GMT" + ((d.getTimezoneOffset() < 0 ? "+" : "-") + // Note the reversed sign!
            this.pad(parseInt(Math.floor(Math.abs(d.getTimezoneOffset() / 60))), 2) + this.pad(Math.abs(d.getTimezoneOffset() % 60), 2));
        }
    }, {
        key: "generateCSV",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accountsList, esNode, exportType) {
                var start, limit, account, accountName, recordData, res, parsedData, i, blob, today;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                start = 0, limit = 150;
                                account = accountsList[0].get("id");
                                _context.next = 4;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAccount", account);

                            case 4:
                                accountName = _context.sent.get("name");
                                recordData = {};

                            case 6:
                                if (false) {}

                                _context.next = 9;
                                return this._getAccountHistoryES(account, limit, start, esNode);

                            case 9:
                                res = _context.sent;

                                if (res.length) {
                                    _context.next = 12;
                                    break;
                                }

                                return _context.abrupt("break", 20);

                            case 12:
                                _context.next = 14;
                                return bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.resolveBlockTimes(res);

                            case 14:
                                _context.next = 16;
                                return bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.resolveAssets(res);

                            case 16:

                                res.map(function (record) {
                                    var trx_id = record.id;
                                    // let timestamp = api.getBlock(record.block_num);
                                    var type = ops[record.op.type];
                                    var data = record.op.data;

                                    // Data is sometimes null
                                    if (data) {
                                        switch (type) {
                                            case "vesting_balance_withdraw":
                                                if (!data.amount) {
                                                    data.amount = data.amount_;
                                                }
                                                break;

                                            case "transfer":
                                                if (!data.amount) {
                                                    data.amount = data.amount_;
                                                }
                                                break;
                                        }
                                        switch (type) {
                                            default:
                                                recordData[trx_id] = {
                                                    timestamp: new Date(record.block_time),
                                                    type: type,
                                                    data: data
                                                };
                                        }
                                    }
                                });
                                start += res.length;
                                _context.next = 6;
                                break;

                            case 20:
                                if (Object.keys(recordData).length) {
                                    _context.next = 22;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 22:
                                parsedData = void 0;

                                if (exportType === FULL) {
                                    parsedData = [];
                                    for (i in recordData) {
                                        parsedData.push([i, recordData[i]]);
                                    }
                                } else {
                                    recordData = bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.groupEntries(recordData);
                                    parsedData = bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.parseData(recordData, account, accountName);
                                }

                                blob = this.dataToCSV(parsedData, exportType);
                                today = new Date();

                                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "bitshares-account-history-" + accountName + "-" + today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "-" + ("0" + today.getHours()).slice(-2) + ("0" + today.getMinutes()).slice(-2) + ".csv");
                                console.log("Export file generated");

                            case 28:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function generateCSV(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return generateCSV;
        }()
    }, {
        key: "_getAccountHistoryES",
        value: function _getAccountHistoryES(account_id, limit, start, esNode) {
            var endpoint = "get_account_history";
            if (esNode.indexOf("explorer") !== -1 || esNode.indexOf("api") !== -1) {
                endpoint = "es/account_history";
            }
            var queryUrl = esNode + "/" + endpoint + "?account_id=" + account_id + "&from_=" + start + "&size=" + limit + "&sort_by=block_data.block_time&type=data&agg_field=operation_type";

            console.log("query", queryUrl);
            return new Promise(function (resolve, reject) {
                fetch(queryUrl).then(function (res) {
                    return res.json();
                }).then(function (result) {
                    var opHistory = result.map(function (r) {
                        // the answer might differ if op_opject is filled or not
                        var op_data = r.operation_history.op_object;
                        if (!op_data) {
                            op_data = JSON.parse(r.operation_history.op)[1];
                        }

                        return {
                            id: r.account_history.operation_id,
                            op: {
                                type: r.operation_type,
                                data: op_data
                            },
                            result: JSON.parse(r.operation_history.operation_result),
                            block_num: r.block_data.block_num,
                            block_time: r.block_data.block_time + "Z"
                        };
                    });

                    resolve(opHistory);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: "dataToCSV",
        value: function dataToCSV(data, exportType) {
            var csvString = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var line = _step.value;

                    if (exportType === COINBASE) {
                        if (line.length >= 11 && line[10] instanceof Date) {
                            line[10] = this.formatDate(line[10]);
                        }
                        csvString += line.join(",") + "\n";
                    } else {
                        csvString += JSON.stringify(line) + "\n";
                    }
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

            return new Blob([csvString], { type: "text/csv;charset=utf-8" });
        }
    }]);

    return AccountHistoryExporter;
}();

/* harmony default export */ __webpack_exports__["default"] = (AccountHistoryExporter);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5kYXNoYm9hcmQtYWNjb3VudHN+ZGVwb3NpdC13aXRoZHJhdy43OGYxNDM1ZTU1OTdiMDRlNmU1Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1BhZ2luYXRlZExpc3QuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvcGFnaW5hdGVkLWxpc3Quc2Nzcz9kNzMzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9ucy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vT3BlcmF0aW9uQW50LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1BlbmRpbmdCbG9jay5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9zZXJ2aWNlcy9BY2NvdW50SGlzdG9yeUV4cG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBcIi4vcGFnaW5hdGVkLWxpc3Quc2Nzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZWRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgcm93czogW10sXHJcbiAgICAgICAgcGFnZVNpemU6IDIwLFxyXG5cclxuICAgICAgICBjbGFzc05hbWU6IFwidGFibGVcIixcclxuICAgICAgICBleHRyYVJvdzogbnVsbCxcclxuICAgICAgICBzdHlsZToge3BhZGRpbmdCb3R0b206IFwiMXJlbVwifSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLy8gY2FuIGJlIGEgc3RyaW5nIChhc3N1bWVzIHRoZSB0cmFuc2xhdGlvbiBoYXMgb25lIGFyZ3VtZW50LCB0b3RhbCBjb3VudCksXHJcbiAgICAgICAgLy8gb3IgYW4gb2JqZWN0LCB3aGljaCBhbGxvd3MgYSBjdXN0b20gbGFiZWxcclxuICAgICAgICB0b3RhbExhYmVsOiBcInV0aWxpdHkudG90YWxfeF9pdGVtc1wiLFxyXG5cclxuICAgICAgICAvLyBAZGVwcmVjYXRlZCwgdXNlIHRvdGFsTGFiZWxcclxuICAgICAgICBsYWJlbDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3BhZ2VTaXplfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2hlYWRlciwgcm93cywgZXh0cmFSb3csIGxvYWRpbmd9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgMTAwXS5maWx0ZXIoXHJcbiAgICAgICAgICAgIGl0ZW0gPT4gaXRlbSA8IE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGFnZVNpemVPcHRpb25zLnB1c2goTWF0aC5tYXgodGhpcy5wcm9wcy5wYWdlU2l6ZSwgcm93cy5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsQ29sdW1uc0xhYmVsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYWJlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50b3RhbExhYmVsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLnRvdGFsTGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLmtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRvdGFsTGFiZWwuYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRlZC1saXN0XCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHVuc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e0FycmF5LmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlciA6IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17KCkgPT4gKGV4dHJhUm93ID8gZXh0cmFSb3cgOiA8c3Bhbj4mbmJzcDs8L3NwYW4+KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy50b2dnbGVTb3J0T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPblNpbmdsZVBhZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZVNpemU6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IHBhZ2VTaXplT3B0aW9ucy5tYXAobyA9PiBvLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG90YWw6ICh0b3RhbCwgcmFuZ2UpID0+IHRvdGFsQ29sdW1uc0xhYmVsKHRvdGFsKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlY29yZCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZShyZWNvcmQsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb249e3RoaXMucHJvcHMucm93U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgSlNPTk1vZGFsIGZyb20gXCJjb21wb25lbnRzL01vZGFsL0pTT05Nb2RhbFwiO1xuaW1wb3J0IHtJY29uIGFzIEFudEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7XG4gICAgQ2hhaW5UeXBlcyBhcyBncmFwaGVuZUNoYWluVHlwZXMsXG4gICAgRmV0Y2hDaGFpbixcbiAgICBDaGFpblN0b3JlXG59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuLy9pbXBvcnQgcHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUGFnaW5hdGVkTGlzdCBmcm9tIFwiLi4vVXRpbGl0eS9QYWdpbmF0ZWRMaXN0XCI7XG5jb25zdCB7b3BlcmF0aW9uc30gPSBncmFwaGVuZUNoYWluVHlwZXM7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtUb29sdGlwLCBNb2RhbCwgQnV0dG9uLCBTZWxlY3QsIElucHV0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5jb25zdCBvcHMgPSBPYmplY3Qua2V5cyhvcGVyYXRpb25zKTtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEJsb2NrVGltZSBmcm9tIFwiLi4vQmxvY2tjaGFpbi9CbG9ja1RpbWVcIjtcbmltcG9ydCBPcGVyYXRpb25BbnQgZnJvbSBcIi4uL0Jsb2NrY2hhaW4vT3BlcmF0aW9uQW50XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFBlbmRpbmdCbG9jayBmcm9tIFwiLi4vVXRpbGl0eS9QZW5kaW5nQmxvY2tcIjtcblxuY29uc3Qgb3BlcmF0aW9uID0gbmV3IE9wZXJhdGlvbkFudCgpO1xuXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xuaW1wb3J0IEFjY291bnRIaXN0b3J5RXhwb3J0ZXIsIHtcbiAgICBGVUxMLFxuICAgIENPSU5CQVNFXG59IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BY2NvdW50SGlzdG9yeUV4cG9ydGVyXCI7XG5pbXBvcnQge3NldHRpbmdzQVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcblxuZnVuY3Rpb24gY29tcGFyZU9wcyhiLCBhKSB7XG4gICAgaWYgKGEuYmxvY2tfbnVtID09PSBiLmJsb2NrX251bSkge1xuICAgICAgICBpZiAoYS50cnhfaW5fYmxvY2sgIT09IGIudHJ4X2luX2Jsb2NrKSB7XG4gICAgICAgICAgICByZXR1cm4gYS50cnhfaW5fYmxvY2sgLSBiLnRyeF9pbl9ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLm9wX2luX3RyeCAhPT0gYi5vcF9pbl90cngpIHtcbiAgICAgICAgICAgIHJldHVybiBhLm9wX2luX3RyeCAtIGIub3BfaW5fdHJ4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLnZpcnR1YWxfb3AgLSBiLnZpcnR1YWxfb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEuYmxvY2tfbnVtIC0gYi5ibG9ja19udW07XG4gICAgfVxufVxuXG5jbGFzcyBSZWNlbnRUcmFuc2FjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFjY291bnRzTGlzdDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRzTGlzdC5pc1JlcXVpcmVkLFxuICAgICAgICBjb21wYWN0VmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGZ1bGxIZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBzaG93RmlsdGVyczogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbGltaXQ6IDI1LFxuICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcbiAgICAgICAgZnVsbEhlaWdodDogZmFsc2UsXG4gICAgICAgIHNob3dGaWx0ZXJzOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIGZpeG1lIGFjY2VzcyB0byBFUyBjb3VsZCBiZSB3cmFwcGVkIGluIGEgc3RvcmUgb3Igc29tZXRoaW5nIGVsc2VcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGltaXQ6IHByb3BzLmxpbWl0LFxuICAgICAgICAgICAgZmV0Y2hpbmdBY2NvdW50SGlzdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQ6IDg1LFxuICAgICAgICAgICAgZmlsdGVyOiBcImFsbFwiLFxuICAgICAgICAgICAgYWNjb3VudEhpc3RvcnlFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBlc05vZGVDdXN0b206IGZhbHNlLFxuICAgICAgICAgICAgZXNOb2RlOlxuICAgICAgICAgICAgICAgIHNldHRpbmdzQVBJcy5FU19XUkFQUEVSX0xJU1QubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IHNldHRpbmdzQVBJcy5FU19XUkFQUEVSX0xJU1RbMF0udXJsXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHZpc2libGVJZDogXCJcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldERhdGFTb3VyY2UgPSB0aGlzLmdldERhdGFTb3VyY2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVzZUN1c3RvbSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgIFwiYWNjb3VudC5leHBvcnRfbW9kYWwudXNlX2N1c3RvbVwiXG4gICAgICAgICk7XG4gICAgICAgIC8vIGh0dHBzOi8vZXN3cmFwcGVyLmJpdHNoYXJlcy5ldS8gaXMgbm90IGFsaXZlXG4gICAgICAgIC8vIGh0dHBzOi8vd3JhcHBlci5lbGFzdGljc2VhcmNoLmJpdHNoYXJlcy53cy8gaXMgbm90IGFsaXZlXG4gICAgICAgIC8vIGh0dHA6Ly9idHMtZXMuY2xvY2t3b3JrLmdyOjUwMDAvIGlzIGFsaXZlXG4gICAgICAgIC8vIGh0dHBzOi8vZXhwbG9yZXIuYml0c2hhcmVzLWtpYmFuYS5pbmZvLyBpcyBub3QgYWxpdmVcbiAgICAgICAgLy8gaHR0cDovLzE4NS4yMDguMjA4LjE4NDo1MDAwL2VzLyBpcyBhbGl2ZVxuICAgICAgICB0aGlzLnNob3dFeHBvcnRNb2RhbCA9IHRoaXMuc2hvd0V4cG9ydE1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZUV4cG9ydE1vZGFsID0gdGhpcy5oaWRlRXhwb3J0TW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lc05vZGVDaGFuZ2UgPSB0aGlzLmVzTm9kZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9nZW5lcmF0ZUNTViA9IHRoaXMuX2dlbmVyYXRlQ1NWLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5mdWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMucmVmcy50cmFuc2FjdGlvbnM7XG4gICAgICAgICAgICAvL3BzLmluaXRpYWxpemUodCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3NldEhlYWRlckhlaWdodCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXNOb2RlQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKGUudGFyZ2V0KSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSB0aGlzLnVzZUN1c3RvbSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXNOb2RlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGVzTm9kZUN1c3RvbTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlc05vZGU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dFeHBvcnRNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93TW9kYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZUV4cG9ydE1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldEhlYWRlckhlaWdodCgpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMucmVmcy5oZWFkZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVhZGVySGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudHNMaXN0LFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50c0xpc3RcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1heEhlaWdodCAhPT0gbmV4dFByb3BzLm1heEhlaWdodCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmhlYWRlckhlaWdodCAhPT0gbmV4dFN0YXRlLmhlYWRlckhlaWdodCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlciAhPT0gbmV4dFN0YXRlLmZpbHRlcikgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1c3RvbUZpbHRlcikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXN0b21GaWx0ZXIuZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY3VzdG9tRmlsdGVyLmZpZWxkc1xuICAgICAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VzdG9tRmlsdGVyLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzLmN1c3RvbUZpbHRlci52YWx1ZXNcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1heEhlaWdodCAhPT0gbmV4dFByb3BzLm1heEhlaWdodCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRTdGF0ZS5saW1pdCAhPT0gdGhpcy5zdGF0ZS5saW1pdCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmZldGNoaW5nQWNjb3VudEhpc3RvcnkgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGluZ0FjY291bnRIaXN0b3J5XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBuZXh0UHJvcHMuYWNjb3VudHNMaXN0Lmxlbmd0aDsgKytrZXkpIHtcbiAgICAgICAgICAgIGxldCBucGEgPSBuZXh0UHJvcHMuYWNjb3VudHNMaXN0W2tleV07XG4gICAgICAgICAgICBsZXQgbnNhID0gdGhpcy5wcm9wcy5hY2NvdW50c0xpc3Rba2V5XTtcbiAgICAgICAgICAgIGlmIChucGEgJiYgbnNhICYmIG5wYS5nZXQoXCJoaXN0b3J5XCIpICE9PSBuc2EuZ2V0KFwiaGlzdG9yeVwiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93TW9kYWwgIT09IG5leHRTdGF0ZS5zaG93TW9kYWwpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lc05vZGUgIT09IG5leHRTdGF0ZS5lc05vZGUpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lc05vZGVDdXN0b20gIT09IG5leHRTdGF0ZS5lc05vZGVDdXN0b20pIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlSWQgIT09IG5leHRTdGF0ZS52aXNpYmxlSWQpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX29uSW5jcmVhc2VMaW1pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaW1pdDogdGhpcy5zdGF0ZS5saW1pdCArIDMwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRIaXN0b3J5KGFjY291bnRzTGlzdCwgZmlsdGVyT3AsIGN1c3RvbUZpbHRlcikge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IFtdO1xuICAgICAgICBsZXQgc2Vlbl9vcHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAobGV0IGFjY291bnQgb2YgYWNjb3VudHNMaXN0KSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIGxldCBoID0gYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgIGlmIChoKVxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2Vlbl9vcHMuaGFzKG9wLmlkKSAmJiBzZWVuX29wcy5hZGQob3AuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXJPcCkge1xuICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLm9wWzBdID09PSBvcGVyYXRpb25zW2ZpbHRlck9wXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1c3RvbUZpbHRlcikge1xuICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gY3VzdG9tRmlsdGVyLmZpZWxkcy5yZWR1Y2UoKGZpbmFsLCBmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEub3BbMV1bXCJhbW91bnRcIl1bZmlsdGVyXSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlci52YWx1ZXNbZmlsdGVyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEub3BbMV1bZmlsdGVyXSA9PT0gY3VzdG9tRmlsdGVyLnZhbHVlc1tmaWx0ZXJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XG4gICAgfVxuXG4gICAgYXN5bmMgX2dlbmVyYXRlQ1NWKGV4cG9ydFR5cGUpIHtcbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW50aWFsaXppbmcgZmV0Y2hpbmcgb2YgRVMgZGF0YVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgQUhFID0gbmV3IEFjY291bnRIaXN0b3J5RXhwb3J0ZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmV0Y2hpbmdBY2NvdW50SGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgQUhFLmdlbmVyYXRlQ1NWKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudHNMaXN0LFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXNOb2RlLFxuICAgICAgICAgICAgICAgIGV4cG9ydFR5cGVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjY291bnRIaXN0b3J5RXJyb3I6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjY291bnRIaXN0b3J5RXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICBlc05vZGVDdXN0b206IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVzTm9kZTpcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NBUElzLkVTX1dSQVBQRVJfTElTVC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNldHRpbmdzQVBJcy5FU19XUkFQUEVSX0xJU1RbMF0udXJsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlRmlsdGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuSlNPTk1vZGFsKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2libGVJZDogaWR9KTtcbiAgICB9XG5cbiAgICBjbG9zZUpTT05Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlzaWJsZUlkOiBcIlwifSk7XG4gICAgfTtcblxuICAgIGdldERhdGFTb3VyY2UobywgY3VycmVudF9hY2NvdW50X2lkKSB7XG4gICAgICAgIGxldCBmZWUgPSBvLm9wWzFdLmZlZTtcbiAgICAgICAgbGV0IHRyeFR5cGVzID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24udHJ4VHlwZXNcIik7XG4gICAgICAgIGNvbnN0IGluZm8gPSBvcGVyYXRpb24uZ2V0Q29sdW1uKFxuICAgICAgICAgICAgby5vcCxcbiAgICAgICAgICAgIGN1cnJlbnRfYWNjb3VudF9pZCxcbiAgICAgICAgICAgIG8uYmxvY2tfbnVtLFxuICAgICAgICAgICAgby5yZXN1bHQsXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1hcmtldERpcmVjdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgZmVlLmFtb3VudCA9IHBhcnNlSW50KGZlZS5hbW91bnQsIDEwKTtcbiAgICAgICAgY29uc3QgZHluR2xvYmFsT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjEuMFwiKTtcbiAgICAgICAgY29uc3QgbGFzdElycmV2ZXJzaWJsZUJsb2NrTnVtID0gZHluR2xvYmFsT2JqZWN0LmdldChcbiAgICAgICAgICAgIFwibGFzdF9pcnJldmVyc2libGVfYmxvY2tfbnVtXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogby5pZCxcbiAgICAgICAgICAgIGlkOiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vcGVuSlNPTk1vZGFsKG8uaWQpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7by5pZH0gPEFudEljb24gdHlwZT1cImZpbGUtc2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8SlNPTk1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGVJZCA9PT0gby5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17by5vcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0cnhUeXBlc1tvcHNbby5vcFswXV0gfHwgXCJcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuY2xvc2VKU09OTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0eXBlOiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLnNob3dfYmxvY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IHV0aWxzLmZvcm1hdF9udW1iZXIoby5ibG9ja19udW0sIDApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB0bz17YC9ibG9jay8ke28uYmxvY2tfbnVtfS8ke28udHJ4X2luX2Jsb2NrfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NuYW1lcyhcImxhYmVsXCIsIGluZm8uY29sb3IgfHwgXCJpbmZvXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cnhUeXBlc1tvcHNbby5vcFswXV1dfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGluZm86IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2luZm8uY29sdW1ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogMTQsIHBhZGRpbmdUb3A6IDV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvLmJsb2NrX251bSA+IGxhc3RJcnJldmVyc2libGVCbG9ja051bSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuZGluZ0Jsb2NrIGJsb2NrTnVtYmVyPXtvLmJsb2NrX251bX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBmZWU6IDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2ZlZS5hbW91bnR9IGFzc2V0PXtmZWUuYXNzZXRfaWR9IC8+LFxuICAgICAgICAgICAgdGltZTogPEJsb2NrVGltZSBibG9ja19udW1iZXI9e28uYmxvY2tfbnVtfSBmdWxsRGF0ZT17dHJ1ZX0gLz5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBhY2NvdW50c0xpc3QsXG4gICAgICAgICAgICBjb21wYWN0VmlldyxcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIGN1c3RvbUZpbHRlcixcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgbWF4SGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2xpbWl0LCBoZWFkZXJIZWlnaHR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGN1cnJlbnRfYWNjb3VudF9pZCA9XG4gICAgICAgICAgICBhY2NvdW50c0xpc3QubGVuZ3RoID09PSAxICYmIGFjY291bnRzTGlzdFswXVxuICAgICAgICAgICAgICAgID8gYWNjb3VudHNMaXN0WzBdLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBsZXQgaGlzdG9yeSA9IHRoaXMuX2dldEhpc3RvcnkoXG4gICAgICAgICAgICBhY2NvdW50c0xpc3QsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dGaWx0ZXJzICYmIHRoaXMuc3RhdGUuZmlsdGVyICE9PSBcImFsbFwiXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmZpbHRlclxuICAgICAgICAgICAgICAgIDogZmlsdGVyLFxuICAgICAgICAgICAgY3VzdG9tRmlsdGVyXG4gICAgICAgICkuc29ydChjb21wYXJlT3BzKTtcbiAgICAgICAgbGV0IGhpc3RvcnlDb3VudCA9IGhpc3RvcnkubGVuZ3RoO1xuXG4gICAgICAgIHN0eWxlID0gc3R5bGUgPyBzdHlsZSA6IHt3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9O1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKHRydWUgfHwgdGhpcy5wcm9wcy5zaG93RmlsdGVycykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICBcImFsbFwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICBcImxpbWl0X29yZGVyX2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRfb3JkZXJfY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgXCJmaWxsX29yZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50X2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwiYWNjb3VudF91cGRhdGVcIixcbiAgICAgICAgICAgICAgICBcImFzc2V0X2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwid2l0bmVzc193aXRoZHJhd19wYXlcIixcbiAgICAgICAgICAgICAgICBcInZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiXG4gICAgICAgICAgICBdLm1hcCh0eXBlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXt0eXBlfSBrZXk9e3R5cGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLnRyeFR5cGVzLlwiICsgdHlwZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoaWRlRmVlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGRpc3BsYXlfaGlzdG9yeSA9IGhpc3RvcnkubGVuZ3RoXG4gICAgICAgICAgICA/IGhpc3Rvcnkuc2xpY2UoMCwgbGltaXQpLm1hcChvID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UobywgY3VycmVudF9hY2NvdW50X2lkKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIGxldCBhY3Rpb24gPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLXZhbHVlXCIga2V5PVwidG90YWxfdmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLl9nZW5lcmF0ZUNTVihGVUxMKX0gdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5leHBvcnRfbW9kYWwuZnVsbF9yZXBvcnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fZ2VuZXJhdGVDU1YoQ09JTkJBU0UpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmV4cG9ydF9tb2RhbC5jb2luYmFzZV9yZXBvcnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50LXRyYW5zYWN0aW9ucyBuby1vdmVyZmxvd1wiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIHdyYXBDbGFzc05hbWU9XCJtb2RhbC0tdHJhbnNhY3Rpb24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmV4cG9ydF9tb2RhbC50aXRsZVwiIC8+fVxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0cmFuc2FjdGlvbl9jb25maXJtX21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZUV4cG9ydE1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBub0Nsb3NlQnRuPXt0cnVlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmV4cG9ydF9tb2RhbC5kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXNOb2RlQ3VzdG9tID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVzTm9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lc05vZGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lc05vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZXNOb2RlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzQVBJcy5FU19XUkFQUEVSX0xJU1QuY29uY2F0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VybDogdGhpcy51c2VDdXN0b219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkubWFwKHdyYXBwZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e3dyYXBwZXIudXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVyLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGFzaGJvYXJkID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5yZWNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93RmlsdGVycyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5maWx0ZXJfb3BzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlRmlsdGVyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaXN0b3J5Q291bnQgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXNoYm9hcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVzTm9kZSAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNhY3Rpb24uY3N2X3RpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBpY29uTGlua0FuZExhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dFeHBvcnRNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImV4Y2VsXCIgc2l6ZT1cIjF4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmRvd25sb2FkX2hpc3RvcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjY291bnRIaXN0b3J5RXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjc1cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5oaXN0b3J5X2Vycm9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGVkTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29tcGFjdFZpZXcgPyBcImNvbXBhY3RcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5kYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiBkYXNoYm9hcmQtdGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy5pZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY29tcGFjdFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy50eXBlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudHJhbnNhY3Rpb25zLmluZm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGlkZUZlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudHJhbnNhY3Rpb25zLmZlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC50cmFuc2FjdGlvbnMudGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtkaXNwbGF5X2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInV0aWxpdHkudG90YWxfeF9vcGVyYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhUm93PXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hpbmdBY2NvdW50SGlzdG9yeSAmJiA8TG9hZGluZ0luZGljYXRvciAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblJlY2VudFRyYW5zYWN0aW9ucyA9IEJpbmRUb0NoYWluU3RhdGUoUmVjZW50VHJhbnNhY3Rpb25zKTtcblxuUmVjZW50VHJhbnNhY3Rpb25zID0gY29ubmVjdChcbiAgICBSZWNlbnRUcmFuc2FjdGlvbnMsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXJrZXREaXJlY3Rpb25zOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkubWFya2V0RGlyZWN0aW9uc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmNsYXNzIFRyYW5zYWN0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICB0bzogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgZnJvbUFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXNzZXQ6IFwiMS4zLjBcIlxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+e3RoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5wcm9wcyl9PC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblRyYW5zYWN0aW9uV3JhcHBlciA9IEJpbmRUb0NoYWluU3RhdGUoVHJhbnNhY3Rpb25XcmFwcGVyKTtcblxuZXhwb3J0IHtSZWNlbnRUcmFuc2FjdGlvbnMsIFRyYW5zYWN0aW9uV3JhcHBlcn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuaW1wb3J0IHtDaGFpblR5cGVzIGFzIGdyYXBoZW5lQ2hhaW5UeXBlcywgQ2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgYWNjb3VudF9jb25zdGFudHMgZnJvbSBcImNoYWluL2FjY291bnRfY29uc3RhbnRzXCI7XG5pbXBvcnQgTWVtb1RleHQgZnJvbSBcIi4vTWVtb1RleHRcIjtcbmltcG9ydCBQcm9wb3NlZE9wZXJhdGlvbiBmcm9tIFwiLi9Qcm9wb3NlZE9wZXJhdGlvblwiO1xuaW1wb3J0IG1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuY29uc3QgU2hvcnRPYmplY3RJZCA9ICh7b2JqZWN0SWR9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3RJZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IG9iamVjdElkLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgY29uc3Qge2xlbmd0aH0gPSBwYXJ0cztcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHJldHVybiBcIiNcIiArIHBhcnRzW2xlbmd0aCAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0SWQ7XG59O1xuXG5jbGFzcyBPcGVyYXRpb24ge1xuICAgIGxpbmtUb0FjY291bnQobmFtZV9vcl9pZCkge1xuICAgICAgICBpZiAoIW5hbWVfb3JfaWQpIHJldHVybiA8c3Bhbj4tPC9zcGFuPjtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzX29iamVjdF9pZChuYW1lX29yX2lkKSA/IChcbiAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtuYW1lX29yX2lkfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC8ke25hbWVfb3JfaWR9YH0+e25hbWVfb3JfaWR9PC9MaW5rPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxpbmtUb0Fzc2V0KHN5bWJvbF9vcl9pZCkge1xuICAgICAgICBpZiAoIXN5bWJvbF9vcl9pZCkgcmV0dXJuIDxzcGFuPi08L3NwYW4+O1xuICAgICAgICByZXR1cm4gdXRpbHMuaXNfb2JqZWN0X2lkKHN5bWJvbF9vcl9pZCkgPyAoXG4gICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkIGFzc2V0PXtzeW1ib2xfb3JfaWR9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayB0bz17YC9hc3NldC8ke3N5bWJvbF9vcl9pZH1gfT57c3ltYm9sX29yX2lkfTwvTGluaz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDb2x1bW4ob3AsIGN1cnJlbnQsIGJsb2NrLCByZXN1bHQsIG1hcmtldERpcmVjdGlvbnMpIHtcbiAgICAgICAgY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xuICAgICAgICBsZXQgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG4gICAgICAgIGxldCBsaXN0aW5ncyA9IGFjY291bnRfY29uc3RhbnRzLmFjY291bnRfbGlzdGluZztcbiAgICAgICAgbGV0IGNvbHVtbiA9IG51bGwsXG4gICAgICAgICAgICBjb2xvciA9IFwiaW5mb1wiO1xuICAgICAgICBsZXQgbWVtb0NvbXBvbmVudCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAgIG9wc1tvcFswXV0gLy8gRm9yIGEgbGlzdCBvZiB0cnggdHlwZXMsIHNlZSBjaGFpbl90eXBlcy5jb2ZmZWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJcIjpcbiAgICAgICAgICAgICAgICBpZiAob3BbMV0ubWVtbykge1xuICAgICAgICAgICAgICAgICAgICBtZW1vQ29tcG9uZW50ID0gPE1lbW9UZXh0IG1lbW89e29wWzFdLm1lbW99IC8+O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgb3BbMV0uYW1vdW50LmFtb3VudCA9IHBhcnNlRmxvYXQob3BbMV0uYW1vdW50LmFtb3VudCk7XG5cbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LXRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5hbW91bnQuYXNzZXRfaWQgPT09IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImFjY291bnRcIiwgdmFsdWU6IG9wWzFdLnRvLCBhcmc6IFwidG9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwibGltaXRfb3JkZXJfY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgICAgICAgICBsZXQgbyA9IG9wWzFdO1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbWFya2V0TmFtZSA9IE9QRU4uRVRIX1VTRFxuICAgICAgICAgICAgICAgIGlmICghaW52ZXJ0ZWQpIChkZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFVTRCAvIE9QRU4uRVRIXG4gICAgICAgICAgICAgICAgICAgIGJ1eSAvIHNlbGwgT1BFTi5FVEhcbiAgICAgICAgICAgICAgICAgICAgaXNCaWQgPSBhbW91bnRfdG9fc2VsbC5hc3NldF9zeW1ib2wgPSBVU0RcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50ID0gdG9fcmVjZWl2ZVxuICAgICAgICAgICAgICAgIGlmIChpbnZlcnRlZClcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAgT1BFTi5FVEggLyBVU0RcbiAgICAgICAgICAgICAgICAgICAgYnV5IC8gc2VsbCBVU0RcbiAgICAgICAgICAgICAgICAgICAgaXNCaWQgPSBhbW91bnRfdG9fc2VsbC5hc3NldF9zeW1ib2wgPSBPUEVOLkVUSFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgPVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaW5kVG9DaGFpblN0YXRlLldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtvLm1pbl90b19yZWNlaXZlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtvLmFtb3VudF90b19zZWxsLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Jhc2UsIHF1b3RlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA9IG1hcmtldFV0aWxzLmdldE1hcmtldE5hbWUoYmFzZSwgcXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnRlZCA9IG1hcmtldERpcmVjdGlvbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwYXlTeW1ib2wgPSBiYXNlLmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcmVjZWl2ZVN5bWJvbCA9IHF1b3RlLmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0JpZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmFtb3VudF90b19zZWxsLmFzc2V0X2lkID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGludmVydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaXJzdC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2Vjb25kLmdldChcImlkXCIpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VCYXNlID0gaXNCaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5hbW91bnRfdG9fc2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLm1pbl90b19yZWNlaXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VRdW90ZSA9IGlzQmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8ubWluX3RvX3JlY2VpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby5hbW91bnRfdG9fc2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gaXNCaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb3BbMV0ubWluX3RvX3JlY2VpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb3BbMV0uYW1vdW50X3RvX3NlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlcklkID0gcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHR5cGVvZiByZXN1bHRbMV0gPT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjXCIgKyByZXN1bHRbMV0uc3Vic3RyaW5nKDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm9wZXJhdGlvbi5saW1pdF9vcmRlcl9idXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm9wZXJhdGlvbi5saW1pdF9vcmRlcl9zZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5zZWxsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcHJpY2VCYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBwcmljZVF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImxpbWl0X29yZGVyX2NhbmNlbFwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJjYW5jZWxcIjtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5saW1pdF9vcmRlcl9jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZmVlX3BheWluZ19hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9wWzFdLm9yZGVyLnN1YnN0cmluZyg0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImNhbGxfb3JkZXJfdXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcblxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmNhbGxfb3JkZXJfdXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZ1bmRpbmdfYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmRlbHRhX2RlYnQuYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVidFN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZGVsdGFfZGVidCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5kZWx0YV9jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImNvbGxhdGVyYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwia2V5X2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLmNyZWF0ZV9rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnJlZ19hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ucmVnaXN0cmFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicmVnaXN0cmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibmV3X2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRfdXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24udXBkYXRlX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF93aGl0ZWxpc3RcIjpcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICBvcFsxXS5uZXdfbGlzdGluZyA9PT0gbGlzdGluZ3Mubm9fbGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInVubGlzdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogb3BbMV0ubmV3X2xpc3RpbmcgPT09IGxpc3RpbmdzLndoaXRlX2xpc3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3aGl0ZWxpc3RlZF9ieVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJsYWNrbGlzdGVkX2J5XCI7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9e1wib3BlcmF0aW9uLlwiICsgbGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hdXRob3JpemluZ19hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImxpc3RlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnRfdG9fbGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJsaXN0ZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF91cGdyYWRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS51cGdyYWRlX3RvX2xpZmV0aW1lX21lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm9wZXJhdGlvbi5saWZldGltZV91cGdyYWRlX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm9wZXJhdGlvbi5hbm51YWxfdXBncmFkZV9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hY2NvdW50X3RvX3VwZ3JhZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X3RyYW5zZmVyXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYWNjb3VudF90cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hY2NvdW50X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5uZXdfb3duZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwidG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3VwZGF0ZVwiOlxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3VwZGF0ZV9iaXRhc3NldFwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfdXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFzc2V0X3RvX3VwZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF91cGRhdGVfZmVlZF9wcm9kdWNlcnNcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xuXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfdXBkYXRlX2ZlZWRfcHJvZHVjZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFzc2V0X3RvX3VwZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pc3N1ZVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG5cbiAgICAgICAgICAgICAgICBpZiAob3BbMV0ubWVtbykge1xuICAgICAgICAgICAgICAgICAgICBtZW1vQ29tcG9uZW50ID0gPE1lbW9UZXh0IG1lbW89e29wWzFdLm1lbW99IC8+O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9wWzFdLmFzc2V0X3RvX2lzc3VlLmFtb3VudCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICBvcFsxXS5hc3NldF90b19pc3N1ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9pc3N1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYXNzZXRfdG9faXNzdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVfdG9fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X2Z1bmRfZmVlX3Bvb2xcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xuXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfZnVuZF9mZWVfcG9vbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mcm9tX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogb3BbMV0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3NldHRsZVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZUFtb3VudCA9IG9wWzFdLmFtb3VudDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW50U2V0dGxlQ29kZSA9IDI7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHRbMF0gPT0gaW5zdGFudFNldHRsZUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVBbW91bnQgPSByZXN1bHRbMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3NldHRsZV9pbnN0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFzZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2VBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBxdW90ZUFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3NldHRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfZ2xvYmFsX3NldHRsZVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfZ2xvYmFsX3NldHRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF90b19zZXR0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uc2V0dGxlX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3B1Ymxpc2hfZmVlZFwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ucHVibGlzaF9mZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnB1Ymxpc2hlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZlZWQuc2V0dGxlbWVudF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3aXRuZXNzX2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLndpdG5lc3NfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLndpdG5lc3NfYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid2l0bmVzc191cGRhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi53aXRuZXNzX3VwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS53aXRuZXNzX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndpdG5lc3Nfd2l0aGRyYXdfcGF5XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3aXRuZXNzX3dpdGhkcmF3X3BheTpcIiwgb3BbMV0ud2l0bmVzc19hY2NvdW50KTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gb3BbMV0ud2l0bmVzc19hY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi53aXRuZXNzX3BheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcFsxXS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcIjEuMy4wXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24udG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS53aXRuZXNzX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5yZWNlaXZlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcFsxXS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcIjEuMy4wXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdG5lc3NfYWNjb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicHJvcG9zYWxfY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ucHJvcG9zYWxfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mZWVfcGF5aW5nX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnRPYmplY3RJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQ9e3Jlc3VsdFsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicHJvcG9zYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BbMV0ucHJvcG9zZWRfb3BzLm1hcCgobywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wb3NlZE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wPXtvLm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRmVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcExhYmVsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEYXRlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicHJvcG9zYWxfdXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZV9hcHByb3ZhbHNfdG9fYWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlX2FwcHJvdmFsc190b19yZW1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvd25lcl9hcHByb3ZhbHNfdG9fYWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3duZXJfYXBwcm92YWxzX3RvX3JlbW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImtleV9hcHByb3ZhbHNfdG9fYWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2V5X2FwcHJvdmFsc190b19yZW1vdmVcIlxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ucHJvcG9zYWxfdXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mZWVfcGF5aW5nX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnRPYmplY3RJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQ9e29wWzFdLnByb3Bvc2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByb3Bvc2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wb3NhbC11cGRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGRzLm1hcChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFsxXVtmaWVsZF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Bwcm9wb3NhbC51cGRhdGVkLiR7ZmllbGR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wWzFdW2ZpZWxkXS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZC5zdGFydHNXaXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmxpbmtUb0FjY291bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJwcm9wb3NhbF9kZWxldGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5wcm9wb3NhbF9kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZmVlX3BheWluZ19hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydE9iamVjdElkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdElkPXtvcFsxXS5wcm9wb3NhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJwcm9wb3NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd19wZXJtaXNzaW9uX2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLndpdGhkcmF3X3Blcm1pc3Npb25fY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0ud2l0aGRyYXdfZnJvbV9hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0uYXV0aG9yaXplZF9hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd19wZXJtaXNzaW9uX3VwZGF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLndpdGhkcmF3X3Blcm1pc3Npb25fdXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0ud2l0aGRyYXdfZnJvbV9hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0uYXV0aG9yaXplZF9hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd19wZXJtaXNzaW9uX2NsYWltXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24ud2l0aGRyYXdfcGVybWlzc2lvbl9jbGFpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdGhkcmF3X2Zyb21fYWNjb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNhY3Rpb24udG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdGhkcmF3X3RvX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3X3Blcm1pc3Npb25fZGVsZXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24ud2l0aGRyYXdfcGVybWlzc2lvbl9kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS53aXRoZHJhd19mcm9tX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zYWN0aW9uLnRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5hdXRob3JpemVkX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImZpbGxfb3JkZXJcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgIG8gPSBvcFsxXTtcblxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbWFya2V0TmFtZSA9IE9QRU4uRVRIX1VTRFxuICAgICAgICAgICAgICAgIGlmICghaW52ZXJ0ZWQpIChkZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9IFVTRCAvIE9QRU4uRVRIXG4gICAgICAgICAgICAgICAgICAgIGJ1eSAvIHNlbGwgT1BFTi5FVEhcbiAgICAgICAgICAgICAgICAgICAgaXNCaWQgPSBhbW91bnRfdG9fc2VsbC5hc3NldF9zeW1ib2wgPSBVU0RcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50ID0gdG9fcmVjZWl2ZVxuICAgICAgICAgICAgICAgIGlmIChpbnZlcnRlZClcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAgT1BFTi5FVEggLyBVU0RcbiAgICAgICAgICAgICAgICAgICAgYnV5IC8gc2VsbCBVU0RcbiAgICAgICAgICAgICAgICAgICAgaXNCaWQgPSBhbW91bnRfdG9fc2VsbC5hc3NldF9zeW1ib2wgPSBPUEVOLkVUSFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgPVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHttYXJrZXROYW1lLCBmaXJzdCwgc2Vjb25kfSA9IG1hcmtldFV0aWxzLmdldE1hcmtldE5hbWUoYmFzZSwgcXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnRlZCA9IHRoaXMucHJvcHMubWFya2V0RGlyZWN0aW9ucy5nZXQobWFya2V0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBheVN5bWJvbCA9IGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZWNlaXZlU3ltYm9sID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQmlkID0gby5hbW91bnRfdG9fc2VsbC5hc3NldF9pZCA9PT0gKGludmVydGVkID8gZmlyc3QuZ2V0KFwiaWRcIikgOiBzZWNvbmQuZ2V0KFwiaWRcIikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmljZUJhc2UgPSAoaXNCaWQpID8gby5hbW91bnRfdG9fc2VsbCA6IG8ubWluX3RvX3JlY2VpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmljZVF1b3RlID0gKGlzQmlkKSA/IG8ubWluX3RvX3JlY2VpdmUgOiBvLmFtb3VudF90b19zZWxsO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBpc0JpZCA/IG9wWzFdLm1pbl90b19yZWNlaXZlIDogb3BbMV0uYW1vdW50X3RvX3NlbGw7XG4gICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17by5yZWNlaXZlcy5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17by5wYXlzLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Jhc2UsIHF1b3RlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA9IG1hcmtldFV0aWxzLmdldE1hcmtldE5hbWUoYmFzZSwgcXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnRlZCA9IG1hcmtldERpcmVjdGlvbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0JpZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnBheXMuYXNzZXRfaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpcnN0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWNvbmQuZ2V0KFwiaWRcIikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBheVN5bWJvbCA9IGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZWNlaXZlU3ltYm9sID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VCYXNlID0gaXNCaWQgPyBvLnJlY2VpdmVzIDogby5wYXlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VRdW90ZSA9IGlzQmlkID8gby5wYXlzIDogby5yZWNlaXZlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IGlzQmlkID8gby5yZWNlaXZlcyA6IG8ucGF5cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY2VpdmVkQW1vdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZmVlLmFzc2V0X2lkID09PSBhbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFtb3VudC5hbW91bnQgLSBvLmZlZS5hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFtb3VudC5hbW91bnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9e2BvcGVyYXRpb24uZmlsbF9vcmRlcl8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYnV5XCIgOiBcInNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYWNjb3VudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiByZWNlaXZlZEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYW1vdW50LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcHJpY2VCYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBwcmljZVF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBvLm9yZGVyX2lkLnN1YnN0cmluZyg0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JpbmRUb0NoYWluU3RhdGUuV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJnbG9iYWxfcGFyYW1ldGVyc191cGRhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5nbG9iYWxfcGFyYW1ldGVyc191cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ2ZXN0aW5nX2JhbGFuY2VfY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5jcmVhdG9yKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24udmVzdGluZ19iYWxhbmNlX2NyZWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e29wWzFdLmFtb3VudC5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e29wWzFdLmFtb3VudC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0ub3duZXIpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5vd25lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndvcmtlcl9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi53b3JrZXJfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLm93bmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG9wWzFdLmRhaWx5X3BheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcFsxXS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYmFsYW5jZV9jbGFpbVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgb3BbMV0udG90YWxfY2xhaW1lZC5hbW91bnQgPSBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgb3BbMV0udG90YWxfY2xhaW1lZC5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5iYWxhbmNlX2NsYWltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmRlcG9zaXRfdG9fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS50b3RhbF9jbGFpbWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJjb21taXR0ZWVfbWVtYmVyX2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLmNvbW1pdHRlZV9tZW1iZXJfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0uY29tbWl0dGVlX21lbWJlcl9hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0cmFuc2Zlcl90b19ibGluZFwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmZyb20pfVxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLnNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcFsxXS5hbW91bnQuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtvcFsxXS5hbW91bnQuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyX2Zyb21fYmxpbmRcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS50byl9XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24ucmVjZWl2ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcFsxXS5hbW91bnQuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtvcFsxXS5hbW91bnQuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X2NsYWltX2ZlZXNcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudF90b19jbGFpbS5hbW91bnQgPSBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgb3BbMV0uYW1vdW50X3RvX2NsYWltLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmlzc3Vlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaW5kVG9DaGFpblN0YXRlLldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17b3BbMV0uYW1vdW50X3RvX2NsYWltLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Fzc2V0fSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJ0cmFuc2FjdGlvbi5hc3NldF9jbGFpbV9mZWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hbW91bnRfdG9fY2xhaW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJiYWxhbmNlX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImN1c3RvbVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLmN1c3RvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3Jlc2VydmVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9yZXNlcnZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnBheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudF90b19yZXNlcnZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJjb21taXR0ZWVfbWVtYmVyX3VwZGF0ZV9nbG9iYWxfcGFyYW1ldGVyc1wiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcImNvbW1pdHRlZV9tZW1iZXJfdXBkYXRlX2dsb2JhbF9wYXJhbWV0ZXJzIG9wOlwiLFxuICAgICAgICAgICAgICAgICAgICBvcFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uY29tbWl0dGVlX21lbWJlcl91cGRhdGVfZ2xvYmFsX3BhcmFtZXRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxLjIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwib3ZlcnJpZGVfdHJhbnNmZXJcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5vdmVycmlkZV90cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImlzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJhY2NvdW50XCIsIHZhbHVlOiBvcFsxXS5mcm9tLCBhcmc6IFwiZnJvbVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJhY2NvdW50XCIsIHZhbHVlOiBvcFsxXS50bywgYXJnOiBcInRvXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImFtb3VudFwiLCB2YWx1ZTogb3BbMV0uYW1vdW50LCBhcmc6IFwiYW1vdW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9zZXR0bGVfY2FuY2VsXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfc2V0dGxlX2NhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImFtb3VudFwiLCB2YWx1ZTogb3BbMV0uYW1vdW50LCBhcmc6IFwiYW1vdW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9jbGFpbV9wb29sXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfY2xhaW1fcG9vbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudF90b19jbGFpbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfdXBkYXRlX2lzc3VlclwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3VwZGF0ZV9pc3N1ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmcm9tX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLm5ld19pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ0b19hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYXNzZXRfdG9fdXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImJpZF9jb2xsYXRlcmFsXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYmlkX2NvbGxhdGVyYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5iaWRkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJiaWRfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hZGRpdGlvbmFsX2NvbGxhdGVyYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJjb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmRlYnRfY292ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlYnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGdsb2JhbE9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZHluR2xvYmFsT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjEuMFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tfdGltZSA9IHV0aWxzLmNhbGNfYmxvY2tfdGltZShcbiAgICAgICAgICAgICAgICAgICAgYmxvY2ssXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgZXN0aW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFibG9ja190aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrX3RpbWUgPSB1dGlscy5jYWxjX2Jsb2NrX3RpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcFsxXS5hbW91bnQuYW1vdW50ID0gcGFyc2VGbG9hdChvcFsxXS5hbW91bnQuYW1vdW50KTtcblxuICAgICAgICAgICAgICAgIGxldCBleHBpcnlUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIGV4cGlyeVRpbWUuc2V0VGltZShcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZS5nZXRUaW1lKCkgKyBvcFsxXS5jbGFpbV9wZXJpb2Rfc2Vjb25kcyAqIDEwMDBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJsb2NrX3BlcmlvZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHBpcnlUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0udG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtcIkVzdGltYXRlZFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzdGltYXRlZCA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiA1LCBjdXJzb3I6IFwiaGVscFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodGxjLnByZWltYWdlX2hhc2hfZXhwbGFuYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRsYy5wcmVpbWFnZV9oYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BbMV0ucHJlaW1hZ2Vfc2l6ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5wcmVpbWFnZV9oYXNoWzBdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5wcmVpbWFnZV9oYXNoWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX3JlZGVlbVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfcmVkZWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5yZWRlZW1lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicmVkZWVtZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaHRsY19pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDUsIGN1cnNvcjogXCJoZWxwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0bGMucHJlaW1hZ2VfZXhwbGFuYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiaHRsYy5wcmVpbWFnZVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5wcmVpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaHRsY19leHRlbmRcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LXRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfZXh0ZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnVwZGF0ZV9pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwidXBkYXRlX2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwic2Vjb25kc190b19hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5zZWNvbmRzX3RvX2FkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaHRsY19pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJodGxjX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX3JlZGVlbWVkXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5odGxjX3JlZGVlbWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudC5hc3NldF9pZCA9PT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmh0bGNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaHRsY19yZWZ1bmRcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uaHRsY19yZWZ1bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmh0bGNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRpY2tldF9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXRfdHlwZSA9IE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgICAgICAgICBncmFwaGVuZUNoYWluVHlwZXMudGlja2V0X3R5cGVcbiAgICAgICAgICAgICAgICApLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGtleSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhlbmVDaGFpblR5cGVzLnRpY2tldF90eXBlW2tleV0gPT09XG4gICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS50YXJnZXRfdHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24udGlja2V0X2NyZWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgKFxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZXJhdGlvbi50aWNrZXRfdHlwZXMuXCIgKyB0aWNrZXRfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmltcGxlbWVudGVkIG9wICdcIiArIG9wc1tvcFswXV0gKyBcIic6XCIsIG9wKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYmxvY2svJHtibG9ja31gfT4je2Jsb2NrfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtjb2x1bW4sIGNvbG9yfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuL0JpbmRUb0NoYWluU3RhdGVcIjtcclxuXHJcbmNsYXNzIFBlbmRpbmdCbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGJsb2NrTnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IFwiMi4xLjBcIlxyXG4gICAgfTtcclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuICFJbW11dGFibGUuaXMoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZHluR2xvYmFsT2JqZWN0LFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuZHluR2xvYmFsT2JqZWN0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Jsb2NrTnVtYmVyLCBkeW5HbG9iYWxPYmplY3R9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBsYXN0SXJyZXZlcnNpYmxlQmxvY2tOdW0gPSBkeW5HbG9iYWxPYmplY3QuZ2V0KFxyXG4gICAgICAgICAgICBcImxhc3RfaXJyZXZlcnNpYmxlX2Jsb2NrX251bVwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJsb2NrTnVtYmVyID4gbGFzdElycmV2ZXJzaWJsZUJsb2NrTnVtID8gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtcIiAtIFwifShcclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwib3BlcmF0aW9uLnBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17YmxvY2tOdW1iZXIgLSBsYXN0SXJyZXZlcnNpYmxlQmxvY2tOdW19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoUGVuZGluZ0Jsb2NrKTtcclxuIiwiaW1wb3J0IHtzYXZlQXN9IGZyb20gXCJmaWxlLXNhdmVyXCI7XHJcbmltcG9ydCB7Q2hhaW5UeXBlcyBhcyBncmFwaGVuZUNoYWluVHlwZXMsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgcmVwb3J0IGZyb20gXCJiaXRzaGFyZXMtcmVwb3J0XCI7XHJcbmNvbnN0IHtvcGVyYXRpb25zfSA9IGdyYXBoZW5lQ2hhaW5UeXBlcztcclxuY29uc3Qgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XHJcblxyXG5jb25zdCBGVUxMID0gXCJGVUxMXCI7XHJcbmNvbnN0IENPSU5CQVNFID0gXCJDT0lOQkFTRVwiO1xyXG5cclxuZXhwb3J0IHtGVUxMLCBDT0lOQkFTRX07XHJcblxyXG5jbGFzcyBBY2NvdW50SGlzdG9yeUV4cG9ydGVyIHtcclxuICAgIHBhZChudW1iZXIsIGxlbmd0aCkge1xyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiICsgbnVtYmVyO1xyXG4gICAgICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiMFwiICsgc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChcIjBcIiArIGQuZ2V0RGF0ZSgpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICBcIi5cIiArXHJcbiAgICAgICAgICAgIChcIjBcIiArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAgICAgXCIuXCIgK1xyXG4gICAgICAgICAgICBkLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgIChcIjBcIiArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAoXCIwXCIgKyBkLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAoXCIwXCIgKyBkLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAgICAgXCIgR01UXCIgK1xyXG4gICAgICAgICAgICAoKGQuZ2V0VGltZXpvbmVPZmZzZXQoKSA8IDAgPyBcIitcIiA6IFwiLVwiKSArIC8vIE5vdGUgdGhlIHJldmVyc2VkIHNpZ24hXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZChcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChNYXRoLmZsb29yKE1hdGguYWJzKGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICkgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWQoTWF0aC5hYnMoZC5nZXRUaW1lem9uZU9mZnNldCgpICUgNjApLCAyKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdlbmVyYXRlQ1NWKGFjY291bnRzTGlzdCwgZXNOb2RlLCBleHBvcnRUeXBlKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gMCxcclxuICAgICAgICAgICAgbGltaXQgPSAxNTA7XHJcbiAgICAgICAgbGV0IGFjY291bnQgPSBhY2NvdW50c0xpc3RbMF0uZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gKGF3YWl0IEZldGNoQ2hhaW4oXCJnZXRBY2NvdW50XCIsIGFjY291bnQpKS5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgIGxldCByZWNvcmREYXRhID0ge307XHJcblxyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLl9nZXRBY2NvdW50SGlzdG9yeUVTKFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgICAgICAgIGxpbWl0LFxyXG4gICAgICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlc05vZGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKCFyZXMubGVuZ3RoKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHJlcG9ydC5yZXNvbHZlQmxvY2tUaW1lcyhyZXMpO1xyXG5cclxuICAgICAgICAgICAgLyogQmVmb3JlIHBhcnNpbmcgcmVzdWx0cyB3ZSBuZWVkIHRvIGtub3cgdGhlIGFzc2V0IGluZm8gKHByZWNpc2lvbikgKi9cclxuICAgICAgICAgICAgYXdhaXQgcmVwb3J0LnJlc29sdmVBc3NldHMocmVzKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5tYXAoZnVuY3Rpb24ocmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cnhfaWQgPSByZWNvcmQuaWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGltZXN0YW1wID0gYXBpLmdldEJsb2NrKHJlY29yZC5ibG9ja19udW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IG9wc1tyZWNvcmQub3AudHlwZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVjb3JkLm9wLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YSBpcyBzb21ldGltZXMgbnVsbFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYW1vdW50ID0gZGF0YS5hbW91bnRfO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5hbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFtb3VudCA9IGRhdGEuYW1vdW50XztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZERhdGFbdHJ4X2lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKHJlY29yZC5ibG9ja190aW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RhcnQgKz0gcmVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhyZWNvcmREYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcnNlZERhdGE7XHJcbiAgICAgICAgaWYgKGV4cG9ydFR5cGUgPT09IEZVTEwpIHtcclxuICAgICAgICAgICAgcGFyc2VkRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHJlY29yZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGEucHVzaChbaSwgcmVjb3JkRGF0YVtpXV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVjb3JkRGF0YSA9IHJlcG9ydC5ncm91cEVudHJpZXMocmVjb3JkRGF0YSk7XHJcbiAgICAgICAgICAgIHBhcnNlZERhdGEgPSByZXBvcnQucGFyc2VEYXRhKHJlY29yZERhdGEsIGFjY291bnQsIGFjY291bnROYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBibG9iID0gdGhpcy5kYXRhVG9DU1YocGFyc2VkRGF0YSwgZXhwb3J0VHlwZSk7XHJcblxyXG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgc2F2ZUFzKFxyXG4gICAgICAgICAgICBibG9iLFxyXG4gICAgICAgICAgICBcImJpdHNoYXJlcy1hY2NvdW50LWhpc3RvcnktXCIgK1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudE5hbWUgK1xyXG4gICAgICAgICAgICAgICAgXCItXCIgK1xyXG4gICAgICAgICAgICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSArXHJcbiAgICAgICAgICAgICAgICBcIi1cIiArXHJcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAgICAgXCItXCIgK1xyXG4gICAgICAgICAgICAgICAgKFwiMFwiICsgdG9kYXkuZ2V0RGF0ZSgpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAgICAgXCItXCIgK1xyXG4gICAgICAgICAgICAgICAgKFwiMFwiICsgdG9kYXkuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAgICAgICAgIChcIjBcIiArIHRvZGF5LmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAgICAgICAgIFwiLmNzdlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV4cG9ydCBmaWxlIGdlbmVyYXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0QWNjb3VudEhpc3RvcnlFUyhhY2NvdW50X2lkLCBsaW1pdCwgc3RhcnQsIGVzTm9kZSkge1xyXG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiZ2V0X2FjY291bnRfaGlzdG9yeVwiO1xyXG4gICAgICAgIGlmIChlc05vZGUuaW5kZXhPZihcImV4cGxvcmVyXCIpICE9PSAtMSB8fCBlc05vZGUuaW5kZXhPZihcImFwaVwiKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZW5kcG9pbnQgPSBcImVzL2FjY291bnRfaGlzdG9yeVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcXVlcnlVcmwgPVxyXG4gICAgICAgICAgICBlc05vZGUgK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGVuZHBvaW50ICtcclxuICAgICAgICAgICAgXCI/YWNjb3VudF9pZD1cIiArXHJcbiAgICAgICAgICAgIGFjY291bnRfaWQgK1xyXG4gICAgICAgICAgICBcIiZmcm9tXz1cIiArXHJcbiAgICAgICAgICAgIHN0YXJ0ICtcclxuICAgICAgICAgICAgXCImc2l6ZT1cIiArXHJcbiAgICAgICAgICAgIGxpbWl0ICtcclxuICAgICAgICAgICAgXCImc29ydF9ieT1ibG9ja19kYXRhLmJsb2NrX3RpbWUmdHlwZT1kYXRhJmFnZ19maWVsZD1vcGVyYXRpb25fdHlwZVwiO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5XCIsIHF1ZXJ5VXJsKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaChxdWVyeVVybClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3BIaXN0b3J5ID0gcmVzdWx0Lm1hcChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFuc3dlciBtaWdodCBkaWZmZXIgaWYgb3Bfb3BqZWN0IGlzIGZpbGxlZCBvciBub3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wX2RhdGEgPSByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wX29iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcF9kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcF9kYXRhID0gSlNPTi5wYXJzZShyLm9wZXJhdGlvbl9oaXN0b3J5Lm9wKVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByLmFjY291bnRfaGlzdG9yeS5vcGVyYXRpb25faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHIub3BlcmF0aW9uX3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb3BfZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wZXJhdGlvbl9yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19udW06IHIuYmxvY2tfZGF0YS5ibG9ja19udW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja190aW1lOiByLmJsb2NrX2RhdGEuYmxvY2tfdGltZSArIFwiWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3BIaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFUb0NTVihkYXRhLCBleHBvcnRUeXBlKSB7XHJcbiAgICAgICAgbGV0IGNzdlN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChleHBvcnRUeXBlID09PSBDT0lOQkFTRSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID49IDExICYmIGxpbmVbMTBdIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVbMTBdID0gdGhpcy5mb3JtYXREYXRlKGxpbmVbMTBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNzdlN0cmluZyArPSBsaW5lLmpvaW4oXCIsXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNzdlN0cmluZyArPSBKU09OLnN0cmluZ2lmeShsaW5lKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtjc3ZTdHJpbmddLCB7dHlwZTogXCJ0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04XCJ9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudEhpc3RvcnlFeHBvcnRlcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBR0E7QUFBQTtBQUdBO0FBcEJBO0FBc0JBO0FBdkJBO0FBMEJBOzs7O0FBcEZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQURBOzs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWlCQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFDQTtBQURBO0FBeU9BO0FBQ0E7QUFDQTtBQXRPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFrQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFJQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7Ozs7OztBQUNBLDZDQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7O0FBSUE7QUFDQTs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFKQTtBQUlBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBV0E7QUFDQTtBQTdDQTtBQStDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBSUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVZBO0FBckJBO0FBd0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBU0E7QUFUQTtBQU5BO0FBb0JBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFSQTtBQU5BO0FBekJBO0FBNENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUE5Q0E7QUFzREE7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQVpBO0FBZ0JBO0FBR0E7QUFDQTtBQUxBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBTEE7QUFRQTtBQWhCQTtBQW9CQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFMQTtBQVFBO0FBaEJBO0FBb0JBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQTFGQTtBQTZGQTtBQWpLQTtBQXpDQTtBQThNQTs7OztBQXRsQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQTZrQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBO0FBQ0E7QUFXQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQWZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQURBO0FBQ0E7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFSQTtBQW9CQTtBQXJCQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBR0E7QUFHQTtBQUdBO0FBQ0E7QUFLQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUExQkE7QUErQkE7QUFyRUE7QUFEQTtBQTBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBVEE7QUFEQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFsQkE7QUFEQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFEQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBREE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUFvQkE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQWJBO0FBREE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQWJBO0FBREE7QUEwQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQURBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQURBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBREE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQWZBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBREE7QUFNQTtBQVJBO0FBUkE7QUFEQTtBQUFBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQWRBO0FBeEJBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBREE7QUFJQTtBQU5BO0FBUkE7QUFEQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBVUE7QUFiQTtBQUpBO0FBcUJBO0FBQ0E7QUExQkE7QUFyQkE7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBREE7QUFJQTtBQU5BO0FBUkE7QUFEQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBUEE7QUFTQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFQQTtBQVNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBM0JBO0FBZ0NBO0FBOURBO0FBREE7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQWpCQTtBQURBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQUhBO0FBSEE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFsQkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTFCQTtBQThCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFKQTtBQS9CQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQVJBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU5BO0FBSkE7QUFqQkE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFiQTtBQURBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFGQTtBQXRCQTtBQURBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFEQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWlCQTtBQWpCQTtBQUFBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUEzL0NBO0FBZ2dEQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDempEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUFBO0FBU0E7Ozs7QUFqQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUFDQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBY0E7QUFNQTs7OztBQUVBOzs7Ozs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOztBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFLQTs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTs7Ozs7O0FBR0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==