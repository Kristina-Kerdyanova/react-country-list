export interface ICountry {
    name: string
    capital: string,
    population: number,
    flag: string,
    area: number,
    region: string
}

export const enum Color {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    info = 'info',
    light = 'light',
    dark = 'dark'
}

export type BadgeLabel = 'area' | 'population';