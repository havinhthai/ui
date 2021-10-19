"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var TextFilter_1 = require("./TextFilter");
function generateValueAndChangeFunction() {
    var result = {
        fieldValue: undefined,
    };
    result.onChange = function (value) {
        result.fieldValue = value;
    };
    return result;
}
var firstExample = generateValueAndChangeFunction();
react_1.storiesOf('TextFilter', module)
    .addDecorator(react_2.default)
    .add('Basic filter', function () { return (React.createElement(TextFilter_1.TextFilter, { placeholder: "This is a placeholder", value: firstExample.value, onChange: firstExample.onChange })); })
    .add('Basic filter with a name', function () { return (React.createElement(TextFilter_1.TextFilter, { placeholder: "This is a placeholder", label: "This is a label", value: firstExample.value, onChange: firstExample.onChange })); });
