import styles from "./page.module.scss";
import FilterMain from "../../components/filterMain";
import CarMain from "../../components/carMain";
export default function Home() {
  const cars = [{ brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' }]
  return (
    <main className={styles.main}>
      <FilterMain />
      {cars.map(car => <CarMain

        brand={car.brand}
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
        img={car.img}
      />)}
    </main>
  );
}
