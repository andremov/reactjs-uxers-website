import React, {Component, Fragment} from 'react';
import "../Style/Program.scss";
import {LogoComponent} from "./LogoComponent";
import {MenuButton} from "./MenuButton";
import {ScreenMenu} from "./ScreenMenu";
// import {PagingComponent} from "./PagingComponent";
import video from "../assets/fotovideo.png";
import foto1 from "../assets/foto18.png";
import foto2 from "../assets/foto19.jpg";
import foto3 from "../assets/foto20.jpg";
import foto4 from "../assets/foto21.jpg";
import foto5 from "../assets/foto22.jpg";
import foto6 from "../assets/foto23.jpg";
import bkg1 from "../assets/program-01.png";
import bkg2 from "../assets/program-02.png";
import bkg3 from "../assets/program-03.png";
import bkg4 from "../assets/program-04.png";
import bkg5 from "../assets/program-05.png";
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
        // const imageList = [foto1, foto2, foto3, foto4, foto5, foto6, video];
        // imageList.forEach((image) => {
        //     new Image().src = image
        // });
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

                    {this.getPage01()}
                    {this.getPage02()}
                    {this.getPage03()}
                    {this.getPage04()}
                    {this.getPage05()}
                    <Footer currentNav={3}/>

                    {/*<PagingComponent colorSwitch={true} dark={screen === 4} currentPage={screen} maxPage={4} changePage={this.changePage}/>*/}
                </Fragment>

            </Fragment>
        );
    }

    getPage01() {
        return (
            <div style={{backgroundImage : 'url('+bkg1+')'}} className='screen first-page red bkg-bot'>

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
                            <span>Empezando</span>
                            <span>desde cero</span>
                        </div>
                    </div>
                    <div className='icons'>
                        <img src={facebook} alt='facebook'/>
                        <img src={instagram} alt='instagram'/>
                    </div>
                </div>

                <NavDisplayComponent colored={false} currentScreen={1} lastScreen={5} />
            </div>
        );
    }

    getPage02() {
        return (
            <div style={{backgroundImage : 'url('+bkg2+')'}} className='screen second-page'>

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

                <NavDisplayComponent colored={true} currentScreen={2} lastScreen={5} />

            </div>
        );
    }

    getPage03() {
        return (
            <div style={{backgroundImage : 'url('+bkg3+')'}} className='screen third-page'>

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

                <NavDisplayComponent colored={true} currentScreen={3} lastScreen={5} />
            </div>
        );
    }

    getPage04() {
        return (
            <div style={{backgroundImage : 'url('+bkg4+')'}} className='screen red fourth-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content flex-col'>
                    <div className='title'>
                        Temas disponibles
                    </div>
                </div>

                <NavDisplayComponent colored={false} currentScreen={4} lastScreen={5} />
            </div>
        );
    }

    getPage05() {
        return (
            <div style={{backgroundImage : 'url('+bkg5+')'}} className='screen fifth-page'>

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
                <NavDisplayComponent colored={true} currentScreen={5}/>
            </div>
        );
    }

}