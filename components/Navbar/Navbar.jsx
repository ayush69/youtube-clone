import React from 'react'
import './Navbar.css'
import menu from '../../src/assets/menu.png'
import logo from '../../src/assets/logo.png'
import searchbtn from '../../src/assets/search.png'
import uploadbtn from '../../src/assets/upload.png'
import notificationbtn from '../../src/assets/notification.png'
import profile from '../../src/assets/jack.png'


const Navbar = ({setSidebar}) => {
  return (
    <nav className='navbar'>

        <div className='leftnav'>
            <img src={menu} onClick={()=>setSidebar(prev =>prev = !prev)} alt="" className='menu'/>
            <img src={logo} alt="" className='youtube-logo'/>
        </div>

        <div className='midnav'>
          <div className='searchbox'>
            <input type='text' placeholder='Search...' className='search'/>
            <img src={searchbtn} alt="" className='searchbtn'/>
          </div>
        </div>

        <div className='rightnav'>
          <img src={uploadbtn} alt="" className='upload'/>
          <img src={notificationbtn} alt="" className='notification'/>
          <img src={profile} alt="" className='profile'/>

        </div>
    </nav>
  )
}

export default Navbar