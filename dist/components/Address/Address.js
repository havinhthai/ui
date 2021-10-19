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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var React = require("react");
require("./Address.css");
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Address.prototype.render = function () {
        var _a = this.props, className = _a.className, strong = _a.strong, shorten = _a.shorten, tooltip = _a.tooltip, value = _a.value;
        var classes = ("dcl address " + className).trim();
        var address = shorten
            ? value.slice(0, 6) + '\u2026' + value.slice(-4)
            : value;
        var tooltipProps = tooltip
            ? { 'data-balloon': value, 'data-balloon-pos': 'up' }
            : {};
        return strong ? (React.createElement("strong", __assign({ className: classes }, tooltipProps), address)) : (React.createElement("span", __assign({ className: classes }, tooltipProps), address));
    };
    Address.defaultProps = {
        className: '',
        strong: false,
        shorten: true
    };
    return Address;
}(React.Component));
exports.Address = Address;
