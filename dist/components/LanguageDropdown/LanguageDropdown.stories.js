"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var LanguageDropdown_1 = require("./LanguageDropdown");
react_1.storiesOf('LanguageDropdown', module)
    .addDecorator(react_2.default)
    .add('Uncontrolled left downward', function () { return (React.createElement(LanguageDropdown_1.LanguageDropdown, { locales: ['en', 'es', 'fr', 'zh', 'ko', 'ja'] })); })
    .add('Controlled right upward', function () { return (React.createElement(LanguageDropdown_1.LanguageDropdown, { locale: "zh", direction: "right", upward: true, locales: ['zh', 'ko', 'ja'] })); });
