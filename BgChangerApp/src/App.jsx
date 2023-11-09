import react, { useState } from 'react'
import Bckgroundchanger from "./Bckgroundchanger"


function App() {
  //   const [color, setColor] = useState("olive");


  return (


    // <div className="w-full h-screen duration-200 "
    //  style={{ backgroundColor: color }}>

    //   <div className="fixed flex flexed-wrap justify-center bottom-12 inset-x-5  px-4 ">

    //     <div className=" flex flex-wrap justify-center gap-3 shadow-lg px-3 py-3 rounded-3xl">

    //      <button  onClick={() => setColor("red")}
    //           className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //           style={{ backgroundColor:"red"}}  >Red</button>


    //        <button  onClick={() => setColor("green")}
    //           className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //           style={{ backgroundColor:"green"}}  >Green</button>

    //       
    //     </div>
    //   </div>
    // </div>
    <>
      <Bckgroundchanger />
    </>
  );
}

export default App;
