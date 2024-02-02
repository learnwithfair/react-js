import React from 'react'
import ReactDOM from 'react-dom'

function ReactDOM_Render_Method(){
    var n = 1;
    function change_Name(event){
        var container = document.getElementById("nameID");
        var element1 = <p>MD SHAHANUR RAHMAN</p>
        var element2 = <p>MD RAHATUL RABBI</p>
        var callback = function(){
            alert("Successfully Changed");
        }
        if (n==1) {
            ReactDOM.render(element1,container,callback);
           n=2;
        }
        else{
            ReactDOM.render(element2,container)
            n=1;
        }
        
    }
    return(
        <div>
            <h1 id = "nameID">MD RAHATUL RABBI</h1>
            <button onClick={change_Name.bind(this)}>Change name</button>
        </div>
    )
}
export default ReactDOM_Render_Method;