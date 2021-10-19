import * as React from 'react';
import './Stats.css';
export declare type StatsProps = {
    title: string;
    className?: string;
};
export declare class Stats extends React.Component<StatsProps> {
    static defaultProps: {
        className: string;
    };
    render(): JSX.Element;
}
