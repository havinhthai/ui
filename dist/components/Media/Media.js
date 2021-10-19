"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotMobileMediaQuery = exports.useMobileMediaQuery = exports.useTabletAndBelowMediaQuery = exports.useTabletMediaQuery = exports.useDesktopMediaQuery = exports.NotMobile = exports.Mobile = exports.TabletAndBelow = exports.Tablet = exports.Desktop = void 0;
var react_responsive_1 = require("react-responsive");
/**
 * Media hook to determine if we're going to be rendering in a desktop environment.
 */
var useDesktopMediaQuery = function () { return react_responsive_1.useMediaQuery({ minWidth: 992 }); };
exports.useDesktopMediaQuery = useDesktopMediaQuery;
/**
 * Media hook to determine if we're going to be rendering in a tablet environment.
 */
var useTabletMediaQuery = function () {
    return react_responsive_1.useMediaQuery({ minWidth: 768, maxWidth: 991 });
};
exports.useTabletMediaQuery = useTabletMediaQuery;
/**
 * Media hook to determine if we're going to be rendering in a tablet or below environment.
 */
var useTabletAndBelowMediaQuery = function () {
    return react_responsive_1.useMediaQuery({ maxWidth: 991 });
};
exports.useTabletAndBelowMediaQuery = useTabletAndBelowMediaQuery;
/**
 * Media hook to determine if we're going to be rendering in a mobile environment.
 */
var useMobileMediaQuery = function () { return react_responsive_1.useMediaQuery({ maxWidth: 767 }); };
exports.useMobileMediaQuery = useMobileMediaQuery;
/**
 * Media hook to determine if we're going to be rendering in an environment that's not mobile.
 */
var useNotMobileMediaQuery = function () { return react_responsive_1.useMediaQuery({ minWidth: 768 }); };
exports.useNotMobileMediaQuery = useNotMobileMediaQuery;
/**
 * Renders a component if the screen suits the desktop size.
 */
var Desktop = function (_a) {
    var children = _a.children;
    var isDesktop = useDesktopMediaQuery();
    return isDesktop ? children : null;
};
exports.Desktop = Desktop;
/**
 * Renders a component if the screen suits the tablet size.
 */
var Tablet = function (_a) {
    var children = _a.children;
    var isTablet = useTabletMediaQuery();
    return isTablet ? children : null;
};
exports.Tablet = Tablet;
/**
 * Renders a component if the screen suits the tablet or mobile size.
 */
var TabletAndBelow = function (_a) {
    var children = _a.children;
    var isTablet = useTabletAndBelowMediaQuery();
    return isTablet ? children : null;
};
exports.TabletAndBelow = TabletAndBelow;
/**
 * Renders a component if the screen suits the mobile size.
 */
var Mobile = function (_a) {
    var children = _a.children;
    var isMobile = useMobileMediaQuery();
    return isMobile ? children : null;
};
exports.Mobile = Mobile;
/**
 * Renders a component if the screen doesn't have the size of a mobile device.
 */
var NotMobile = function (_a) {
    var children = _a.children;
    var isNotMobile = useNotMobileMediaQuery();
    return isNotMobile ? children : null;
};
exports.NotMobile = NotMobile;
