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
exports.LanguageIcon = void 0;
var React = require("react");
require("./LanguageIcon.css");
var LanguageIcon = /** @class */ (function (_super) {
    __extends(LanguageIcon, _super);
    function LanguageIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageIcon.prototype.renderIcon = function () {
        return React.createElement("i", { className: "dcl language-icon " + this.props.locale });
    };
    LanguageIcon.prototype.render = function () {
        return this.props.label ? (React.createElement("div", { className: "dcl language-icon-wrapper" },
            this.renderIcon(),
            React.createElement("div", { className: "language-icon-label" }, this.props.label))) : (this.renderIcon());
    };
    return LanguageIcon;
}(React.PureComponent));
exports.LanguageIcon = LanguageIcon;
