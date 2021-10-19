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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toasts = void 0;
var React = require("react");
require("./Toasts.css");
var Toasts = /** @class */ (function (_super) {
    __extends(Toasts, _super);
    function Toasts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toasts.prototype.render = function () {
        var _a = this.props, _b = _a.position, position = _b === void 0 ? 'top right' : _b, children = _a.children;
        var className = __spreadArrays(['dcl', 'toasts'], position.split(' '));
        return React.createElement("div", { className: className.join(' ') }, children);
    };
    return Toasts;
}(React.PureComponent));
exports.Toasts = Toasts;
