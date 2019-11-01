import React, {Component} from 'react';
import logoFull from "../assets/logo-full.png";
import logoShort from "../assets/logo-short.png";
import '../Style/Doodads.scss';
import {Link} from "react-router-dom";

export class LogoComponent extends Component {

    state = {
        data : false
    };

    componentDidUpdate() {
        this.updateLogoState(this.props.shortLogo);
    }

    componentDidMount() {
        this.updateLogoState(this.props.shortLogo);
    }

    updateLogoState(newState) {
        if (this.state.data !== newState) {
            this.setState({
                data: newState
            });
        }
    }

    render() {
        const {data} = this.state;

        if (!data) {
            return (
                <Link to='/'>
                    <img className='main-logo' src={logoFull} alt='logo'/>
                </Link>
            );
        } else {
            return (
                <Link to='/'>
                    <img className='main-logo short' src={logoShort} alt='logo'/>
                </Link>
            );
        }
    }

}
