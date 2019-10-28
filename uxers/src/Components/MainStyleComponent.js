import React, {Component, Fragment} from 'react';
import "../Style/Estilo.scss";
import {LogoComponent} from "./LogoComponent";
import {MenuButton} from "./MenuButton";
import {ScreenMenu} from "./ScreenMenu";
// import {PagingComponent} from "./PagingComponent";
import video from "../assets/fotovideo.png";
import foto1 from "../assets/foto11.png";
import foto2 from "../assets/foto12.jpg";
import foto3 from "../assets/foto13.jpg";
import foto4 from "../assets/foto14.jpg";
import foto5 from "../assets/foto15.jpg";
import foto6 from "../assets/foto16.jpg";
import foto7 from "../assets/foto17.jpg";
import {NavDisplayComponent} from "./NavDisplayComponent";
import {Footer} from "./Footer";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export class MainStyleComponent extends Component {

    state = {
        menuShown: false,
    };

    componentDidMount() {
        const imageList = [video, foto1, foto2, foto3, foto4, foto5, foto6, foto7];
        imageList.forEach((image) => {
            new Image().src = image
        });
    }

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
                        <ScreenMenu currentNav={3}/>
                        :
                        ''
                }

                <Fragment>

                    <div className='video-pop-up'>
                        <div className='top'>
                            <div className='action'>
                                <span>Ver</span>
                                <span>video</span>
                            </div>
                            <div className='line'>
                                <div className='circle'>
                                </div>
                            </div>
                        </div>
                        <div className='img'>
                            <img src={video} alt='Fotito toda chevere'/>
                        </div>
                    </div>

                    {this.getPage01()}
                    {this.getPage02()}
                    {this.getPage03()}
                    {this.getPage04()}
                    <Footer currentNav={1}/>

                    {/*<PagingComponent colorSwitch={true} dark={screen === 4} currentPage={screen} maxPage={4} changePage={this.changePage}/>*/}
                </Fragment>


            </Fragment>
        );
    }

    getPage01() {
        return (
            <div className='orange-bkg'>
                <div className='style-screen-1 content-size'>
                    <div className='half-left img'>
                        <img src={foto1} alt='Fotito toda chevere'/>
                    </div>

                    <div className='half-right'>

                        <div className='overbite'>
                            <div className='line'>
                                <div className='circle'>
                                </div>
                            </div>
                            <div className='index'>
                                03
                            </div>
                        </div>

                        <div className='title-block'>
                            <div className='screen-name'>
                                Diseño Estilo
                            </div>
                            <div className='title'>
                                <span>Con pasión</span>
                                <span>diseñamos</span>
                            </div>
                            <div className='icons'>
                                <img src={facebook} alt='facebook'/>
                                <img src={instagram} alt='instagram'/>
                            </div>
                        </div>
                    </div>
                </div>
                <NavDisplayComponent colored={false} currentScreen={1}/>
            </div>
        );
    }

    getPage02() {
        return (
            <div className='white-bkg'>
                <div className='style-screen-2 content-size'>

                    <div className='screen-title'>
                        <span>Diseño Estilo</span>
                    </div>

                    <div className='half-left'>
                        <div className='title'>
                            <span>Comience con</span>
                            <span>una función,</span>
                            <span>no con un diseño</span>
                        </div>
                        <div className='subtitle'>
                            <span>Cuando comienzas el diseño para una nueva idea</span>
                            <span>de aplicación, ¿qué diseñas primero?</span>
                        </div>
                    </div>
                    <div className='half-right'>
                        <img src={foto2} alt='Fotito toda chevere'/>
                    </div>
                </div>
                <NavDisplayComponent colored={true} currentScreen={2}/>
            </div>
        );
    }

    getPage03() {
        return (
            <div className='orange-bkg'>
                <div className='style-screen-3 content-size'>

                    <div className='screen-title'>
                        <span>Diseño Estilo</span>
                    </div>

                    <div className='half-left'>
                        <div className='quarter'>
                            <div className='title'>
                                Entregables
                            </div>
                            <span>Archivos descargables</span>
                            <span>Video</span>
                        </div>

                        <div className='quarter'>
                            <div className='title'>
                                Contenido
                            </div>
                            <span>Función</span>
                            <span>Jerarquía</span>
                            <span>Fondos</span>
                            <span>Balance y contraste</span>
                            <span>Diseño y espaciado</span>
                            <span>Dimensionamiento</span>
                            <span>Diseño de texto</span>
                            <span>Fuentes</span>
                        </div>
                    </div>

                    {/*<div className='text'>*/}
                    {/*    <div className='top'>*/}
                    {/*        Mira abajo*/}
                    {/*    </div>*/}
                    {/*    <div className='bottom'>*/}
                    {/*        Temas disponibles*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className='img'>
                        <img src={foto3} alt='Fotito toda chevere'/>
                    </div>

                </div>
                <NavDisplayComponent colored={false} currentScreen={3}/>
            </div>
        );
    }

    getPage04() {
        return (
            <div className='white-bkg'>
                <div className='style-screen-4 content-size moved'>

                    <div className='screen-title'>
                        <span>Diseño Estilo</span>
                    </div>

                    <div className='grid'>
                        <img className='img-left' src={foto6} alt='Fotito toda chevere'/>
                        <div className='right'>
                            <img className='right-img-top' src={foto7} alt='Fotito toda chevere'/>
                            <div className='bottom'>
                                <img className='right-img-left' src={foto4} alt='Fotito toda chevere'/>
                                <img className='right-img-right' src={foto5} alt='Fotito toda chevere'/>
                            </div>
                        </div>
                    </div>
                </div>

                <NavDisplayComponent colored={true} currentScreen={4}/>
            </div>
        );
    }

}