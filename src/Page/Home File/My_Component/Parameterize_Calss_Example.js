import React, {Component} from 'react'

class Parameterize_Class_Example extends Component{

    display(text){
        alert(text);
    }
    render(){
        return (
            <div>
                <button onClick={this.display.bind(this,"I am Parameterize Class")}>Parameterize Class</button>
            </div>
        )
    }
}
export default Parameterize_Class_Example;