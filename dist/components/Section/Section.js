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
exports.Section = void 0;
var React = require("react");
require("./Section.css");
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.render = function () {
        var _a = this.props, size = _a.size, className = _a.className, children = _a.children;
        var classes = ['dcl', 'section', size];
        if (className) {
            classes.push(className);
        }
        return React.createElement("div", { className: classes.join(' ') }, children);
    };
    Section.defaultProps = {
        size: 'medium'
    };
    return Section;
}(React.PureComponent));
exports.Section = Section;
