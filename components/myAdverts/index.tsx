import React from 'react'
import CarMain from "../carMain";

import styles from './style.module.scss'
function MyAdverts() {
    const cars = [
        { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240', number: 4 },

        { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240', number: 4 }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240', number: 4 },

        { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240', number: 4 }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240', number: 4 },

        { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240', number: 4 }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240', number: 4 },

        { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240', number: 4 },

    ]
    return (
        <div className={styles.adverts}>
            <div className={styles.adverts__collection}>
                {cars.map((car, index) => <CarMain
                    key={index}
                    brand={car.brand}
                    number={car.number}
                    model={car.model}
                    gear={car.gear}
                    transmission={car.transmission}
                    engine={car.engine}
                    year={car.year}
                    mileage={car.mileage}
                    type={car.type}
                    volume={car.volume}
                    carBody={car.carBody}
                    price={car.price}
                    photo={car.img}
                />)}
            </div>
        </div>
    )
}

export default MyAdverts