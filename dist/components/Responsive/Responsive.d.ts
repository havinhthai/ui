import * as React from 'react';
import { ResponsiveProps } from './Responsive.types';
/**
 * Responsive can control visibility of content.
 *
 * @deprecated This component is deprecated and was removed from semantic ui.
 */
export default class Responsive extends React.Component<ResponsiveProps> {
    static readonly onlyMobile: {
        minWidth: number;
        maxWidth: number;
    };
    static readonly onlyTablet: {
        minWidth: number;
        maxWidth: number;
    };
    static readonly onlyComputer: {
        minWidth: number;
    };
    static readonly onlyLargeScreen: {
        minWidth: number;
        maxWidth: number;
    };
    static readonly onlyWidescreen: {
        minWidth: number;
    };
    static defaultProps: {
        getWidth: () => number;
    };
    private ticking;
    private frameId;
    state: {
        visible: boolean;
    };
    static getDerivedStateFromProps(props: any): {
        visible: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: (e: any) => void;
    handleUpdate: (e?: any) => void;
    cleanProps: (props: ResponsiveProps) => {
        [x: string]: any;
        as?: any;
        children?: React.ReactNode;
        fireOnMount?: boolean;
        getWidth?: () => number;
        maxWidth?: React.ReactText;
        minWidth?: React.ReactText;
        onUpdate?: (event: React.SyntheticEvent<HTMLElement, Event>, data: import("./Responsive.types").ResponsiveOnUpdateData) => void;
    };
    render(): JSX.Element;
}
