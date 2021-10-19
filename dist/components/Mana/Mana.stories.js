"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var schemas_1 = require("@dcl/schemas");
var Header_1 = require("../Header/Header");
var Mana_1 = require("./Mana");
react_1.storiesOf('Mana', module)
    .addDecorator(react_2.default)
    .add('Symbol', function () { return React.createElement(Mana_1.Mana, null); })
    .add('Symbol + MANA', function () { return React.createElement(Mana_1.Mana, null, "MANA"); })
    .add('Total voted', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Header_1.Header, { sub: true }, "Total voted"),
    React.createElement(Mana_1.Mana, null, "1,235,345"))); })
    .add('Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Mana_1.Mana, { size: "huge" }, "1,000"),
    React.createElement(Mana_1.Mana, { size: "large" }, "1,000"),
    React.createElement(Mana_1.Mana, { size: "medium" }, "1,000"),
    React.createElement(Mana_1.Mana, { size: "small" }, "1,000"),
    React.createElement(Mana_1.Mana, { size: "tiny" }, "1,000"))); })
    .add('In a paragraph', function () { return (React.createElement("p", null,
    "You've voted with ",
    React.createElement(Mana_1.Mana, { inline: true }, "1,000"),
    ".")); })
    .add('Matic', function () { return (React.createElement("p", null,
    "You deposited",
    ' ',
    React.createElement(Mana_1.Mana, { inline: true, network: schemas_1.Network.MATIC }, "1,000"),
    ' ',
    "into Matic Network.")); })
    .add('Matic Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Mana_1.Mana, { network: schemas_1.Network.MATIC, size: "huge" }, "1,000"),
    React.createElement(Mana_1.Mana, { network: schemas_1.Network.MATIC, size: "large" }, "1,000"),
    React.createElement(Mana_1.Mana, { network: schemas_1.Network.MATIC, size: "medium" }, "1,000"),
    React.createElement(Mana_1.Mana, { network: schemas_1.Network.MATIC, size: "small" }, "1,000"),
    React.createElement(Mana_1.Mana, { network: schemas_1.Network.MATIC, size: "tiny" }, "1,000"))); });
