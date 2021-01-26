import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios'

export const MainContext = createContext();

export const MainProvider = props => {
    const [countryObject, setCountryObject] = useState([])
    const [global, setGlobal] = useState({})
    const [geoInfo, setGeoInfo] = useState({})

    useEffect(() => {
        const fetchCovid = async () => {
            const url = 'https://api.covid19api.com/summary'
            const { data } = await axios.get(url)

            setCountryObject(data.Countries)
            setGlobal(data.Global)
            console.log('all', data)
        }
        fetchCovid()
        const getGeoInfo = async () => {
            const url = 'https://ipapi.co/json/'
            const { data } = await axios.get(url)
            setGeoInfo(data)
            console.log(data)
        }
        getGeoInfo()
    }, []);



    return (
        <MainContext.Provider value={{ world: [global, setGlobal], countries: [countryObject, setCountryObject], location: [geoInfo, setGeoInfo] }}>
            {props.children}
        </MainContext.Provider>
    );
}