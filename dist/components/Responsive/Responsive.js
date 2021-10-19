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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lib_1 = require("semantic-ui-react/dist/commonjs/lib");
var isNil = function (value) { return value == null; };
var fitsMaxWidth = function (width, maxWidth) { return (isNil(maxWidth) ? true : width <= maxWidth); };
var fitsMinWidth = function (width, minWidth) { return (isNil(minWidth) ? true : width >= minWidth); };
var isVisible = function (width, _a) {
    var maxWidth = _a.maxWidth, minWidth = _a.minWidth;
    return fitsMinWidth(width, minWidth) && fitsMaxWidth(width, maxWidth);
};
/**
 * Responsive can control visibility of content.
 *
 * @deprecated This component is deprecated and was removed from semantic ui.
 */
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: true
        };
        // ----------------------------------------
        // Event handlers
        // ----------------------------------------
        _this.handleResize = function (e) {
            if (_this.ticking)
                return;
            _this.ticking = true;
            _this.frameId = requestAnimationFrame(function () { return _this.handleUpdate(e); });
        };
        _this.handleUpdate = function (e) {
            var _a, _b;
            _this.ticking = false;
            var visible = _this.state.visible;
            var width = _this.props.getWidth();
            var nextVisible = isVisible(width, _this.props);
            if (visible !== nextVisible)
                _this.setState({ visible: nextVisible });
            (_b = (_a = _this.props).onUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, e, __assign(__assign({}, _this.props), { width: width }));
        };
        _this.cleanProps = function (props) {
            var newProps = __assign({}, props);
            delete newProps['as'];
            delete newProps['fireOnMount'];
            delete newProps['getWidth'];
            delete newProps['maxWidth'];
            delete newProps['minWidth'];
            delete newProps['onUpdate'];
            return newProps;
        };
        return _this;
    }
    Responsive.getDerivedStateFromProps = function (props) {
        var width = props.getWidth();
        var visible = isVisible(width, props);
        return { visible: visible };
    };
    Responsive.prototype.componentDidMount = function () {
        var fireOnMount = this.props.fireOnMount;
        lib_1.eventStack.sub('resize', this.handleResize, { target: 'window' });
        if (fireOnMount)
            this.handleUpdate();
    };
    Responsive.prototype.componentWillUnmount = function () {
        lib_1.eventStack.unsub('resize', this.handleResize, { target: 'window' });
        cancelAnimationFrame(this.frameId);
    };
    // ----------------------------------------
    // Render
    // ----------------------------------------
    Responsive.prototype.render = function () {
        var children = this.props.children;
        var visible = this.state.visible;
        var ElementType = lib_1.getElementType(Responsive, this.props);
        var rest = this.cleanProps(this.props);
        if (visible)
            return React.createElement(ElementType, __assign({}, rest), children);
        return null;
    };
    Responsive.onlyMobile = { minWidth: 320, maxWidth: 767 };
    Responsive.onlyTablet = { minWidth: 768, maxWidth: 991 };
    Responsive.onlyComputer = { minWidth: 992 };
    Responsive.onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 };
    Responsive.onlyWidescreen = { minWidth: 1920 };
    Responsive.defaultProps = {
        getWidth: function () { return (lib_1.isBrowser() ? window.innerWidth : 0); }
    };
    return Responsive;
}(React.Component));
exports.default = Responsive;
