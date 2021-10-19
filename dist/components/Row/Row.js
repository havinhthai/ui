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
exports.Row = void 0;
var React = require("react");
require("./Row.css");
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, onClick = _a.onClick, align = _a.align, center = _a.center, width = _a.width, height = _a.height, stacked = _a.stacked, grow = _a.grow, shrink = _a.shrink;
        var classes = ['dcl', 'row'];
        if (center) {
            console.warn("The prop 'center' has been deprecated from <Row> component, use aligh=\"center\" instead.");
            classes.push('center');
        }
        else {
            classes.push(align);
        }
        if (className) {
            classes.push(className);
        }
        if (stacked) {
            classes.push('stacked');
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
    Row.defaultProps = {
        align: 'left',
        center: false,
        grow: true,
        shrink: true,
        className: ''
    };
    return Row;
}(React.PureComponent));
exports.Row = Row;
