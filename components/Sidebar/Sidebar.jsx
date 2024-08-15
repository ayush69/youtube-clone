import React from 'react'
import './Sidebar.css'

const Sidebar = ({sidebar}) => {

  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      Sidebar
    </div>
  )
}

export default Sidebar