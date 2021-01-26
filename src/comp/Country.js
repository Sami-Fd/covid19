import React from 'react'

export default function Country({ countryObject, flag }) {
    //const [search, setSearch] = useState('')
    const country = countryObject
    console.log('count', country)
    return (
        <>
            <div className="country-card">

                <h2 ><img height="18" width="32" src={flag} alt="flag" /> {country.Country}</h2>
                <p>Date: {new Date(country.Date).toUTCString()}</p>

                <div className="details-card">
                    <p>New Cases</p>
                    <div><h4>{country.NewConfirmed}</h4> <p>Confirmed</p></div>
                    <div><h4>{country.NewDeaths}</h4> <p>Deaths</p></div>
                    <div><h4>{country.NewRecovered}</h4> <p>Recovered</p></div>
                    <p>Total Cases</p>
                    <div><h4>{country.TotalConfirmed}</h4> <p>Confirmed</p></div>
                    <div><h4>{country.TotalDeaths}</h4><p>Deaths</p></div>
                    <div><h4>{country.TotalRecovered}</h4><p>Recovered</p></div>
                </div>
            </div>
        </>
    )
}
