"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Toast_1 = require("./Toast");
require("./Toast.stories.css");
react_1.storiesOf('Toast', module)
    .addDecorator(react_2.default)
    .add('Simple toast example', function () { return (React.createElement(Toast_1.Toast, { title: "Toast title", body: "Toast body" })); })
    .add('JSX props', function () { return (React.createElement(Toast_1.Toast, { title: React.createElement("h1", null, "Title"), body: React.createElement("p", null,
        React.createElement("small", null, "Small"),
        " ",
        React.createElement("a", { href: "#" }, "Link")) })); })
    .add('Closable', function () { return (React.createElement(Toast_1.Toast, { title: "Toast title", body: "Toast body", closable: true })); })
    .add('Info toast', function () { return (React.createElement(Toast_1.Toast, { type: Toast_1.ToastType.INFO, title: "Info Toast", body: "INFO" })); })
    .add('Warn toast', function () { return (React.createElement(Toast_1.Toast, { type: Toast_1.ToastType.WARN, title: "Warn toast", body: "WARN" })); })
    .add('Error toast', function () { return (React.createElement(Toast_1.Toast, { type: Toast_1.ToastType.ERROR, title: "Error toast", body: "ERROR" })); });
