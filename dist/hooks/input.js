"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInput = void 0;
var react_1 = require("react");
var useInput = function (value, onChange, ms) {
    if (ms === void 0) { ms = 500; }
    var _a = react_1.useState(value), text = _a[0], setText = _a[1];
    var handleChange = react_1.useCallback(function (event) { return setText(event.target.value); }, [setText]);
    var timeout = react_1.useRef();
    // flag to skip debounce
    var skip = react_1.useRef(false);
    // when value is changed from outside (controlled prop)
    // should update internal value and skip debounce
    react_1.useEffect(function () {
        if (value !== text) {
            skip.current = true;
            setText(value);
        }
        // eslint-disable-next-line
    }, [value]);
    // When internal value changes it
    // should start a debounced call to onChange
    react_1.useEffect(function () {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (skip.current) {
            skip.current = false;
            return;
        }
        timeout.current = setTimeout(function () {
            timeout.current = undefined;
            onChange(text);
        }, ms);
    }, [text, ms, onChange]);
    return [text, handleChange];
};
exports.useInput = useInput;
