import React, {Component} from 'react';

export class NavDisplayComponent extends Component {
    state = {
        data : -1,
        max : -1,
        colored : false
    };

    componentDidUpdate() {
        this.updateNavItem(this.props.currentScreen);
        this.updateNavMax(this.props.lastScreen);
        this.updateColor(this.props.colored);
    }

    componentDidMount() {
        this.updateNavItem(this.props.currentScreen);
        this.updateNavMax(this.props.lastScreen);
        this.updateColor(this.props.colored);
    }

    updateColor(newState) {
        if (this.state.colored !== newState) {
            this.setState({
                colored: newState
            });
        }
    }

    updateNavItem(newState) {
        if (this.state.data !== newState) {
            this.setState({
                data: newState
            });
        }
    }

    updateNavMax(newState) {
        if (this.state.max !== newState) {
            this.setState({
                max: newState
            });
        }
    }

    render() {
        const {data, max, colored} = this.state;
        return (
            <div className={'nav-display' + (colored? ' colored' : '')}>
                <div className='item'>
                    <div className='current'>
                        {'0'+data}
                    </div>
                    <div className='slash'>
                        /
                    </div>
                    <div className='max'>
                        {'0'+max}
                    </div>
                </div>
            </div>
        );
    }
}
