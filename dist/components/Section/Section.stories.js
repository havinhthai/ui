"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Section_1 = require("./Section");
var Header_1 = require("../Header/Header");
react_1.storiesOf('Section', module)
    .addDecorator(react_2.default)
    .add('Example', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Section_1.Section, null,
        React.createElement(Header_1.Header, { sub: true }, "Section 1"),
        "This is a section"),
    React.createElement(Section_1.Section, null,
        React.createElement(Header_1.Header, { sub: true }, "Section 2"),
        "This is another section"))); });
