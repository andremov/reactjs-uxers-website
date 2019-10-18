import React, {Component} from 'react';
import '../Style/Doodads.scss';

export class PagingComponent extends Component {

    state = {
        data : -1,
        max : 1
    };

    componentDidUpdate() {
        this.updateCurPage(this.props.currentPage);
        this.updateMaxPage(this.props.maxPage);
    }

    componentDidMount() {
        this.updateCurPage(this.props.currentPage);
        this.updateMaxPage(this.props.maxPage);
    }

    updateCurPage(newState) {
        if (this.state.data !== newState) {
            this.setState({
                data: newState
            });
        }
    }

    updateMaxPage(newState) {
        if (this.state.max !== newState) {
            this.setState({
                max: newState
            });
        }
    }

    sendPageRequest = (newPage) => {
        this.props.changePage(newPage+1);
    };

    render() {
        const {data, max} = this.state;
        let junk = [];
        for (let i = 0; i < max; i++)
            junk[i] = {};

        return (
            <div className='item paging'>
                {junk.map(item => {return(
                    <div key={junk.indexOf(item)} onClick={e => this.sendPageRequest(junk.indexOf(item))}className={'dot'+(data-1 === junk.indexOf(item)? ' sel' : '')}>

                    </div>
                )})}
            </div>
        );
    }
}
