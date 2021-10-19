"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var React = require("react");
require("./Badge.css");
var Badge = function (props) {
    var color = props.color, className = props.className, children = props.children;
    var classes = ['dcl', 'badge'];
    if (className) {
        classes.push(className);
    }
    return (React.createElement("div", { className: classes.join(' '), style: { backgroundColor: color } }, children));
};
exports.Badge = Badge;
