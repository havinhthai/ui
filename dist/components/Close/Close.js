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
exports.Close = void 0;
var React = require("react");
require("./Close.css");
var Close = /** @class */ (function (_super) {
    __extends(Close, _super);
    function Close() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Close.prototype.render = function () {
        var _a = this.props, small = _a.small, onClick = _a.onClick;
        return (React.createElement("div", { className: "dcl close " + (small ? 'small' : ''), onClick: onClick },
            React.createElement("div", { className: "close-icon" })));
    };
    Close.defaultProps = {
        onClick: function () { return undefined; }
    };
    return Close;
}(React.PureComponent));
exports.Close = Close;
