import React, { useEffect, useState } from 'react'
import './SearchResults.css'
import thumbnail from '../../src/assets/thumbnail4.png'
import logo from '../../src/assets/jack.png'
import { API_KEY } from '../../src/data.js'
import { Link, useParams } from 'react-router-dom'
import SearchResultCard from '../SearchResultCard/SearchResultCard.jsx'

const SearchResults = ({sidebar, searchQuery}) => {

    const [SearchResults,setSearchResults] = useState([]);
    
    

    const fetchSearchQuery = async() => {
        const searchResultsurl=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${API_KEY}`
        await fetch(searchResultsurl).then(res => res.json()).then(data => setSearchResults(data.items))
        
    }

    useEffect(() =>{
        fetchSearchQuery();
        console.log(searchQuery)
    },[searchQuery])


  return (
    <div className={`result-container ${sidebar?"":"large-search-container"}`}>

        {SearchResults.map((item,index)=>{
            return(
                <SearchResultCard item={item} key={index}/>
            )
        })}

    </div>
  )
}

export default SearchResults