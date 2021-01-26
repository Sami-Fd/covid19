import React, { useContext, useState } from 'react';
import Country from './Country'
import { MainContext } from '../context/MainContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

export default function CountryCard() {
    const { world, countries, location } = useContext(MainContext)
    const [global] = world
    const [countryObject] = countries
    const [geoInfo] = location
    const [search, setSearch] = useState('')

    console.log(search)
    const countriesData = countryObject.map((country, index) => {
        //console.log(country)
        if (country.Country === search && search !== '') {
            return (
                <Country key={index} countryObject={country} flag={`http://assets.ipapi.com/flags/${geoInfo.country_code.toLowerCase()}.svg`} />
            )
        }
        else if (country.CountryCode === geoInfo.country_code && search === '') {
            return (
                <Country key={index} countryObject={country} flag={`http://assets.ipapi.com/flags/${geoInfo.country_code.toLowerCase()}.svg`} />
            )
        }
    })

    return (
        <>
            <div className="container">
                <div className="country-card">
                    <h2><FontAwesomeIcon icon={faGlobe} /> WorldWide Cases</h2>
                    <input type="text" placeholder='Search Country' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <div className="details-card">
                        <p>New Cases</p>
                        <div><h4>{global.NewConfirmed}</h4> <p>Confirmed</p></div>
                        <div><h4>{global.NewDeaths}</h4> <p>Deaths</p></div>
                        <div><h4>{global.NewRecovered}</h4> <p>Recovered</p></div>
                        <p>Total Cases</p>
                        <div><h4>{global.TotalConfirmed}</h4> <p>Confirmed</p></div>
                        <div><h4>{global.TotalDeaths}</h4><p>Deaths</p></div>
                        <div><h4>{global.TotalRecovered}</h4><p>Recovered</p></div>
                    </div>
                </div>
                {countriesData}
            </div>
        </>
    )
}