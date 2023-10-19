import './App.css'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/users/Home'
import { CarList } from './pages/users/CarList'
import { CarDetail } from './pages/users/CarDetail'

function App() {

  return (
    <>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/booking?checkin=2023-10-01&checkout=2023-12-02" element={<CarList/>}/>
          <Route path="/motorhome/:id" element={<CarDetail/>}/>
        </Routes>
    </>
  )
}

export default App
