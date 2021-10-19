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
exports.Profile = void 0;
var React = require("react");
require("./Profile.css");
var Logo_1 = require("../Logo/Logo");
var Popup_1 = require("../Popup/Popup");
var AvatarFace_1 = require("../AvatarFace/AvatarFace");
var Blockie_1 = require("../Blockie/Blockie");
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Profile.prototype.render = function () {
        var _a = this.props, address = _a.address, avatar = _a.avatar, textOnly = _a.textOnly, imageOnly = _a.imageOnly, hasPopup = _a.hasPopup, inline = _a.inline, size = _a.size, isDecentraland = _a.isDecentraland;
        var name = (avatar && avatar.name) || address.slice(0, 6);
        if (isDecentraland) {
            return (React.createElement("span", { className: "Profile decentraland " + size + " " + (inline ? 'inline' : ''), title: address },
                React.createElement(Logo_1.Logo, null),
                imageOnly ? null : React.createElement("span", { className: "name" }, "Decentraland")));
        }
        if (textOnly) {
            return name;
        }
        else {
            return (React.createElement(Popup_1.Popup, { content: name, disabled: !hasPopup, position: "top center", trigger: avatar ? (React.createElement("span", { className: "Profile avatar " + size + " " + (inline ? 'inline' : ''), title: address },
                    React.createElement(AvatarFace_1.AvatarFace, { size: "tiny", inline: inline, avatar: avatar }),
                    imageOnly ? null : React.createElement("span", { className: "name" }, name))) : (React.createElement("span", { className: "Profile blockie " + size + " " + (inline ? 'inline' : ''), title: address },
                    React.createElement(Blockie_1.Blockie, { seed: address, scale: size === 'large'
                            ? 5
                            : size === 'huge'
                                ? 7
                                : size === 'massive'
                                    ? 21
                                    : 3 }),
                    imageOnly ? null : React.createElement("span", { className: "name" }, name))) }));
        }
    };
    Profile.defaultProps = {
        inline: true,
        size: 'normal'
    };
    return Profile;
}(React.PureComponent));
exports.Profile = Profile;
