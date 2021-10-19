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
exports.Navbar = void 0;
var React = require("react");
var Menu_1 = require("semantic-ui-react/dist/commonjs/collections/Menu");
var Mana_1 = require("../Mana/Mana");
var Blockie_1 = require("../Blockie/Blockie");
var Container_1 = require("../Container/Container");
var Header_1 = require("../Header/Header");
var Logo_1 = require("../Logo/Logo");
var Media_1 = require("../Media");
require("./Navbar.css");
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toggle: false
        };
        _this.handleToggle = function (event) {
            _this.setState({ toggle: !_this.state.toggle });
            event.stopPropagation();
            event.nativeEvent.stopImmediatePropagation();
        };
        _this.handleDocumentClick = function () {
            _this.setState({ toggle: false });
        };
        return _this;
    }
    Navbar.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleDocumentClick);
    };
    Navbar.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleDocumentClick);
    };
    Navbar.prototype.renderLeftMenu = function () {
        var _a = this.props, activePage = _a.activePage, i18n = _a.i18n, leftMenu = _a.leftMenu;
        if (leftMenu) {
            return leftMenu;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(Menu_1.default.Item, { active: activePage === 'marketplace', href: "https://market.decentraland.org" }, i18n.menu.marketplace),
            React.createElement(Menu_1.default.Item, { active: activePage === 'builder', href: "https://builder.decentraland.org" }, i18n.menu.builder),
            React.createElement(Menu_1.default.Item, { active: activePage === 'docs', href: "https://docs.decentraland.org" }, i18n.menu.docs),
            React.createElement(Menu_1.default.Item, { active: activePage === 'events', href: "https://events.decentraland.org" }, i18n.menu.events),
            React.createElement(Menu_1.default.Item, { active: activePage === 'dao', href: "https://dao.decentraland.org" }, i18n.menu.dao),
            React.createElement(Menu_1.default.Item, { active: activePage === 'blog', href: "https://decentraland.org/blog" }, i18n.menu.blog)));
    };
    Navbar.prototype.renderRightMenu = function () {
        var _a = this.props, rightMenu = _a.rightMenu, middleMenu = _a.middleMenu, isConnected = _a.isConnected, onClickAccount = _a.onClickAccount, mana = _a.mana, address = _a.address, isConnecting = _a.isConnecting, isSignIn = _a.isSignIn, i18n = _a.i18n, onSignIn = _a.onSignIn;
        if (rightMenu) {
            return rightMenu;
        }
        else if (isConnected) {
            return (React.createElement(React.Fragment, null,
                middleMenu ? (React.createElement(Media_1.NotMobile, null,
                    React.createElement(Menu_1.default, { secondary: true, className: "dcl navbar-account-menu" }, middleMenu))) : null,
                React.createElement("span", { className: "dcl account-wrapper " + (onClickAccount ? 'clickable' : ''), onClick: onClickAccount },
                    mana != null ? (React.createElement(Mana_1.Mana, { size: "small", title: mana.toLocaleString() + " MANA" }, Math.floor(mana).toLocaleString())) : null,
                    address != null ? React.createElement(Blockie_1.Blockie, { seed: address }) : null)));
        }
        else if (isConnecting && !isSignIn) {
            return (React.createElement(Menu_1.default, { secondary: true },
                React.createElement(Menu_1.default.Item, { disabled: true }, i18n.account.connecting)));
        }
        else if (onSignIn || isSignIn) {
            return (React.createElement(Menu_1.default, { secondary: true },
                React.createElement(Menu_1.default.Item, { className: "sign-in-button", onClick: onSignIn }, i18n.account.signIn)));
        }
        else {
            return null;
        }
    };
    Navbar.prototype.render = function () {
        var _a = this.props, activePage = _a.activePage, className = _a.className, isSignIn = _a.isSignIn, isFullscreen = _a.isFullscreen, isOverlay = _a.isOverlay;
        var classes = "dcl navbar";
        if (this.state.toggle) {
            classes += ' open';
        }
        if (isSignIn) {
            classes += ' sign-in';
        }
        if (isFullscreen) {
            classes += ' fullscreen';
        }
        if (isOverlay) {
            classes += ' overlay';
        }
        if (className) {
            classes += " " + className;
        }
        return (React.createElement("div", { className: classes, role: "navigation" },
            React.createElement(Container_1.Container, null,
                React.createElement("div", { className: "dcl navbar-menu" },
                    React.createElement(Media_1.NotMobile, null,
                        React.createElement(Menu_1.default, { secondary: true, stackable: true },
                            React.createElement("a", { className: "dcl navbar-logo", href: "https://decentraland.org" },
                                React.createElement(Logo_1.Logo, null)),
                            this.renderLeftMenu())),
                    React.createElement(Media_1.Mobile, null,
                        React.createElement("div", { className: "dcl navbar-mobile-menu" },
                            React.createElement("a", { className: "dcl navbar-logo", href: "https://decentraland.org" },
                                React.createElement(Logo_1.Logo, null)),
                            React.createElement(Header_1.Header, { size: "small", className: "dcl active-page " + (this.state.toggle ? 'caret-up' : 'caret-down'), onClick: this.handleToggle }, activePage)))),
                React.createElement("div", { className: "dcl navbar-account" }, this.renderRightMenu())),
            React.createElement("div", { className: "mobile-menu" }, this.renderLeftMenu())));
    };
    Navbar.defaultProps = {
        mana: null,
        address: null,
        activePage: null,
        leftMenu: null,
        middleMenu: null,
        i18n: {
            menu: {
                marketplace: 'Marketplace',
                docs: 'Docs',
                events: 'Events',
                agora: 'Agora',
                dao: 'DAO',
                blog: 'Blog',
                builder: 'Builder'
            },
            account: {
                signIn: 'Sign In',
                connecting: 'Connecting...'
            }
        },
        isConnected: false,
        isConnecting: false,
        isFullscreen: false,
        isOverlay: false,
        isSignIn: false,
        onSignIn: null,
        onClickAccount: null
    };
    return Navbar;
}(React.PureComponent));
exports.Navbar = Navbar;
