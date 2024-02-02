import React,{Component} from 'react'


class Props_In_Class_Example extends Component{
    render(){
        return <div>
            <h3>Name : {this.props.name} ; Roll: {this.props.roll} </h3>
        </div>
    }

}
export default Props_In_Class_Example;