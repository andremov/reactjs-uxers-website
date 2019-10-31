import React, {Component, Fragment} from 'react';
import "../Style/Product.scss";
import {LogoComponent} from "./LogoComponent";
import {MenuButton} from "./MenuButton";
import {ScreenMenu} from "./ScreenMenu";
import foto4 from "../assets/foto21.jpg";
import foto5 from "../assets/foto22.jpg";
import foto6 from "../assets/foto23.jpg";
import bkg1 from "../assets/program-01.png";
import bkg2 from "../assets/program-02.png";
import bkg3 from "../assets/program-03.png";
import bkg4 from "../assets/program-04.png";
import bkg5 from "../assets/program-05.png";
import mobile from "../assets/mobile-program.png";
import {NavDisplayComponent} from "./NavDisplayComponent";
import {Footer} from "./Footer";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import {VideoPopUp} from "./VideoPopUp";

export class ScreenProgram extends Component {

    state = {
        menuShown: false
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    changePage = (newPage) => {
        if (this.state.screen !== newPage) {
            this.setState({
                screen: newPage
            });
        }
    };

    openBurger = () => {
        const {menuShown} = this.state;
        this.setState({
            menuShown: !menuShown
        })
    };

    render() {
        const {menuShown} = this.state;

        return (
            <Fragment>

                <LogoComponent shortLogo={menuShown}/>

                <MenuButton inMenu={menuShown} clickedBtn={this.openBurger}/>

                {
                    menuShown ?
                        <ScreenMenu currentNav={4}/>
                        :
                        ''
                }

                <Fragment>

                    <VideoPopUp />

                    {
                        window.innerWidth < 768 ?
                            this.getMobile()
                            :
                            <Fragment>
                                {this.getPage01()}
                                {this.getPage02()}
                                {this.getPage03()}
                                {this.getPage04()}
                                {this.getPage05()}
                            </Fragment>
                    }

                    <Footer currentNav={3}/>

                    {/*<PagingComponent colorSwitch={true} dark={screen === 4} currentPage={screen} maxPage={4} changePage={this.changePage}/>*/}
                </Fragment>

            </Fragment>
        );
    }

    getMobile() {
        return (
            <div style={{backgroundImage : 'url('+mobile+')'}} className='mobile product short'>

            </div>
        )
    }

    getPage01() {
        return (
            <div style={{backgroundImage : 'url('+bkg1+')'}} className='screen start-page red bkg-bot'>

                <div className='content flex-col'>
                    <div className='flex-row top-row'>
                        <div className='line'>
                            <div className='circle'> </div>
                        </div>
                        <div className='subtitle'>
                            Programación
                        </div>
                    </div>
                    <div className='flex-row'>
                        <div className='index'>04</div>
                        <div className='title flex-col'>
                            <span>Subiendo</span>
                            <span>de nivel</span>
                        </div>
                    </div>
                    <div className='icons'>
                        <img src={facebook} alt='facebook'/>
                        <img src={instagram} alt='instagram'/>
                    </div>
                </div>

                {/*<NavDisplayComponent colored={false} currentScreen={1} lastScreen={5} />*/}
            </div>
        );
    }

    getPage02() {
        return (
            <div style={{backgroundImage : 'url('+bkg2+')'}} className='screen download-action-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content'>

                    <div className='title flex-col'>
                        <span>Comience con</span>
                        <span>una función,</span>
                        <span>no con un diseño</span>
                    </div>
                    <div className='subtitle flex-col'>
                        <span>Cuando comienzas el diseño para una nueva idea</span>
                        <span>de aplicación, ¿qué diseñas primero?</span>
                    </div>
                    <div className='link'>
                        <span>Descarga</span>
                    </div>
                </div>

                {/*<NavDisplayComponent colored={true} currentScreen={2} lastScreen={5} />*/}

            </div>
        );
    }

    getPage03() {
        return (
            <div style={{backgroundImage : 'url('+bkg3+')'}} className='screen resources-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content'>

                    <div className='header flex-col'>
                        <div className='title'>
                            Recursos
                        </div>
                        <div className='subtitle'>
                            Para la web
                        </div>
                    </div>

                    <div className='subcontent'>
                        <div className='title'>
                            Contenido
                        </div>

                        <div className='info flex-row'>
                            <div className='flex-col'>
                                <span>Función</span>
                                <span>Jerarquía</span>
                                <span>Fondos</span>
                                <span>Balance y contraste</span>
                            </div>

                            <div className='flex-col'>
                                <span>Diseño y espaciado</span>
                                <span>Dimensionamiento</span>
                                <span>Diseño de texto</span>
                                <span>Fuentes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<NavDisplayComponent colored={true} currentScreen={3} lastScreen={5} />*/}
            </div>
        );
    }

    getPage04() {
        return (
            <div style={{backgroundImage : 'url('+bkg4+')'}} className='screen red available-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content flex-col'>
                    <div className='title'>
                        Temas disponibles
                    </div>
                </div>

                {/*<NavDisplayComponent colored={false} currentScreen={4} lastScreen={5} />*/}
            </div>
        );
    }

    getPage05() {
        return (
            <div style={{backgroundImage : 'url('+bkg5+')'}} className='screen grid-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content'>
                    <div className='grid-program'>
                        <div className='left'>
                            <img className='img-top' src={foto4} alt='Fotito toda chevere'/>
                            <img className='img-bottom' src={foto5} alt='Fotito toda chevere'/>
                        </div>

                        <img className='img-right' src={foto6} alt='Fotito toda chevere'/>

                    </div>
                </div>
                {/*<NavDisplayComponent colored={true} currentScreen={5} lastScreen={5}/>*/}
            </div>
        );
    }

}