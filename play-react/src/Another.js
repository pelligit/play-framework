import React, { Component } from 'react';

class Another extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>{this.props.content}</div>
        );
    }
}

export default Another;