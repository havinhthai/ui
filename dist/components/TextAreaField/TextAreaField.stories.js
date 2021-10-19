"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var TextAreaField_1 = require("./TextAreaField");
var Form_1 = require("semantic-ui-react/dist/commonjs/collections/Form/Form");
var textAreaValue = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" +
    ', when an unknown printer took a galley of type and scrambled';
react_1.storiesOf('TextArea', module)
    .addDecorator(react_2.default)
    .add('Text area without label', function () { return (React.createElement(TextAreaField_1.TextAreaField, { value: textAreaValue, rows: "10", cols: "50" })); })
    .add('Text area without label in form', function () { return (React.createElement(Form_1.default, null,
    React.createElement(TextAreaField_1.TextAreaField, { value: textAreaValue, rows: "10", cols: "50" }))); })
    .add('Text area with label', function () { return (React.createElement(TextAreaField_1.TextAreaField, { value: textAreaValue, label: "Description", rows: "10", cols: "50" })); })
    .add('Text area with label in form', function () { return (React.createElement(Form_1.default, null,
    React.createElement(TextAreaField_1.TextAreaField, { value: textAreaValue, label: "Description", rows: "10", cols: "50" }))); });
