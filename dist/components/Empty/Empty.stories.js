"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Empty_1 = require("./Empty");
var Page_1 = require("../Page/Page");
react_1.storiesOf('Empty', module)
    .addDecorator(react_2.default)
    .add('Example', function () { return (React.createElement(Page_1.Page, null,
    React.createElement(Empty_1.Empty, null, "No results..."))); })
    .add('With link', function () { return (React.createElement(Page_1.Page, null,
    React.createElement(Empty_1.Empty, null,
        React.createElement("span", null,
            "Your Scenes were uploaded to the Cloud. ",
            React.createElement("a", null, "Sign In"),
            " to load them back.")))); })
    .add('Fixed height', function () { return (React.createElement(Page_1.Page, null,
    React.createElement(Empty_1.Empty, { height: 100 }, "This has a fixed height."))); })
    .add('Expand', function () { return (React.createElement(Page_1.Page, null,
    React.createElement(Empty_1.Empty, { expand: true },
        React.createElement("span", null, "This expands to fill the parent.")))); });
