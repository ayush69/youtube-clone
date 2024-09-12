import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/jack.png'
import { viewconverter,API_KEY } from '../../src/data.js'
import moment from 'moment'

const SearchResultCard = ({item}) => {

    const [categoryId,setCategoryId] = useState(0)

    const fetchCategoryId = async() => {
        const categoryidurl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=${API_KEY}`
        await fetch(categoryidurl).then(res => res.json()).then(data => setCategoryId(data.items[0].snippet.categoryId))
    }
    
    useEffect(() =>{
        fetchCategoryId();
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
                    <img src={logo} alt="" />
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