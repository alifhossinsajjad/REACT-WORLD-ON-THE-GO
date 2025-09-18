import React, { useState } from 'react';

const Country = ({ country,handleVisitedCountries,handleVisitedFlag }) => {
   
    const [visited , setVisited] = useState(false)


    const handleVisited = () => {
       //3 way of condition
       //basic way
    //    if(visited){
    //     setVisited(false)
    //    }
    //    else(
    //     setVisited(true)
    //    )


    // second way
    // setVisited(visited ? false : true)

    setVisited(!visited)
    handleVisitedCountries(country);
    }






    return (
        <div className='mt-10 w-10/12 mx-auto border-2 border-red-500 p-5 '>
            <div className='grid justify-center items-center space-y-3'>
                <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />

                <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "it is a big country" : 'it is a small country'}</p>
            <p>Language : {country.languages.languages.eng}</p>

            <div className='flex gap-3'>
                <button className= {`border bg-blue-600 p-3 rounded-lg text-white font-bold cursor-pointer mt-4 ${visited ? 'visited' :'bg-gray-600'}`} onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button className= {`border bg-red-600  rounded-lg text-white font-bold cursor-pointer mt-4 `} onClick={() => {handleVisitedFlag(country?.flags?.flags?.png)}}>
                Added Visited Flags</button>
            </div>
            </div>
            
        </div>
    );
};

export default Country;