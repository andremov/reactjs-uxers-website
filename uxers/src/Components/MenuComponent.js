import React, {Component} from 'react';

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
                <div className='half'>

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
