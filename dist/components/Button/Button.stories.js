"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Button_1 = require("./Button");
require("./Button.stories.css");
var Row_1 = require("../Row/Row");
react_1.storiesOf('Button', module)
    .addDecorator(react_2.default)
    .add('Primary', function () { return (React.createElement(Row_1.Row, null,
    React.createElement(Button_1.Button, { primary: true }, "Vote Now"),
    React.createElement(Button_1.Button, { primary: true, disabled: true }, "Vote Now"))); })
    .add('Secondary', function () { return (React.createElement(Row_1.Row, null,
    React.createElement(Button_1.Button, null, "Cancel"),
    React.createElement(Button_1.Button, { disabled: true }, "Cancel"))); })
    .add('Basic', function () { return (React.createElement(Row_1.Row, null,
    React.createElement(Button_1.Button, { basic: true }, "Download"),
    React.createElement(Button_1.Button, { basic: true, disabled: true }, "Download"))); })
    .add('Inverted', function () { return (React.createElement(Row_1.Row, null,
    React.createElement(Button_1.Button, { inverted: true }, "Download"),
    React.createElement(Button_1.Button, { inverted: true, disabled: true }, "Download"),
    React.createElement(Button_1.Button, { inverted: true, primary: true }, "Download"),
    React.createElement(Button_1.Button, { inverted: true, primary: true, disabled: true }, "Download"))); })
    .add('Link', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button_1.Button, { href: "https://google.com", primary: true }, "google.com"))); })
    .add('Icon', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button_1.Button, { basic: true },
        React.createElement(Icon_1.default, { name: "edit" }),
        "Edit"))); })
    .add('Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, { primary: true, size: "large" }, "Really Long Label"),
        React.createElement(Button_1.Button, { primary: true, size: "large" }, "Min Width"),
        React.createElement(Button_1.Button, { primary: true, disabled: true, size: "large" }, "Disabled")),
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, { size: "large" }, "Really Long Label"),
        React.createElement(Button_1.Button, { size: "large" }, "Min Width"),
        React.createElement(Button_1.Button, { disabled: true, size: "large" }, "Disabled")),
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, { primary: true }, "Really Long Label"),
        React.createElement(Button_1.Button, { primary: true }, "Min Width"),
        React.createElement(Button_1.Button, { primary: true, disabled: true }, "Disabled")),
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, null, "Really Long Label"),
        React.createElement(Button_1.Button, null, "Min Width"),
        React.createElement(Button_1.Button, { disabled: true }, "Disabled")),
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, { primary: true, size: "small" }, "Really Long Label"),
        React.createElement(Button_1.Button, { primary: true, size: "small" }, "Min Width"),
        React.createElement(Button_1.Button, { primary: true, disabled: true, size: "small" }, "Disabled")),
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, { size: "small" }, "Really Long Label"),
        React.createElement(Button_1.Button, { size: "small" }, "Min Width"),
        React.createElement(Button_1.Button, { disabled: true, size: "small" }, "Disabled")),
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, { primary: true, size: "tiny" }, "Really Long Label"),
        React.createElement(Button_1.Button, { primary: true, size: "tiny" }, "Min Width"),
        React.createElement(Button_1.Button, { primary: true, disabled: true, size: "tiny" }, "Disabled")),
    React.createElement(Row_1.Row, { className: "button-story-row" },
        React.createElement(Button_1.Button, { size: "tiny" }, "Really Long Label"),
        React.createElement(Button_1.Button, { size: "tiny" }, "Min Width"),
        React.createElement(Button_1.Button, { disabled: true, size: "tiny" }, "Disabled")))); })
    .add('Actions', function () { return (React.createElement(Row_1.Row, null,
    React.createElement(Button_1.Button, { primary: true, style: { minWidth: 190 } }, "Vote Now"),
    React.createElement(Button_1.Button, { style: { minWidth: 190 } }, "Cancel"))); });
