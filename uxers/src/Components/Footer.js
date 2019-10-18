import React, {Component, Fragment} from 'react';
import '../Style/Footer.scss';
import logoFull from "../assets/logo-simple.png";
import slogan from "../assets/slogan.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

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
                <div className='top-half'>
                    <div className='name'>
                        {screenName}
                    </div>

                    <div className='main-block'>
                        <div className='subtitle'>
                            HAGAMOS QUE SUCEDA
                        </div>
                        <div className='title'>
                            <span>Construye un hermoso</span>
                            <span>sitio web, visualmente</span>
                        </div>
                        <div className='download'>
                            Descarga
                        </div>
                    </div>
                </div>
                <div className='bottom-half'>

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
