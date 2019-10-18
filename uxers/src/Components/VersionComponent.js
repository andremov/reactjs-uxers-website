import React, {Component} from 'react';
import '../Style/Doodads.scss';
export const VER_NUM = 'v1.4.0';

export class VersionComponent extends Component {
    render() {
        return (
            <div className='version'>
                {VER_NUM}
            </div>
        );
    }
}
