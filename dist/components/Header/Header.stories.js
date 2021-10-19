"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Header_1 = require("./Header");
react_1.storiesOf('Header', module)
    .addDecorator(react_2.default)
    .add('Subheader + Header', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Header_1.Header, { sub: true }, "Votes"),
    React.createElement(Header_1.Header, null, "20,212"))); })
    .add('Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Header_1.Header, { size: "huge" }, "Huge"),
    React.createElement(Header_1.Header, { size: "large" }, "Large"),
    React.createElement(Header_1.Header, { size: "medium" }, "Medium"),
    React.createElement(Header_1.Header, { size: "small" }, "Small"),
    React.createElement(Header_1.Header, { size: "tiny" }, "Tiny"))); });
