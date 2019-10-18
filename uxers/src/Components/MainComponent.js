import React, {Component, Fragment} from 'react';
import {MainStartComponent} from "./Start/MainStartComponent";
import {MainFormComponent} from "./FormDesign/MainFormComponent";
import {MainStyleComponent} from "./StyleDesign/MainStyleComponent";
import {MainProgrammingComponent} from "./Programming/MainProgrammingComponent";
import {Route, BrowserRouter as Router} from "react-router-dom";
import {LoadComponent} from "./LoadComponent";

export const VER_NUM = 'v1.2.0';

export class MainComponent extends Component {

    render() {
        return (
            <Fragment>
                <div className='version'>
                    {VER_NUM}
                </div>

                {/*<LoadComponent />*/}

                <Router>
                    <Route exact path='/' >
                        <MainStartComponent />
                    </Route>
                    <Route path='/forma'>
                        <MainFormComponent />
                    </Route>
                    <Route path='/estilo'>
                        <MainStyleComponent />
                    </Route>
                    <Route path='/programacion'>
                        <MainProgrammingComponent />
                    </Route>
                </Router>

            </Fragment>
        );
    }
}
