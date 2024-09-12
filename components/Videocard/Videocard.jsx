import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import thumbnail from '../../src/assets/thumbnail6.png'
import logo from '../../src/assets/jack.png'
import options from '../../src/assets/options.png'
import './VideoCard.css'
import 'moment'
import { viewconverter } from '../../src/data'
import moment from 'moment'
import { API_KEY } from '../../src/data.js'

/*titleshortner*/

const VideoCard = ({item, thumbnail, title, channel_name, views, dateinfo,channelId}) => {

    const [channelLogo, setChannelLogo] = useState("")

    const fetchChannelLogo = async () => {
        const video_list_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
        await fetch(video_list_url).then(res => res.json()).then(data => setChannelLogo(data.items[0].snippet.thumbnails.default.url))
    }

    useEffect(()=>{
        fetchChannelLogo();
    },[])

  return (
    <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
        <div className='videocard-container'>
            <img className='thumbnail' src={thumbnail} alt="thumbnail"/>
            
            <div className='video-info'>
                <img className='channel-logo' src={channelLogo?channelLogo:""} alt="channel-logo"/>
                
                <div className="title-block">
                    <div className='title'>
                        {title.slice(0,65)+"..."} 
                    </div>
                    <div className='card-channel-name'>
                        {channel_name}
                    </div>
                    <div className='stats'>
                        <span>{viewconverter(views)} views</span>&bull;<span>{moment(dateinfo).fromNow()}</span>
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