import React from 'react'
import './Videoplayer.css'
import video from '../../src/assets/video.mp4'
import logo from '../../src/assets/jack.png'
import like from '../../src/assets/like.png'
import dislike from '../../src/assets/dislike.png'
import share from '../../src/assets/share.png'
import save from '../../src/assets/library.png'


const Videoplayer = () => {
  return (
    <div className='video-player-container'>
      <div className='video-player'>
        <video src={video} controls autoPlay muted></video>
      </div>
      <div className='video-title'>
        Get Music Premium to listen to music ad-free, offline & with your screen off
      </div>
      <div className='video-reactions'>
        <div className='left-vid-reaction'>
          <span>
            <img src={logo} className='channel-info-logo' alt="" />
          </span>
          <span >
            <span className='channel-name'>
              Youtube Music
            </span>
            <br />
            <span className='channel-subs'>
              1M subscribers 
            </span>
          </span>
          <button className='join-button'>Join</button>
          <button className='sub-button'>Subscribe</button>
        </div>
        <div className='right-vid-reaction'>
          <span className='reaction-span'><img src={like} alt="" />2.9K</span>
          <span className='reaction-span'><img src={dislike} alt="" /></span>
          <span className='reaction-span'><img src={share} alt="" />Share</span>
          <span className='reaction-span'><img src={save} alt="" />Save</span>
        </div>
      </div>
      <div className='video-description'>
        <div className='despription'>
            100K views 15 August,2024 
            <p>this is description.</p>
        </div>
      </div>
    </div>
  )
}

export default Videoplayer