import React, { useState } from 'react'
import './Feed.css'
import VideoCard from '../Videocard/Videocard.jsx'
import {API_KEY} from '../../src/data.js'
import { useEffect } from 'react'


const Feed = ({sidebar, categoryId}) => {

  const [data,setData] = useState([])

  const fetchdata = async () => {
    const video_list_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(video_list_url).then(res => res.json()).then(data => setData(data.items))
  }

  useEffect(()=>{
    fetchdata();
    },[categoryId])

  return (
    <div className={`feed ${sidebar?"":"large-container"}`}>

      {data.map((item,index)=>{     
        return(
          <VideoCard className='video-card'
            item={item}
            index={index}
            thumbnail={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            channel_name={item.snippet.channelTitle}
            views={item.statistics.viewCount}
            dateinfo={item.snippet.publishedAt}
          />
        )
      })}

    </div>
  )
}

export default Feed