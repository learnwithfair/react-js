import react,{Component} from "react";

function Button_Adding_In_Function_Component_Example() {
    
    function doThis(){
        alert("I am clicked from the function component")
    }

    return(
        <button  onClick={doThis}>Button Adding in Function Component</button>
    )
    
}
export default Button_Adding_In_Function_Component_Example;