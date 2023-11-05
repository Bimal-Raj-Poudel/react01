import { useState } from "react";
 

function App() {
  
 let  [counter, setCounter] = useState(0);


 const addValue =() =>{

  setCounter(counter +2)
  if (counter<=20 || counter>=0){
    return(counter);
  }
  console.log("clicked", counter)
 }
   
  const decreaseValue =() => {

    setCounter(counter-2)
    console.log("clicked" , counter)
  // console.log(" value is decreased", Math.random)
  }

  return (
    <>
      <h1> welcome to esport</h1>
      <h2>here the numbers is {counter}</h2>

      <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={decreaseValue}> Decrease Value</button>
    </>
  )
}

export default App
