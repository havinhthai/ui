"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Footer_1 = require("../Footer/Footer");
var Navbar_1 = require("../Navbar/Navbar");
var Page_1 = require("../Page/Page");
var Atlas_1 = require("./Atlas");
// Controlled
var tiles;
if (window) {
    Atlas_1.Atlas.fetchTiles().then(function (_tiles) { return (tiles = _tiles); });
}
// For Sale
var forSaleLayer = function (x, y) {
    var key = x + ',' + y;
    if (tiles && tiles[key] && 'price' in tiles[key]) {
        return { color: '#00d3ff' };
    }
    return null;
};
// Selection
var selected = [];
function isSelected(x, y) {
    return selected.some(function (coord) { return coord.x === x && coord.y === y; });
}
var selectedStrokeLayer = function (x, y) {
    return isSelected(x, y) ? { color: '#ff0044', scale: 1.4 } : null;
};
var selectedFillLayer = function (x, y) {
    return isSelected(x, y) ? { color: '#ff9990', scale: 1.2 } : null;
};
var handleClick = function (x, y) {
    console.log(x, y);
    if (isSelected(x, y)) {
        selected = selected.filter(function (coord) { return coord.x !== x || coord.y !== y; });
    }
    else {
        selected.push({ x: x, y: y });
    }
};
// Hover
var hover;
var isValid = function () {
    if (!hover)
        return false;
    // only valid if it fits in central plaza
    return hover.x >= -5 && hover.x <= 6 && hover.y >= -5 && hover.y <= 5;
};
var isHighlighted = function (x, y) {
    if (!hover)
        return false;
    // only highlight a 10x10 area centered around hover coords
    var radius = 5;
    return (x > hover.x - radius &&
        x < hover.x + radius &&
        y > hover.y - radius &&
        y < hover.y + radius);
};
var handleHover = function (x, y) {
    hover = { x: x, y: y };
};
var hoverStrokeLayer = function (x, y) {
    if (isHighlighted(x, y)) {
        return {
            color: isValid() ? '#44ff00' : '#ff0044',
            scale: 1.5
        };
    }
    return null;
};
var hoverFillLayer = function (x, y) {
    if (isHighlighted(x, y)) {
        return {
            color: isValid() ? '#99ff90' : '#ff9990',
            scale: 1.2
        };
    }
    return null;
};
var App = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar_1.Navbar, { activePage: "marketplace", isFullscreen: true }),
        React.createElement(Page_1.Page, { isFullscreen: true }, children),
        React.createElement(Footer_1.Footer, { isFullscreen: true })));
};
react_1.storiesOf('Atlas', module)
    .add('Uncontrolled', function () { return (React.createElement(App, null,
    React.createElement(Atlas_1.Atlas, null))); })
    .add('Controlled', function () { return (React.createElement(App, null,
    React.createElement(Atlas_1.Atlas, { tiles: tiles }))); })
    .add('For Sale', function () { return (React.createElement(App, null,
    React.createElement(Atlas_1.Atlas, { tiles: tiles, layers: [forSaleLayer] }))); })
    .add('Click to select', function () { return (React.createElement(App, null,
    React.createElement(Atlas_1.Atlas, { tiles: tiles, layers: [selectedStrokeLayer, selectedFillLayer], onClick: handleClick }))); })
    .add('Hover to highlight', function () { return (React.createElement(App, null,
    React.createElement(Atlas_1.Atlas, { tiles: tiles, layers: [hoverStrokeLayer, hoverFillLayer], onHover: handleHover }))); });
