import React from 'react'
import './SearchPage.css'
import Sidebar from '../../../components/Sidebar/Sidebar.jsx'
import SearchResults from '../../../components/SearchResults/SearchResults.jsx'



const SearchPage = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <SearchResults sidebar={sidebar}/>
    </>
    
  )
}

export default SearchPage