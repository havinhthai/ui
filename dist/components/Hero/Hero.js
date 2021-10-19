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
exports.Hero = void 0;
var React = require("react");
var Container_1 = require("../Container/Container");
var Header_1 = require("../Header/Header");
require("./Hero.css");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props, _b = _a.centered, centered = _b === void 0 ? false : _b, width = _a.width, height = _a.height, className = _a.className, children = _a.children;
        var style = null;
        var classes = '';
        if (centered) {
            classes += ' centered';
        }
        if (className) {
            classes += " " + className;
        }
        if (width || height) {
            style = { width: width, height: height };
        }
        return (React.createElement("div", { className: 'dcl hero' + classes, style: style }, children));
    };
    Hero.Header = function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement(Container_1.Container, null,
            React.createElement(Header_1.Header, __assign({ className: "hero-title", size: "huge" }, props), children)));
    };
    Hero.Description = function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement(Container_1.Container, null,
            React.createElement(Header_1.Header, __assign({ className: "hero-subtitle" }, props), children)));
    };
    Hero.Content = function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement("div", __assign({ className: "hero-content" }, props), children));
    };
    Hero.Actions = function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement(Container_1.Container, __assign({ className: "hero-actions" }, props), children));
    };
    return Hero;
}(React.PureComponent));
exports.Hero = Hero;
