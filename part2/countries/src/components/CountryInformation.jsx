const CountryInformation = ({ country }) => {
    if (!country) {
        return null;
    }
    return (
        <>
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital}</p>
            </div>
            <div>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)}
                </ul>
                <img src={country.flags.svg} alt={country.flags.alt}/>
            </div>
        </>
    );
}

export default CountryInformation;