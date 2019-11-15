import React, {Component} from 'react';
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import '../Style/Menu.scss'
import {Link} from "react-router-dom";

export class ScreenMenu extends Component {

    state = {
        currentNav : 1
    };


    componentDidUpdate() {
        this.updateCurrentState(this.props.currentNav);
    }

    componentDidMount() {
        this.updateCurrentState(this.props.currentNav);
    }

    updateCurrentState(newState) {
        if (this.state.currentNav !== newState) {
            this.setState({
                currentNav: newState
            });
        }
    }

    render() {
        const {currentNav} = this.state;

        return (
            <div className='menu-bkg'>
                <div className='main'>
                    <div className='half info'>
                        <div className='title'>
                            <span>UXers</span>
                            <span>Design</span>
                            <span>Web</span>
                        </div>

                        <div className='subtitle'>
                            <span>yours to discover</span>
                        </div>

                        <div className='icons'>
                            <a href={'https://www.facebook.com/UXers-111117307011697/'}>
                                <img src={facebook} alt='facebook'/>
                            </a>
                            <a href={'https://www.instagram.com/uxers.web/'}>
                                <img src={instagram} alt='instagram'/>
                            </a>
                        </div>
                    </div>
                    <div className='half navtable'>

                        <div className='navitem'>
                            <div className='index'>
                                01
                            </div>
                            <Link to='/' className={'name' + (currentNav === 1? ' sel' : '')}>
                                Inicio
                            </Link>
                        </div>

                        <div className='navitem'>
                            <div className='index'>
                                02
                            </div>
                            <Link to='/forma' className={'name' + (currentNav === 2? ' sel' : '')}>
                                Forma
                            </Link>
                        </div>

                        <div className='navitem'>
                            <div className='index'>
                                03
                            </div>
                            <Link to='/estilo' className={'name' + (currentNav === 3? ' sel' : '')}>
                                Estilo
                            </Link>
                        </div>

                        <div className='navitem'>
                            <div className='index'>
                                04
                            </div>
                            <Link to='/programacion' className={'name' + (currentNav === 4? ' sel' : '')}>
                                Programación
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
