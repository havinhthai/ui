"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var WalletIcon_1 = require("./WalletIcon");
react_1.storiesOf('WalletIcon', module)
    .addDecorator(react_2.default)
    .add('Icon', function () { return React.createElement(WalletIcon_1.WalletIcon, null); });
