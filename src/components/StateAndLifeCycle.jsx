import React, { Component } from 'react';

export default class StateAndLifeCycle extends Component {
    constructor(){
        super();
        this.state={
            date:new Date()
        }
    }
    render() {
        return (
            <div>
            <h2>It is from props  {this.props.data.toLocaleTimeString()}.</h2>
                 <h2>It is from state {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
