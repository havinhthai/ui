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
exports.Filter = void 0;
var React = require("react");
require("./Filter.css");
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    function Filter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Filter.prototype.render = function () {
        var _a = this.props, active = _a.active, children = _a.children;
        return (React.createElement("div", { className: "dcl filter " + (active ? 'active' : '') },
            React.createElement("div", { className: "filter-background" }),
            React.createElement("span", null, children)));
    };
    return Filter;
}(React.PureComponent));
exports.Filter = Filter;
