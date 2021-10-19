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
exports.Mana = void 0;
var React = require("react");
var schemas_1 = require("@dcl/schemas");
var Header_1 = require("../Header/Header");
require("./Mana.css");
var Mana = /** @class */ (function (_super) {
    __extends(Mana, _super);
    function Mana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mana.prototype.render = function () {
        var _a = this.props, size = _a.size, className = _a.className, inline = _a.inline, children = _a.children, network = _a.network, rest = __rest(_a, ["size", "className", "inline", "children", "network"]);
        var classes = ("dcl mana " + (inline ? 'inline ' : '') + className).trim();
        return (React.createElement(Header_1.Header, __assign({ size: size, className: classes }, rest),
            React.createElement("i", { className: "symbol" }, network !== schemas_1.Network.ETHEREUM ? (React.createElement("i", { className: network.toLowerCase() })) : ('⏣')),
            children));
    };
    Mana.defaultProps = {
        className: '',
        network: schemas_1.Network.ETHEREUM
    };
    return Mana;
}(React.Component));
exports.Mana = Mana;
