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
exports.Toast = exports.ToastType = void 0;
var React = require("react");
var Close_1 = require("../Close/Close");
require("./Toast.css");
var ToastType;
(function (ToastType) {
    ToastType["INFO"] = "info";
    ToastType["WARN"] = "warn";
    ToastType["ERROR"] = "error";
})(ToastType = exports.ToastType || (exports.ToastType = {}));
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mounted = false;
        _this.closeTimeoutId = null;
        _this.handleClose = function () {
            _this.props.onClose();
        };
        return _this;
    }
    Toast.prototype.componentDidMount = function () {
        this.mounted = true;
        if (this.shouldCloseAfterTimeout()) {
            this.closeAfterTimeout();
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    Toast.prototype.closeAfterTimeout = function () {
        var _this = this;
        var timeout = this.props.timeout;
        this.closeTimeoutId = window.setTimeout(function () {
            if (_this.mounted) {
                _this.handleClose();
            }
            _this.closeTimeoutId = null;
        }, timeout);
    };
    Toast.prototype.shouldCloseAfterTimeout = function () {
        var timeout = this.props.timeout;
        return timeout !== undefined && this.closeTimeoutId !== null;
    };
    Toast.prototype.render = function () {
        var _a = this.props, _b = _a.type, type = _b === void 0 ? ToastType.INFO : _b, title = _a.title, body = _a.body, closable = _a.closable;
        return (React.createElement("div", { className: "dcl toast " + type.toLowerCase() },
            closable ? React.createElement(Close_1.Close, { small: true, onClick: this.handleClose }) : null,
            React.createElement("div", { className: "title" }, title),
            React.createElement("div", { className: "body" }, body)));
    };
    return Toast;
}(React.PureComponent));
exports.Toast = Toast;
