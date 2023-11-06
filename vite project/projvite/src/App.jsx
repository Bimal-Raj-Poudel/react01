
import { useState } from 'react';


function App() {

let[counter, setCounter] = useState(0)

  // let counter = 15;

  const addValue =() =>{
   if(counter<=19){
    // console.log("Value added", Math.random())
    setCounter(counter + 1)

//  console.log("Add value", counter)
   }

  }

  const decreaseValue =() =>{
    if(counter>=1){  // we have to remove this if condition to go to the infinity value in positive or negative.
    
    setCounter(counter-1)
    // console.log("Remove Value", counter);
    // console.log("value decreased", Math.random())
  }
}

  return (
    <>
     <h1>Hancy nigga on town</h1>
     <h2>Counter value:{counter}</h2>


     <button onClick={addValue}>Add Value </button>
     <br/>
     <button onClick={decreaseValue}>Remove Value </button>
    </>
  )
}

export default App