"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Toast_1 = require("../Toast/Toast");
var Toasts_1 = require("./Toasts");
react_1.storiesOf('Toasts', module)
    .addDecorator(react_2.default)
    .add('Lists toasts', function () { return (React.createElement(Toasts_1.Toasts, null,
    React.createElement(Toast_1.Toast, { title: "Title 1", body: "Body 1" }),
    React.createElement(Toast_1.Toast, { title: "Title 2", body: "Body 2" }))); })
    .add('top left', function () { return (React.createElement(Toasts_1.Toasts, { position: "top left" },
    React.createElement(Toast_1.Toast, { title: "Title 1", body: "Body 1" }),
    React.createElement(Toast_1.Toast, { title: "Title 2", body: "Body 2" }),
    React.createElement(Toast_1.Toast, { title: "Title 3", body: "Body 3" }))); })
    .add('bottom left', function () { return (React.createElement(Toasts_1.Toasts, { position: "bottom left" },
    React.createElement(Toast_1.Toast, { title: "Title 1", body: "Body 1" }),
    React.createElement(Toast_1.Toast, { title: "Title 2", body: "Body 2" }),
    React.createElement(Toast_1.Toast, { title: "Title 3", body: "Body 3" }))); })
    .add('bottom right', function () { return (React.createElement(Toasts_1.Toasts, { position: "bottom right" },
    React.createElement(Toast_1.Toast, { title: "Title 1", body: "Body 1" }),
    React.createElement(Toast_1.Toast, { title: "Title 2", body: "Body 2" }),
    React.createElement(Toast_1.Toast, { title: "Title 3", body: "Body 3" }))); });
