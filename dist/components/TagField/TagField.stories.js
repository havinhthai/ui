"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var TagField_1 = require("./TagField");
react_1.storiesOf('TagField', module)
    .addDecorator(react_2.default)
    .add('Basic', function () { return (React.createElement(React.Fragment, null,
    React.createElement(TagField_1.TagField, { label: "Tags (optional)", placeholder: "e.g. (outdoors furniture floor)" }))); })
    .add('On Change', function () { return (React.createElement(React.Fragment, null,
    React.createElement(TagField_1.TagField, { label: "Tags (optional)", placeholder: "e.g. (outdoors furniture floor)", onChange: function (_, props) { return alert(JSON.stringify(props.value)); } }))); })
    .add('Error', function () { return (React.createElement(React.Fragment, null,
    React.createElement(TagField_1.TagField, { label: "Tags (optional)", placeholder: "e.g. (outdoors furniture floor)", message: "Something went wrong", error: true }))); })
    .add('Default values', function () { return (React.createElement(React.Fragment, null,
    React.createElement(TagField_1.TagField, { label: "Tags (optional)", placeholder: "e.g. (outdoors furniture floor)", value: ['genesis', 'city', 'town'] }))); });
