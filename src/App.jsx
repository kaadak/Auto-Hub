import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './assets/components/Header'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Blog from './assets/pages/Blog'
import Contact from './assets/pages/Contact'
import Services from './assets/pages/Services'
import Shop from './assets/pages/Shop'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-pink-500'>

      <Header/>

      <main>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/shop' element={<Shop/>}/>

        </Routes>

      </main>

      </div>
    </Router>
  )
}

export default App
