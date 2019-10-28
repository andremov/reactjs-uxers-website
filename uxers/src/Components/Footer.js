import React, {Component} from 'react';
import '../Style/Footer.scss';
import logoFull from "../assets/logo-simple.png";
import slogan from "../assets/slogan.png";
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
                        <Button />
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
                            <img src={facebook} alt='facebook'/>
                            <img src={instagram} alt='instagram'/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
