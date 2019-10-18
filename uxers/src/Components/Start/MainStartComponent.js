import React, {Component} from 'react';
import "../../Style/Start.scss";
import {LogoComponent} from "../LogoComponent";
import {HamburgerButton} from "../HamburgerButton";
import {MenuComponent} from "../MenuComponent";
import {Start01Component} from "./Start01Component";

export class MainStartComponent extends Component {

    state = {
        menuShown : false,
        screen : 1
    };

    openBurger = () => {
        const {menuShown} = this.state;
        this.setState({
            menuShown : !menuShown
        })
    };

    render() {
        const {menuShown, screen} = this.state;

        return (
            <div>
                <div className=''>
                    <LogoComponent shortLogo={menuShown} />

                    <HamburgerButton inMenu={menuShown} clickedBtn={this.openBurger} />

                    {
                        menuShown?
                        <MenuComponent currentNav={1} />
                        :
                            screen === 1?
                                <Start01Component />
                                :
                                ''

                    }

                </div>
            </div>
        );
    }
}
