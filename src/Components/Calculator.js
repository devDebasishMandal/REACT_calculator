import React from "react";
import { useState } from "react";


// const Basics = () => { 
//     let [count, setCount] = useState(0) // count = 8
 
//     function incCount(){
//         setCount(count+1) // setCount(1)
//     }
function add(n1,n2){
    let sum=n1+n2;
return sum;
}




// }

function Calculator(){
    return <div className="calculatorDiv">
          <h1>React Calculator</h1>
           <input placeholder="NUM1" id="n1"></input>
           <input placeholder="NUM2" id="n2"></input>
           <button onClick={()=>{}}>+</button>
           <button>-</button>
           <button>*</button>
           <button>/</button>
           <h3>Your Result :</h3>
    </div>
}

 export default Calculator;