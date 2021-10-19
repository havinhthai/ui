"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Dropdown_1 = require("./Dropdown");
react_1.storiesOf('Dropdown', module)
    .addDecorator(react_2.default)
    .add('Filters', function () { return (React.createElement(Dropdown_1.Dropdown, { text: "All polls", direction: "right" },
    React.createElement(Dropdown_1.Dropdown.Menu, null,
        React.createElement(Dropdown_1.Dropdown.Item, { text: "All polls" }),
        React.createElement(Dropdown_1.Dropdown.Item, { text: "Ongoing polls" }),
        React.createElement(Dropdown_1.Dropdown.Item, { text: "Closed polls" })))); });
