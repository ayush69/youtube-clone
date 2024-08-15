import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


/*
import { Route,RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element = {<App />}>
      <Route path='' element = {<Home/>}/>
    </Route>
  )
)
*/

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter><App/></BrowserRouter>
  </StrictMode>,
)
