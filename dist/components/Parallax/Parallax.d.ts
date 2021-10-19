import * as React from 'react';
export declare class Parallax extends React.PureComponent {
    scene: React.ReactNode;
    parallax: {
        disable(): void;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    static Layer: ({ depth, children, ...rest }: React.HTMLAttributes<HTMLDivElement> & {
        depth: number;
    }) => JSX.Element;
    render(): JSX.Element;
}
