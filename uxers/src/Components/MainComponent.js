import React, {Component, Fragment} from 'react';
import {MainStartComponent} from "./Start/MainStartComponent";
import {MainFormComponent} from "./FormDesign/MainFormComponent";
import {MainStyleComponent} from "./StyleDesign/MainStyleComponent";
import {MainProgrammingComponent} from "./Programming/MainProgrammingComponent";
import {LoadComponent} from "./LoadComponent";

export const VER_NUM = 'v1.1.2';

export class MainComponent extends Component {

    state = {
        screen: -1
    };


    constructor(props) {
        super(props);
        this.toStart = this.toStart.bind(this);
    }

    componentDidMount() {
        setTimeout(this.toStart,1000);
    }

    toStart = () => {
      this.setState({
          screen : 0
      })
    };

    render() {
        const {screen} = this.state;

        return (
            <Fragment>
                <div className='version'>
                    {VER_NUM}
                </div>

                {
                    screen === 0? <MainStartComponent /> :
                        screen === 1? <MainFormComponent /> :
                        screen === 2? <MainStyleComponent /> :
                        screen === 3? <MainProgrammingComponent /> :
                        <LoadComponent />
                }


            </Fragment>
        );
    }
}
