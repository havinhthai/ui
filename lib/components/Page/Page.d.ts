import * as React from 'react';
import './Page.css';
export declare type PageProps = {
    className?: string;
    isFullscreen?: boolean;
};
export declare class Page extends React.PureComponent<PageProps> {
    static defaultProps: {
        hasHero: boolean;
        heroHeight: number;
        isFullscreen: boolean;
    };
    render(): JSX.Element;
}
