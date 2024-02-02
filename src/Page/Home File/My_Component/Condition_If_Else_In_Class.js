import React, { Component } from 'react'

class Condition_If_Else_In_Class extends Component {
    constructor() {
        super();
        this.state = {
            text: "Please! click this Button bellow",
            n: "1"
        }
    }
    doThis(a) {
        if (this.state.n == "1") {
            this.setState({ n: a[3] })
            this.setState({ text: a[0] })
        } else {
            this.setState({ n: a[2] })
            this.setState({ text: a[1] })
        }

    }
    render() {

        return <div>
            <h1>{this.state.text}</h1>
            <button  onClick={this.doThis.bind(this, ["Button is Clicked", "Button is Unclicked", "1", "2"])}>Check Condition</button>
        </div>
    }
}
export default Condition_If_Else_In_Class;