import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Produtocard from './Produtocard'
import Welcomepage from './Welcomepage'


function App() {

  return (
    <main className='min-h-screen bg-slate-100 p-8 text-slate-900'>
      <Produtocard></Produtocard>
      <Welcomepage></Welcomepage>
  </main>)

}


export default App
