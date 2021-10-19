"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Field_1 = require("../Field/Field");
var Header_1 = require("../Header/Header");
var HeaderMenu_1 = require("../HeaderMenu/HeaderMenu");
var Button_1 = require("../Button/Button");
var Radio_1 = require("../Radio/Radio");
var Segment_1 = require("./Segment");
require("./Segment.stories.css");
react_1.storiesOf('Segment', module)
    .addDecorator(react_2.default)
    .add('Single segment', function () { return (React.createElement(Segment_1.Segment, { style: { width: 400 } },
    React.createElement(Header_1.Header, null, "Decentraland"),
    React.createElement("p", { className: "secondary-text" }, "A virtual world built on open standards"),
    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))); })
    .add('With field', function () { return (React.createElement(Segment_1.Segment, { style: { width: 800 } },
    React.createElement(HeaderMenu_1.HeaderMenu, null,
        React.createElement(HeaderMenu_1.HeaderMenu.Left, null,
            React.createElement(Header_1.Header, null, "Invite new user")),
        React.createElement(HeaderMenu_1.HeaderMenu.Right, null,
            React.createElement(Header_1.Header, { sub: true }, "1 Invite Left "))),
    React.createElement(Field_1.Field, { label: "Address", placeholder: "0x...", type: "address", value: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE" }),
    React.createElement(Button_1.Button, { primary: true }, "Invite"))); })
    .add('With field disabled', function () { return (React.createElement(Segment_1.Segment, { style: { width: 800 } },
    React.createElement(HeaderMenu_1.HeaderMenu, null,
        React.createElement(HeaderMenu_1.HeaderMenu.Left, null,
            React.createElement(Header_1.Header, null, "Invite new user")),
        React.createElement(HeaderMenu_1.HeaderMenu.Right, null,
            React.createElement(Header_1.Header, { sub: true }, "0 Invite Left "))),
    React.createElement(Field_1.Field, { label: "Address", placeholder: "0x...", type: "address", disabled: true }),
    React.createElement(Button_1.Button, { primary: true, disabled: true }, "Invite"),
    React.createElement("span", { style: { marginLeft: 20, color: 'var(--secondary-text)' } }, "You don't have any invites left."))); })
    .add('With radios', function () { return (React.createElement(Segment_1.Segment, { style: { width: 800 } },
    React.createElement(Header_1.Header, null, "Authorizations"),
    React.createElement("div", { className: "Segment-radio-row" },
        React.createElement(Radio_1.Radio, { checked: true, label: "Authorize marketplace to operate MANA on my behalf" })),
    React.createElement("div", { className: "Segment-radio-row" },
        React.createElement(Radio_1.Radio, { label: "Authorize marketplace to operate LAND on my behalf" })),
    React.createElement("div", { className: "Segment-radio-row" },
        React.createElement(Radio_1.Radio, { label: "Authorize marketplace to operate Estates on my behalf" })))); })
    .add('With buttons', function () { return (React.createElement(Segment_1.Segment, { style: { width: 800 } },
    React.createElement(Header_1.Header, null, "Some buttons"),
    React.createElement(Button_1.Button, null, "Hello"),
    React.createElement(Button_1.Button, { disabled: true }, "Disabled"))); });
