export interface ApiCars {
    id: number,
    information: Information,
    personal: Personal
    user: User
}
export interface Information {
    brand: string,
    carBody: string,
    description: string,
    horse: string,
    engine: string,
    gear: string,
    mileage: string,
    model: string,
    photo: string,
    price: string,
    transmission: string,
    type: string,
    volume: string,
    year: string,
}
export interface Personal {
    phone: string,
    tg: string,
}
export interface User {
    userId: number,
    userName: string
}
export interface Rules {
    brand: string;
    model: string;
    gear: string;
    transmission: string;
    engine: string;
    yearMin: string;
    yearMax: string;
    mileageMin: string;
    mileageMax: string;
    type: string;
    volumeMin: string;
    volumeMax: string;
    carBody: string;
    priceMin: string;
    priceMax: string;
    horseMin: string;
    horseMax: string;
}