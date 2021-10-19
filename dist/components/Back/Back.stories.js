"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Back_1 = require("./Back");
react_1.storiesOf('Back', module)
    .addDecorator(react_2.default)
    .add('Example', function () { return React.createElement(Back_1.Back, null); });
