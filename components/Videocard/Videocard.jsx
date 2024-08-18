import React from 'react'
import {Link} from 'react-router-dom'
import thumbnail from '../../src/assets/thumbnail6.png'
import logo from '../../src/assets/jack.png'
import options from '../../src/assets/options.png'
import './VideoCard.css'
import 'moment'
import { viewconverter } from '../../src/data'
import moment from 'moment'

/*titleshortner*/

const VideoCard = ({item, thumbnail, title, channel_name, views, dateinfo}) => {
  return (
    <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
        <div className='videocard-container'>
            <img className='thumbnail' src={thumbnail} alt="thumbnail"/>
            
            <div className='video-info'>
                <img className='channel-logo' src={logo} alt="channel-logo"/>
                
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
                <div className='option-btn'>
                    <img className='options' src={options} alt="options" />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard