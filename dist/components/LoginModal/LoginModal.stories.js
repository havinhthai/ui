"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Header_1 = require("../Header/Header");
var LoginModal_1 = require("../LoginModal/LoginModal");
require("./LoginModal.stories.css");
var lipsum = (React.createElement(React.Fragment, null,
    React.createElement(Header_1.Header, null, "Lorem Ipsum"),
    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in tincidunt lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare rutrum lorem vehicula finibus. Donec vitae lorem consequat, suscipit nibh sit amet, euismod nunc. Sed gravida faucibus nulla vitae luctus. Aliquam libero lacus, faucibus ac neque ut, hendrerit pulvinar quam. Nunc porta porttitor nulla et dignissim. Aenean lobortis libero aliquet dolor pulvinar dapibus. Sed tristique scelerisque nulla, in feugiat neque lacinia in. Cras vulputate turpis in orci interdum accumsan."),
    React.createElement("p", null, "Phasellus sit amet eleifend sapien, vel commodo nibh. Morbi mi lectus, vulputate eget turpis nec, aliquam efficitur lacus. Morbi gravida nisi et purus facilisis, at molestie neque vulputate. Sed in nulla mollis justo aliquam egestas. Aliquam gravida porta augue, et lobortis ante tincidunt ut. Nam varius lorem suscipit dolor malesuada finibus. Quisque ullamcorper purus ut tincidunt vehicula. Sed hendrerit porttitor lacinia. Fusce eget arcu augue. Quisque ullamcorper imperdiet libero, sed interdum augue congue eu. Fusce finibus scelerisque odio, id facilisis ante sagittis sit amet. Nulla vulputate lobortis tellus in dapibus. Suspendisse non tempus nulla. Nulla egestas malesuada interdum. Aliquam malesuada placerat nisl nec ultrices."),
    React.createElement("p", null, "Duis a viverra ipsum, in pellentesque est. Nullam interdum vehicula massa sed porttitor. Ut condimentum lacinia iaculis. Pellentesque porta euismod nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae mattis ipsum, a bibendum nisi. Sed nec ante ultricies, pretium nulla sit amet, congue sem. Nulla at sodales enim. Nam a dignissim tortor. Quisque feugiat est nec tortor eleifend ornare nec vel velit. Praesent rhoncus nisl ut convallis posuere. Nam sollicitudin eros sem, a consectetur sem interdum non. Phasellus ac dolor eget lacus feugiat ullamcorper.")));
react_1.storiesOf('LoginModal', module)
    .addDecorator(react_2.default)
    .add('Login options', function () { return (React.createElement("div", { className: "LoginModal-story" },
    lipsum,
    React.createElement(LoginModal_1.LoginModal, { open: true, onClose: function () { return undefined; } },
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.METAMASK }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.DAPPER }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.COINBASE }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.SAMSUNG }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.FORTMATIC }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.WALLET_CONNECT })))); })
    .add('Login persisent message', function () { return (React.createElement("div", { className: "LoginModal-story" },
    lipsum,
    React.createElement(LoginModal_1.LoginModal, { open: true, message: "This is a custom persistent message", onClose: function () { return undefined; } },
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.METAMASK }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.DAPPER }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.COINBASE }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.SAMSUNG }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.FORTMATIC }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.WALLET_CONNECT })))); })
    .add('Login error', function () { return (React.createElement("div", { className: "LoginModal-story" },
    lipsum,
    React.createElement(LoginModal_1.LoginModal, { open: true, hasError: true, onClose: function () { return undefined; } },
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.METAMASK }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.DAPPER }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.COINBASE }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.SAMSUNG }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.FORTMATIC }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.WALLET_CONNECT })))); })
    .add('Loading', function () { return (React.createElement("div", { className: "LoginModal-story" },
    lipsum,
    React.createElement(LoginModal_1.LoginModal, { open: true, loading: true, onClose: function () { return undefined; } },
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.METAMASK }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.DAPPER }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.SAMSUNG }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.FORTMATIC }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.WALLET_CONNECT })))); })
    .add('Full example', function () { return (React.createElement("div", { className: "LoginModal-story" },
    lipsum,
    React.createElement(LoginModal_1.LoginModal, { open: true, message: "This is a custom persistent message", hasError: true, loading: true, onClose: function () { return undefined; } },
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.METAMASK }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.DAPPER }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.COINBASE }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.SAMSUNG }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.FORTMATIC }),
        React.createElement(LoginModal_1.LoginModal.Option, { type: LoginModal_1.LoginModalOptionType.WALLET_CONNECT })))); });
