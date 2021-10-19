"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
var Button_1 = require("../Button/Button");
var Container_1 = require("../Container/Container");
var Header_1 = require("../Header/Header");
var HeaderMenu_1 = require("../HeaderMenu/HeaderMenu");
var Mana_1 = require("../Mana/Mana");
var Card_1 = require("./Card");
var cards = [
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
react_1.storiesOf('Card', module)
    .addDecorator(react_2.default)
    .add('Polls', function () { return (React.createElement(Container_1.Container, null,
    React.createElement(HeaderMenu_1.HeaderMenu, null,
        React.createElement(HeaderMenu_1.HeaderMenu.Left, null,
            React.createElement(Header_1.Header, null, "District polls")),
        React.createElement(HeaderMenu_1.HeaderMenu.Right, null,
            React.createElement(Button_1.Button, { basic: true, size: "small" },
                "View More",
                React.createElement(Icon_1.default, { name: "chevron right" })))),
    React.createElement(Card_1.Card.Group, null, cards.map(function (card, index) { return (React.createElement(Card_1.Card, { link: true, key: index },
        React.createElement(Card_1.Card.Content, null,
            React.createElement(Card_1.Card.Header, null, card.poll),
            React.createElement(Card_1.Card.Meta, null,
                "Weight ",
                card.weight,
                " ",
                React.createElement(Mana_1.Mana, { inline: true }))))); })))); });
