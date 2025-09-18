import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries = 0, setVisitedCountries] = useState([])
    
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('oyak chuidd dite hobe',country);

        const newVisitedCountreis = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountreis) 
    }

    const handleVisitedFlag = (flags) => {
        const newVisitedFlags = [...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;



    return (
        <div >

            <h2 className='text-center font-bold text-5xl mt-8'>In the countries : {countries.length}</h2>
            <h3 className='text-center font-bold text-xl mt-8'>Total Countery Visited : {visitedCountries.length} </h3>
            <h3 className='text-center font-bold text-xl mt-8'>Total Visited Flags : {visitedFlags.length} </h3>
            <ol className='text-center  mt-8'>
                {
                    visitedCountries.map(country =>
                    <li key={country.cca3.cca3}>  {country.name.common}</li>)
                }
            </ol>

            <div className=' w-11/12 grid grid-cols-10 mx-auto gap-5 mt-5'>
                {
                    visitedFlags.map((flag, index) => <img key={index} className='w-32 ' src={flag} alt="" />)
                }
            </div>
            <div className='grid grid-cols-3 '>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}  handleVisitedCountries= {handleVisitedCountries} handleVisitedFlag = {handleVisitedFlag}/>)
                }
            </div>

        </div>
    );
};

export default Countries;