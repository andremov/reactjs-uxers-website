import React, {Component} from 'react';
import logoFull from "../assets/logo-full.png";
import logoShort from "../assets/logo-short.png";
import '../Style/Doodads.scss';
import {Link} from "react-router-dom";

export class LogoComponent extends Component {

    state = {
        data : false,
        page : '',
        color : ''
    };

    constructor(props, context, state) {
        super(props, context);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.updateLogoState(this.props.shortLogo);
        this.updateCurrentPage(this.props.page);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll (event) {
        let scroll = window.pageYOffset;
        let screenSize = document.body.scrollHeight;
        let {color} = this.state;
        const {page} = this.state;
        if (page === 'product') {
            screenSize = screenSize / 7;
            let curPage = scroll/screenSize;
            // console.log(curPage);
            if (curPage < 0.85) {
                color = 'white';
            } else if (curPage > 0.85 && curPage < 5.35) {
                color = 'black';
            } else {
                color = 'white';
            }
        } else {
            color = 'white';
        }
        this.changeColor(color);
    }

    changeColor (newState) {
        if (this.state.color !== newState) {
            // console.log(newState);
            this.setState({
                color: newState
            });
        }
    }

    componentDidUpdate() {
        this.updateLogoState(this.props.shortLogo);
        this.updateCurrentPage(this.props.page);
    }

    updateLogoState(newState) {
        if (this.state.data !== newState) {
            this.setState({
                data: newState
            });
        }
    }

    updateCurrentPage(newState) {
        if (this.state.page !== newState) {
            this.setState({
                page: newState
            });
        }
    }

    render() {
        const {data, color} = this.state;

        if (!data) {
            return (
                <Link to='/'>
                    <img className={'main-logo ' + color} src={logoFull} alt='logo'/>
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
