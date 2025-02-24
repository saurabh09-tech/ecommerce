import React from 'react'
import { Route, Routes } from 'react-router'
import Header1 from './components/Header1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AllTea from './components/page.jsx/AllTea '
import Home from './components/page.jsx/Home'
import Discover from './components/page.jsx/Discover'
import News from './components/page.jsx/News'
import Pages from './components/page.jsx/Pages'
import Login from './components/page.jsx/login'



function App() {
  return (
    <div>
      <Header1/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alltea' element={<AllTea/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/login' element={<Login/>}/>
        
        


       
        </Routes></div>
  )
}

export default App