"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Address_1 = require("../Address/Address");
var Mana_1 = require("../Mana/Mana");
var Blockie_1 = require("./Blockie");
var address = '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942';
react_1.storiesOf('Blockie', module)
    .addDecorator(react_2.default)
    .add('Single', function () { return React.createElement(Blockie_1.Blockie, { seed: address }); })
    .add('Scales', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Blockie_1.Blockie, { seed: address, scale: 2 }),
    React.createElement(Blockie_1.Blockie, { seed: address, scale: 3 }),
    React.createElement(Blockie_1.Blockie, { seed: address, scale: 5 }),
    React.createElement(Blockie_1.Blockie, { seed: address, scale: 8 }),
    React.createElement(Blockie_1.Blockie, { seed: address, scale: 13 }),
    React.createElement(Blockie_1.Blockie, { seed: address, scale: 21 }))); })
    .add('In a paragraph', function () { return (React.createElement("p", null,
    "You've transfered ",
    React.createElement(Mana_1.Mana, { inline: true }, "1,000"),
    " to",
    ' ',
    React.createElement(Blockie_1.Blockie, { scale: 3, seed: address },
        React.createElement(Address_1.Address, { value: address, strong: true })),
    ".")); });
