'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import FilterMain from "../../components/filterMain";
import CarsMain from "../../components/carsMain";
import React, { useContext } from 'react';
import { Context } from '../../context';
import { setUser } from "../../utilities/action";



export default function Home() {
  const { state, dispatch } = useContext(Context);
  const [setting, setSetting] = useState({
    brand: '', model: '', gear: '', transmission: '', engine: '', yearMin: "", yearMax: "", mileageMin: '', mileageMax: '', type: 'cars', volumeMin: '', volumeMax: '', carBody: '', priceMin: '', priceMax: ''
  })
  const fetchCar = [
    { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' },

  ]
  const [cars, setCars] = useState(fetchCar)

  const filtration = () => {
    let filteredCars = fetchCar.filter((car) => {
      return (setting.brand ? car.brand === setting.brand : true) &&
        (setting.model ? car.model === setting.model : true) &&
        (setting.gear ? car.gear === setting.gear : true) &&
        (setting.transmission ? car.transmission === setting.transmission : true) &&
        (setting.engine ? car.engine === setting.engine : true) &&
        (setting.yearMin ? car.year >= setting.yearMin : true) &&
        (setting.yearMax ? car.year <= setting.yearMax : true) &&
        (setting.mileageMin ? car.mileage >= setting.mileageMin : true) &&
        (setting.mileageMax ? car.mileage <= setting.mileageMax : true) &&
        (setting.type ? car.type === setting.type : true) &&
        (setting.volumeMin ? car.volume >= setting.volumeMin : true) &&
        (setting.volumeMax ? car.volume <= setting.volumeMax : true) &&
        (setting.carBody ? car.carBody === setting.carBody : true) &&
        (setting.priceMin ? car.price >= setting.priceMin : true) &&
        (setting.priceMax ? car.price <= setting.priceMax : true)
    })
    setCars(filteredCars)
  }

  useEffect(() => {
    filtration()
  }, [setting])

  // const createUser = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8000/auth/user', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXV0aC9sb2dpbiIsImlhdCI6MTcxNjEyMTA4NCwiZXhwIjoxNzE2MTI0Njg0LCJuYmYiOjE3MTYxMjEwODQsImp0aSI6ImFFUjJMRXZkb2xQcnJMUmMiLCJzdWIiOiI1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.QxCjWFvxKcqHtqjD2k3m26lVNnWohaEGX1yI-Ut5Myc'
  //       }
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }

  // };

  const data = useContext(Context);
  const sdfsfd = () => {
    setUser(dispatch, "sdfsdfsdsf");
    console.log(data.state);

  }
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__title} onClick={() => {
          sdfsfd()
        }} >
          Купить автомобиль в Санкт-Петербурге
        </div>
        <FilterMain
          setting={setting}
          setSetting={setSetting} />
        <CarsMain cars={cars} />
      </div>
    </main>
  );
}
