"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Filter_1 = require("./Filter");
react_1.storiesOf('Filter', module)
    .addDecorator(react_2.default)
    .add('One active', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Filter_1.Filter, { active: true }, "2 Parcels"),
    React.createElement(Filter_1.Filter, null, "1 Estate"),
    React.createElement(Filter_1.Filter, null, "1 Contributions"),
    React.createElement(Filter_1.Filter, null, "1 Mortgage"))); });
