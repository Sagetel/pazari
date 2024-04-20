import CarMain from "../carMain";
import styles from './style.module.scss'
interface Car {
    brand: string;
    model: string;
    gear: string;
    transmission: string;
    engine: string;
    year: string;
    mileage: string;
    type: string;
    volume: string;
    carBody: string;
    price: string;
    img: string;
}
interface Props {
    cars: Car[];
}

function CarsMain(props: Props) {
    const cars = props.cars
    return (
        <div className={styles.cars}>
            <div className={styles.cars__result}>Всего найден: {cars.length} объявлений</div>
            <div className={styles.cars__collection}>
                {cars.map((car, index) => <CarMain
                    key={index}
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
            </div>
        </div>
    )
}

export default CarsMain