import React, {Component, Fragment} from 'react';
import "../Style/Start.scss";
import {LogoComponent} from "./LogoComponent";
import {HamburgerButton} from "./HamburgerButton";
import {MenuComponent} from "./MenuComponent";
import {PagingComponent} from "./PagingComponent";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import {NavDisplayComponent} from "./NavDisplayComponent";
import {Link} from "react-router-dom";

export class MainStartComponent extends Component {

    state = {
        menuShown : false
    };

    componentDidMount() {
        const imageList = [foto1, foto2, foto3, foto4];
        imageList.forEach((image) => {
            new Image().src = image
        });
    }

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

                <HamburgerButton inMenu={menuShown} clickedBtn={this.openBurger} />

                {
                    menuShown?
                    <MenuComponent currentNav={1}/>
                    :
                        <Fragment>

                            {this.getPage01()}
                            {this.getPage02()}
                            {this.getPage03()}
                            {this.getPage04()}

                            {/*<PagingComponent colorSwitch={false} dark={false} currentPage={screen} maxPage={4} changePage={this.changePage}/>*/}
                        </Fragment>
                }

            </Fragment>
        );
    }

    getPage01() {
        return (
            <Fragment>
                <div className='start-screen purple-bkg'>

                    <div className='screen-index'>
                        <span>01</span>
                    </div>

                    <div className='content'>
                        <div className='item title'>
                            <span>Diseño web</span>
                        </div>

                        <div className='item img'>
                            <img src={foto1} alt='Fotito toda chevere' />
                        </div>

                        <div className='item descrip'>
                            <div className='title'>
                                <span>habilidades</span>
                                <span>mejora tus</span>
                                <span>Aprende y</span>
                            </div>
                            <div className='subtitle'>
                                <span>Te ayudamos a desarrollarte</span>
                                <span>en la tecnología de tu</span>
                                <span>preferencia.</span>
                            </div>
                            <div className='link'>
                                <span>Explorar cursos</span>
                            </div>
                            <div className='bar'>
                            </div>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={1} />

                </div>
            </Fragment>
        );
    }

    getPage02() {
        return (
            <Fragment>
                <div className='start-screen purple-bkg'>

                    <div className='screen-index'>
                        <span>02</span>
                    </div>

                    <div className='content'>
                        <div className='item descrip'>
                            <div className='title pan-right'>
                                <span>desde cero</span>
                                <span>Empezando</span>
                            </div>
                            <div className='subtitle pan-right'>
                                <span>Aprende a diseñar interfaces</span>
                                <span>de usuario increíbles por ti</span>
                                <span>mismo usando tácticas</span>
                                <span>específicas.</span>
                            </div>
                            <div className='link pan-right'>
                                <span>Explorar cursos</span>
                            </div>
                            <div className='bar pan-right'>
                            </div>
                        </div>

                        <div className='item img'>
                            <img src={foto2} alt='Fotito toda chevere' />
                        </div>

                        <div className='item title'>
                            <Link to='/forma'>Diseño Forma</Link>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={2} />

                </div>
            </Fragment>
        );
    }

    getPage03() {
        return (
            <Fragment>
                <div className='start-screen purple-bkg'>

                    <div className='screen-index'>
                        <span>03</span>
                    </div>

                    <div className='content'>
                        <div className='item title'>
                            <span>Diseño Estilo</span>
                        </div>

                        <div className='item img'>
                            <img src={foto3} alt='Fotito toda chevere' />
                        </div>

                        <div className='item descrip'>
                            <div className='title'>
                                <span>diseñamos</span>
                                <span>Con pasión</span>
                            </div>
                            <div className='subtitle'>
                                <span>Crea páginas web efectivas y</span>
                                <span>fáciles de usar mejorando la</span>
                                <span>experiencia de los usuarios.</span>
                            </div>
                            <div className='link'>
                                <Link to='/estilo'>Explorar cursos</Link>
                            </div>
                            <div className='bar'>
                            </div>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={3} />

                </div>
            </Fragment>
        );
    }

    getPage04() {
        return (
            <Fragment>
                <div className='start-screen purple-bkg'>

                    <div className='screen-index'>
                        <span>04</span>
                    </div>

                    <div className='content'>
                        <div className='item descrip'>
                            <div className='title pan-right'>
                                <span>de nivel</span>
                                <span>Subiendo</span>
                            </div>
                            <div className='subtitle pan-right'>
                                <span>Domina los lenguajes de</span>
                                <span>código, herramientas,</span>
                                <span>arquitectura, bases de</span>
                                <span>datos y más.</span>
                            </div>
                            <div className='link pan-right'>
                                <Link to='/programacion'>Explorar cursos</Link>
                            </div>
                            <div className='bar pan-right'>
                            </div>
                        </div>

                        <div className='item img'>
                            <img src={foto4} alt='Fotito toda chevere' />
                        </div>

                        <div className='item title'>
                            <span>Programación</span>
                        </div>
                    </div>

                    <NavDisplayComponent colored={false} currentScreen={4} />

                </div>
            </Fragment>
        );
    }

}
