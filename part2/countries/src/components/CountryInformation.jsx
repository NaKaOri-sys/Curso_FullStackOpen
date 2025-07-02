import { useEffect, useState } from "react";
import weatherService from "../services/weather";
import Weather from './Wheater'

const CountryInformation = ({ country }) => {
    if (!country) {
        return null;
    }
    const [weather, setWheater] = useState(null);
    const handleWheaterPerCapital = () => {
        console.log('llegue');
        weatherService.get(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1]).then(res => {
            setWheater(res);
            console.log('we', res);
        }).catch(err => {
            console.error('Error when get wheater:', err);
        });
    }
    useEffect(handleWheaterPerCapital, []);
    return (
        <>
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
            </div>
            <div>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)}
                </ul>
                <img src={country.flags.svg} alt={country.flags.alt} />
            </div>
            <Weather capital={country.capital} weather={weather} />
        </>
    );
}

export default CountryInformation;