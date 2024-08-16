import React from 'react'
import {Link} from 'react-router-dom'
import thumbnail from '../../src/assets/thumbnail6.png'
import logo from '../../src/assets/jack.png'
import options from '../../src/assets/show-more.png'
import './VideoCard.css'
import 'moment'
import { viewconverter } from '../../src/data'
import moment from 'moment'


const VideoCard = ({item, index, thumbnail, title, channel_name, views, dateinfo}) => {
  return (
    <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
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
                        {title}
                    </div>
                    <div className='card-channel-name'>
                        {channel_name}
                    </div>
                    <div className='stats'>
                        <span>{viewconverter(views)} views</span>&bull;<span>{moment(dateinfo).fromNow()}</span><span></span>
                    </div>
                </div>
                <span className='option-btn'>
                    <img className='options' src={options} alt="options" />
                </span>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard