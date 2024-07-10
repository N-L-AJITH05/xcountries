import React, { useState, useEffect } from "react";
import "./Countries.css";

const Tile = ({ flagUrl, name, altFlag }) => {
    return (
        <div className="tile">
            <img src={flagUrl} alt={altFlag} className="flag-image" />
            <h2>{name}</h2>
        </div>
    );
};

function Countries() {
    const API_URL = "https://xcountries-backend.azurewebsites.net/all"; 
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div className="countries">
            {countries.map((country) => (
                <Tile 
                    key={country.abbr} 
                    flagUrl={country.flag} 
                    name={country.name} 
                    altFlag={country.flag.alt} 
                />
            ))}
        </div>
    );
}

export default Countries;
