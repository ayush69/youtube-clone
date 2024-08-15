import React from 'react'
import thumbnail from '../../src/assets/thumbnail6.png'
import logo from '../../src/assets/jack.png'
import options from '../../src/assets/show-more.png'
import './VideoCard.css'


const VideoCard = () => {
  return (
    <div className='videocard-container'>
        <div className="tumbnail-container">
            <img className='thumbnail' src={thumbnail} alt="thumbnail"/>
        </div>
        <div className='video-info'>
            <span className="logo">
                <img className='channel-logo' src={logo} alt="channel-logo"/>
            </span>
            <div className="title-block">
                <div className='title'>
                    Get Music Premium to listen to music ad-free, offline & with your screen off
                </div>
                <div className='channel-name'>
                        Youttube Music
                </div>
                <div className='stats'>
                    <span>45K views</span>&bull;<span></span><span>2 days ago</span>
                </div>
            </div>
            <span className='option-btn'>
                <img className='options' src={options} alt="options" />
            </span>
        </div>

    </div>
  )
}

export default VideoCard