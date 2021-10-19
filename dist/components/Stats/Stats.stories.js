"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Mana_1 = require("../Mana/Mana");
var Stats_1 = require("./Stats");
react_1.storiesOf('Stats', module)
    .addDecorator(react_2.default)
    .add('Single Result', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Stats_1.Stats, { title: "Total Voted" },
        React.createElement(Mana_1.Mana, null, "1,235,345")))); })
    .add('Poll Results', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Stats_1.Stats, { title: "Token" },
        React.createElement(Mana_1.Mana, null, "MANA")),
    React.createElement(Stats_1.Stats, { title: "Total Voted" },
        React.createElement(Mana_1.Mana, null, "1,235,345")),
    React.createElement(Stats_1.Stats, { title: "Total Votes" }, "20"),
    React.createElement(Stats_1.Stats, { title: "Parcial Result" }, "Yes"),
    React.createElement(Stats_1.Stats, { title: "Time Left" }, "1 week"))); });
