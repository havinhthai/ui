import * as React from 'react';
import './Empty.css';
export declare type EmptyProps = {
    height?: number;
    expand?: boolean;
    className?: string;
};
export declare class Empty extends React.PureComponent<EmptyProps> {
    render(): JSX.Element;
}
