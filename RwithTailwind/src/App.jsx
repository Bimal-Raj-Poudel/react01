import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  // const [count, setCount] = useState(0)
  // let myObj ={
  //   username: "jerry",
  //   age: 14
  // }
  // let newArr=[12,13,14]

  return (
    <>
    
    <h1 classNameName='text-black bg-green-500 m-6 p-4 shadow-2xl text-lg'>Card is installed in the page for overview the Practise</h1>
       <Card userName="manish tori" btnText="update me "/>
       <Card  userName="bimal raj poudel" btnText="touch me "/>
    </>
  )
}

export default App
