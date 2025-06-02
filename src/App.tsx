import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/Pages/Home'
import InmoVW from './assets/Pages/InmoVW'
import NavBar from './assets/components/NavBar'
import BlackJack from './assets/Pages/BlackJack'

import Starbucks from './assets/Pages/Starbucks'

function App() {

  return (
    <>
      <HashRouter>

        {/**navBar */}
        <div className="h-30 self-end mr-8 " style={{ top: "0" }}><NavBar></NavBar></div>

        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/InmoVW' element={<InmoVW></InmoVW>}></Route>
          <Route path='/BlackJack' element={<BlackJack></BlackJack>}></Route>
          <Route path='/starbucks' element={<Starbucks></Starbucks>}></Route>
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
