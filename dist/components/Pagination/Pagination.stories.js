"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Pagination_1 = require("./Pagination");
react_1.storiesOf('Pagination', module)
    .addDecorator(react_2.default)
    .add('5 pages', function () { return (React.createElement(Pagination_1.Pagination, { defaultActivePage: 2, totalPages: 5, firstItem: null, lastItem: null })); })
    .add('1000 pages', function () { return (React.createElement(Pagination_1.Pagination, { defaultActivePage: 77, totalPages: 1000, firstItem: null, lastItem: null })); });
