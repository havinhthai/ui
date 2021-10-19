"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Message_1 = require("./Message");
react_1.storiesOf('Message', module)
    .addDecorator(react_2.default)
    .add('Error message', function () { return (React.createElement(Message_1.Message, { error: true, visible: true, content: 'An error occured!', header: 'Metamask error' })); })
    .add('Warning message', function () { return (React.createElement(Message_1.Message, { warning: true, visible: true, content: 'An warning!', header: 'Metamask warning' })); })
    .add('Success message', function () { return (React.createElement(Message_1.Message, { success: true, visible: true, content: 'Success!', header: 'Metamask success' })); });
