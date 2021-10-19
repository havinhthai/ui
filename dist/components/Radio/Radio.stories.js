"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Radio_1 = require("./Radio");
var Row_1 = require("../Row/Row");
react_1.storiesOf('Radio', module)
    .addDecorator(react_2.default)
    .add('Checked', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Radio_1.Radio, { checked: true, label: "Yes" }))); })
    .add('Unchecked', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Radio_1.Radio, { checked: false, label: "No" }))); })
    .add('Options', function () { return (React.createElement(Row_1.Row, { stacked: true },
    React.createElement(Radio_1.Radio, { checked: true, label: "Yes" }),
    React.createElement(Radio_1.Radio, { checked: false, label: "No" }),
    React.createElement(Radio_1.Radio, { label: "Abstain" }))); })
    .add('Toggle', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Radio_1.Radio, { toggle: true, label: "ON SALE" }))); });
