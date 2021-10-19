import * as React from 'react';
import './Badge.css';
export declare type BadgeProps = {
    color: string;
    className?: string;
    children: React.ReactNode;
};
export declare const Badge: (props: BadgeProps) => JSX.Element;
