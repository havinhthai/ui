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
exports.Column = void 0;
var React = require("react");
require("./Column.css");
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, center = _a.center, align = _a.align, width = _a.width, height = _a.height, grow = _a.grow, shrink = _a.shrink, onClick = _a.onClick;
        var classes = ['dcl', 'column'];
        if (center) {
            console.warn("The prop 'center' has been deprecated from <Column> component, use aligh=\"center\" instead.");
            classes.push('center');
        }
        else {
            classes.push(align);
        }
        if (className) {
            classes.push(className);
        }
        if (grow) {
            classes.push('grow');
        }
        if (shrink) {
            classes.push('shrink');
        }
        var style = {};
        if (width) {
            style.width = width;
        }
        if (height) {
            style.height = height;
        }
        return (React.createElement("div", { className: classes.join(' '), onClick: onClick, style: style }, children));
    };
    Column.defaultProps = {
        align: 'left',
        center: false,
        grow: true,
        shrink: true,
        className: ''
    };
    return Column;
}(React.PureComponent));
exports.Column = Column;
