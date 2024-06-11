'use client'
import styles from './style.module.scss'
import Sample from '../../../components/sample'
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../context';
import { ApiCars } from '../../../public/scripts/interfaces';
import { recommendation } from '../../../public/scripts/recommendation';
function Navigator() {
    const { state, dispatch } = useContext(Context);
    const rule = {
        brand: "",
        carBody: "",
        engine: "Бензин",
        gear: "Передний",
        mileageMax: "",
        mileageMin: "",
        model: "",
        priceMax: "1000000",
        priceMin: "5000000",
        transmission: "",
        type: "cars",
        volumeMax: "3л",
        volumeMin: "2.5л",
        yearMax: "2022",
        yearMin: "2015",
        horseMin: '',
        horseMax: ''
    }
    const [originalCars, setOriginalCars] = useState<ApiCars[]>([])
    const [cars, setCars] = useState<ApiCars[]>([])
    const getAllCars = async () => {
        const apiCar = state.ads
        setCars(apiCar)
        setOriginalCars(apiCar)
    }
    const renderCars = () => {
        recommendation({ rule: rule, ads: originalCars, setCars: setCars });
    }
    useEffect(() => {
        getAllCars()
    }, [state.ads])

    useEffect(() => {
        if (originalCars.length === 0) { return }
        renderCars()
    }, [originalCars])

    const data = useContext(Context);
    return (
        <div className={styles.navigator}>
            <div className={styles.navigator__container}>
                <div className={styles.navigator__title} onClick={() => { console.log(cars) }}>Навигатор</div>
                <Sample />
            </div>
        </div>
    )
}

export default Navigator