"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Tabs_1 = require("./Tabs");
require("./Tabs.stories.css");
react_1.storiesOf('Tabs', module)
    .addDecorator(react_2.default)
    .add('Basic', function () { return (React.createElement("div", { className: "Tabs-story-container" },
    React.createElement(Tabs_1.Tabs, null,
        React.createElement(Tabs_1.Tabs.Tab, { active: true }, "Atlas"),
        React.createElement(Tabs_1.Tabs.Tab, null, "Market"),
        React.createElement(Tabs_1.Tabs.Tab, null, "My Assets")))); })
    .add('Fullscreen', function () { return (React.createElement("div", { className: "Tabs-story-container" },
    React.createElement(Tabs_1.Tabs, { isFullscreen: true },
        React.createElement(Tabs_1.Tabs.Tab, { active: true }, "Atlas"),
        React.createElement(Tabs_1.Tabs.Tab, null, "Market"),
        React.createElement(Tabs_1.Tabs.Tab, null, "My Assets")))); });
