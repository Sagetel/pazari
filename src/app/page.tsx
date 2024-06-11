'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import FilterMain from "../../components/filterMain";
import CarsMain from "../../components/carsMain";
import React, { useContext } from 'react';
import { Context } from '../../context';

interface ApiCars {
  id: number,
  information: Information,
  personal: Personal
  user: User
}
interface Information {
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
interface Personal {
  phone: string,
  tg: string,
}
interface User {
  userId: number,
  userName: string
}

export default function Home() {
  const { state, dispatch } = useContext(Context);
  const [setting, setSetting] = useState({
    brand: '', model: '', gear: '', transmission: '', engine: '', yearMin: "", yearMax: "", mileageMin: '', mileageMax: '', type: 'cars', volumeMin: '', volumeMax: '', carBody: '', priceMin: '', priceMax: '', horseMin: '', horseMax: '',
  })

  const [originalCars, setOriginalCars] = useState<ApiCars[]>()
  const [cars, setCars] = useState<ApiCars[]>()

  const filtration = () => {
    if (!originalCars) return
    let filteredCars = originalCars.filter((car) => {
      return (setting.brand ? car.information.brand === setting.brand : true) &&
        (setting.model ? car.information.model === setting.model : true) &&
        (setting.gear ? car.information.gear === setting.gear : true) &&
        (setting.transmission ? car.information.transmission === setting.transmission : true) &&
        (setting.engine ? car.information.engine === setting.engine : true) &&
        (setting.yearMin ? Number(car.information.year) >= Number(setting.yearMin) : true) &&
        (setting.yearMax ? Number(car.information.year) <= Number(setting.yearMax) : true) &&
        (setting.mileageMin ? Number(car.information.mileage) >= Number(setting.mileageMin) : true) &&
        (setting.mileageMax ? Number(car.information.mileage) <= Number(setting.mileageMax) : true) &&
        (setting.type ? car.information.type === setting.type : true) &&
        (setting.volumeMin ? car.information.volume >= setting.volumeMin : true) &&
        (setting.volumeMax ? car.information.volume <= setting.volumeMax : true) &&
        (setting.carBody ? car.information.carBody === setting.carBody : true) &&
        (setting.priceMin ? Number(car.information.price) >= Number(setting.priceMin) : true) &&
        (setting.priceMax ? Number(car.information.price) <= Number(setting.priceMax) : true)
    })
    setCars(filteredCars)
  }

  useEffect(() => {
    filtration()
  }, [setting])

  const getAllCars = async () => {
    const apiCar = state.ads
    setCars(apiCar)
    setOriginalCars(apiCar)
  }

  useEffect(() => {
    getAllCars()
  }, [state.ads])

  const data = useContext(Context);

  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__title} onClick={() => { console.log(setting) }} >
          Купить автомобиль в Санкт-Петербурге
        </div>
        <FilterMain
          setting={setting}
          setSetting={setSetting} />
        {cars && <CarsMain cars={cars} />}
      </div>
    </main>
  );
}
