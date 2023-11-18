import React, { useState, useCallback , useEffect,useRef } from 'react';

function PasswordGenerator() {

  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //  inroducing use ref hook 
   const passwordRef=useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklamnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback ( () =>{
     passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
   [password])

useEffect ( ()=> { passwordGenerator()} , [ length, numberAllowed]);

//  useEffect(()=> {passwordGenerator()}, [ length, numberAllowed,charAllowed])
  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md  rounded-lg p-3 m-3 text-orange-500 bg-gray-800  '>
        <h1 className="text-3xl text-center text-orange  my-3">Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className=' outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex shadow   text-sm gap-x-2'>
          <div className='flex items-center text-orange-400 gap-x-1'>
            <input
              type="Range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label >Length:{length}</label>
          </div>

          <div className='flex items-center  text-orange-400  gap-x-1'>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}

            />
            <label htmlFor="numberInput">Number</label>


            <div className='flex items-center  text-orange-400  gap-x-1'>
              <input
                
                type="checkbox"
                defaultChecked={charAllowed}
                id=" characterInput"
                onChange={() => {
                  setCharAllowed((prev) => (!prev));
                }}
              />
              <label htmlFor="characterInput"> Character</label>

            </div>

          </div>



        </div>

      </div>
    </>
  );
}

export default PasswordGenerator;
