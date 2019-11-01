import React, {Component, Fragment} from 'react';
import {LogoComponent} from "./LogoComponent";
import {MenuButton} from "./MenuButton";
import {ScreenMenu} from "./ScreenMenu";

import sym_book from "../assets/symbol-book.png";
import sym_mail from "../assets/symbol-mail.png";
import sym_video from "../assets/symbol-video.png";

import grid1 from "../assets/grid/foto14.jpg";
import grid2 from "../assets/grid/foto15.jpg";
import grid3 from "../assets/grid/foto16.jpg";
import grid4 from "../assets/grid/foto17.jpg";

import bkg1 from "../assets/bkgs/forma-01.png";
import bkg2 from "../assets/bkgs/forma-02.png";
import bkg3 from "../assets/bkgs/forma-03.png";
import bkg4 from "../assets/bkgs/forma-04.png";
import bkg5 from "../assets/bkgs/forma-05.png";
import bkg6 from "../assets/bkgs/forma-06.png";

import mobile from "../assets/mobile-forma.png";
import {Footer} from "./Footer";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import {VideoPopUp} from "./VideoPopUp";

export class ScreenForm extends Component {

    state = {
        menuShown: false,
        mobile : false,
        loaded : false
    };

    increaseLoadedImgs = () => {
        const {loadedImgs,mobile} = this.state;
        const totalImgs = mobile ? 1 : 9;
        this.props.doneLoading(loadedImgs+1 >= totalImgs);
        console.log('loaded count >' + loadedImgs);
        this.setState({
            loadedImgs : loadedImgs+1
        });
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
            [grid1, grid2, grid3, grid4, bkg1, bkg2, bkg3, bkg4, bkg5, bkg6]
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

    openBurger = () => {
        const {menuShown} = this.state;
        this.setState({
            menuShown: !menuShown
        })
    };

    render() {
        const {menuShown, mobile} = this.state;

        return (
            <Fragment>

                <LogoComponent shortLogo={menuShown}/>
                <MenuButton inMenu={menuShown} clickedBtn={this.openBurger}/>

                {
                    menuShown ?
                        <ScreenMenu currentNav={2}/>
                        :
                        ''
                }

                <Fragment>

                    <VideoPopUp />

                    {
                        mobile ?
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

                    <Footer currentNav={1}/>
                </Fragment>


            </Fragment>
        );
    }

    getMobile() {
        return (
        <div style={{backgroundImage : 'url('+mobile+')'}} className='mobile product'>

        </div>
        )
    }

    getPage01() {
        return (
            <div style={{backgroundImage : 'url('+bkg1+')'}} className='screen start-page blue bkg-bot'>

                <div className='content flex-col'>
                    <div className='flex-row top-row'>
                        <div className='line'>
                            <div className='circle'> </div>
                        </div>
                        <div className='subtitle'>
                            Diseño Forma
                        </div>
                    </div>
                    <div className='flex-row'>
                        <div className='index'>02</div>
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

                {/*<NavDisplayComponent colored={false} currentScreen={1} lastScreen={5} />*/}
            </div>
        );
    }

    getPage02() {
        return (
            <div style={{backgroundImage : 'url('+bkg2+')'}} className='screen download-action-page'>

                <div className='screen-title'>
                    <span>Diseño Forma</span>
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

                <div className='screen-title white'>
                    <span>Diseño Forma</span>
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
                    <span>Diseño Forma</span>
                </div>

                <div className='content'>
                    <div className='title'>
                        Libro
                    </div>
                    <div className='subtitle'>
                        Contenido
                    </div>

                    <div className='info flex-col'>
                        <span>Usa buena fuente</span>
                        <span>Usa buenos bordes</span>
                        <span>No confíes solo en el color</span>
                        <span>Piensa fuera de la caja</span>
                        <span className='extra'>& mas</span>
                    </div>
                </div>

                {/*<NavDisplayComponent colored={true} currentScreen={3} lastScreen={5} />*/}
            </div>
        );
    }

    getPage05() {
        return (
            <div style={{backgroundImage : 'url('+bkg5+')'}} className='screen blue available-page'>

                <div className='screen-title'>
                    <span>Diseño Forma</span>
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

                <div className='screen-title dark'>
                    <span>Diseño Forma</span>
                </div>

                <div className='content'>
                    <div className='grid-forma'>
                        <div className='left'>
                            <div className='top'>
                                <img className='left-img-left' src={grid1} alt='Grid Element # 1' />

                                <img className='left-img-right' src={grid2} alt='Grid Element # 2' />
                            </div>
                            <img className='left-img-bottom' src={grid4} alt='Grid Element # 4' />
                        </div>

                        <img className='img-right' src={grid3} alt='Grid Element # 3' />
                    </div>
                </div>

                {/*<NavDisplayComponent colored={true} currentScreen={5} lastScreen={5} />*/}
            </div>
        );
    }

}