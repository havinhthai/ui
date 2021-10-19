"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Loader_1 = require("./Loader");
react_1.storiesOf('Loader', module)
    .addDecorator(react_2.default)
    .add('Main Loader', function () { return React.createElement(Loader_1.Loader, { active: true, size: "massive" }); })
    .add('Tiny Loader', function () { return React.createElement(Loader_1.Loader, { active: true, size: "mini" }); });
