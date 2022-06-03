import React, { Component } from 'react';

class country extends Component {
    constructor(props) {
        super(props);
        this.state={
            countryname:'india'
        }
    }
    changeCountry=()=>{
        this.setState({
            countryname:'thailand'
        });
    }
    render() {
        return (
            <div>
                <h6>with class</h6>
                <h1>{this.state.countryname}</h1>
                <h2>{this.props.id}</h2>
                <button onClick={()=>this.changeCountry()}> Change name</button>
            </div>
        );
    }
}

export default country;