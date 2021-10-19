"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Footer_1 = require("./Footer");
react_1.storiesOf('Footer', module)
    .addDecorator(react_2.default)
    .add('Uncontrolled', function () { return React.createElement(Footer_1.Footer, null); })
    .add('Controlled', function () { return (React.createElement(Footer_1.Footer, { locale: "en", locales: ['en', 'es', 'fr', 'ja', 'ko', 'zh'] })); });
