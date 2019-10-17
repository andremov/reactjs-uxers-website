import React, {Component} from 'react';
import {LoadComponent} from "./LoadComponent";

export const VER_NUM = 'v1.0.0';

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <div className='version'>
                    {VER_NUM}
                </div>

                <LoadComponent />
            </div>
        );
    }
}
