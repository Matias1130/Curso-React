import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carrito from './components/Carrito'
import Saludo from './components/Saludo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header style={{ display: 'flex' , justifyContent:'space-around' }}>
      <Navbar/>
      <Carrito/>
    </header>
    <main>
      <Saludo text="Bienvenidos a mi Tienda!"/>
    </main>
    </>
  )
}

export default App
