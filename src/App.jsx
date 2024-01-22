import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { LandingPageNavbar } from './Components/LandingPage/Navbar/LandingPageNavbar'
import { LandingPage } from './Pages/LandingPage/LandingPage'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <LandingPageNavbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
