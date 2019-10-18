import React, {Component} from 'react';

export class NavDisplayComponent extends Component {
    state = {
        data : -1
    };

    componentDidUpdate() {
        this.updateNavItem(this.props.currentScreen);
    }

    componentDidMount() {
        this.updateNavItem(this.props.currentScreen);
    }

    updateNavItem(newState) {
        if (this.state.data !== newState) {
            this.setState({
                data: newState
            });
        }
    }
    render() {
        const {data} = this.state;
        return (
            <div className='nav-display'>
                <div className='item'>
                    <div className='current'>
                        {'0'+data}
                    </div>
                    <div className='slash'>
                        /
                    </div>
                    <div className='max'>
                        04
                    </div>
                </div>
            </div>
        );
    }
}
