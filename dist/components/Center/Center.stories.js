"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Center_1 = require("./Center");
require("./Center.stories.css");
react_1.storiesOf('Center', module)
    .addDecorator(react_2.default)
    .add('On Parent', function () { return (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "story-container" }),
    React.createElement("div", { className: "story-container" },
        React.createElement(Center_1.Center, null,
            React.createElement("span", { className: "hello" }, "Hello"))))); })
    .add('On Screen', function () { return (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "story-container" }),
    React.createElement("div", { className: "story-container" },
        React.createElement(Center_1.Center, { screen: true },
            React.createElement("span", { className: "hello" }, "Hello"))))); });
