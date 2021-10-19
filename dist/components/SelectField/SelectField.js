"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectField = void 0;
var React = require("react");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Header_1 = require("../Header/Header");
require("./SelectField.css");
var SelectField = /** @class */ (function (_super) {
    __extends(SelectField, _super);
    function SelectField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectField.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, header = _a.header, options = _a.options, message = _a.message, error = _a.error, rest = __rest(_a, ["label", "header", "options", "message", "error"]);
        var classes = 'dcl select-field';
        if (error) {
            classes += ' error warning circle';
        }
        return (React.createElement("div", { className: classes },
            label ? React.createElement(Header_1.Header, { sub: true }, label) : null,
            React.createElement(Dropdown_1.Dropdown, __assign({ search: true, selection: true, options: options }, rest), header && React.createElement(Dropdown_1.Dropdown.Menu, { className: "wrapper" },
                React.createElement(Dropdown_1.Dropdown.Header, { content: header }),
                React.createElement(Dropdown_1.Dropdown.Menu, { scrolling: true, className: "options-wrapper" }, options.map(function (opt, i) { return (React.createElement(Dropdown_1.Dropdown.Item, __assign({ key: i }, opt, { onClick: function (e) {
                        return _this.props.onChange(e, __assign(__assign({}, _this.props), { value: opt.value }));
                    } }))); })))),
            React.createElement("p", { className: "message" },
                message,
                "\u00A0")));
    };
    return SelectField;
}(React.PureComponent));
exports.SelectField = SelectField;
