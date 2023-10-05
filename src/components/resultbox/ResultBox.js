import CountryData from '../countrydata/CountryData'

// component to hold all the cards with country data in them
const ResultBox = (props) => {
  const countries = props.countries.data
  const rows = []

  // on first run countries will be undefined
  // return search a country
  if (countries === undefined) {
    return <div>Search a Country</div>;
  } 
  // when search data has been given
  // push them all to an array in country data component
  else {
    for(let i = 0; i < countries.length; i++) {
      rows.push(<CountryData key={i} country={countries[i]} />)
    }
  }

  // if search returns no result
  // return error message
  if(countries === 'not found') {
    return <p>Sorry We Couldnt Find That</p>
  }
  // return rows 
  else {
    return rows
  }

}

export default ResultBox