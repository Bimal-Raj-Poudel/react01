import React, { useState } from 'react';


function Bckgroundchanger() {
    const [color, setColor] = useState("olive");

    return (
        <>
            <div className="w-full h-screen duration-200 "
                style={{ backgroundColor: color }}>

                <div className="fixed flex flexed-wrap justify-center bottom-12 inset-x-5  px-4 ">

                    <div className=" flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-3 rounded-3xl">

                        <button onClick={() => setColor("red")}
                            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "red" }}  >Red</button>


                        <button onClick={() => setColor("green")}
                            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "green" }}  >Green</button>

                        <button onClick={() => setColor("purple")}
                            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "purple" }}  >purple</button>

                        <button onClick={() => setColor("pink")}
                            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "pink" }}  >pink</button>

                        <button onClick={() => setColor("yellow")}
                            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "yellow" }}  >yellow</button>



                    </div>
                </div>
            </div>
        </>
    );
}

export default Bckgroundchanger;
