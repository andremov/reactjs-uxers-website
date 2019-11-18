import React, {Component, Fragment} from 'react';
import "../Style/Start.scss";
import {LogoComponent} from "./LogoComponent";
import {MenuButton} from "./MenuButton";
import {ScreenMenu} from "./ScreenMenu";

import sym_book from "../assets/symbol-book.svg";
import sym_mail from "../assets/symbol-mail.svg";
import sym_video from "../assets/symbol-video.svg";
import sym_art from "../assets/symbol-art.svg";
import sym_text from "../assets/symbol-text.svg";

import bkg1 from "../assets/bkgs/start-01.png";
import bkg2 from "../assets/bkgs/start-02.png";
import bkg3 from "../assets/bkgs/start-03.png";
import bkg4 from "../assets/bkgs/start-04.png";
import bkg5 from "../assets/bkgs/start-05.png";
import bkg6 from "../assets/bkgs/start-06.png";
import bkg7 from "../assets/bkgs/start-07.png";

import mobile from "../assets/mobile-start.png";
import {Link} from "react-router-dom";

export class ScreenStart extends Component {

    state = {
        menuShown: false,
        mobile : false,
        loaded : 0
    };

    componentDidUpdate() {
        this.updateMobileState(this.props.isMobile);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.updateMobileState(this.props.isMobile);

        this.loadImages();
    }

    updateMobileState(newState) {
        if (this.state.mobile !== newState) {
            this.setState({
                mobile: newState
            });
        }
    }

    loadImages = () => {
        let imageList = this.props.isMobile ?
            [mobile]
            :
            [bkg1, bkg2, bkg3, bkg4, bkg5, bkg6, bkg7]
        ;

        imageList.forEach((image) => {

            const img = new Image();
            img.src = image;
            // img.onloadend =  this.increaseLoadedImgs;
            img.onload = this.increaseLoadedImgs();

        });

        console.log('end calls')
        // this.props.doneLoading(false);
        // this.setState({
        //     loaded : true
        // });
    };

    increaseLoadedImgs = () => {
        const {loaded, mobile} = this.state;
        const totalImgs = mobile ? 1 : 7;

        this.props.doneLoading(loaded+1 >= totalImgs);
        console.log('loaded count >' + loaded);
        this.setState({
            loaded : loaded+1
        });
    };

    openBurger = () => {
        const {menuShown} = this.state;
        this.setState({
            menuShown : !menuShown
        })
    };

    render() {
        const {menuShown, mobile} = this.state;

        return (
            <Fragment>
                <LogoComponent shortLogo={menuShown} />

                <MenuButton inMenu={menuShown} clickedBtn={this.openBurger} />

                {
                    menuShown?
                    <ScreenMenu currentNav={1}/>
                    :
                        <Fragment>

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
                                        {this.getPage07()}
                                    </Fragment>
                            }

                            {/*<PagingComponent colorSwitch={false} dark={false} currentPage={screen} maxPage={4} changePage={this.changePage}/>*/}
                        </Fragment>
                }

            </Fragment>
        );
    }

    getMobile() {
        return (
            <div style={{backgroundImage : 'url('+mobile+')'}} className='mobile start'>

            </div>
        )
    }

    getPage01() {
        return (
            <Fragment>
                <div style={{backgroundImage : 'url('+bkg1+')'}} className='screen title-page purple bkg-bot'>

                    <div className='content flex-row'>
                        <div className='index'>01</div>
                        <div className='title flex-col'>
                            <span>Aprende y</span>
                            <span>mejora tus</span>
                            <span>habilidades</span>
                        </div>
                    </div>

                    {/*<NavDisplayComponent colored={false} currentScreen={1} lastScreen={7} />*/}

                </div>
            </Fragment>
        );
    }

    getPage02() {
        return (
            <Fragment>
                <div style={{backgroundImage : 'url('+bkg2+')'}} className='screen intro purple bkg-top'>

                    <div className='content flex-col'>
                        <div className='title'>
                            UXers
                        </div>

                        <div className='info flex-col'>
                            <span>¡Hola! UXers, Creamos un proyecto</span>
                            <span>que recoge todos los</span>
                            <span>consejos y trucos sobre</span>
                            <span>diseño y los integramos en un</span>
                            <span>kit de supervivencia para diseñar</span>
                            <span>para la web.</span>
                            <span className={'space'}> </span>
                            <span>Trabajando juntos, podemos</span>
                            <span>crear algo mejor.</span>
                        </div>
                    </div>

                    {/*<NavDisplayComponent colored={false} currentScreen={2} lastScreen={7} />*/}

                </div>
            </Fragment>
        );
    }

    getPage03() {
        return (
            <Fragment>
                <div style={{backgroundImage : 'url('+bkg3+')'}} className='screen purple kit-title'>

                    <div className='content flex-col'>
                        <div className='title'>
                            Kit de supervivencia
                        </div>

                        <div className='subtitle'>
                            Para diseñar para la web
                        </div>
                    </div>

                    {/*<NavDisplayComponent colored={false} currentScreen={3} lastScreen={7} />*/}

                </div>
            </Fragment>
        );
    }

    getPage04() {
        return (
            <Fragment>
                <div style={{backgroundImage : 'url('+bkg4+')'}} className='screen purple product'>

                    <div className='content flex-col'>
                        <div className='subtitle'>
                            Diseño Forma
                        </div>

                        <div className='flex-row'>
                            <span className='index'>02</span>

                            <div className='title flex-col'>
                                <span>Empezando</span>
                                <span>desde cero</span>
                            </div>
                        </div>

                        <div className='info flex-col'>
                            <span>Aprende a diseñar interfaces</span>
                            <span>de usuario increíbles por ti</span>
                            <span>mismo usando tácticas</span>
                            <span>específicas.</span>
                        </div>

                        <Link to='/forma' className='link'>
                            <span>Explora</span>
                        </Link>
                    </div>

                    {/*<NavDisplayComponent colored={false} currentScreen={4} lastScreen={7} />*/}

                </div>
            </Fragment>
        );
    }

    getPage05() {
        return (
            <Fragment>
                <div style={{backgroundImage : 'url('+bkg5+')'}} className='screen purple product'>

                    <div className='content flex-col'>
                        <div className='subtitle'>
                            Diseño Estilo
                        </div>

                        <div className='flex-row'>
                            <span className='index'>03</span>

                            <div className='title flex-col'>
                                <span>Con pasión</span>
                                <span>diseñamos</span>
                            </div>
                        </div>

                        <div className='info flex-col'>
                            <span>Crea páginas web efectivas y</span>
                            <span>fáciles de usar mejorando la</span>
                            <span>experiencia de los usuarios.</span>
                        </div>

                        <Link to='/estilo' className='link'>
                            <span>Explora</span>
                        </Link>
                    </div>

                    {/*<NavDisplayComponent colored={false} currentScreen={5} lastScreen={7} />*/}

                </div>
            </Fragment>
        );
    }

    getPage06() {
        return (
            <Fragment>
                <div style={{backgroundImage : 'url('+bkg6+')'}} className='screen purple product bkg-bot'>

                    <div className='content flex-col'>
                        <div className='subtitle'>
                            Programación
                        </div>

                        <div className='flex-row'>
                            <span className='index'>04</span>

                            <div className='title flex-col'>
                                <span>Subiendo</span>
                                <span>de nivel</span>
                            </div>
                        </div>

                        <div className='info flex-col'>
                            <span>Domina los lenguajes de código, </span>
                            <span>herramientas, arquitectura, bases</span>
                            <span>de datos y más.</span>
                        </div>

                        <Link to='/programacion' className='link'>
                            <span>Explora</span>
                        </Link>
                    </div>

                    {/*<NavDisplayComponent colored={false} currentScreen={6} lastScreen={7} />*/}

                </div>
            </Fragment>
        );
    }

    getPage07() {
        return (
            <Fragment>
                <div style={{backgroundImage : 'url('+bkg7+')'}} className='screen purple resources'>

                    <div className='content flex-col'>

                        <div className='header flex-col'>
                            <div className='title'>
                                Recursos
                            </div>
                            <div className='subtitle'>
                                Para la web
                            </div>
                        </div>
                        <div className={'flex-row'}>
                            <div className='subcontent right-half flex-row'>
                                <div className={'card'}>
                                    <img className='pic' src={sym_book} alt='Resource # 1' />
                                </div>
                                <div className={'card'}>
                                    <img className='pic' src={sym_mail} alt='Resource # 1' />
                                </div>
                                <div className={'card'}>
                                    <img className='pic' src={sym_video} alt='Resource # 1' />
                                </div>
                                <div className={'card'}>
                                    <img className='pic' src={sym_art} alt='Resource # 1' />
                                </div>
                                <div className={'card'}>
                                    <img className='pic' src={sym_text} alt='Resource # 1' />
                                </div>
                            </div>

                            <div className='subcontent left-half flex-col'>
                                <div className='item flex-row'>
                                    <div className='box purple-other'> </div>
                                    <span>Libro</span>
                                </div>
                                <div className='item flex-row'>
                                    <div className='box blue'> </div>
                                    <span>Tutorial de video</span>
                                </div>
                                <div className='item flex-row'>
                                    <div className='box gray'> </div>
                                    <span className=''>Galeria de componentes</span>
                                </div>
                                <div className='item flex-row'>
                                    <div className='box red'> </div>
                                    <span>Paleta de colores</span>
                                </div>
                                <div className='item flex-row'>
                                    <div className='box orange'> </div>
                                    <span>Recomendaciones de fuentes</span>
                                </div>
                            </div>
                        </div>

                        {/*<NavDisplayComponent colored={false} currentScreen={7} lastScreen={7}/>*/}

                    </div>
                </div>
            </Fragment>
        );
    }

}
