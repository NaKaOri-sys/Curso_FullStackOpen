import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import CountryInformation from './components/CountryInformation';

function App() {
  const [countries, setCountries] = useState([]);
  const [matchesCountries, setMatchesCountries] = useState([]);
  const [newCountry, setNewCountry] = useState(null);
  const [message, setMessage] = useState('');
  const cleanState = () => {
    setMatchesCountries([]);
    setMessage('');
    setNewCountry(null);
  }
  useEffect(() => {
    countriesService.getAll().then(res => {
      setCountries(res);
    })
  }, []);
  const getCountryByName = (name) => {
    countriesService.get(name).then(res => {
      setNewCountry(res);
    });
  };
  const handleChangeCountry = (event) => {
    let countryName = event.target.value;
    if (!countryName) {
      cleanState();
      return;
    }
    cleanState();
    const filteredCountries = countries.filter(c => c.name.common.toLocaleLowerCase().includes(countryName) || c.name.official.toLocaleLowerCase().includes(countryName));
    if (filteredCountries.length > 10) {
      setMessage('Too many matches, specify another filter.')
      return;
    }
    if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      setMatchesCountries(filteredCountries);
      return;
    }
    if (filteredCountries.length === 1) {
      getCountryByName(filteredCountries.map(c => c.name.common));
    }
  };
  const handleClickShowCountry = (name) =>{
    cleanState();
    getCountryByName(name);
  };
  return (
    <>
      <div>
        find countries <input onChange={handleChangeCountry} />
      </div>
      <div>
        {message}
        {matchesCountries.map(country => (
          <div key={country.cca2} style={{ display: 'flex', alignItems: 'center'}}>
            <p style={{ margin: '0 5px 0 0' }}>{country.name.common}</p>
            <button onClick={() => handleClickShowCountry(country.name.common)}>Show</button>
          </div>
        ))}
      </div>
      <CountryInformation country={newCountry} />
    </>
  )
}

export default App
