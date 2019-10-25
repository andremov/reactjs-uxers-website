import React, {Component} from 'react';

export class Button extends Component {

    state = {
        rip : false,
        style : {

        }
    };

    constructor(props, context) {
        super(props, context);

        this.doRipple = this.doRipple.bind(this);
        this.removeRipple = this.removeRipple.bind(this);
    }

    doRipple = (e) => {

        console.log(e)

        // let rect = e.target.getBoundingClientRect();
        // let x = e.clientX - rect.left; //x position within the element.
        // let y = e.clientY - rect.top;  //y position within the element.

        // if(self.find('.ripple').length === 0) {
        //     self.prepend('<span class="ripple"> </span>');
        // }
        // let ripple = self.find('.ripple');
        // ripple.removeClass('animated');

        // let eWidth = self.outerWidth();
        // let eHeight = self.outerHeight();
        // let size = Math.max(eWidth, eHeight);
        let size = 800;
        // ripple.css({'width': size, 'height': size});

        // let rippleX = parseInt(e.pageX ) - (size / 2);
        // let rippleY = parseInt(e.pageY ) - (size / 2);

        // ripple.css({ 'top': rippleY +'px', 'left': rippleX +'px' }).addClass('animated');

        this.setState ({
            rip : true,
            // style : {
            //     top : rippleY+'px',
            //     left: rippleX+'px',
            //     width: size+'px',
            //     height:size+'px'
            // }
            style: {
                // backgroundPositionX : x,
                // backgroundPositionY : y,
                    width: size+'px',
                    height:size+'px'

            }
        });
        // setTimeout(this.removeRipple, 3000);
    };

    mouseLeft = (e) => {

        this.setState ({
            rip : false
        })
    };

    removeRipple() {
        this.setState ({
            rip : false
        })
    }

    render() {
        const {rip,style} = this.state;
        return (
            <div className={'btn'}>
                <div className={'download ripple-effect'}
                     // onMouseOver={e => {this.doRipple(e)}}
                     // onMouseLeave={e => {this.mouseLeft(e)}}
                >
                    <span style={style} className={"ripple" + (rip? ' animated' : ' animated-back')}> </span>
                    <span className="text">Descarga</span>
                </div>
            </div>
        );
    }
}
