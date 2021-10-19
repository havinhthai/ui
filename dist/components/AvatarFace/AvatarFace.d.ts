import * as React from 'react';
import { Avatar } from '../../types/avatar';
import './AvatarFace.css';
export declare type AvatarFaceProps = {
    avatar?: Avatar;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'responsive';
    inline?: boolean;
};
export declare class AvatarFace extends React.PureComponent<AvatarFaceProps> {
    static defaultProps: Partial<AvatarFaceProps>;
    render(): JSX.Element;
}
