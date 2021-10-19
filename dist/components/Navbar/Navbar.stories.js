"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Menu_1 = require("semantic-ui-react/dist/commonjs/collections/Menu");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Button_1 = require("../Button/Button");
var Hero_1 = require("../Hero/Hero");
var Parallax_1 = require("../Parallax/Parallax");
var UserMenu_1 = require("../UserMenu/UserMenu");
var Navbar_1 = require("./Navbar");
require("./Navbar.stories.css");
var avatar = {
    userId: '0xec6e6c0841a2ba474e92bf42baf76bfe80e8657c',
    email: '',
    name: 'cazala',
    hasClaimedName: true,
    description: 'javascript sexmachine',
    ethAddress: '0xec6e6c0841a2ba474e92bf42baf76bfe80e8657c',
    version: 46,
    avatar: {
        bodyShape: 'dcl://base-avatars/BaseMale',
        snapshots: {
            face: 'https://peer.decentraland.org/content/contents/QmSwtgWEuCUC1eEDww69h3eDk8qUhsuwhq9e44UX2JThLY',
            body: 'https://peer.decentraland.org/content/contents/QmYchnHPEdeeNWnUJik6hKV3vELtzUrfK5QvUhgywoUpFG'
        },
        eyes: {
            color: { r: 0.37109375, g: 0.22265625, b: 0.1953125, a: 1 }
        },
        hair: {
            color: {
                r: 0.92578125,
                g: 0.91015625,
                b: 0.88671875,
                a: 1
            }
        },
        skin: {
            color: { r: 0.8671875, g: 0.6953125, b: 0.5625, a: 1 }
        },
        wearables: [
            'dcl://base-avatars/eyes_00',
            'dcl://base-avatars/eyebrows_00',
            'dcl://base-avatars/mouth_00',
            'dcl://base-avatars/beard',
            'dcl://halloween_2019/vampire_lower_body',
            'dcl://base-avatars/semi_bold',
            'dcl://dcl_launch/dcl_hoodie_upper_body',
            'dcl://halloween_2019/frankie_feet',
            'dcl://xmas_2019/xmas_light_ball_earring',
            'dcl://halloween_2019/classic_top_hat',
            'dcl://stay_safe/protection_mask_funny_mask'
        ],
        version: 47
    },
    inventory: [
        'dcl://exclusive_masks/asian_fox',
        'dcl://halloween_2019/vampire_lower_body',
        'dcl://halloween_2019/zombie_suit_upper_body',
        'dcl://halloween_2019/frankie_lower_body',
        'dcl://halloween_2019/frankie_feet',
        'dcl://halloween_2019/happy_pumpkin_helmet',
        'dcl://halloween_2019/vampire_feet',
        'dcl://halloween_2019/zombie_suit_mask',
        'dcl://halloween_2019/vampire_hair',
        'dcl://halloween_2019/zombie_suit_feet',
        'dcl://halloween_2019/zombie_suit_mask',
        'dcl://halloween_2019/zombie_suit_upper_body',
        'dcl://halloween_2019/frankie_lower_body',
        'dcl://halloween_2019/frankie_feet',
        'dcl://halloween_2019/vampire_upper_body',
        'dcl://halloween_2019/zombie_suit_lower_body',
        'dcl://halloween_2019/zombie_suit_upper_body',
        'dcl://halloween_2019/funny_skull_mask',
        'dcl://halloween_2019/bloody_knife_headband_top_head',
        'dcl://halloween_2019/sad_clown_lower_body',
        'dcl://halloween_2019/sad_clown_feet',
        'dcl://halloween_2019/mariachi_hat',
        'dcl://halloween_2019/sad_clown_upper_body',
        'dcl://halloween_2019/sad_clown_mask',
        'dcl://halloween_2019/classic_top_hat',
        'dcl://halloween_2019/mexican_hat',
        'dcl://halloween_2019/monkey_skull_mask',
        'dcl://xmas_2019/xmas_sockets_feet',
        'dcl://xmas_2019/xmas_light_ball_earring',
        'dcl://xmas_2019/xmas_ball_earring',
        'dcl://xmas_2019/xmas_light_tree_earring',
        'dcl://xmas_2019/xmas_elf_hat',
        'dcl://mch_collection/mch_fukuzawa_upper_body',
        'dcl://dcl_launch/dcl_hoodie_upper_body',
        'dcl://dcl_launch/launch_tshirt_upper_body',
        'dcl://dcl_launch/dcl_hat_hat',
        'dcl://dcl_launch/dcl_earrings_earring',
        'dcl://community_contest/cw_hot_dog_top_head',
        'dcl://community_contest/cw_smiley_alien_hat',
        'dcl://stay_safe/protection_mask_funny_mask',
        'dcl://stay_safe/protection_mask_hot_mask'
    ],
    tutorialStep: 99
};
react_1.storiesOf('Navbar', module)
    .addDecorator(react_2.default)
    .add('DAO', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao" })));
})
    .add('Sign In', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", onSignIn: function () { return console.log('Clicked on sign in'); } })));
})
    .add('Sign In Page', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isSignIn: true, onSignIn: function () { return console.log('Clicked on sign in'); } })));
})
    .add('Connecting', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", onSignIn: function () { return console.log('Clicked on sign in'); }, isConnecting: true })));
})
    .add('Connected', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000 })));
})
    .add('On click account', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); } })));
})
    .add('Fullscreen', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement("div", { className: "background" }),
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, isFullscreen: true })));
})
    .add('With hero', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isFullscreen: true }),
        React.createElement(Hero_1.Hero, { height: 442, centered: true },
            React.createElement(Hero_1.Hero.Header, null, "Help us build Decentraland"),
            React.createElement(Hero_1.Hero.Description, null, "Join the discussion"),
            React.createElement(Hero_1.Hero.Content, null,
                React.createElement(Parallax_1.Parallax, null,
                    React.createElement(Parallax_1.Parallax.Layer, { depth: 0.3 },
                        React.createElement("div", { className: "homepage-pyramid small" })),
                    React.createElement(Parallax_1.Parallax.Layer, { depth: 1.5 },
                        React.createElement("div", { className: "homepage-pyramid large" })))))));
})
    .add('With Overlay over Hero', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isFullscreen: true, isOverlay: true }),
        React.createElement(Hero_1.Hero, { className: "over-gradient", height: 442, centered: true },
            React.createElement(Hero_1.Hero.Header, null, "Help us build Decentraland"),
            React.createElement(Hero_1.Hero.Description, null, "Join the discussion"),
            React.createElement(Hero_1.Hero.Content, null,
                React.createElement("div", { className: "color-layer" })))));
})
    .add('Custom middle menu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, middleMenu: React.createElement(Menu_1.default.Item, null,
                React.createElement(Icon_1.default, { name: "bell", onClick: function () { return console.log('Clicked on notification bell'); } })) })));
})
    .add('Custom left menu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, leftMenu: React.createElement(React.Fragment, null,
                React.createElement(Menu_1.default.Item, null, "Home"),
                React.createElement(Menu_1.default.Item, null, "About"),
                React.createElement(Menu_1.default.Item, null, "Contact Us")) })));
})
    .add('Custom right menu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, rightMenu: React.createElement(Button_1.Button, { primary: true, size: "small", style: { minWidth: 100 } }, "Get Started") })));
})
    .add('With UserMenu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, rightMenu: React.createElement(UserMenu_1.UserMenu, { avatar: avatar, isSignedIn: true }) })));
});
