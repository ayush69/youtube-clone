import React, { useEffect, useState } from 'react'
import './Videoplayer.css'
import video from '../../src/assets/video.mp4'
import logo from '../../src/assets/jack.png'
import like from '../../src/assets/like.png'
import dislike from '../../src/assets/dislike.png'
import share from '../../src/assets/share.png'
import save from '../../src/assets/library.png'
import { API_KEY, viewconverter } from '../../src/data.js'
import moment from 'moment'
import { useParams } from 'react-router'


const Videoplayer = () => {

  const {videoId} = useParams();

  const [videodata,setVideodata] = useState(null);
  const [channeldata, setChanneldata] = useState(null);

  const fetchvideodata = async ()=>{
    const videodataurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videodataurl).then(res=>res.json()).then(data=>setVideodata(data.items[0]))
  }

  const fetchchanneldata = async ()=>{
    const channeldataurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videodata.snippet.channelId}&key=${API_KEY}`
    await fetch(channeldataurl).then(res=>res.json()).then(data=>setChanneldata(data.items[0]))
  }

  useEffect(()=>{
    fetchvideodata();
  },[videoId])

  useEffect(()=>{
    fetchchanneldata();
  },[videodata])

  return (
    <div className='video-player-container'>
      <div className='video-player'>
        {/*<video src={video} controls autoPlay muted></video>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
      </div>
      <div className='video-title'>
        {videodata?videodata.snippet.title:"Title Here"}
      </div>
      <div className='video-reactions'>
        <div className='left-vid-reaction'>
          <span>
            <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} className='channel-info-logo' alt="channel-logo" />
          </span>
          <span >
            <span className='channel-name'>
              {videodata?videodata.snippet.channelTitle:"channel title"}
            </span>
            <br />
            <span className='channel-subs'>
              {channeldata?viewconverter(channeldata.statistics.subscriberCount):"1M"} subscribers 
            </span>
          </span>
          <button className='join-button'>Join</button>
          <button className='sub-button'>Subscribe</button>
        </div>
        <div className='right-vid-reaction'>
          <span className='reaction-span'><img src={like} alt="" />{videodata?viewconverter(videodata.statistics.likeCount):"likes"}</span>
          <span className='reaction-span'><img src={dislike} alt="" /></span>
          <span className='reaction-span'><img src={share} alt="" />Share</span>
          <span className='reaction-span'><img src={save} alt="" />Save</span>
        </div>
      </div>
      <div className='video-description'>
        <div className='despription'>
            {videodata?viewconverter(videodata.statistics.viewCount):"16K"} views {videodata?moment(videodata.snippet.publishedAt).fromNow():""} 
            <p>{videodata?videodata.snippet.description:"this is description"}</p>
        </div>
      </div>
    </div>
  )
}

export default Videoplayer