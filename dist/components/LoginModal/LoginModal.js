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
exports.LoginModal = exports.LoginModalOptionType = void 0;
var React = require("react");
var ModalContent_1 = require("semantic-ui-react/dist/commonjs/modules/Modal/ModalContent");
var Modal_1 = require("../Modal/Modal");
var ModalNavigation_1 = require("../ModalNavigation/ModalNavigation");
var Loader_1 = require("../Loader/Loader");
require("./LoginModal.css");
var LoginModalOptionType;
(function (LoginModalOptionType) {
    LoginModalOptionType["METAMASK"] = "metamask";
    LoginModalOptionType["DAPPER"] = "dapper";
    LoginModalOptionType["FORTMATIC"] = "fortmatic";
    LoginModalOptionType["COINBASE"] = "coinbase";
    LoginModalOptionType["SAMSUNG"] = "samsung-blockchain-wallet";
    LoginModalOptionType["WALLET_CONNECT"] = "wallet-connect";
})(LoginModalOptionType = exports.LoginModalOptionType || (exports.LoginModalOptionType = {}));
var LoginModalOption = /** @class */ (function (_super) {
    __extends(LoginModalOption, _super);
    function LoginModalOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginModalOption.prototype.render = function () {
        var _a = this.props, type = _a.type, onClick = _a.onClick, i18n = _a.i18n;
        var title = '';
        var subtitle = '';
        switch (type) {
            case LoginModalOptionType.METAMASK:
                title = 'MetaMask';
                subtitle = i18n.browser_extension;
                break;
            case LoginModalOptionType.DAPPER:
                title = 'Dapper';
                subtitle = i18n.browser_extension;
                break;
            case LoginModalOptionType.COINBASE:
                title = 'Coinbase';
                subtitle = i18n.browser_extension;
                break;
            case LoginModalOptionType.FORTMATIC:
                title = 'Fortmatic';
                subtitle = i18n.email;
                break;
            case LoginModalOptionType.SAMSUNG:
                title = 'Samsung Blockchain Wallet';
                subtitle = i18n.mobile;
                break;
            case LoginModalOptionType.WALLET_CONNECT:
                title = 'WalletConnect';
                subtitle = i18n.mobile;
                break;
        }
        return (React.createElement("div", { className: "dcl option " + type, onClick: onClick },
            React.createElement("div", { className: "image" }),
            React.createElement("div", { className: "info" },
                React.createElement("div", { className: "title" }, title),
                React.createElement("div", { className: "subtitle" }, subtitle))));
    };
    LoginModalOption.defaultProps = {
        i18n: {
            browser_extension: 'Using a browser extension',
            email: 'Using your email',
            mobile: 'Using your mobile wallet'
        }
    };
    return LoginModalOption;
}(React.PureComponent));
var LoginModal = /** @class */ (function (_super) {
    __extends(LoginModal, _super);
    function LoginModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginModal.prototype.render = function () {
        var _a = this.props, open = _a.open, className = _a.className, message = _a.message, hasError = _a.hasError, loading = _a.loading, onClose = _a.onClose, i18n = _a.i18n, children = _a.children;
        var errorClasses = 'error';
        if (hasError) {
            errorClasses += ' visible';
        }
        return (React.createElement(Modal_1.Modal, { open: open, className: ("dcl login-modal " + className).trim() },
            React.createElement(ModalNavigation_1.ModalNavigation, { title: i18n.title, subtitle: i18n.subtitle, onClose: onClose }),
            React.createElement(ModalContent_1.default, null,
                children,
                message ? React.createElement("small", { className: "message" }, message) : null),
            hasError ? React.createElement("p", { className: errorClasses }, i18n.error) : null,
            loading ? (React.createElement(React.Fragment, null,
                React.createElement(Loader_1.Loader, { size: "big", active: true }),
                React.createElement("div", { className: "loader-background" }))) : null));
    };
    LoginModal.defaultProps = {
        className: '',
        hasError: false,
        loading: false,
        i18n: {
            title: 'Sign In',
            subtitle: 'Choose a method to connect',
            message: '',
            error: 'Could not connect wallet'
        }
    };
    LoginModal.Option = LoginModalOption;
    return LoginModal;
}(React.Component));
exports.LoginModal = LoginModal;
