import { BadgeLabel } from '../types';
import { Color } from '../types';

interface IBadge {
    color: Color;
    type: BadgeLabel;
    value: number;
}

const Badge = ({ color, type, value }: IBadge) => {
    return (
        <span className={`modal-lg badge w-25 mx-3 bg-${color}`}>
            {type} : {value}
        </span>
    )
}

export default Badge;
