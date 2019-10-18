import React, {Component} from 'react';
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export class MenuComponent extends Component {

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
            <div className='segment main'>
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
                        <img src={facebook} alt='facebook'/>
                        <img src={instagram} alt='instagram'/>

                    </div>
                </div>
                <div className='half navtable'>

                    <div className='navitem'>
                        <div className='index'>
                            01
                        </div>
                        <div className={'name' + (currentNav === 1? ' sel' : '')}>
                            Inicio
                        </div>
                    </div>

                    <div className='navitem'>
                        <div className='index'>
                            02
                        </div>
                        <div className={'name' + (currentNav === 2? ' sel' : '')}>
                            Forma
                        </div>
                    </div>

                    <div className='navitem'>
                        <div className='index'>
                            03
                        </div>
                        <div className={'name' + (currentNav === 3? ' sel' : '')}>
                            Estilo
                        </div>
                    </div>

                    <div className='navitem'>
                        <div className='index'>
                            04
                        </div>
                        <div className={'name' + (currentNav === 4? ' sel' : '')}>
                            Programación
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
