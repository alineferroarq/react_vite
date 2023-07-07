import {useState} from 'react'
import './App.css'

function App() {
  const[sobrenome, setSobrenome] = useState('Ferro')
  const morfar = () => {
    setSobrenome(sobrenome.toUpperCase())
  }
  /*let sobrenome = 'ferro'*/
  return (
    <>
      <h1>ALINE</h1>
      <div>{sobrenome}</div>
      <button type="button"onClick={morfar}>Morfar</button>

    </>
  )
}

export default App
