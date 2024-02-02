import React, { Component } from 'react';
import Suggested_Data from './Suggested_Data.json'


const firstName = [];
const lastName = [];
const my_firstName_data = [];
const my_lastName_data = [];
for (let index = 0; index < Suggested_Data.length; index++) {
    firstName[index] = Suggested_Data[index].firstName;
    lastName[index] = Suggested_Data[index].lastName;
}

class SetData extends Component {
    constructor(props, context) {
        super(props, context);

       

    }
    incrementIndex = () => {
        this.setState({ i: this.state.i + 1 })
    }

    render() {
        for (let index = 0; index < firstName.length; index++) {

            my_firstName_data[index] = <option value={firstName[index]}></option>
            my_lastName_data[index] = <option value={lastName[index]}></option>
      
        }
        return (
            <div>
                <datalist id="firstNames">
                    {my_firstName_data}
                </datalist>
                <datalist id="lastNames">
                    {my_lastName_data}
                </datalist>
            </div>
        );
    }
}

export default SetData;