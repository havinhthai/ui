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
exports.Page = void 0;
var React = require("react");
var Container_1 = require("../Container/Container");
require("./Page.css");
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        var _a = this.props, isFullscreen = _a.isFullscreen, className = _a.className, children = _a.children;
        var classes = 'dcl page';
        if (isFullscreen) {
            classes += ' fullscreen';
        }
        if (className) {
            classes += " " + className;
        }
        return (React.createElement("div", { className: classes }, isFullscreen ? children : React.createElement(Container_1.Container, null, children)));
    };
    Page.defaultProps = {
        hasHero: false,
        heroHeight: 302,
        isFullscreen: false
    };
    return Page;
}(React.PureComponent));
exports.Page = Page;
