/**
 * Media hook to determine if we're going to be rendering in a desktop environment.
 */
declare const useDesktopMediaQuery: () => boolean;
/**
 * Media hook to determine if we're going to be rendering in a tablet environment.
 */
declare const useTabletMediaQuery: () => boolean;
/**
 * Media hook to determine if we're going to be rendering in a tablet or below environment.
 */
declare const useTabletAndBelowMediaQuery: () => boolean;
/**
 * Media hook to determine if we're going to be rendering in a mobile environment.
 */
declare const useMobileMediaQuery: () => boolean;
/**
 * Media hook to determine if we're going to be rendering in an environment that's not mobile.
 */
declare const useNotMobileMediaQuery: () => boolean;
/**
 * Renders a component if the screen suits the desktop size.
 */
declare const Desktop: ({ children }: {
    children: any;
}) => any;
/**
 * Renders a component if the screen suits the tablet size.
 */
declare const Tablet: ({ children }: {
    children: any;
}) => any;
/**
 * Renders a component if the screen suits the tablet or mobile size.
 */
declare const TabletAndBelow: ({ children }: {
    children: any;
}) => any;
/**
 * Renders a component if the screen suits the mobile size.
 */
declare const Mobile: ({ children }: {
    children: any;
}) => any;
/**
 * Renders a component if the screen doesn't have the size of a mobile device.
 */
declare const NotMobile: ({ children }: {
    children: any;
}) => any;
export { Desktop, Tablet, TabletAndBelow, Mobile, NotMobile, useDesktopMediaQuery, useTabletMediaQuery, useTabletAndBelowMediaQuery, useMobileMediaQuery, useNotMobileMediaQuery };
