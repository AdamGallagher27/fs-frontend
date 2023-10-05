import React from 'react'

const CountryData = (props) => {

  const country = props.country

  // return card with data about each country
  return (
    <div className='col-md-6'>
      <div className="card mb-3 min" >
        <div className="row">
          <div className="col-lg-8">
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
              <ul className='list-unstyled'>
                <li className='card-text'>Continent : {country.region}</li>
                <li>Area : {country.area} km2</li>
                <li>Population : {country.population} Citizens</li>
                <li>Languages : {Object.values(country.languages).join(', ')}</li>
                <li><a href={country.maps.googleMaps} target="_blank" className='btn btn-light mt-3' >See on Maps</a></li>
              </ul>
            </div>
          </div>
          <div className='col m-4 p-0 d-flex justify-content-center'>
            <img src={country.flags.png} className="img-fluid" alt={country.flags.alt} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default CountryData


