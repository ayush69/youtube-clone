import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail from '../../src/assets/thumbnail3.png'
import options from '../../src/assets/options.png'
import { API_KEY, viewconverter } from '../../src/data'
import moment from 'moment'

const Recommended = ({categoryId}) => {


const [recommendedData, setRecommendedData] = useState([]);

const fetchrecommendedData = async()=>{
    const recommendedDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(recommendedDataUrl).then(res=>res.json()).then(data => setRecommendedData(data.items))
}

useEffect(()=>{
    fetchrecommendedData();
},[])

return (
    
    <div className='recommended-section' >
        {recommendedData.map((item,index)=>{
            return(
                <div key={index} className="rec-vid-card">
            
                    <img src={item?item.snippet.thumbnails.medium.url:""} className='rec-vid-thumbnail' alt="logo" />
                    
                    <div className='rec-vid-info'>
                        <div className='rec-vid-title'>
                            {item?item.snippet.title:"title"}
                        </div>
                        <div className='rec-vid-channel-name'>
                            {item?item.snippet.channelTitle:"channel-name"}
                        </div>
                        <div className='rec-vid-date-info'>
                            {item?viewconverter(item.statistics.viewCount):"70K"} views &bull; {moment(item.snippet.publishedAt).fromNow()}
                        </div>
                    </div>
                    <div className=''>
                        <img src={options} className='rec-vid-options' alt="" />
                    </div>
                </div>
            )}
        )}
        
        
    </div>
  )
}

export default Recommended