import { useState } from 'react' 
import PasswordGenerator from "./PasswordGenerator"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordGenerator/>
    </>
  )
}

export default App
