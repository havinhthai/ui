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
exports.Blockie = void 0;
var React = require("react");
var blockies = require("ethereum-blockies/blockies");
require("./Blockie.css");
var Blockie = /** @class */ (function (_super) {
    __extends(Blockie, _super);
    function Blockie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = React.createRef();
        return _this;
    }
    Blockie.prototype.componentDidMount = function () {
        this.draw();
    };
    Blockie.prototype.componentDidUpdate = function () {
        this.draw();
    };
    Blockie.prototype.getOpts = function () {
        var _a = this.props, seed = _a.seed, color = _a.color, spotcolor = _a.spotcolor, bgcolor = _a.bgcolor, size = _a.size, scale = _a.scale;
        return {
            seed: seed ? seed.toLowerCase() : '',
            color: color,
            spotcolor: spotcolor,
            bgcolor: bgcolor,
            size: size,
            scale: scale
        };
    };
    Blockie.prototype.draw = function () {
        if (!this.canvas || !this.canvas.current) {
            return '🦄';
        }
        var _a = this.props, size = _a.size, scale = _a.scale;
        var ctx = this.canvas.current.getContext('2d');
        ctx.clearRect(0, 0, size * scale, size * scale);
        blockies.render(this.getOpts(), this.canvas.current);
    };
    Blockie.prototype.render = function () {
        var _a = this.props, size = _a.size, scale = _a.scale, children = _a.children, className = _a.className;
        var classes = ("dcl blockie " + className).trim();
        if (scale * size <= 16) {
            classes += ' mini';
        }
        else if (scale * size <= 24) {
            classes += ' tiny';
        }
        else if (scale * size <= 36) {
            classes += ' small';
        }
        var canvas = React.createElement("canvas", { className: classes, ref: this.canvas });
        if (children) {
            return (React.createElement("span", { className: "dcl blockie-wrapper" },
                canvas,
                React.createElement("span", { className: "dcl blockie-children" }, children)));
        }
        return canvas;
    };
    Blockie.defaultProps = {
        color: '#e449c2',
        bgcolor: '#3149de',
        spotcolor: '#e449c2',
        size: 6,
        scale: 6,
        className: ''
    };
    return Blockie;
}(React.PureComponent));
exports.Blockie = Blockie;
