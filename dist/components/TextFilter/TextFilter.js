"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFilter = void 0;
var React = require("react");
var Header_1 = require("../Header/Header");
var input_1 = require("../../hooks/input");
require("./TextFilter.css");
var TextFilter = function (props) {
    var label = props.label, value = props.value, placeholder = props.placeholder, onChange = props.onChange;
    var _a = input_1.useInput(value, onChange), text = _a[0], setText = _a[1];
    var inputRef = React.useRef(null);
    React.useEffect(function () {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (React.createElement("div", { className: "dcl text-filter" },
        label ? (React.createElement(Header_1.Header, { sub: true, className: "name" }, label)) : null,
        React.createElement("div", { className: "text-input" },
            React.createElement("input", { ref: inputRef, value: text, onChange: setText, placeholder: placeholder }))));
};
exports.TextFilter = TextFilter;
