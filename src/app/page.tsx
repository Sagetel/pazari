import styles from "./page.module.scss";
import FilterMain from "../../components/filterMain";
import CarsMain from "../../components/carsMain";
export default function Home() {
  const cars = [
    { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' }, { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' },

    { brand: 'Hyundai', model: 'Elantra', gear: 'Передний', transmission: 'Автоматическая', engine: 'Бензин', year: "2022", mileage: "3013", type: 'cars', volume: '1.6', carBody: 'Седан', price: '2899000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/2142835/be368ecfa3d3820639ee684eb3526e72/320x240' },

  ]
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__title}>
          Купить автомобиль в Санкт-Петербурге
        </div>
        <FilterMain />
        <CarsMain cars={cars} />
      </div>
    </main>
  );
}
