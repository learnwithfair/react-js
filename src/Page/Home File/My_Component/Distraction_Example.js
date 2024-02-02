import React, { Component } from 'react';
const  data   = ["RAHATUL RABBI","SHAHANUR RAHMAN","IMRAN HOSSAIN"];

class Distraction_Example extends Component {
    constructor(props, context) {
        super(props, context);
    }

    
    render() {
        var [person1,person2,person3] = data; //For Array Distruction
        var {title1,title2,title3} =  this.props //For Object Distruction
        return (
            <div>
                <h1>{person1} &nbsp;&nbsp;&nbsp;&nbsp; {person2} &nbsp;&nbsp;&nbsp;&nbsp; {person3}</h1>
                <h1>{title1} &nbsp;&nbsp;&nbsp;&nbsp; {title2} &nbsp;&nbsp;&nbsp;&nbsp; {title3}</h1>
            </div>
        );
    }
}

export default Distraction_Example;