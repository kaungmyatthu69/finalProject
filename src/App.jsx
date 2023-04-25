import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import RouteGuard from './components/RouteGuard'
import EditeForm from './components/EditeForm'
import ChangePw from './pages/ChangePw'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contact/:id' element={<EditeForm/>} />
        <Route path='/changepassword' element={<RouteGuard><ChangePw/></RouteGuard>} />
        <Route path='/' element={<RouteGuard><Dashboard/></RouteGuard>} />
      </Routes>
      
      </div>
  )
}

export default App