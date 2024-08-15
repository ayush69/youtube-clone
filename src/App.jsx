import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/Pages/Home/Home.jsx'
import Video from '../src/Pages/Video/Video.jsx'

const App = () => {

  const [sidebar,setSidebar] = useState(true);


  return (
    <div>
      <Navbar setSidebar = {setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/1/1' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App