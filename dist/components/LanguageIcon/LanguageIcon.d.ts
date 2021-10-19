import * as React from 'react';
import { Locale } from '../Language/Language';
import './LanguageIcon.css';
export { Locale };
export declare type LanguageIconProps = {
    locale: Locale;
    label?: React.ReactNode;
};
export declare class LanguageIcon extends React.PureComponent<LanguageIconProps> {
    renderIcon(): JSX.Element;
    render(): JSX.Element;
}
