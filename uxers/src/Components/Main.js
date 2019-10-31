import React, {Component, Fragment} from 'react';
import "../Style/Product.scss";
import "../Style/Mobile.scss";
import {ScreenStart} from "./ScreenStart";
import {ScreenForm} from "./ScreenForm";
import {ScreenStyle} from "./ScreenStyle";
import {ScreenProgram} from "./ScreenProgram";
import {Route, BrowserRouter as Router} from "react-router-dom";
import {LoadComponent} from "./LoadComponent";
import "../Style/Screen.scss";
import {VersionComponent} from "./VersionComponent";


export class Main extends Component {

    state = {
        loading: true,
        mobile: false
    };

    componentDidUpdate() {
        this.updateMobileState(window.innerWidth < 768);
    }

    componentDidMount() {
        this.updateMobileState(window.innerWidth < 768);
    }

    updateMobileState(newState) {
        if (this.state.mobile !== newState) {
            this.setState({
                mobile: newState
            });
        }
    }

    setLoading = (newValue) => {
        console.log('reporting loading as >' + newValue);
        this.setState({
            loading : newValue
        })
    };

    render() {
        const {loading, mobile} = this.state;

        return (
            <Fragment>

                {
                    ( loading ?
                        <LoadComponent/>
                    :
                            ''
                    )
                }

                <Fragment>
                    <div>
                        <Router>
                            <Route exact path='/'>
                                <ScreenStart isMobile={mobile} doneLoading={this.setLoading} />
                            </Route>

                            <Route path='/forma'>
                                <ScreenForm isMobile={mobile} doneLoading={this.setLoading} />
                            </Route>

                            <Route path='/estilo'>
                                <ScreenStyle isMobile={mobile} doneLoading={this.setLoading} />
                            </Route>

                            <Route path='/programacion'>
                                <ScreenProgram isMobile={mobile} doneLoading={this.setLoading} />
                            </Route>
                        </Router>
                    </div>
                    <VersionComponent/>
                </Fragment>

            </Fragment>
        );
    }
}
