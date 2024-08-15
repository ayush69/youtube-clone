import React from 'react'
import './Feed.css'
import VideoCard from '../Videocard/Videocard.jsx'



const Feed = ({sidebar}) => {
  return (
    <div className={`feed ${sidebar?"":"large-container"}`}>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
        <VideoCard className='video-card'/>
    </div>
  )
}

export default Feed