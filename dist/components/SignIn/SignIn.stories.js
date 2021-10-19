"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var SignIn_1 = require("./SignIn");
react_1.storiesOf('SignIn', module)
    .add('Connect', function () { return React.createElement(SignIn_1.SignIn, null); })
    .add('Connecting', function () { return React.createElement(SignIn_1.SignIn, { isConnecting: true }); })
    .add('Connected', function () { return React.createElement(SignIn_1.SignIn, { isConnected: true }); })
    .add('Error', function () { return React.createElement(SignIn_1.SignIn, { hasError: true }); });
