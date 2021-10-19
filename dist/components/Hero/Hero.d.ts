import * as React from 'react';
import { ContainerProps } from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import { HeaderProps } from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import './Hero.css';
export declare type HeroProps = {
    width?: number;
    height?: number;
    centered?: boolean;
    className?: string;
};
export declare class Hero extends React.PureComponent<HeroProps> {
    static Header: ({ children, ...props }: HeaderProps) => JSX.Element;
    static Description: ({ children, ...props }: HeaderProps) => JSX.Element;
    static Content: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
    static Actions: ({ children, ...props }: ContainerProps) => JSX.Element;
    render(): JSX.Element;
}
