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
exports.SignIn = void 0;
var React = require("react");
var Button_1 = require("../Button/Button");
var Header_1 = require("../Header/Header");
var StarWalletIcon_1 = require("../StarWalletIcon/StarWalletIcon");
require("./SignIn.css");
var SignIn = /** @class */ (function (_super) {
    __extends(SignIn, _super);
    function SignIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignIn.prototype.render = function () {
        var _a = this.props, center = _a.center, isConnecting = _a.isConnecting, isConnected = _a.isConnected, onConnect = _a.onConnect, hasError = _a.hasError, i18n = _a.i18n;
        var classes = 'SignIn';
        if (center) {
            classes += ' center';
        }
        var errorClasses = 'error';
        if (hasError && !isConnecting && !isConnected) {
            errorClasses += ' visible';
        }
        return (React.createElement("div", { className: classes },
            React.createElement(Header_1.Header, null, i18n.header),
            React.createElement(StarWalletIcon_1.StarWalletIcon, null),
            React.createElement("p", { className: "message" }, i18n.message),
            React.createElement(Button_1.Button, { primary: true, onClick: onConnect, disabled: isConnecting || isConnected }, isConnecting
                ? i18n.connecting
                : isConnected
                    ? i18n.connected
                    : i18n.connect),
            React.createElement("p", { className: errorClasses }, i18n.error)));
    };
    SignIn.defaultProps = {
        center: true,
        isConnected: false,
        isConnecting: false,
        hasError: false,
        onConnect: function () { return undefined; },
        i18n: {
            header: 'Get Started',
            message: (React.createElement("span", null,
                "You can use the",
                ' ',
                React.createElement("a", { href: "https://metamask.io", target: "_blank", rel: "noopener noreferrer" }, "MetaMask"),
                ' ',
                "extension or a hardware wallet like",
                ' ',
                React.createElement("a", { href: "https://www.ledger.com/", target: "_blank", rel: "noopener noreferrer" }, "Ledger Nano S"),
                ".")),
            connect: 'Connect',
            connecting: 'Connecting...',
            connected: 'Connected',
            error: 'Could not connect to wallet.'
        }
    };
    return SignIn;
}(React.PureComponent));
exports.SignIn = SignIn;
