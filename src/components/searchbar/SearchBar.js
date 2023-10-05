import axios from 'axios'
import { useState } from 'react'

const SearchBar = (props) => {

  // state variable to hold searched term
  const [query, setQuery] = useState('')

  // when the country is searched make the request to the api
  // send the response to the parent component ie.. app
  // catch errors if any
  const handleSearch = (country) => {
    axios.get('/api/country/' + country)
    .then((response) => {
      props.onSubmit(response)
    })
    .catch((e) => {
      console.error(e)
    })

  }

  // when the user types update query variable
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  // prevent default on submit
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // search bar jsx
  return (
    <>
      <form className='mb-4 d-flex gap-1 col-6' onSubmit={handleSubmit}>
        <input type='text ' className='form-control' onChange={handleChange} />
        <button className='btn btn-light' type='submit' onClick={() => handleSearch(query)} >Search</button>
      </form>
    </>
  )
}

export default SearchBar