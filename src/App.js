import { useState } from 'react'
import SearchBar from './components/searchbar/SearchBar'
import ResultBox from './components/resultbox/ResultBox'
import Header from './components/header/Header'

const App = () => {

  // state variable for search result
  // this is lifted up from searchbar component
  const [searchResult, setSearchResult] = useState({})

  // function for lifting up state in search bar
  const getData = (data) => {
    setSearchResult(data)
  }

  return (
    <>
      <Header />
      <div className='container mt-2 pt-4 px-4 '>
        <div className='row'>
          <SearchBar className='mx-auto' onSubmit={getData} />
        </div>
        <div className='row'>
          <ResultBox countries={searchResult} />
        </div>
      </div>
    </>
  )
}

export default App