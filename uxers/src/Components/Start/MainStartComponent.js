import React, {Component} from 'react';
import "../../Style/Start.scss";
import '../../Style/Menu.scss'
import {LogoComponent} from "../LogoComponent";
import {HamburgerButton} from "../HamburgerButton";
import {MenuComponent} from "../MenuComponent";

export class MainStartComponent extends Component {

    state = {
        menuShown : false
    };

    openBurger = () => {
        const {menuShown} = this.state;
        this.setState({
            menuShown : !menuShown
        })
    };

    render() {
        const {menuShown} = this.state;

        return (
            <div>
                    <div className={'screen' + (menuShown? ' menu-bkg' : ' purple-bkg')}>
                        <LogoComponent shortLogo={menuShown} />

                        <HamburgerButton inMenu={menuShown} clickedBtn={this.openBurger} />

                        {
                            menuShown?
                            <MenuComponent currentNav={1} />
                            :
                            ''
                        }

                    </div>
            </div>
        );
    }
}
