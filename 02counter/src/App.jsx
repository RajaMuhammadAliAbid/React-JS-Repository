import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [Counter, setCounter] = useState(15);

 // let Counter = 15;

 // Add Value Use Arrow Function
  const addValue = () => {
    // Counter = Counter + 1;
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

    console.log("value added", Counter);
    
  }

  // Remove Value Use Arrow Function
  const removeValue = () => {
    setCounter(Counter - 1);
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {Counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value {Counter}</button>
    <p>footer: {Counter}</p>
    </>
  )
}

export default App
