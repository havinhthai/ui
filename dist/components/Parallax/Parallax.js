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
exports.Parallax = void 0;
var React = require("react");
var ParallaxJS = require("parallax-js");
var Parallax = /** @class */ (function (_super) {
    __extends(Parallax, _super);
    function Parallax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parallax.prototype.componentDidMount = function () {
        if (this.scene && typeof ParallaxJS === 'function') {
            this.parallax = new ParallaxJS(this.scene, this.props);
        }
    };
    Parallax.prototype.componentWillUnmount = function () {
        if (this.parallax) {
            this.parallax.disable();
        }
    };
    Parallax.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "dcl parallax", ref: function (scene) { return (_this.scene = scene); } }, this.props.children));
    };
    Parallax.Layer = function (_a) {
        var depth = _a.depth, children = _a.children, rest = __rest(_a, ["depth", "children"]);
        var props = __assign({ 'data-depth': depth }, rest);
        return (React.createElement("div", __assign({ className: "layer" }, props), children));
    };
    return Parallax;
}(React.PureComponent));
exports.Parallax = Parallax;
