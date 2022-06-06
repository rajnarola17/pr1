import React, { Component } from 'react';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: new Date()
        }
    }
    
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default lifecycle;