'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import styles from './style.module.scss'
import GalleryCar from '../../../../components/galleryCar'
import ContactsCar from '../../../../components/contactsCar'
import InformationCar from '../../../../components/InformationCar'
import { getAdById } from '../../../../utilities/api'
interface Car {
    personal: {
        phone: string;
        tg: string;
    };
    information: {
        brand: string;
        model: string;
        gear: string;
        engine: string;
        year: string;
        type: string;
        volume: string;
        transmission: string;
        carBody: string;
        photo: string;
        mileage: string;
        price: string;
        description: string;
    };
}
function CarPage() {
    const params = useParams();
    const dynamicParams = params.id;
    const [car, setCar] = useState<Car>(
        {
            personal: {
                phone: '',
                tg: '',
            },
            information: {
                brand: '',
                model: '',
                gear: '',
                engine: '',
                year: '',
                type: '',
                volume: '',
                transmission: '',
                carBody: '',
                photo: '',
                mileage: '',
                price: '',
                description: '',
            }
        }
    )

    const getAd = async () => {
        await getAdById(dynamicParams).then(res => {
            setCar(res)
        })
    }

    useEffect(() => {
        getAd()
    }, [dynamicParams])

    return (
        <div className={styles.carPage}>
            <div className={styles.carPage__container}>
                <div className={styles.carPage__lable}>
                    <div className={styles.carPage__name}>{`${car.information.brand} ${car.information.model}, ${car.information.year}`}</div>
                    <div className={styles.carPage__price}>{car.information.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</div>
                    <div className={styles.carPage__information}>16 апреля</div>
                </div>
                <GalleryCar photo={car.information.photo} />
                <ContactsCar phone={car.personal.phone}
                    tg={car.personal.tg} />
                <InformationCar information={car.information} />
            </div>
        </div>
    )
}

export default CarPage