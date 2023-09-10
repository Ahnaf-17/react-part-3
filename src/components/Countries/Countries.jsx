import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
// import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    })

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = country =>{
        console.log('added');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }


    return (

        <div >
            <h3>Countries : {countries.length}</h3>

            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
            {
              countries.map(country => <Country 
              key={country.cca3} 
              handleVisitedCountry={handleVisitedCountry}
              country={country}>

              </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;