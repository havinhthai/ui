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
exports.Center = void 0;
var React = require("react");
require("./Center.css");
var Center = /** @class */ (function (_super) {
    __extends(Center, _super);
    function Center() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Center.prototype.render = function () {
        var _a = this.props, screen = _a.screen, className = _a.className, children = _a.children;
        var classes = ("dcl center " + (screen ? 'screen' : '')).trim();
        if (className) {
            classes += ' ' + className;
        }
        return (React.createElement("div", { className: classes }, children));
    };
    return Center;
}(React.PureComponent));
exports.Center = Center;
