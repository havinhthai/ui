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
exports.Empty = void 0;
var React = require("react");
require("./Empty.css");
var Empty = /** @class */ (function (_super) {
    __extends(Empty, _super);
    function Empty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empty.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, height = _a.height, expand = _a.expand;
        var classes = ['dcl', 'empty'];
        if (className) {
            classes.push(className);
        }
        if (expand) {
            classes.push('expand');
        }
        var style = {};
        if (height) {
            style.height = height;
        }
        return (React.createElement("div", { className: classes.join(' '), style: style }, children));
    };
    return Empty;
}(React.PureComponent));
exports.Empty = Empty;
