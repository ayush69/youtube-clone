import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/jack.png'
import { viewconverter,API_KEY } from '../../src/data.js'
import moment from 'moment'

const SearchResultCard = ({item}) => {

    const [categoryId,setCategoryId] = useState(0)
    const [viewCount,setViewCount] = useState(0)
    const [channeldata, setChanneldata] = useState()

    const fetchCategoryId = async() => {
        const categoryidurl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=${API_KEY}`
        await fetch(categoryidurl).then(res => res.json()).then(data =>{
            setCategoryId(data?data.items[0].snippet.categoryId:0);
            
        }) 
    }

    const fetchchanneldata = async ()=>{
        const channeldataurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`
        await fetch(channeldataurl).then(res=>res.json()).then(data=>setChanneldata(data.items[0]))
    }

    
    useEffect(() =>{
        fetchCategoryId();
        fetchchanneldata();
    },[])


  return (
    <div>
        <Link to={`video/${categoryId}/${item.id.videoId}`} className='result-box'>
            <img src={item?item.snippet.thumbnails.medium.url:""} alt="thumbnail" className='search-thumbanail'/>
            <div className='search-info'>
                <div className='search-title'>
                    <p>{item?item.snippet.title:"title"}</p>
                </div>
                <div className='search-stats'>
                    <span>300K views</span>&bull;<span>{moment(item.snippet.publishedAt).fromNow()}</span>
                </div>
                <div className='search-channel'>
                    <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt="" />
                    <p>{item?item.snippet.channelTitle:"channel-name"}</p>
                </div>
                <div className='search-descroption'>
                    <p>{item?item.snippet.description:"description"}</p>
                </div>
            </div>    
        </Link>
    </div>
  )
}

export default SearchResultCard