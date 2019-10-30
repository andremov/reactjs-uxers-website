import React, {Component} from 'react';
import '../Style/Doodads.scss';
export const VER_NUM = 'DEV-v2.0.1';

export class VersionComponent extends Component {
    render() {
        return (
            <div className='version'>
                {VER_NUM}
            </div>
        );
    }
}
