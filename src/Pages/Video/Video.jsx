import React from 'react'
import './Video.css'
import Videoplayer from '../../../components/Videoplayer/Videoplayer.jsx'
import Recommended from '../../../components/Recommended/Recommended.jsx'
import {useParams} from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId} = useParams();

  return (
    <div className='video-page'>
      <Videoplayer videoId={videoId}  />
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video