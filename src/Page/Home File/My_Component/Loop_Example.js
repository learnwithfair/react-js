import React, { Component } from 'react'

class Loop_Example extends Component {
    constructor() {
        super();
        this.state = {
            name: "RAHATUL RABBI",
            roll: 190609,
            age: 22,
            n: 0,
            total: 3,
        }
    }
    doThis(a) {
        if (this.state.n > 2) {
            this.setState({ name: "IMRAN HOSSAIN" });
            this.setState({ roll: 190616 });
            this.setState({ age: 20 });
            this.setState({ n: 0 })
        }
        else {

            for (let i = 0; i < 3; i++) {
                if (this.state.n == i) {
                    for (let j = 0; j < 1; j++) {
                        this.setState({ name: a[j][i] });
                        this.setState({ roll: a[j + 1][i] });
                        this.setState({ age: a[j + 2][i] });
                    }
                    this.setState({ n: (this.state.n) + 1 })
                }
            }
        }
    }
    render() {


        return (

            <div>

                <h1>NAME: {this.state.name},&nbsp; &nbsp; &nbsp; &nbsp;ROLL: {this.state.roll},&nbsp; &nbsp; &nbsp; &nbsp; AGE: {this.state.age}</h1>
                <button onClick={this.doThis.bind(this, [["SHAHANUR RAHMAN", "ABDUL MATIN", "RAHATUL RABBI", "r"], ["190617", "190604", "190609"], ["21", "24", "22"]])}>NEXT</button>
            </div>
        )
    }
}
export default Loop_Example;