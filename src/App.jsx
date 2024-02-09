import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //LA LOGICA QUE SE UTILIZA EN LA PAGINA SE DECLARA AL INICIO DE LA FUNCIONALIDAD
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return (
    //NECESITA SI O SI LA APERTURA/CIERRE DE UNA ETIQUETA (FRAGMENT)
    <main className='container text-center w-50 '>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MI PRIMER PAGINA EN REACT</h1>
      <div className="card">
        <button className='btn btn-primary' onClick={() => {
          setCount((count) => count + 1)
          setName((name)=> name + "A-")
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>El valor de el state NAME es: {name}</p>
    </main>
  )
}

export default App
