import React from 'react'
import './Video.css'
import Videoplayer from '../../../components/Videoplayer/Videoplayer.jsx'
import Recommended from '../../../components/Recommended/Recommended.jsx'


const Video = () => {
  return (
    <div className='video-page'>
      <Videoplayer/>
      <Recommended/>
    </div>
  )
}

export default Video