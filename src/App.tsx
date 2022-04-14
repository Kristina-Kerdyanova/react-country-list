import CountryList from './components/CountryList';
import countryData from './country-data.json';
import { ICountry } from './types';

const App = () => {
  const countries: ICountry[] = countryData.map(country => ({
    name: country.name.common,
    region: country.region,
    capital: country.capital[0],
    flag: country.flags.svg,
    area: country.area,
    population: country.population,
  }))
  return <div className='container'>
    <h1 className=''>Country List</h1>
    <CountryList countries={countries} />
  </div>;
}

export default App;