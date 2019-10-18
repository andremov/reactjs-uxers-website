import React, {Component} from 'react';
import "../Style/Loading.scss";

export class LoadComponent extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div className='load screen'>
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.55 194.61">
                    <path d="M81.27,144.35a38.41,38.41,0,0,1-9.57-1,12,12,0,0,1-6.33-3.89,17.58,17.58,0,0,1-3.46-8.2,80.05,80.05,0,0,1-1-14.24V2.5H2.5V121.9q0,21.87,6.91,35.54t18,21.43a64.6,64.6,0,0,0,24.89,10.5,139.6,139.6,0,0,0,29,2.73,139.57,139.57,0,0,0,29-2.73,64.67,64.67,0,0,0,24.89-10.5,56.84,56.84,0,0,0,18-21.43q6.92-13.66,6.91-35.54V2.5H101.64V117a79.91,79.91,0,0,1-1,14.24,17.48,17.48,0,0,1-3.45,8.2,12,12,0,0,1-6.33,3.89A38.44,38.44,0,0,1,81.27,144.35Z"/>
                </svg>
                <svg className='circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.68 62.37">
                    <path d="M31.34,2.5A28.69,28.69,0,1,0,60.18,31.19,28.68,28.68,0,0,0,31.34,2.5Z"/>
                </svg>
            </div>
        );
    }
}
