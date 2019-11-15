import React, {Component, Fragment} from 'react';
import "../Style/Product.scss";
import {LogoComponent} from "./LogoComponent";
import {MenuButton} from "./MenuButton";
import {ScreenMenu} from "./ScreenMenu";

import sym_book from "../assets/symbol-book.png";
import sym_mail from "../assets/symbol-mail.png";
import sym_video from "../assets/symbol-video.png";
import sym_code from "../assets/symbol-code.png";

import grid1 from "../assets/grid/foto21.jpg";
import grid2 from "../assets/grid/foto22.jpg";
import grid3 from "../assets/grid/foto23.jpg";

import bkg1 from "../assets/bkgs/program-01.png";
import bkg2 from "../assets/bkgs/program-02.png";
import bkg3 from "../assets/bkgs/program-03.png";
import bkg4 from "../assets/bkgs/program-04.png";
import bkg5 from "../assets/bkgs/program-05.png";
import bkg6 from "../assets/bkgs/program-06.png";

import mobile from "../assets/mobile-program.png";
import {Footer} from "./Footer";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import {VideoPopUp} from "./VideoPopUp";

export class ScreenProgram extends Component {

    state = {
        menuShown: false,
        mobile : false,
        loaded : false
    };

    componentDidUpdate() {
        this.updateMobileState(this.props.isMobile);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.updateMobileState(this.props.isMobile);

        this.loadImages();
    }

    loadImages = () => {
        let imageList = this.props.isMobile ?
            [mobile]
            :
            [grid1, grid2, grid3, bkg1, bkg2, bkg3, bkg4, bkg5, bkg6]
        ;

        imageList.forEach((image) => {
            let img = new Image();
            img.src = image;
        });

        this.props.doneLoading(false);
        this.setState({
            loaded : true
        });
    };

    updateMobileState(newState) {
        if (this.state.mobile !== newState) {
            this.setState({
                mobile: newState
            });
        }
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
                                {this.getPage06()}
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
                        <span>Inspirate</span>
                        <span>a tu ritmo</span>
                    </div>
                    <div className='subtitle flex-col'>
                        <span>A lo largo del libro observarás numerosos</span>
                        <span>ejemplos expicativos. Sin embargo no encontrarás</span>
                        <span>ejercicios, para asi hacer mas agil su lectura</span>
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

                <div className='screen-title white'>
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

                    <div className='subcontent flex-row'>
                        <div className='item flex-col'>
                            <div className='pic-wrapper flex-col'>
                                <img className='pic' src={sym_book} alt='Resource # 1' />
                            </div>
                            <span className='desc'>Libro descargable</span>
                        </div>
                        <div className='split'>
                        </div>
                        <div className='item flex-col'>
                            <div className='pic-wrapper flex-col'>
                                <img className='pic' src={sym_video} alt='Resource # 2' />
                            </div>
                            <span className='desc'>Video Tutorial</span>
                        </div>
                        <div className='split'>
                        </div>
                        <div className='item flex-col'>
                            <div className='pic-wrapper flex-col'>
                                <img className='pic' src={sym_mail} alt='Resource # 3' />
                            </div>
                            <span className='desc'>Galeria de Componentes</span>
                        </div>
                        <div className='split'>
                        </div>
                        <div className='item flex-col'>
                            <div className='pic-wrapper flex-col'>
                                <img className='pic' src={sym_code} alt='Resource # 4' />
                            </div>
                            <span className='desc'>Ejemplos de codigo</span>
                        </div>
                    </div>
                </div>

                {/*<NavDisplayComponent colored={true} currentScreen={3} lastScreen={5} />*/}
            </div>
        );
    }

    getPage04() {
        return (
            <div style={{backgroundImage : 'url('+bkg4+')'}} className='screen book-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content'>
                    <div className='title'>
                        Libro
                    </div>
                    <div className='subtitle'>
                        Contenido
                    </div>

                    <div className='info flex-col'>
                        <span>Apensar como un programador</span>
                        <span>Trabaja fluidamente</span>
                        <span>Estructuras del lenguaje</span>
                        <span className='extra'>& mas</span>
                    </div>
                </div>


                {/*<NavDisplayComponent colored={true} currentScreen={3} lastScreen={5} />*/}
            </div>
        );
    }

    getPage05() {
        return (
            <div style={{backgroundImage : 'url('+bkg5+')'}} className='screen available-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content flex-col'>
                    <div className='title'>
                        Temas disponibles
                    </div>
                    <div className='subtitle'>
                        ¡Explora e inspirate!
                    </div>
                </div>

                {/*<NavDisplayComponent colored={false} currentScreen={4} lastScreen={5} />*/}
            </div>
        );
    }

    getPage06() {
        return (
            <div style={{backgroundImage : 'url('+bkg6+')'}} className='screen grid-page'>

                <div className='screen-title'>
                    <span>Programación</span>
                </div>

                <div className='content'>
                    <div className='grid-program'>
                        <div className='left'>
                            <img className='img-top' src={grid1} alt='Grid Element # 1'/>
                            <img className='img-bottom' src={grid2} alt='Grid Element # 2'/>
                        </div>

                        <img className='img-right' src={grid3} alt='Grid Element # 3'/>

                    </div>
                </div>
                {/*<NavDisplayComponent colored={true} currentScreen={5} lastScreen={5}/>*/}
            </div>
        );
    }

}