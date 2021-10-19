import * as React from 'react';
import { LanguageDropdownI18N, LanguageDropdownProps } from '../LanguageDropdown/LanguageDropdown';
import { Locale } from '../Language/Language';
import './Footer.css';
export declare type LinksI18N = {
    home: React.ReactNode;
    privacy: React.ReactNode;
    terms: React.ReactNode;
    content: React.ReactNode;
    ethics: React.ReactNode;
};
export declare type FooterI18N = {
    dropdown: LanguageDropdownI18N;
    links: LinksI18N;
};
export declare type FooterProps = {
    locale?: Locale;
    locales?: Locale[];
    i18n?: FooterI18N;
    onChange?: LanguageDropdownProps['onChange'];
    isFullscreen?: boolean;
    className?: string;
};
export declare class Footer extends React.PureComponent<FooterProps> {
    static defaultProps: Partial<FooterProps>;
    render(): JSX.Element;
}
