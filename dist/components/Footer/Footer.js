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
exports.Footer = void 0;
var React = require("react");
var Container_1 = require("../Container/Container");
var LanguageDropdown_1 = require("../LanguageDropdown/LanguageDropdown");
require("./Footer.css");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props, locale = _a.locale, locales = _a.locales, onChange = _a.onChange, i18n = _a.i18n, isFullscreen = _a.isFullscreen, className = _a.className;
        var classes = 'dcl footer';
        if (isFullscreen) {
            classes += ' fullscreen';
        }
        if (className) {
            classes += ' ' + className;
        }
        return (React.createElement(Container_1.Container, { className: classes },
            React.createElement("div", { className: "main-footer" },
                React.createElement(LanguageDropdown_1.LanguageDropdown, { locale: locale, locales: locales, onChange: onChange, upward: true, direction: "right", i18n: i18n.dropdown }),
                React.createElement("div", { className: "links" },
                    React.createElement("a", { href: "https://decentraland.org" }, i18n.links.home),
                    React.createElement("a", { href: "https://decentraland.org/privacy" }, i18n.links.privacy),
                    React.createElement("a", { href: "https://decentraland.org/terms" }, i18n.links.terms),
                    React.createElement("a", { href: "https://decentraland.org/content" }, i18n.links.content),
                    React.createElement("a", { href: "https://decentraland.org/ethics" }, i18n.links.ethics))),
            React.createElement("div", { className: "secondary-footer" },
                React.createElement("div", { className: "social-links" },
                    React.createElement("a", { href: "https://dcl.gg/discord" },
                        React.createElement("i", { className: "social-icon discord" })),
                    React.createElement("a", { href: "https://reddit.com/r/decentraland" },
                        React.createElement("i", { className: "social-icon reddit" })),
                    React.createElement("a", { href: "https://github.com/decentraland" },
                        React.createElement("i", { className: "social-icon github" })),
                    React.createElement("a", { href: "https://twitter.com/decentraland" },
                        React.createElement("i", { className: "social-icon twitter" }))),
                React.createElement("div", { className: "copyright" },
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " Decentraland"))));
    };
    Footer.defaultProps = {
        i18n: {
            dropdown: {
                en: 'English',
                es: 'Spanish',
                fr: 'French',
                ja: 'Japanese',
                zh: 'Chinese',
                ko: 'Korean'
            },
            links: {
                home: 'Home',
                privacy: 'Privacy Policy',
                terms: 'Terms of Use',
                content: 'Content Policy',
                ethics: 'Code of Ethics'
            }
        }
    };
    return Footer;
}(React.PureComponent));
exports.Footer = Footer;
