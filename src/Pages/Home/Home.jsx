import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../../components/Sidebar/Sidebar.jsx'
import Feed from '../../../components/Feed/Feed.jsx'



const Home = ({sidebar}) => {


  const [categoryId,setCategoryId] = useState(0);




  return (
    <>
      <Sidebar sidebar ={sidebar} categoryId={categoryId} setCategoryId={setCategoryId} />
      
      <Feed sidebar={sidebar} categoryId={categoryId} />
      
    </>
  )
}

export default Home