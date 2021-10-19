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
exports.LanguageDropdown = void 0;
var React = require("react");
var Dropdown_1 = require("../Dropdown/Dropdown");
var LanguageIcon_1 = require("../LanguageIcon/LanguageIcon");
require("./LanguageDropdown.css");
var LanguageDropdown = /** @class */ (function (_super) {
    __extends(LanguageDropdown, _super);
    function LanguageDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOption = function (locale) {
            var i18n = _this.props.i18n;
            return React.createElement(LanguageIcon_1.LanguageIcon, { locale: locale, label: i18n[locale] });
        };
        return _this;
    }
    LanguageDropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, locale = _a.locale, locales = _a.locales, direction = _a.direction, upward = _a.upward, onChange = _a.onChange;
        return (React.createElement(Dropdown_1.Dropdown, { className: "dcl language-dropdown", direction: direction, upward: upward, defaultValue: locale == null ? 'en' : undefined, value: locale, options: locales.map(function (key) { return ({
                key: key,
                value: key,
                text: _this.renderOption(key)
            }); }), onChange: onChange }));
    };
    LanguageDropdown.defaultProps = {
        onChange: function () { return undefined; },
        direction: 'left',
        upward: false,
        locales: ['en'],
        i18n: {
            en: 'English',
            es: 'Spanish',
            fr: 'French',
            ja: 'Japanese',
            zh: 'Chinese',
            ko: 'Korean'
        }
    };
    return LanguageDropdown;
}(React.PureComponent));
exports.LanguageDropdown = LanguageDropdown;
