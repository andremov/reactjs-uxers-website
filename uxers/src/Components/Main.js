import React, {Component, Fragment} from 'react';
import {ScreenStart} from "./ScreenStart";
import {ScreenForm} from "./ScreenForm";
import {ScreenStyle} from "./ScreenStyle";
import {ScreenProgram} from "./ScreenProgram";
import {Route, BrowserRouter as Router} from "react-router-dom";
// import {LoadComponent} from "./LoadComponent";
import "../Style/Screen.scss";
import {VersionComponent} from "./VersionComponent";


export class Main extends Component {

    render() {
        return (
            <Fragment>

                {/*<LoadComponent />*/}

                <Router>
                    <Route exact path='/' >
                        <ScreenStart />
                    </Route>
                    <Route path='/forma'>
                        <ScreenForm />
                    </Route>
                    <Route path='/estilo'>
                        <ScreenStyle />
                    </Route>
                    <Route path='/programacion'>
                        <ScreenProgram />
                    </Route>
                </Router>

                <VersionComponent />
            </Fragment>
        );
    }
}
