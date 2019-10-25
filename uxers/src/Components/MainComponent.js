import React, {Component, Fragment} from 'react';
import {MainStartComponent} from "./MainStartComponent";
import {MainFormComponent} from "./MainFormComponent";
import {MainStyleComponent} from "./MainStyleComponent";
import {MainProgrammingComponent} from "./MainProgrammingComponent";
import {Route, BrowserRouter as Router} from "react-router-dom";
// import {LoadComponent} from "./LoadComponent";
import {VersionComponent} from "./VersionComponent";


export class MainComponent extends Component {

    render() {
        return (
            <Fragment>

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

                <VersionComponent />
            </Fragment>
        );
    }
}
