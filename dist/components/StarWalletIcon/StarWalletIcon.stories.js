"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var StarWalletIcon_1 = require("./StarWalletIcon");
react_1.storiesOf('StarWalletIcon', module)
    .addDecorator(react_2.default)
    .add('Icon', function () { return React.createElement(StarWalletIcon_1.StarWalletIcon, null); });
