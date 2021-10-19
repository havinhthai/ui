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
exports.Narrow = void 0;
var React = require("react");
require("./Narrow.css");
var Narrow = /** @class */ (function (_super) {
    __extends(Narrow, _super);
    function Narrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Narrow.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        var classes = ['dcl', 'narrow'];
        if (className) {
            classes.push(className);
        }
        return React.createElement("div", { className: classes.join(' ') }, children);
    };
    return Narrow;
}(React.PureComponent));
exports.Narrow = Narrow;
