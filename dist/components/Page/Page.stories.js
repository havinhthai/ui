"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Table_1 = require("semantic-ui-react/dist/commonjs/collections/Table");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon");
var Atlas_1 = require("../Atlas/Atlas");
var Center_1 = require("../Center/Center");
var Container_1 = require("../Container/Container");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Filter_1 = require("../Filter/Filter");
var Footer_1 = require("../Footer/Footer");
var Header_1 = require("../Header/Header");
var HeaderMenu_1 = require("../HeaderMenu/HeaderMenu");
var Hero_1 = require("../Hero/Hero");
var Navbar_1 = require("../Navbar/Navbar");
var Radio_1 = require("../Radio/Radio");
var Tabs_1 = require("../Tabs/Tabs");
var Column_1 = require("../Column/Column");
var Button_1 = require("../Button/Button");
var Badge_1 = require("../Badge/Badge");
var Back_1 = require("../Back/Back");
var Row_1 = require("../Row/Row");
var Section_1 = require("../Section/Section");
var Empty_1 = require("../Empty/Empty");
var Narrow_1 = require("../Narrow/Narrow");
var colors_1 = require("../../colors");
var Page_1 = require("./Page");
require("./Page.stories.css");
var selected = [{ x: 22, y: 22 }];
function isSelected(x, y) {
    return selected.some(function (coord) { return coord.x === x && coord.y === y; });
}
var selectedStrokeLayer = function (x, y) {
    return isSelected(x, y) ? { color: '#ff0044', scale: 1.4 } : null;
};
var selectedFillLayer = function (x, y) {
    return isSelected(x, y) ? { color: '#ff9990', scale: 1.2 } : null;
};
react_1.storiesOf('Page', module)
    .add('Regular page', function () {
    return (React.createElement("div", { className: "Page-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "marketplace" }),
        React.createElement(Page_1.Page, null,
            React.createElement(Header_1.Header, null, "Hello Wolrd"),
            React.createElement("p", null, "This is a regular page")),
        React.createElement(Footer_1.Footer, null)));
})
    .add('Menu page', function () {
    return (React.createElement("div", { className: "Page-story-container" },
        React.createElement(Navbar_1.Navbar, { isFullscreen: true, activePage: "marketplace" }),
        React.createElement(Tabs_1.Tabs, null,
            React.createElement(Tabs_1.Tabs.Tab, { active: true }, "Atlas"),
            React.createElement(Tabs_1.Tabs.Tab, null, "Market"),
            React.createElement(Tabs_1.Tabs.Tab, null, "My Assets")),
        React.createElement(Page_1.Page, null,
            React.createElement(Header_1.Header, null, "Hello Wolrd"),
            React.createElement("p", null, "This page has a menu")),
        React.createElement(Footer_1.Footer, null)));
})
    .add('Menu and submenu page', function () {
    return (React.createElement("div", { className: "Page-story-container" },
        React.createElement(Navbar_1.Navbar, { isFullscreen: true, activePage: "marketplace" }),
        React.createElement(Tabs_1.Tabs, null,
            React.createElement(Tabs_1.Tabs.Tab, { active: true }, "Atlas"),
            React.createElement(Tabs_1.Tabs.Tab, null, "Market"),
            React.createElement(Tabs_1.Tabs.Tab, null, "My Assets")),
        React.createElement(Page_1.Page, null,
            React.createElement(HeaderMenu_1.HeaderMenu, null,
                React.createElement(HeaderMenu_1.HeaderMenu.Left, null,
                    React.createElement(Filter_1.Filter, { active: true }, "2 Parcels"),
                    React.createElement(Filter_1.Filter, null, "1 Estate"),
                    React.createElement(Filter_1.Filter, null, "1 Contributions"),
                    React.createElement(Filter_1.Filter, null, "1 Mortgage")),
                React.createElement(HeaderMenu_1.HeaderMenu.Right, null,
                    React.createElement("span", { className: "secondary-text", style: { marginRight: 8 } }, "On Sale"),
                    React.createElement(Radio_1.Radio, { toggle: true, style: { padding: 5, marginRight: 8 } }),
                    React.createElement(Dropdown_1.Dropdown, { text: "Newest", direction: "left" },
                        React.createElement(Dropdown_1.Dropdown.Menu, null,
                            React.createElement(Dropdown_1.Dropdown.Item, { text: "Newest", active: true }),
                            React.createElement(Dropdown_1.Dropdown.Item, { text: "Cheapest" }),
                            React.createElement(Dropdown_1.Dropdown.Item, { text: "Closest to expire" })))))),
        React.createElement(Footer_1.Footer, null)));
})
    .add('Menu and fullscreen page', function () {
    return (React.createElement("div", { className: "Page-story-container" },
        React.createElement(Navbar_1.Navbar, { isFullscreen: true, activePage: "marketplace" }),
        React.createElement(Tabs_1.Tabs, { isFullscreen: true },
            React.createElement(Tabs_1.Tabs.Tab, { active: true }, "Atlas"),
            React.createElement(Tabs_1.Tabs.Tab, null, "Market"),
            React.createElement(Tabs_1.Tabs.Tab, null, "My Assets")),
        React.createElement(Page_1.Page, { isFullscreen: true },
            React.createElement(Atlas_1.Atlas, null)),
        React.createElement(Footer_1.Footer, { isFullscreen: true })));
})
    .add('Hero page', function () {
    return (React.createElement("div", { className: "Page-story-container" },
        React.createElement(Navbar_1.Navbar, { isFullscreen: true, activePage: "marketplace" }),
        React.createElement(Page_1.Page, { isFullscreen: true },
            React.createElement(Hero_1.Hero, { centered: true },
                React.createElement(Hero_1.Hero.Header, null, "ATLAS"),
                React.createElement(Hero_1.Hero.Description, null, "Or something like that")),
            React.createElement(Container_1.Container, null,
                React.createElement(Header_1.Header, null, "Hello Wolrd"),
                React.createElement("p", null, "This page has a hero"))),
        React.createElement(Footer_1.Footer, null)));
})
    .add('Fullscreen page', function () {
    return (React.createElement("div", { className: "Page-story-container" },
        React.createElement(Navbar_1.Navbar, { isFullscreen: true, activePage: "marketplace" }),
        React.createElement(Page_1.Page, { isFullscreen: true },
            React.createElement(Center_1.Center, null,
                React.createElement(Header_1.Header, { size: "huge" }, "Oops"),
                React.createElement("p", null, "Nothing to do here."))),
        React.createElement(Footer_1.Footer, { isFullscreen: true })));
})
    .add('Detail page', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Navbar_1.Navbar, { activePage: "marketplace" }),
    React.createElement(Page_1.Page, null,
        React.createElement(Section_1.Section, null,
            React.createElement(Column_1.Column, null,
                React.createElement(Back_1.Back, { absolute: true }),
                React.createElement(Narrow_1.Narrow, null,
                    React.createElement(Row_1.Row, { stacked: true },
                        React.createElement(Column_1.Column, null,
                            React.createElement(Row_1.Row, null,
                                React.createElement(Header_1.Header, { size: "large" }, "Some Title"),
                                React.createElement(Badge_1.Badge, { color: colors_1.Color.SUMMER_RED },
                                    React.createElement(Icon_1.default, { name: "point" }),
                                    "66,66"))),
                        React.createElement(Column_1.Column, { align: "right" },
                            React.createElement(Row_1.Row, { align: "right" },
                                React.createElement(Button_1.Button, { basic: true }, "Transfer"),
                                React.createElement(Button_1.Button, { basic: true }, "Edit"),
                                React.createElement(Button_1.Button, { basic: true }, "Permissions"),
                                React.createElement(Dropdown_1.Dropdown, { trigger: React.createElement(Row_1.Row, null,
                                        React.createElement(Button_1.Button, { basic: true },
                                            React.createElement(Icon_1.default, { name: "ellipsis horizontal" }))), inline: true, direction: "left" },
                                    React.createElement(Dropdown_1.Dropdown.Menu, null,
                                        React.createElement(Dropdown_1.Dropdown.Item, { text: "Create estate" }),
                                        React.createElement(Dropdown_1.Dropdown.Item, { text: "List for sale" }))))))))),
        React.createElement(Narrow_1.Narrow, null,
            React.createElement(Section_1.Section, null,
                React.createElement(Empty_1.Empty, { height: 240 }, "Some placeholder...")),
            React.createElement(Section_1.Section, null,
                React.createElement(Header_1.Header, { sub: true }, "Description"),
                React.createElement("p", null, "This is some description bla bla bla...")),
            React.createElement(Section_1.Section, { size: "tiny" },
                React.createElement(Row_1.Row, { height: 32 },
                    React.createElement(Column_1.Column, null,
                        React.createElement(Row_1.Row, null,
                            React.createElement(Header_1.Header, { sub: true }, "Deployments"))),
                    React.createElement(Column_1.Column, { align: "right" },
                        React.createElement(Row_1.Row, null,
                            React.createElement(Button_1.Button, { basic: true }, "Publish"))))),
            React.createElement(Empty_1.Empty, { height: 80 }, "Deployments go here..."))),
    React.createElement(Footer_1.Footer, null))); })
    .add('Table page', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Navbar_1.Navbar, { isFullscreen: true }),
    React.createElement(Tabs_1.Tabs, null,
        React.createElement(Tabs_1.Tabs.Tab, { active: true }, "Land"),
        React.createElement(Tabs_1.Tabs.Tab, null, "Scenes")),
    React.createElement(Page_1.Page, { className: "table-story" },
        React.createElement(Row_1.Row, { height: 30 },
            React.createElement(Column_1.Column, null,
                React.createElement(Row_1.Row, null,
                    React.createElement(Header_1.Header, { sub: true }, "120 ITEMS"))),
            React.createElement(Column_1.Column, { align: "right" },
                React.createElement(Row_1.Row, { align: "right" },
                    React.createElement(Radio_1.Radio, { checked: true, label: "Owner" }),
                    React.createElement(Radio_1.Radio, { checked: true, label: "Operator" }),
                    React.createElement(Radio_1.Radio, { checked: true, label: "Host" })))),
        React.createElement(Table_1.default, { basic: "very" },
            React.createElement(Table_1.default.Header, null,
                React.createElement(Table_1.default.Row, null,
                    React.createElement(Table_1.default.HeaderCell, null, "Name"),
                    React.createElement(Table_1.default.HeaderCell, null, "Coordinates"),
                    React.createElement(Table_1.default.HeaderCell, null, "Role"),
                    React.createElement(Table_1.default.HeaderCell, null, "Operated By"),
                    React.createElement(Table_1.default.HeaderCell, null, "Type"),
                    React.createElement(Table_1.default.HeaderCell, null, "Current Scene"))),
            React.createElement(Table_1.default.Body, null,
                React.createElement(Table_1.default.Row, null,
                    React.createElement(Table_1.default.Cell, null,
                        React.createElement(Row_1.Row, null,
                            React.createElement(Column_1.Column, null,
                                React.createElement(Atlas_1.Atlas, { x: 22, y: 22, width: 45, height: 45, layers: [selectedStrokeLayer, selectedFillLayer], isDraggable: false, size: 9 })),
                            React.createElement(Column_1.Column, null, "Delta City"))),
                    React.createElement(Table_1.default.Cell, null, "66,66"),
                    React.createElement(Table_1.default.Cell, null, "Owner"),
                    React.createElement(Table_1.default.Cell, null, "Kyllian"),
                    React.createElement(Table_1.default.Cell, null, "Parcel"),
                    React.createElement(Table_1.default.Cell, null, "Magic Forrest")),
                React.createElement(Table_1.default.Row, null,
                    React.createElement(Table_1.default.Cell, null,
                        React.createElement(Row_1.Row, null,
                            React.createElement(Column_1.Column, null,
                                React.createElement(Atlas_1.Atlas, { x: 22, y: 22, width: 45, height: 45, layers: [selectedStrokeLayer, selectedFillLayer], isDraggable: false, size: 9 })),
                            React.createElement(Column_1.Column, null, "Delta City"))),
                    React.createElement(Table_1.default.Cell, null, "66,66"),
                    React.createElement(Table_1.default.Cell, null, "Owner"),
                    React.createElement(Table_1.default.Cell, null, "Kyllian"),
                    React.createElement(Table_1.default.Cell, null, "Parcel"),
                    React.createElement(Table_1.default.Cell, null, "Magic Forrest")),
                React.createElement(Table_1.default.Row, null,
                    React.createElement(Table_1.default.Cell, null,
                        React.createElement(Row_1.Row, null,
                            React.createElement(Column_1.Column, null,
                                React.createElement(Atlas_1.Atlas, { x: 22, y: 22, width: 45, height: 45, layers: [selectedStrokeLayer, selectedFillLayer], isDraggable: false, size: 9 })),
                            React.createElement(Column_1.Column, null, "Delta City"))),
                    React.createElement(Table_1.default.Cell, null, "66,66"),
                    React.createElement(Table_1.default.Cell, null, "Owner"),
                    React.createElement(Table_1.default.Cell, null, "Kyllian"),
                    React.createElement(Table_1.default.Cell, null, "Parcel"),
                    React.createElement(Table_1.default.Cell, null, "Magic Forrest")),
                React.createElement(Table_1.default.Row, null,
                    React.createElement(Table_1.default.Cell, null,
                        React.createElement(Row_1.Row, null,
                            React.createElement(Column_1.Column, null,
                                React.createElement(Atlas_1.Atlas, { x: 22, y: 22, width: 45, height: 45, layers: [selectedStrokeLayer, selectedFillLayer], isDraggable: false, size: 9 })),
                            React.createElement(Column_1.Column, null, "Delta City"))),
                    React.createElement(Table_1.default.Cell, null, "66,66"),
                    React.createElement(Table_1.default.Cell, null, "Owner"),
                    React.createElement(Table_1.default.Cell, null, "Kyllian"),
                    React.createElement(Table_1.default.Cell, null, "Parcel"),
                    React.createElement(Table_1.default.Cell, null, "Magic Forrest")),
                React.createElement(Table_1.default.Row, null,
                    React.createElement(Table_1.default.Cell, null,
                        React.createElement(Row_1.Row, null,
                            React.createElement(Column_1.Column, null,
                                React.createElement(Atlas_1.Atlas, { x: 22, y: 22, width: 45, height: 45, layers: [selectedStrokeLayer, selectedFillLayer], isDraggable: false, size: 9 })),
                            React.createElement(Column_1.Column, null, "Delta City"))),
                    React.createElement(Table_1.default.Cell, null, "66,66"),
                    React.createElement(Table_1.default.Cell, null, "Owner"),
                    React.createElement(Table_1.default.Cell, null, "Kyllian"),
                    React.createElement(Table_1.default.Cell, null, "Parcel"),
                    React.createElement(Table_1.default.Cell, null, "Magic Forrest")),
                React.createElement(Table_1.default.Row, null,
                    React.createElement(Table_1.default.Cell, null,
                        React.createElement(Row_1.Row, null,
                            React.createElement(Column_1.Column, null,
                                React.createElement(Atlas_1.Atlas, { x: 22, y: 22, width: 45, height: 45, layers: [selectedStrokeLayer, selectedFillLayer], isDraggable: false, size: 9 })),
                            React.createElement(Column_1.Column, null, "Delta City"))),
                    React.createElement(Table_1.default.Cell, null, "66,66"),
                    React.createElement(Table_1.default.Cell, null, "Owner"),
                    React.createElement(Table_1.default.Cell, null, "Kyllian"),
                    React.createElement(Table_1.default.Cell, null, "Parcel"),
                    React.createElement(Table_1.default.Cell, null, "Magic Forrest"))))),
    React.createElement(Footer_1.Footer, null))); });
