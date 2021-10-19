"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Close_1 = require("../Close/Close");
var Row_1 = require("../Row/Row");
var Popup_1 = require("./Popup");
require("./Popup.stories.css");
react_1.storiesOf('Popup', module)
    .addDecorator(react_2.default)
    .add('On hover', function () { return (React.createElement("span", null,
    "If you want to see it\u00A0",
    React.createElement(Popup_1.Popup, { content: "Hello", position: "top center", trigger: React.createElement("b", null, "hover me"), on: "hover" }),
    ".")); })
    .add('On click', function () { return (React.createElement("span", null,
    "If you want to see it\u00A0",
    React.createElement(Popup_1.Popup, { content: "Hello", position: "top center", trigger: React.createElement("b", null, "click me"), on: "click" }),
    ".")); })
    .add('Positions', function () { return (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "Popup-story-row" },
        React.createElement(Popup_1.Popup, { content: "Hello", position: "top left", trigger: React.createElement("b", null, "Top Left"), on: "hover" }),
        React.createElement(Popup_1.Popup, { content: "Hello", position: "top center", trigger: React.createElement("b", null, "Top Center"), on: "hover" }),
        React.createElement(Popup_1.Popup, { content: "Hello", position: "top right", trigger: React.createElement("b", null, "Top Right"), on: "hover" })),
    React.createElement("div", { className: "Popup-story-row" },
        React.createElement(Popup_1.Popup, { content: "Hello", position: "bottom left", trigger: React.createElement("b", null, "Bottom Left"), on: "hover" }),
        React.createElement(Popup_1.Popup, { content: "Hello", position: "bottom center", trigger: React.createElement("b", null, "Bottom Center"), on: "hover" }),
        React.createElement(Popup_1.Popup, { content: "Hello", position: "bottom right", trigger: React.createElement("b", null, "Bottom Right"), on: "hover" })))); })
    .add('Closable', function () { return (React.createElement(Popup_1.Popup, { open: true, content: React.createElement(Row_1.Row, null,
        "Dismiss me",
        React.createElement(Close_1.Close, { small: true })), position: "top left", trigger: React.createElement("b", null, "Hello there"), on: "hover" })); });
