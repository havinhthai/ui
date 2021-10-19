"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var LanguageIcon_1 = require("./LanguageIcon");
require("./LanguageIcon.stories.css");
react_1.storiesOf('LanguageIcon', module)
    .addDecorator(react_2.default)
    .add('Single', function () { return React.createElement(LanguageIcon_1.LanguageIcon, { locale: "en" }); })
    .add('Options', function () { return (React.createElement("div", { className: "LanguageIcon-story" },
    React.createElement(LanguageIcon_1.LanguageIcon, { locale: "en", label: "English" }),
    React.createElement(LanguageIcon_1.LanguageIcon, { locale: "es", label: "Spanish" }),
    React.createElement(LanguageIcon_1.LanguageIcon, { locale: "fr", label: "French" }),
    React.createElement(LanguageIcon_1.LanguageIcon, { locale: "ja", label: "Japanese" }),
    React.createElement(LanguageIcon_1.LanguageIcon, { locale: "zh", label: "Chinese" }),
    React.createElement(LanguageIcon_1.LanguageIcon, { locale: "ko", label: "Korean" }))); });
