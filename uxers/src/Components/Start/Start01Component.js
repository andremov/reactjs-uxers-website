import React, {Component} from 'react';
import foto from '../../assets/foto1.jpg';
import {PagingComponent} from "../PagingComponent";

export class Start01Component extends Component {

    state = {
      page : 1
    };

    render() {
        const {page} = this.state;

        return (
            <div className='purple-bkg'>
                <div className='screen-index'>
                    <span>01</span>
                </div>

                <div className='info'>
                    <div className='item title'>
                        <span>Diseño web</span>
                    </div>

                    <div className='item img'>
                        <img src={foto} alt='Fotito toda chevere' />
                    </div>

                    <div className='item descrip'>
                        <div className='title'>
                            <span>Aprende y</span>
                            <span>mejora tus</span>
                            <span>habilidades</span>
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

                    <PagingComponent currentPage={page} maxPage={4}/>

                </div>

            </div>
        );
    }
}
