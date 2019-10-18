import React, {Component} from 'react';
import burgerOpen from "../assets/burger-open-btn.png";
import burgerClose from "../assets/burger-close-btn.png";
import '../Style/Doodads.scss';

export class HamburgerButton extends Component {

    state = {
      data : false
    };

    componentDidUpdate() {
        this.updateBurgerState(this.props.inMenu);
    }

    componentDidMount() {
        this.updateBurgerState(this.props.inMenu);
    }

    updateBurgerState(newState) {
        if (this.state.data !== newState) {
            this.setState({
                data: newState
            });
        }
    }

    sendOpen = () => {
      this.props.clickedBtn(true);
    };

    render() {
        const {data} = this.state;
        const icon = !data? burgerOpen : burgerClose;

        return (
            <div className='burger-btn'>
                <span className='text'> Menú </span>

                <img className='icon' src={icon} alt='burger' onClick={this.sendOpen} />
            </div>
        );
    }
}
