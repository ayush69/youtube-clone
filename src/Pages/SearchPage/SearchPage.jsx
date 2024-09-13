import React from 'react'
import './SearchPage.css'
import Sidebar from '../../../components/Sidebar/Sidebar.jsx'
import SearchResults from '../../../components/SearchResults/SearchResults.jsx'
import { useParams } from 'react-router'


const SearchPage = ({sidebar}) => {

const {searchQuery} = useParams();

  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <SearchResults sidebar={sidebar} searchQuery={searchQuery} />
    </>
    
  )
}

export default SearchPage