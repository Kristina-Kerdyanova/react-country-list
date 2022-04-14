import { ICountry } from '../types';
import { CountryItem } from './CountryItem'

interface ICountryList {
    countries: ICountry[];
}

const CountryList = ({ countries }: ICountryList) => {
    return (
        <ul> {countries.map(country => <CountryItem {...country} />)} </ul>
    );
};
export default CountryList; 