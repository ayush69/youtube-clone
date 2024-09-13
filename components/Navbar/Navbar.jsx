import React, { useState } from 'react'
import './Navbar.css'
import menu from '../../src/assets/menu.png'
import logo from '../../src/assets/logo.png'
import searchbtn from '../../src/assets/search.png'
import uploadbtn from '../../src/assets/upload.png'
import notificationbtn from '../../src/assets/notification.png'
import profile from '../../src/assets/jack.png'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({setSidebar}) => {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();



  const handleSearchQuery = () =>{
        if(query?.length > 0){
          navigate(`/search/${query}`);
        }
  }

  return (
    <nav className='navbar'>

        <div className='leftnav'>
            <img src={menu} onClick={()=>setSidebar(prev =>prev = !prev)} alt="" className='menu'/>
            <Link to='/' ><img src={logo} alt="" className='youtube-logo'/></Link>
        </div>

        <div className='midnav'>
          <div className='searchbox'>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} type='text' placeholder='Search...' className='search'
                  onKeyUp={(e)=>{
                    if(e.key == "Enter") handleSearchQuery();
                  }}
            />
            <img src={searchbtn} onClick={handleSearchQuery} alt="" className='searchbtn'/>
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