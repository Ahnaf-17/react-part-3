import { useState } from 'react';
import './Country.css'
const Country = ({ country ,handleVisitedCountry}) => {

    const {name,flags,population,area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }

    const passParams = () =>{
        handleVisitedCountry(country);
    }


    return (
        <div  className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'black' : 'white'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={passParams}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>Visited</button>{visited && 'visited'}
            
        </div>
    );
};

export default Country;