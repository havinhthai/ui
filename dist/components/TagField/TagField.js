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
exports.TagField = void 0;
var React = require("react");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Header_1 = require("../Header/Header");
require("./TagField.css");
var TagField = /** @class */ (function (_super) {
    __extends(TagField, _super);
    function TagField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containerRef = React.createRef();
        _this.getOptions = function () {
            var _a;
            var value = (_a = _this.props.value) !== null && _a !== void 0 ? _a : [];
            return value.map(function (value) { return ({ text: value.toString(), value: value.toString() }); });
        };
        _this.handleScrollToEnd = function () {
            var el = _this.containerRef.current;
            if (el) {
                setTimeout(function () { return (el.scrollLeft = el.scrollWidth); }, 0);
            }
        };
        _this.handleChange = function (e, dropdownProps) {
            var onChange = _this.props.onChange;
            _this.handleScrollToEnd();
            if (onChange) {
                onChange(e, dropdownProps);
            }
        };
        return _this;
    }
    TagField.prototype.render = function () {
        var _a = this.props, label = _a.label, error = _a.error, message = _a.message, rest = __rest(_a, ["label", "error", "message"]);
        var classes = 'dcl tag-field';
        if (error) {
            classes += ' error';
        }
        return (React.createElement("div", { className: classes },
            label ? React.createElement(Header_1.Header, { sub: true }, label) : null,
            React.createElement("div", { className: "container", ref: this.containerRef },
                React.createElement(Dropdown_1.Dropdown, __assign({ options: this.getOptions(), allowAdditions: true, selection: true, multiple: true, search: true, fluid: true, on: true }, rest, { onChange: this.handleChange }))),
            React.createElement("p", { className: "message" },
                message,
                "\u00A0")));
    };
    return TagField;
}(React.PureComponent));
exports.TagField = TagField;
