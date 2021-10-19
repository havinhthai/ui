"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Logo_1 = require("./Logo");
react_1.storiesOf('Logo', module)
    .addDecorator(react_2.default)
    .add('Decentraland', function () { return React.createElement(Logo_1.Logo, null); });
