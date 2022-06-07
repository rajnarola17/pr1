import React, { Component } from 'react';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: new Date()
        }
    }
    tick=()=>{
        this.setState({
            time: new Date()
        });
    }
    componentDidMount=()=>{
        this.timei=setInterval(()=>this.tick(),1000);
    }
    componentDidUpdate=(Prevprops,Prevstate)=>{
        if(this.state.time !== Prevstate.time){
            console.log("componentdidupdate")
        }
    }
    componentWillUnmount=()=>{
        clearInterval(this.timei);
    }
    render() {
        return (
            <div>
                <h1>classbase lifecycle</h1>
                <h4>{this.state.time.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default lifecycle;