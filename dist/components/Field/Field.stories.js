"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Form_1 = require("semantic-ui-react/dist/commonjs/collections/Form");
var Field_1 = require("./Field");
var address = '0x68FFc53C43C65C8Dd778969320e21B85b10363cE';
react_1.storiesOf('Field', module)
    .addDecorator(react_2.default)
    .add('Placeholder', function () { return React.createElement(Field_1.Field, { label: "Label", placeholder: "Placeholder" }); })
    .add('Value', function () { return React.createElement(Field_1.Field, { label: "Label", value: "Input Value" }); })
    .add('Message', function () { return (React.createElement(Field_1.Field, { label: "Label", value: "Input Value", message: "Additional comment" })); })
    .add('Error', function () { return (React.createElement(Field_1.Field, { label: "Label", value: "Input Value", message: "Some warning", error: true })); })
    .add('Loading', function () { return React.createElement(Field_1.Field, { label: "Label", value: "Input Value", loading: true }); })
    .add('Address', function () { return React.createElement(Field_1.Field, { label: "Label", value: address, type: "address" }); })
    .add('Numeric', function () { return (React.createElement(Field_1.Field, { label: "Label", placeholder: "1,000", type: "number" })); })
    .add('Disabled', function () { return (React.createElement(Field_1.Field, { label: "Label", value: "This is disabled", disabled: true })); })
    .add('Action', function () { return (React.createElement(Field_1.Field, { label: "Label", value: "Input value", action: "submit", onAction: function () { return alert('Action triggered!'); } })); })
    .add('Inside a Form', function () { return (React.createElement(Form_1.default, null,
    React.createElement(Field_1.Field, { label: "Label", placeholder: "Placeholder" }),
    React.createElement(Field_1.Field, { label: "Label", value: "Input Value" }),
    React.createElement(Field_1.Field, { label: "Label", value: "Input Value", message: "Additional comment" }),
    React.createElement(Field_1.Field, { type: "address", label: "Label", value: "Input Value", message: "Some warning", error: true }),
    React.createElement(Field_1.Field, { label: "Label", value: "Input Value", loading: true }),
    React.createElement(Field_1.Field, { label: "Label", value: address, type: "address" }),
    React.createElement(Field_1.Field, { label: "Label", placeholder: "1,000", type: "number" }),
    React.createElement(Field_1.Field, { label: "Label", value: "This is disabled", disabled: true }),
    React.createElement(Field_1.Field, { label: "Label", value: "Input value", action: "submit", onAction: function () { return alert('Action triggered!'); } }))); });
