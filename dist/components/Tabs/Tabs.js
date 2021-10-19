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
exports.Tabs = void 0;
var React = require("react");
var Media_1 = require("../Media");
var Container_1 = require("../Container/Container");
require("./Tabs.css");
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, children = _a.children, isFullscreen = _a.isFullscreen, onClick = _a.onClick;
        return (React.createElement("div", { className: "dcl tabs " + (isFullscreen ? 'fullscreen' : ''), onClick: onClick },
            React.createElement(Media_1.NotMobile, null,
                React.createElement(Container_1.Container, null, children)),
            React.createElement(Media_1.Mobile, null, children)));
    };
    Tabs.defaultProps = {
        isFullscreen: false,
    };
    Tabs.Left = function (_a) {
        var children = _a.children;
        return (React.createElement("div", { className: "dcl tabs-left" }, children));
    };
    Tabs.Right = function (_a) {
        var children = _a.children;
        return (React.createElement("div", { className: "dcl tabs-right" }, children));
    };
    Tabs.Tab = function (_a) {
        var active = _a.active, onClick = _a.onClick, children = _a.children;
        return (React.createElement("div", { className: "dcl tab " + (active ? 'active' : ''), onClick: onClick },
            children,
            active ? React.createElement("div", { className: "active-bar" }) : null));
    };
    return Tabs;
}(React.PureComponent));
exports.Tabs = Tabs;
