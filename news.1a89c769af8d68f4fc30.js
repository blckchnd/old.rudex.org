(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[34],{

/***/ 3161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3162);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(steem_js_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var golos_classic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3182);
/* harmony import */ var golos_classic_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(golos_classic_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1957);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(562);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var api = void 0;

var query = {
    select_authors: ["rudex"],
    tag: "rudex",
    limit: 20
};

var alignRight = { textAlign: "right" };
var alignLeft = { textAlign: "left" };
var rowHeight = { height: "2rem" };
var bodyCell = { padding: "0.5rem 1rem" };
var headerCell = { padding: "0.85rem 1rem" };

var leftCell = _extends({}, alignLeft, bodyCell);
var rightCell = _extends({}, alignRight, bodyCell);

var leftCellHeader = _extends({}, alignLeft, headerCell);
var rightCellHeader = _extends({}, alignRight, headerCell);

var secondCol = _extends({}, leftCell, { width: "180px" });

var SomethingWentWrong = function SomethingWentWrong() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "p",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "news.errors.fetch" })
    );
};

var ReusableLink = function ReusableLink(_ref) {
    var data = _ref.data,
        locale = _ref.locale,
        url = _ref.url,
        _ref$isLink = _ref.isLink,
        isLink = _ref$isLink === undefined ? false : _ref$isLink;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "a",
        {
            //href={`https://steemit.com${url}`}
            //href={`https://golos.id${url}`}
            href: locale == "ru" ? "https://golos.id" + url : "https://steemit.com" + url,
            rel: "noreferrer noopener",
            target: "_blank",
            style: { display: "block" },
            className: !isLink ? "primary-text" : "external-link"
        },
        common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sanitize(data)
    );
};

var NewsTable = function NewsTable(_ref2) {
    var data = _ref2.data,
        width = _ref2.width,
        locale = _ref2.locale;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "table",
        {
            className: "table table-hover dashboard-table",
            style: { fontSize: "0.85rem" }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "thead",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: rightCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        component: "span",
                        content: "account.votes.line"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        component: "span",
                        content: "explorer.block.date"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { component: "span", content: "news.subject" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { component: "span", content: "news.author" })
                )
            )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "tbody",
            null,
            data.map(function (singleNews, iter) {
                var theAuthor = singleNews.parentAuthor ? singleNews.parentAuthor : singleNews.author;
                var formattedDate = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(new Date(singleNews.created));
                var smartTitle = singleNews.title.length * 6 > width - 450 ? singleNews.title.slice(0, Math.floor(width - 450) / 6) + "..." : singleNews.title;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: "" + singleNews.title.slice(0, 10) + iter },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: rightCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: iter + 1,
                            locale: locale,
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: secondCol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: formattedDate,
                            locale: locale,
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: smartTitle,
                            locale: locale,
                            url: singleNews.url,
                            isLink: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: theAuthor,
                            locale: locale,
                            url: singleNews.url
                        })
                    )
                );
            })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "thead",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { style: rowHeight },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: rightCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell })
            )
        )
    );
};

var News = function (_React$Component) {
    _inherits(News, _React$Component);

    function News(props) {
        _classCallCheck(this, News);

        var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

        _this.state = {
            isLoading: true,
            isWrong: false,
            discussions: [],
            width: 1200,
            currentLocale: react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a.getLocale()
        };
        _this.updateDimensions = _this.updateDimensions.bind(_this);
        _this.orderDiscussions = _this.orderDiscussions.bind(_this);
        return _this;
    }

    _createClass(News, [{
        key: "updateDimensions",
        value: function updateDimensions() {
            this.setState({ width: window.innerWidth });
        }
    }, {
        key: "orderDiscussions",
        value: function orderDiscussions(discussions) {
            var orderedDiscussions = discussions.sort(function (a, b) {
                return new Date(b.created) - new Date(a.created);
            });
            this.setState({ discussions: orderedDiscussions, isLoading: false });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.updateDimensions();
            window.addEventListener("resize", this.updateDimensions);

            if (this.state.currentLocale === "ru") {
                api = golos_classic_js__WEBPACK_IMPORTED_MODULE_3__["api"];
                api.setWebSocket("wss://api.golos.id/ws");
            } else api = steem_js_api__WEBPACK_IMPORTED_MODULE_2__["api"];

            api.getDiscussionsByBlog(query).then(function (discussions) {
                _this2.orderDiscussions(discussions);
            }).catch(function () {
                _this2.setState({ isLoading: false, isWrong: true });
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions);
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                isLoading = _state.isLoading,
                isWrong = _state.isWrong,
                discussions = _state.discussions,
                width = _state.width,
                currentLocale = _state.currentLocale;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "account-tabs" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "tab-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block vertical" },
                                isWrong && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SomethingWentWrong, null),
                                isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null,
                                !isWrong && !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsTable, {
                                    width: width,
                                    data: discussions,
                                    locale: currentLocale
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return News;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ 3180:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3210:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy4xYTg5Yzc2OWFmOGQ2OGY0ZmMzMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIiwid2VicGFjazovLy93cyAoaWdub3JlZCk/YjkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgKiBhcyBhcGlfZW4gZnJvbSBcInN0ZWVtLWpzLWFwaVwiO1xuaW1wb3J0ICogYXMgYXBpX3J1IGZyb20gXCJnb2xvcy1jbGFzc2ljLWpzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuXG5sZXQgYXBpO1xuXG5jb25zdCBxdWVyeSA9IHtcbiAgICBzZWxlY3RfYXV0aG9yczogW1wicnVkZXhcIl0sXG4gICAgdGFnOiBcInJ1ZGV4XCIsXG4gICAgbGltaXQ6IDIwXG59O1xuXG5jb25zdCBhbGlnblJpZ2h0ID0ge3RleHRBbGlnbjogXCJyaWdodFwifTtcbmNvbnN0IGFsaWduTGVmdCA9IHt0ZXh0QWxpZ246IFwibGVmdFwifTtcbmNvbnN0IHJvd0hlaWdodCA9IHtoZWlnaHQ6IFwiMnJlbVwifTtcbmNvbnN0IGJvZHlDZWxsID0ge3BhZGRpbmc6IFwiMC41cmVtIDFyZW1cIn07XG5jb25zdCBoZWFkZXJDZWxsID0ge3BhZGRpbmc6IFwiMC44NXJlbSAxcmVtXCJ9O1xuXG5jb25zdCBsZWZ0Q2VsbCA9IHsuLi5hbGlnbkxlZnQsIC4uLmJvZHlDZWxsfTtcbmNvbnN0IHJpZ2h0Q2VsbCA9IHsuLi5hbGlnblJpZ2h0LCAuLi5ib2R5Q2VsbH07XG5cbmNvbnN0IGxlZnRDZWxsSGVhZGVyID0gey4uLmFsaWduTGVmdCwgLi4uaGVhZGVyQ2VsbH07XG5jb25zdCByaWdodENlbGxIZWFkZXIgPSB7Li4uYWxpZ25SaWdodCwgLi4uaGVhZGVyQ2VsbH07XG5cbmNvbnN0IHNlY29uZENvbCA9IHsuLi5sZWZ0Q2VsbCwgd2lkdGg6IFwiMTgwcHhcIn07XG5cbmNvbnN0IFNvbWV0aGluZ1dlbnRXcm9uZyA9ICgpID0+IChcbiAgICA8cD5cbiAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibmV3cy5lcnJvcnMuZmV0Y2hcIiAvPlxuICAgIDwvcD5cbik7XG5cbmNvbnN0IFJldXNhYmxlTGluayA9ICh7ZGF0YSwgbG9jYWxlLCB1cmwsIGlzTGluayA9IGZhbHNlfSkgPT4gKFxuICAgIDxhXG4gICAgICAgIC8vaHJlZj17YGh0dHBzOi8vc3RlZW1pdC5jb20ke3VybH1gfVxuICAgICAgICAvL2hyZWY9e2BodHRwczovL2dvbG9zLmlkJHt1cmx9YH1cbiAgICAgICAgaHJlZj17XG4gICAgICAgICAgICBsb2NhbGUgPT0gXCJydVwiXG4gICAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9nb2xvcy5pZCR7dXJsfWBcbiAgICAgICAgICAgICAgICA6IGBodHRwczovL3N0ZWVtaXQuY29tJHt1cmx9YFxuICAgICAgICB9XG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19XG4gICAgICAgIGNsYXNzTmFtZT17IWlzTGluayA/IFwicHJpbWFyeS10ZXh0XCIgOiBcImV4dGVybmFsLWxpbmtcIn1cbiAgICA+XG4gICAgICAgIHt1dGlscy5zYW5pdGl6ZShkYXRhKX1cbiAgICA8L2E+XG4pO1xuXG5jb25zdCBOZXdzVGFibGUgPSAoe2RhdGEsIHdpZHRoLCBsb2NhbGV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBkYXNoYm9hcmQtdGFibGVcIlxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjg1cmVtXCJ9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3JpZ2h0Q2VsbEhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudm90ZXMubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLnN1YmplY3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLmF1dGhvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChzaW5nbGVOZXdzLCBpdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoZUF1dGhvciA9IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZU5ld3MuYXV0aG9yO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY291bnRlcnBhcnQubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzaW5nbGVOZXdzLmNyZWF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNtYXJ0VGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlTmV3cy50aXRsZS5sZW5ndGggKiA2ID4gd2lkdGggLSA0NTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3NpbmdsZU5ld3MudGl0bGUuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHdpZHRoIC0gNDUwKSAvIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9Li4uYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlTmV3cy50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Ake3NpbmdsZU5ld3MudGl0bGUuc2xpY2UoMCwgMTApfSR7aXRlcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3JpZ2h0Q2VsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZXIgKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtzZWNvbmRDb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV1c2FibGVMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtmb3JtYXR0ZWREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0Q2VsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3NtYXJ0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdENlbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV1c2FibGVMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGVBdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17cm93SGVpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtyaWdodENlbGx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn07XG5cbmNsYXNzIE5ld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGlzV3Jvbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlzY3Vzc2lvbnM6IFtdLFxuICAgICAgICAgICAgd2lkdGg6IDEyMDAsXG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBUcmFuc2xhdGUuZ2V0TG9jYWxlKClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zID0gdGhpcy51cGRhdGVEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3JkZXJEaXNjdXNzaW9ucyA9IHRoaXMub3JkZXJEaXNjdXNzaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aH0pO1xuICAgIH1cblxuICAgIG9yZGVyRGlzY3Vzc2lvbnMoZGlzY3Vzc2lvbnMpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZERpc2N1c3Npb25zID0gZGlzY3Vzc2lvbnMuc29ydChcbiAgICAgICAgICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWQpIC0gbmV3IERhdGUoYS5jcmVhdGVkKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNjdXNzaW9uczogb3JkZXJlZERpc2N1c3Npb25zLCBpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRMb2NhbGUgPT09IFwicnVcIikge1xuICAgICAgICAgICAgYXBpID0gYXBpX3J1LmFwaTtcbiAgICAgICAgICAgIGFwaS5zZXRXZWJTb2NrZXQoXCJ3c3M6Ly9hcGkuZ29sb3MuaWQvd3NcIik7XG4gICAgICAgIH0gZWxzZSBhcGkgPSBhcGlfZW4uYXBpO1xuXG4gICAgICAgIGFwaS5nZXREaXNjdXNzaW9uc0J5QmxvZyhxdWVyeSlcbiAgICAgICAgICAgIC50aGVuKGRpc2N1c3Npb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyRGlzY3Vzc2lvbnMoZGlzY3Vzc2lvbnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZSwgaXNXcm9uZzogdHJ1ZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgICAgICBpc1dyb25nLFxuICAgICAgICAgICAgZGlzY3Vzc2lvbnMsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGVcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcm9uZyAmJiA8U29tZXRoaW5nV2VudFdyb25nIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRpbmdJbmRpY2F0b3IgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzV3JvbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzVGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkaXNjdXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtjdXJyZW50TG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFiQTtBQURBO0FBQ0E7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFEQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBdkJBO0FBZ0NBO0FBaERBO0FBa0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQTVFQTtBQXNGQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFEQTtBQURBO0FBREE7QUFEQTtBQXFCQTs7OztBQTlFQTtBQUNBO0FBZ0ZBOzs7Ozs7O0FDak9BOzs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==