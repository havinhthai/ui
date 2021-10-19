"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var AvatarFace_1 = require("./AvatarFace");
var Mana_1 = require("../Mana/Mana");
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
react_1.storiesOf('AvatarFace', module)
    .addDecorator(react_2.default)
    .add('Single', function () { return React.createElement(AvatarFace_1.AvatarFace, { size: "large", avatar: avatar }); })
    .add('Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(AvatarFace_1.AvatarFace, { size: "tiny", avatar: avatar }),
    React.createElement(AvatarFace_1.AvatarFace, { size: "small", avatar: avatar }),
    React.createElement(AvatarFace_1.AvatarFace, { size: "medium", avatar: avatar }),
    React.createElement(AvatarFace_1.AvatarFace, { size: "large", avatar: avatar }))); })
    .add('In a paragraph', function () { return (React.createElement("p", null,
    "You've transferred ",
    React.createElement(Mana_1.Mana, { inline: true }, "1,000"),
    " to",
    ' ',
    React.createElement(AvatarFace_1.AvatarFace, { size: "tiny", inline: true, avatar: avatar }),
    " ",
    React.createElement("strong", null, "cazala"))); });
