import React from 'react'
var num = 0;
const doThis=(a)=>{
   alert(a)
}
const Arrow_Function=()=>{
   
    return(
        <div>
            <button onClick={doThis.bind(this,"I am Arrow Function")}>Click Me</button>
        </div>
    )
    
    }
    export default Arrow_Function;

    


