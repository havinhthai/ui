"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Parallax_1 = require("./Parallax");
require("./Parallax.stories.css");
react_1.storiesOf('Parallax', module)
    .addDecorator(react_2.default)
    .add('Depth', function () { return (React.createElement("div", { className: "Parallax-story" },
    React.createElement(Parallax_1.Parallax, null,
        React.createElement(Parallax_1.Parallax.Layer, { depth: 2 },
            React.createElement("div", { className: "square small" })),
        React.createElement(Parallax_1.Parallax.Layer, { depth: 8 },
            React.createElement("div", { className: "square medium" })),
        React.createElement(Parallax_1.Parallax.Layer, { depth: 14 },
            React.createElement("div", { className: "square large" }))))); });
