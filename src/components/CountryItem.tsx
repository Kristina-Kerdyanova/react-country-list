import { ICountry } from '../types';
import { Color } from '../types';
import Badge from './Badge';

export const CountryItem = ({
    flag,
    name,
    capital,
    region,
    area,
    population,
}: ICountry) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center' >
            <img className='col img-fluid col-md-1' src={flag} alt="flag" />
            <span >{name}</span>
            <span>{capital}</span>
            <span>{region}</span>
            <Badge color={Color.primary} type={'area'} value={area} />
            <Badge color={Color.secondary} type={'population'} value={population} />
        </li>
    );
};
