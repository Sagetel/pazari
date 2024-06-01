import React from 'react'
import styles from './style.module.scss'
interface CarDetails {
    brand: string
    model: string
    gear: string
    transmission: string
    engine: string
    year: string
    mileage: string
    type: string
    volume: string
    carBody: string
    price: string
    photo: string
    description: string
}

interface Props {
    information: CarDetails;
}
function InformationCar(car: Props) {
    const { brand, model, gear, transmission, engine, year, mileage, volume, carBody, description } = car.information
    return (
        <div className={styles.information}>
            <div className={styles.information__based}>
                <div className={styles.information__title}>
                    Основная информация
                </div>
                <div className={styles.information__table}>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Марка</div>
                        <div className={styles.information__cell}>{brand}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Модель</div>
                        <div className={styles.information__cell}>{model}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Тип кузова</div>
                        <div className={styles.information__cell}>{carBody}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Год выпуска</div>
                        <div className={styles.information__cell}>{year}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Пробег</div>
                        <div className={styles.information__cell}>{mileage} км</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Тип двигателя</div>
                        <div className={styles.information__cell}>{engine}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Коробка передач</div>
                        <div className={styles.information__cell}>{gear}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Трансмиссия</div>
                        <div className={styles.information__cell}>{transmission}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Объем двигателя</div>
                        <div className={styles.information__cell}>{volume} л</div>
                    </div>
                </div>
            </div>
            <div className={styles.information__description}>
                <div className={styles.information__title}>
                    Описание
                </div>
                <div className={styles.information__text}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default InformationCar