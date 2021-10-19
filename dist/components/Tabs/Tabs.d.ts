import * as React from 'react';
import './Tabs.css';
export declare type TabsProps = {
    isFullscreen?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export declare class Tabs extends React.PureComponent<TabsProps> {
    static defaultProps: Partial<TabsProps>;
    static Left: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static Right: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static Tab: ({ active, onClick, children, }: {
        active?: boolean;
        onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        children: React.ReactNode;
    }) => JSX.Element;
    render(): JSX.Element;
}
