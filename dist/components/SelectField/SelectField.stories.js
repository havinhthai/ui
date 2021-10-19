"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Header_1 = require("../Header/Header");
var SelectField_1 = require("./SelectField");
react_1.storiesOf('SelectField', module)
    .addDecorator(react_2.default)
    .add('Basic', function () { return (React.createElement(React.Fragment, null,
    React.createElement(SelectField_1.SelectField, { label: "Label", placeholder: "Placeholder", options: [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2 },
            { key: 3, text: 'Choice 3', value: 3 }
        ], onChange: function (_, a) { return console.log(a); } }))); })
    .add('Message', function () { return (React.createElement(SelectField_1.SelectField, { label: "Label", placeholder: "Placeholder", message: "Additional comment", options: [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 }
    ], onChange: function (_, a) { return console.log(a); } })); })
    .add('Error', function () { return (React.createElement(SelectField_1.SelectField, { label: "Label", placeholder: "Placeholder", message: "Some warning", error: true, options: [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 }
    ], onChange: function (_, a) { return console.log(a); } })); })
    .add('Disabled options', function () { return (React.createElement(React.Fragment, null,
    React.createElement(SelectField_1.SelectField, { label: "Label", placeholder: "Placeholder", options: [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2, disabled: true },
            { key: 3, text: 'Choice 3', value: 3 },
            { key: 4, text: 'Choice 4', value: 4, disabled: true }
        ], onChange: function (_, a) { return console.log(a); } }))); })
    .add('Disabled field', function () { return (React.createElement(React.Fragment, null,
    React.createElement(SelectField_1.SelectField, { label: "Label", placeholder: "Placeholder", options: [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2, disabled: true },
            { key: 3, text: 'Choice 3', value: 3 },
            { key: 4, text: 'Choice 4', value: 4, disabled: true }
        ], disabled: true }))); })
    .add('Default option', function () { return (React.createElement(React.Fragment, null,
    React.createElement(SelectField_1.SelectField, { label: "Label", placeholder: "Placeholder", options: [
            { key: 1, text: 'Choice 1', value: 8 },
            { key: 2, text: 'Choice 2', value: 2, disabled: true },
            { key: 3, text: 'Choice 3', value: 3 },
            { key: 4, text: 'Choice 4', value: 4, disabled: true }
        ], defaultValue: 8 }))); })
    .add('With header', function () { return (React.createElement(React.Fragment, null,
    React.createElement(SelectField_1.SelectField, { label: "Label", placeholder: "Placeholder", header: React.createElement(Header_1.Header, { size: "small" }, "Small header"), options: [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 1, text: 'Choice 2', value: 2, disabled: true },
            { key: 3, text: 'Choice 3', value: 3 },
            { key: 4, text: 'Choice 4', value: 4, disabled: true },
            { key: 5, text: 'Choice 5', value: 5 },
            { key: 6, text: 'Choice 6', value: 5 },
            { key: 7, text: 'Choice 7', value: 5 },
            { key: 8, text: 'Choice 8', value: 5 },
            { key: 9, text: 'Choice 9', value: 5 },
            { key: 10, text: 'Choice 10', value: 5 }
        ] }))); });
