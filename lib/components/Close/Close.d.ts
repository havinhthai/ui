import * as React from 'react';
import './Close.css';
export declare type CloseProps = {
    small?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => unknown;
};
export declare class Close extends React.PureComponent<CloseProps> {
    static defaultProps: CloseProps;
    render(): JSX.Element;
}
