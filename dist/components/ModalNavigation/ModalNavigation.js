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
exports.ModalNavigation = void 0;
var React = require("react");
require("./ModalNavigation.css");
var ModalNavigation = /** @class */ (function (_super) {
    __extends(ModalNavigation, _super);
    function ModalNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalNavigation.prototype.render = function () {
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, onBack = _a.onBack, onClose = _a.onClose;
        return (React.createElement("div", { className: "dcl modal-navigation" },
            React.createElement("div", { className: "dcl modal-navigation-title" }, title),
            subtitle && (React.createElement("div", { className: "dcl modal-navigation-subtitle" }, subtitle)),
            onBack && (React.createElement("div", { className: "dcl modal-navigation-button modal-navigation-back", onClick: onBack })),
            onClose && (React.createElement("div", { className: "dcl modal-navigation-button modal-navigation-close", onClick: onClose }))));
    };
    return ModalNavigation;
}(React.PureComponent));
exports.ModalNavigation = ModalNavigation;
