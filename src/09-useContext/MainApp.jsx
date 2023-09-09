
import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { AboutPage} from './AboutPage'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'


export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            {//NAVIGATE CAN BE USED TO DEFAULT ROUTE }
            }
            <Route path='/*' element={ <Navigate to="/about" /> }></Route>
        </Routes>
    </UserProvider>
  )
}
 