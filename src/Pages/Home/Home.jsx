import React from 'react'
import './Home.css'
import Sidebar from '../../../components/Sidebar/Sidebar.jsx'
import Feed from '../../../components/Feed/Feed.jsx'



const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar ={sidebar}/>
      
      <Feed sidebar={sidebar} />
      
    </>
  )
}

export default Home