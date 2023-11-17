import React, { useState, useCallback } from 'react';

function PasswordGenerator() {

  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklamnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = math.floor(math.random() * str.length + 1)

      pass = str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
     <h1 className="text-4xl text-center text-white justify-center ">Password Generatoring App</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 bg-gray-800  '>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className=' outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button
            className='outline-none bg-orange-300 text-orange px-3 py-0.5 shrink-0'
          >Copy</button>

        </div>

        <div className='flex shadow  rounded-lg overflow-hidden mb-4'>
          <div className='flex items-center text-orange-400 rounded-lg  mb-4 gap-x-1'>
             <input 
             type="Range" 
             min={8}
             max={50}
             value={length}
             className='cursor-pointer' 
             onChange={ (e) => {setlength(e.target.value) }}
             />  
             <label >Length:{length}</label>
          </div>
           
           <div className='flex shadow  rounded-lg overflow-hidden mb-4'>
            <div className='flex items-center text-orange-400 rounded-lg  mb-4 gap-x-1'>
              <input
               type="checkbox" 
               
               />

            </div>

           </div>



        </div>

      </div>
    </>
  );
}

export default PasswordGenerator;
