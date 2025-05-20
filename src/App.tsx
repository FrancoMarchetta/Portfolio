import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/Pages/Home'
import InmoVW from './assets/Pages/InmoVW'
import NavBar from './assets/components/NavBar'
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <HashRouter>

        {/**navBar */}
        <div className="h-30 self-end mr-8 " style={{ top: "0" }}>
          <NavBar>
            

          </NavBar>

        </div>

        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/InmoVW' element={<InmoVW></InmoVW>} ></Route>
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
