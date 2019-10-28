import React, {Component, Fragment} from 'react';
import "../Style/Start.scss";
import {LogoComponent} from "./LogoComponent";
import {MenuButton} from "./MenuButton";
import {ScreenMenu} from "./ScreenMenu";
import bkg1 from "../assets/start-01.png";
import bkg2 from "../assets/start-02.png";
import bkg3 from "../assets/start-03.png";
import bkg4 from "../assets/start-04.png";
import bkg5 from "../assets/start-05.png";
import bkg6 from "../assets/start-06.png";
import bkg7 from "../assets/start-07.png";
import {NavDisplayComponent} from "./NavDisplayComponent";
import {Link} from "react-router-dom";

export class ScreenStart extends Component {

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
            <Fragment>
                <LogoComponent shortLogo={menuShown} />

                <MenuButton inMenu={menuShown} clickedBtn={this.openBurger} />

                {
                    menuShown?
                    <ScreenMenu currentNav={1}/>
                    :
                        <Fragment>

                            {this.getPage01()}
                            {this.getPage02()}
                            {this.getPage03()}
                            {this.getPage04()}
                            {this.getPage05()}
                            {this.getPage06()}
                            {this.getPage07()}

                            {/*<PagingComponent colorSwitch={false} dark={false} currentPage={screen} maxPage={4} changePage={this.changePage}/>*/}
                        </Fragment>
                }

            </Fragment>
        );
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

                    <NavDisplayComponent colored={false} currentScreen={1} lastScreen={7} />

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
                            <span>¡Hola! UXers, Creamos un pro-</span>
                            <span>yecto que recoge todos los</span>
                            <span>consejos y trucos sobre</span>
                            <span>diseño y los integramos en un</span>
                            <span>kit de supervivencia para dise-</span>
                            <span>ñar para la web.</span>
                            <span className={'space'}> </span>
                            <span>Trabajando juntos, podemos</span>
                            <span>crear algo mejor.</span>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={2} lastScreen={7} />

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

                    <NavDisplayComponent colored={false} currentScreen={3} lastScreen={7} />

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

                        <div className='link'>
                            <span>Explora</span>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={4} lastScreen={7} />

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

                        <div className='link'>
                            <span>Explora</span>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={5} lastScreen={7} />

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

                        <div className='link'>
                            <span>Explora</span>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={6} lastScreen={7} />

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

                        <div className='subcontent flex-col'>
                            <div className='item flex-row'>
                                <div className='box purple'> </div>
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

                    <NavDisplayComponent colored={false} currentScreen={7} lastScreen={7}/>

                </div>
            </Fragment>
        );
    }

}
