"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Button_1 = require("../Button/Button");
var Parallax_1 = require("../Parallax/Parallax");
var Hero_1 = require("./Hero");
require("./Hero.stories.css");
react_1.storiesOf('Hero', module)
    .addDecorator(react_2.default)
    .add('Text only', function () { return (React.createElement("div", { className: "story" },
    React.createElement(Hero_1.Hero, { centered: true },
        React.createElement(Hero_1.Hero.Header, null, "Help us build Decentraland"),
        React.createElement(Hero_1.Hero.Description, null, "Join the discussion")))); })
    .add('Left alignment', function () { return (React.createElement("div", { className: "story" },
    React.createElement(Hero_1.Hero, null,
        React.createElement(Hero_1.Hero.Header, null, "Help us build Decentraland"),
        React.createElement(Hero_1.Hero.Description, null, "Join the discussion")))); })
    .add('With content', function () { return (React.createElement("div", { className: "story" },
    React.createElement(Hero_1.Hero, { centered: true },
        React.createElement(Hero_1.Hero.Header, null, "Help us build Decentraland"),
        React.createElement(Hero_1.Hero.Description, null, "Join the discussion"),
        React.createElement(Hero_1.Hero.Content, null,
            React.createElement(Parallax_1.Parallax, null,
                React.createElement(Parallax_1.Parallax.Layer, { depth: 0.3 },
                    React.createElement("div", { className: "hero-pyramid small" })),
                React.createElement(Parallax_1.Parallax.Layer, { depth: 1.5 },
                    React.createElement("div", { className: "hero-pyramid large" }))))))); })
    .add('With actions', function () { return (React.createElement("div", { className: "story" },
    React.createElement(Hero_1.Hero, { centered: true },
        React.createElement(Hero_1.Hero.Header, null, "Help us build Decentraland"),
        React.createElement(Hero_1.Hero.Description, null, "Join the discussion"),
        React.createElement(Hero_1.Hero.Actions, null,
            React.createElement(Button_1.Button, { primary: true }, "Do Something"))))); });
