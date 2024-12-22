
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Welcomepage from './Welcomepage'
import Read from './Component/Read'
import Edit from './Component/Edit'
import Creat from './Component/Creat'
import Shop from './Component/Shop'
function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/welcome' element={<Welcomepage/>}></Route>
      <Route path='/read' element={<Read/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/create' element={<Creat/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>

         </Routes>
    
    </>
  )
}

export default App
