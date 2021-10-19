import * as React from 'react';
import './HeaderMenu.css';
export declare type HeaderMenuProps = {
    stackable?: boolean;
};
export declare class HeaderMenu extends React.PureComponent<HeaderMenuProps> {
    static defaultProps: Partial<HeaderMenuProps>;
    static Left: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static Right: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    render(): JSX.Element;
}
