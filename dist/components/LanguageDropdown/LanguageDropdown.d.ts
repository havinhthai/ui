import * as React from 'react';
import { DropdownProps } from '../Dropdown/Dropdown';
import { LanguageIconProps } from '../LanguageIcon/LanguageIcon';
import { Locale } from '../Language/Language';
import './LanguageDropdown.css';
export declare type LanguageDropdownI18N = {
    en: React.ReactNode;
    es: React.ReactNode;
    fr: React.ReactNode;
    ja: React.ReactNode;
    zh: React.ReactNode;
    ko: React.ReactNode;
};
export declare type LanguageDropdownProps = Partial<LanguageIconProps> & {
    locales?: Locale[];
    onChange?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
    direction?: 'left' | 'right';
    upward?: boolean;
    i18n?: LanguageDropdownI18N;
};
export declare class LanguageDropdown extends React.PureComponent<LanguageDropdownProps> {
    static defaultProps: Partial<LanguageDropdownProps>;
    renderOption: (locale: Locale) => JSX.Element;
    render(): JSX.Element;
}
