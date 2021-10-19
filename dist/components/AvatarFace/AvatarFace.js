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
exports.AvatarFace = void 0;
var React = require("react");
require("./AvatarFace.css");
var AvatarFace = /** @class */ (function (_super) {
    __extends(AvatarFace, _super);
    function AvatarFace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarFace.prototype.render = function () {
        var _a = this.props, avatar = _a.avatar, size = _a.size, inline = _a.inline;
        var classes = ['dcl', 'avatar-face', size];
        var face;
        if (avatar) {
            face = React.createElement("img", { src: avatar.avatar.snapshots.face, alt: "" });
        }
        else {
            face = React.createElement("div", { className: "guest-face" });
        }
        if (inline) {
            classes.push('inline');
        }
        return React.createElement("div", { className: classes.join(' ') }, face);
    };
    AvatarFace.defaultProps = {
        size: 'medium'
    };
    return AvatarFace;
}(React.PureComponent));
exports.AvatarFace = AvatarFace;
