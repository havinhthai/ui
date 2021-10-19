"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Container_1 = require("../Container/Container");
var HeaderMenu_1 = require("../HeaderMenu/HeaderMenu");
var Header_1 = require("../Header/Header");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Mana_1 = require("../Mana/Mana");
var Table_1 = require("./Table");
require("./Table.stories.css");
var rows = [
    {
        poll: 'Proposal Acceptance for Aetheria District',
        weight: '20.5M',
        voters: 160,
        status: '2 days left',
        outcome: 'Pending'
    },
    {
        poll: 'Proposal Acceptance for Chobury',
        voters: 80,
        weight: '250.2K',
        status: '1 days left',
        outcome: 'Pending'
    },
    {
        poll: 'Proposal Acceptance for VR Shopping District',
        voters: 172,
        weight: '50.1K',
        status: '12 hours left',
        outcome: 'Pending'
    },
    {
        poll: 'Proposal Acceptance for The Movement',
        voters: 0,
        weight: '0',
        status: 'Closed',
        outcome: 'Yes'
    },
    {
        poll: 'Proposal Acceptance for NEXUS',
        voters: 20,
        weight: '100K',
        status: 'Closed',
        outcome: 'No'
    }
];
react_1.storiesOf('Table', module)
    .addDecorator(react_2.default)
    .add('Polls', function () { return (React.createElement(Container_1.Container, null,
    React.createElement(HeaderMenu_1.HeaderMenu, null,
        React.createElement(HeaderMenu_1.HeaderMenu.Left, null,
            React.createElement(Header_1.Header, { size: "large" }, "District polls")),
        React.createElement(HeaderMenu_1.HeaderMenu.Right, null,
            React.createElement(Dropdown_1.Dropdown, { text: "Newest", direction: "left" }),
            React.createElement(Dropdown_1.Dropdown, { text: "All polls", direction: "left" }))),
    React.createElement(Table_1.Table, { basic: "very" },
        React.createElement(Table_1.Table.Header, null,
            React.createElement(Table_1.Table.Row, null,
                React.createElement(Table_1.Table.HeaderCell, null, "Poll"),
                React.createElement(Table_1.Table.HeaderCell, null, "Weight"),
                React.createElement(Table_1.Table.HeaderCell, null, "Voters"),
                React.createElement(Table_1.Table.HeaderCell, null, "Status"),
                React.createElement(Table_1.Table.HeaderCell, null, "Outcome"))),
        React.createElement(Table_1.Table.Body, null, rows.map(function (_a, index) {
            var poll = _a.poll, weight = _a.weight, voters = _a.voters, status = _a.status, outcome = _a.outcome;
            var isClosed = status === 'Closed';
            var linkClass = isClosed ? 'link-closed' : null;
            var noLinkClass = isClosed ? 'closed' : null;
            return (React.createElement(Table_1.Table.Row, { key: index },
                React.createElement(Table_1.Table.Cell, null,
                    React.createElement("a", { className: linkClass, href: "#" }, poll)),
                React.createElement(Table_1.Table.Cell, { className: noLinkClass },
                    React.createElement(Mana_1.Mana, { inline: true }),
                    weight),
                React.createElement(Table_1.Table.Cell, { className: noLinkClass }, voters),
                React.createElement(Table_1.Table.Cell, { className: noLinkClass }, status),
                React.createElement(Table_1.Table.Cell, { className: noLinkClass }, outcome)));
        }))))); });
