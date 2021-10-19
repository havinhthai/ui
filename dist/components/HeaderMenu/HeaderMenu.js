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
exports.HeaderMenu = void 0;
var React = require("react");
require("./HeaderMenu.css");
var HeaderMenu = /** @class */ (function (_super) {
    __extends(HeaderMenu, _super);
    function HeaderMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderMenu.prototype.render = function () {
        var _a = this.props, stackable = _a.stackable, children = _a.children;
        return (React.createElement("div", { className: "dcl header-menu " + (stackable ? 'stackable' : '') }, children));
    };
    HeaderMenu.defaultProps = {
        stackable: false
    };
    HeaderMenu.Left = function (_a) {
        var children = _a.children;
        return (React.createElement("div", { className: "dcl header-menu-left" }, children));
    };
    HeaderMenu.Right = function (_a) {
        var children = _a.children;
        return (React.createElement("div", { className: "dcl header-menu-right" }, children));
    };
    return HeaderMenu;
}(React.PureComponent));
exports.HeaderMenu = HeaderMenu;
