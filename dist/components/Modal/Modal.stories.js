"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Button_1 = require("../Button/Button");
var Center_1 = require("../Center/Center");
var Close_1 = require("../Close/Close");
var Field_1 = require("../Field/Field");
var Header_1 = require("../Header/Header");
var Mana_1 = require("../Mana/Mana");
var ModalNavigation_1 = require("../ModalNavigation/ModalNavigation");
var Radio_1 = require("../Radio/Radio");
var Modal_1 = require("./Modal");
require("./Modal.stories.css");
var lipsum = (React.createElement(React.Fragment, null,
    React.createElement(Header_1.Header, null, "Lorem Ipsum"),
    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in tincidunt lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare rutrum lorem vehicula finibus. Donec vitae lorem consequat, suscipit nibh sit amet, euismod nunc. Sed gravida faucibus nulla vitae luctus. Aliquam libero lacus, faucibus ac neque ut, hendrerit pulvinar quam. Nunc porta porttitor nulla et dignissim. Aenean lobortis libero aliquet dolor pulvinar dapibus. Sed tristique scelerisque nulla, in feugiat neque lacinia in. Cras vulputate turpis in orci interdum accumsan."),
    React.createElement("p", null, "Phasellus sit amet eleifend sapien, vel commodo nibh. Morbi mi lectus, vulputate eget turpis nec, aliquam efficitur lacus. Morbi gravida nisi et purus facilisis, at molestie neque vulputate. Sed in nulla mollis justo aliquam egestas. Aliquam gravida porta augue, et lobortis ante tincidunt ut. Nam varius lorem suscipit dolor malesuada finibus. Quisque ullamcorper purus ut tincidunt vehicula. Sed hendrerit porttitor lacinia. Fusce eget arcu augue. Quisque ullamcorper imperdiet libero, sed interdum augue congue eu. Fusce finibus scelerisque odio, id facilisis ante sagittis sit amet. Nulla vulputate lobortis tellus in dapibus. Suspendisse non tempus nulla. Nulla egestas malesuada interdum. Aliquam malesuada placerat nisl nec ultrices."),
    React.createElement("p", null, "Duis a viverra ipsum, in pellentesque est. Nullam interdum vehicula massa sed porttitor. Ut condimentum lacinia iaculis. Pellentesque porta euismod nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae mattis ipsum, a bibendum nisi. Sed nec ante ultricies, pretium nulla sit amet, congue sem. Nulla at sodales enim. Nam a dignissim tortor. Quisque feugiat est nec tortor eleifend ornare nec vel velit. Praesent rhoncus nisl ut convallis posuere. Nam sollicitudin eros sem, a consectetur sem interdum non. Phasellus ac dolor eget lacus feugiat ullamcorper.")));
react_1.storiesOf('Modal', module)
    .addDecorator(react_2.default)
    .add('Simple', function () { return (React.createElement("div", { className: "Modal-story" },
    lipsum,
    React.createElement(Modal_1.Modal, { open: true },
        React.createElement(Modal_1.Modal.Header, null, "Are you sure?"),
        React.createElement(Modal_1.Modal.Content, null,
            "You are about to sell your soul for",
            ' ',
            React.createElement(Mana_1.Mana, { inline: true }, (2500).toLocaleString()),
            ". Do you want to proceed?"),
        React.createElement(Modal_1.Modal.Actions, null,
            React.createElement(Button_1.Button, { primary: true }, "Proceed"),
            React.createElement(Button_1.Button, null, "Cancel"))))); })
    .add('Small', function () { return (React.createElement("div", { className: "Modal-story" },
    lipsum,
    React.createElement(Modal_1.Modal, { size: "small", open: true },
        React.createElement(Modal_1.Modal.Header, null, "Are you sure?"),
        React.createElement(Modal_1.Modal.Content, null,
            "You are about to sell your soul for",
            ' ',
            React.createElement(Mana_1.Mana, { inline: true }, (2500).toLocaleString()),
            ". Do you want to proceed?"),
        React.createElement(Modal_1.Modal.Actions, null,
            React.createElement(Button_1.Button, { primary: true }, "Proceed"),
            React.createElement(Button_1.Button, null, "Cancel"))))); })
    .add('Tiny', function () { return (React.createElement("div", { className: "Modal-story" },
    lipsum,
    React.createElement(Modal_1.Modal, { size: "tiny", open: true },
        React.createElement(Modal_1.Modal.Header, null, "Are you sure?"),
        React.createElement(Modal_1.Modal.Content, null,
            "You are about to sell your soul for",
            ' ',
            React.createElement(Mana_1.Mana, { inline: true }, (2500).toLocaleString()),
            ". Do you want to proceed?"),
        React.createElement(Modal_1.Modal.Actions, null,
            React.createElement(Button_1.Button, { primary: true }, "Proceed"),
            React.createElement(Button_1.Button, null, "Cancel"))))); })
    .add('Custom Header', function () { return (React.createElement("div", { className: "Modal-story" },
    lipsum,
    React.createElement(Modal_1.Modal, { size: "small", open: true },
        React.createElement("div", { className: "Modal-custom-header" },
            React.createElement(Center_1.Center, null,
                React.createElement(Header_1.Header, { size: "large" }, "Give us your email!"),
                React.createElement("p", null, "We need to feed our marketing gnomes"))),
        React.createElement(Modal_1.Modal.Content, null, "Keep up to date with news and important announcements."),
        React.createElement(Modal_1.Modal.Content, null,
            React.createElement(Radio_1.Radio, { label: "Suscribe to newsletter" })),
        React.createElement(Modal_1.Modal.Actions, null,
            React.createElement(Button_1.Button, { primary: true }, "Continue"))))); })
    .add('Form', function () { return (React.createElement("div", { className: "Modal-story" },
    lipsum,
    React.createElement(Modal_1.Modal, { size: "small", open: true },
        React.createElement(Modal_1.Modal.Header, null, "Join us!"),
        React.createElement(Modal_1.Modal.Content, null,
            React.createElement(Field_1.Field, { label: "Name", placeholder: "Luis XVII" }),
            React.createElement(Field_1.Field, { label: "Email", placeholder: "luigi@mail.com" }),
            React.createElement(Radio_1.Radio, { label: "Check me" })),
        React.createElement(Modal_1.Modal.Actions, null,
            React.createElement(Button_1.Button, { primary: true }, "Submit"),
            React.createElement(Button_1.Button, null, "Cancel"))))); })
    .add('Closable', function () { return (React.createElement("div", { className: "Modal-story" },
    lipsum,
    React.createElement(Modal_1.Modal, { size: "small", open: true, closeIcon: React.createElement(Close_1.Close, null) },
        React.createElement(Modal_1.Modal.Header, null, "I'm annoying!"),
        React.createElement(Modal_1.Modal.Content, null,
            React.createElement("p", null, "This is an alert or something like that."),
            React.createElement("p", null, "It doesn't have any actions but you can dismiss it."))))); })
    .add('Navigation', function () { return (React.createElement("div", { className: "Modal-story" },
    lipsum,
    React.createElement(Modal_1.Modal, { open: true },
        React.createElement(ModalNavigation_1.ModalNavigation, { title: "Edit BMX Pack", subtitle: "Edit your Asset Pack details and manage your objects", onBack: function () { return alert('Back!'); }, onClose: function () { return alert('Close!'); } }),
        React.createElement(Modal_1.Modal.Content, null, "Bla bla bla")))); });
