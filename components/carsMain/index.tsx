import CarMain from "../carMain";
import styles from './style.module.scss'
interface ApiCar {
    id: number,
    information: Information,
    personal: Personal
    user: User
}
interface Information {
    brand: string,
    carBody: string,
    description: string,
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

interface Props {
    cars: ApiCar[]
}

function CarsMain(props: Props) {
    const cars = props.cars
    console.log(cars);

    return (
        <div className={styles.cars}>
            <div className={styles.cars__result}>Всего найден: {cars?.length} объявлений</div>
            <div className={styles.cars__collection}>
                {cars && cars.map((car, index) => <CarMain
                    number={car.id}
                    key={index}
                    brand={car.information.brand}
                    model={car.information.model}
                    gear={car.information.gear}
                    transmission={car.information.transmission}
                    engine={car.information.engine}
                    year={car.information.year}
                    mileage={car.information.mileage}
                    type={car.information.type}
                    volume={car.information.volume}
                    carBody={car.information.carBody}
                    price={car.information.price}
                    photo={JSON?.parse(car.information.photo)[0]}
                />)}
            </div>
        </div>
    )
}

export default CarsMain