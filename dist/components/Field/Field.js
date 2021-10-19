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
exports.Field = void 0;
var React = require("react");
var Input_1 = require("semantic-ui-react/dist/commonjs/elements/Input/Input");
var Blockie_1 = require("../Blockie/Blockie");
var Button_1 = require("../Button/Button");
var Header_1 = require("../Header/Header");
require("./Field.css");
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.hasAction = function () {
        var _a = this.props, loading = _a.loading, error = _a.error, action = _a.action;
        var hasOnAction = this.props.onAction !== null && this.props.onAction !== undefined;
        return !this.isAddress() && !loading && !error && action && hasOnAction;
    };
    Field.prototype.isAddress = function () {
        var type = this.props.type;
        return type === 'address';
    };
    Field.prototype.render = function () {
        var _a = this.props, value = _a.value, label = _a.label, error = _a.error, message = _a.message, type = _a.type, loading = _a.loading, action = _a.action, onAction = _a.onAction, disabled = _a.disabled, rest = __rest(_a, ["value", "label", "error", "message", "type", "loading", "action", "onAction", "disabled"]);
        var isAddress = this.isAddress();
        var classes = 'dcl field';
        var icon;
        if (error) {
            classes += ' error';
            if (!isAddress) {
                icon = 'warning circle';
            }
        }
        if (isAddress) {
            classes += ' address';
        }
        if (disabled) {
            classes += ' disabled';
        }
        if (label) {
            classes += ' has-label';
        }
        if (isAddress && action) {
            console.warn("The address fields don't support actions, \"" + action + "\" will be ignored");
        }
        return (React.createElement("div", { className: classes },
            label ? React.createElement(Header_1.Header, { sub: true }, label) : null,
            React.createElement(Input_1.default, __assign({ value: value, type: isAddress ? 'text' : type, icon: icon ? icon : void 0, loading: loading && !isAddress, disabled: disabled }, rest)),
            this.hasAction() && (React.createElement("div", { className: "overlay" },
                React.createElement(Button_1.Button, { onClick: onAction, disabled: disabled, basic: true }, action))),
            this.isAddress() && value ? React.createElement(Blockie_1.Blockie, { seed: value, scale: 4 }) : null,
            React.createElement("p", { className: "message" },
                message,
                "\u00A0")));
    };
    return Field;
}(React.PureComponent));
exports.Field = Field;
