"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Button_1 = require("../Button/Button");
var Container_1 = require("../Container/Container");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Header_1 = require("../Header/Header");
var HeaderMenu_1 = require("./HeaderMenu");
react_1.storiesOf('HeaderMenu', module)
    .addDecorator(react_2.default)
    .add('With Button', function () { return (React.createElement(Container_1.Container, null,
    React.createElement(HeaderMenu_1.HeaderMenu, null,
        React.createElement(HeaderMenu_1.HeaderMenu.Left, null,
            React.createElement(Header_1.Header, null, "District polls")),
        React.createElement(HeaderMenu_1.HeaderMenu.Right, null,
            React.createElement(Button_1.Button, { basic: true, size: "small" },
                "View More",
                React.createElement(Icon_1.default, { name: "chevron right" })))))); })
    .add('With Dropdown and stacked', function () { return (React.createElement(Container_1.Container, null,
    React.createElement(HeaderMenu_1.HeaderMenu, { stackable: true },
        React.createElement(HeaderMenu_1.HeaderMenu.Left, null,
            React.createElement(Header_1.Header, null, "District polls")),
        React.createElement(HeaderMenu_1.HeaderMenu.Right, null,
            React.createElement(Dropdown_1.Dropdown, { text: "Newest", direction: "left" },
                React.createElement(Dropdown_1.Dropdown.Menu, null,
                    React.createElement(Dropdown_1.Dropdown.Item, { text: "Newest" }),
                    React.createElement(Dropdown_1.Dropdown.Item, { text: "Closest to end" }),
                    React.createElement(Dropdown_1.Dropdown.Item, { text: "Highest weight" }),
                    React.createElement(Dropdown_1.Dropdown.Item, { text: "Most voted" }))),
            React.createElement(Dropdown_1.Dropdown, { text: "All polls", direction: "left" },
                React.createElement(Dropdown_1.Dropdown.Menu, null,
                    React.createElement(Dropdown_1.Dropdown.Item, { text: "All polls" }),
                    React.createElement(Dropdown_1.Dropdown.Item, { text: "Ongoing polls" }),
                    React.createElement(Dropdown_1.Dropdown.Item, { text: "Closed polls" }))))))); });
