import { useState } from 'react';

function Evencalculator() {
  // let [value,setValue]=useState(20)
  // const updateNumber = () => {
  //   setValue ( value +20)
  // setValue ( value +20) 
  //  setValue ( value +20)  
  //  setValue ( value +20)
  
  let [number, setNumber] = useState(1)
 
  const evenNumber = () => {
    if (number % 2 == 0) {
      setNumber(number + 2)
    }
    else 
    {
      setNumber(number + 1)
    }

  }
  

  return (
    <>
      <h1> Enter to find required even Number</h1>
      {/* <button onClick={updateNumber} >Update me Now</button> */}
      {/* <button onClick={evenNumber}> this is the updated value {number}</button> */}
      <h2>The updated number will be now {value}</h2>
    </>
  );

}

export default Evencalculator
