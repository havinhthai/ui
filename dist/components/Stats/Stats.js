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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
var React = require("react");
var Header_1 = require("../Header/Header");
require("./Stats.css");
var Stats = /** @class */ (function (_super) {
    __extends(Stats, _super);
    function Stats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stats.prototype.render = function () {
        var _a = this.props, title = _a.title, className = _a.className, children = _a.children;
        var classes = ("dcl stats " + className).trim();
        return (React.createElement("span", { className: classes },
            React.createElement(Header_1.Header, { sub: true }, title),
            typeof children === 'string' ? React.createElement(Header_1.Header, null, children) : children));
    };
    Stats.defaultProps = {
        className: ''
    };
    return Stats;
}(React.Component));
exports.Stats = Stats;
