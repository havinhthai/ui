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
exports.UserMenu = void 0;
var React = require("react");
var Menu_1 = require("semantic-ui-react/dist/commonjs/collections/Menu");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon");
var AvatarFace_1 = require("../AvatarFace/AvatarFace");
var Mana_1 = require("../Mana/Mana");
var Button_1 = require("../Button/Button");
var Row_1 = require("../Row/Row");
require("./UserMenu.css");
var UserMenu = /** @class */ (function (_super) {
    __extends(UserMenu, _super);
    function UserMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
            isClickable: false
        };
        _this.mounted = false;
        _this.ref = null;
        _this.handleClose = function () {
            _this.toggle(false);
        };
        _this.handleToggle = function () {
            _this.toggle(!_this.state.isOpen);
        };
        return _this;
    }
    UserMenu.prototype.toggle = function (value) {
        var _this = this;
        this.setState({ isOpen: value });
        setTimeout(function () {
            if (_this.mounted) {
                _this.setState({ isClickable: value });
            }
        }, 250);
    };
    UserMenu.prototype.componentDidMount = function () {
        this.mounted = true;
    };
    UserMenu.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    UserMenu.prototype.render = function () {
        var _a = this.props, avatar = _a.avatar, manaBalances = _a.manaBalances, isSignedIn = _a.isSignedIn, isSigningIn = _a.isSigningIn, isActivity = _a.isActivity, hasActivity = _a.hasActivity, onSignOut = _a.onSignOut, onSignIn = _a.onSignIn, onClickProfile = _a.onClickProfile, onClickActivity = _a.onClickActivity, onClickSettings = _a.onClickSettings, onClickBalance = _a.onClickBalance, i18n = _a.i18n, menuItems = _a.menuItems;
        var _b = this.state, isOpen = _b.isOpen, isClickable = _b.isClickable;
        var name = avatar ? avatar.name : null;
        return (React.createElement(Row_1.Row, { className: "dcl user-menu-wrapper" },
            React.createElement(Menu_1.default.Item, { className: isActivity ? 'activity-bell active' : 'activity-bell' }, onClickActivity ? (React.createElement(Icon_1.default, { className: hasActivity ? 'pending' : '', name: "bell", onClick: onClickActivity })) : null),
            React.createElement("div", { className: "dcl user-menu", onBlur: this.handleClose, tabIndex: 0 },
                isSignedIn && (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "dcl account-wrapper" }, Object.keys(manaBalances).map(function (network) { return (React.createElement(Mana_1.Mana, { key: network, network: network, size: "small", className: onClickBalance ? 'clickable' : undefined, title: manaBalances[network].toLocaleString() + " MANA", href: "https://account.decentraland.org" }, Math.floor(manaBalances[network]).toLocaleString())); })),
                    React.createElement("div", { className: "toggle", onClick: this.handleToggle },
                        React.createElement(AvatarFace_1.AvatarFace, { size: "medium", avatar: avatar })),
                    React.createElement("div", { className: "menu " + (isOpen ? 'open' : '') + " " + (isClickable ? 'clickable' : '') },
                        React.createElement("div", { className: "info " + (onClickProfile ? 'clickable' : ''), onClick: onClickProfile },
                            React.createElement("div", { className: "image" },
                                React.createElement(AvatarFace_1.AvatarFace, { size: "small", avatar: avatar })),
                            React.createElement("div", null,
                                React.createElement("div", { className: "name" }, name || i18n.guest))),
                        React.createElement("ul", { className: "actions" },
                            React.createElement("a", { href: "https://account.decentraland.org" },
                                React.createElement("li", null,
                                    React.createElement(Icon_1.default, { name: "user" }),
                                    i18n.account)),
                            menuItems,
                            onClickSettings ? (React.createElement("li", { onClick: onClickSettings },
                                React.createElement(Icon_1.default, { name: "cog" }),
                                i18n.settings)) : null,
                            onSignOut ? (React.createElement("li", { onClick: onSignOut },
                                React.createElement("i", { className: "sign-out-icon" }),
                                i18n.signOut)) : null)))),
                !isSignedIn && (React.createElement(Button_1.Button, { primary: true, disabled: isSigningIn, onClick: onSignIn }, i18n.signIn)))));
    };
    UserMenu.defaultProps = {
        manaBalances: {},
        i18n: {
            signIn: 'Sign In',
            signOut: 'Sign Out',
            guest: 'Guest',
            settings: 'Settings',
            account: 'Account'
        }
    };
    return UserMenu;
}(React.Component));
exports.UserMenu = UserMenu;
