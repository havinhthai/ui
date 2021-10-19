import * as React from 'react';
import './Section.css';
export declare type SectionProps = {
    className?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large';
};
export declare class Section extends React.PureComponent<SectionProps> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
}
