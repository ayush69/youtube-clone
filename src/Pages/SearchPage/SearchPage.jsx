import Sidebar from '../../../components/Sidebar/Sidebar.jsx'
import SearchResults from '../../../components/SearchResults/SearchResults.jsx'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'


const SearchPage = ({sidebar}) => {

const {searchQuery} = useParams();

  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <SearchResults sidebar={sidebar} searchQuery={searchQuery} />
    </>
    
  )
}

SearchPage.propTypes = {
  sidebar: PropTypes.bool
}

export default SearchPage