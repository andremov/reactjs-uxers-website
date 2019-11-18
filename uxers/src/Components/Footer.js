import React, {Component} from 'react';
import '../Style/Footer.scss';
import logoFull from "../assets/logo-simple.svg";
import slogan from "../assets/slogan.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import {Button} from "./Button";

const colors = [
    'blue',
    'orange',
    'red'
];

const names = [
    'Diseño Forma',
    'Diseño Estilo',
    'Programación'
];

export class Footer extends Component {
    state = {
        screenName : ''
    };

    componentDidUpdate() {
        this.updateCurrentState(this.props.currentNav);
    }

    componentDidMount() {
        this.updateCurrentState(this.props.currentNav);
    }

    updateCurrentState(newState) {
        if (this.state.screenName !== newState) {
            this.setState({
                screenName: newState
            });
        }
    }

    render() {
        const {screenName} = this.state;

        return (
            <div className='footer'>
                <div className={'download-section ' + colors[screenName-1]}>
                    <div className='name'>
                        {names[screenName-1]}
                    </div>

                    <div className='main-block'>
                        <div className='subtitle'>
                            HAGAMOS QUE SUCEDA
                        </div>
                        <div className='title'>
                            <span>Construye un hermoso</span>
                            <span>sitio web, visualmente</span>
                        </div>
                        <div className={'link white ' + colors[screenName-1]}>
                            <span>Descarga</span>
                        </div>
                    </div>
                </div>

                <div className='contact-section'>
                    <div className='main-block'>
                        <img className='logo' src={logoFull} alt='logo'/>
                        <img className='slogan' src={slogan} alt='slogan'/>
                        <span>Ideas creativas</span>
                    </div>

                    <div className='bottom-block'>
                        <span>Developed by UXers 2019</span>
                        <div className='icons'>
                            <a href={'https://www.facebook.com/UXers-111117307011697/'} target="_blank">
                                <img src={facebook} alt='facebook'/>
                            </a>
                            <a href={'https://www.instagram.com/uxers.web/'} target="_blank">
                                <img src={instagram} alt='instagram'/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
