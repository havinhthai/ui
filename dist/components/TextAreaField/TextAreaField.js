"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaField = void 0;
var React = require("react");
var TextArea_1 = require("semantic-ui-react/dist/commonjs/addons/TextArea/TextArea");
require("./TextAreaField.css");
var TextAreaField = function (props) {
    var textAreaProps = __assign({}, props);
    delete textAreaProps['label'];
    return (React.createElement("div", { className: "dcl text-area" },
        props.label && React.createElement("div", { className: "label" }, props.label),
        React.createElement(TextArea_1.default, __assign({}, textAreaProps))));
};
exports.TextAreaField = TextAreaField;
