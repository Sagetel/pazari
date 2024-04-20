import Image from 'next/image'
import styles from './style.module.scss'
interface props {
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
    img: string
}
function CarMain(props: props) {
    const { brand, model, gear, transmission, engine, year, mileage, type, volume, carBody, price, img } = props
    return (
        <div className={styles.car}>
            <div className={styles.car__image}>
                <Image
                    src={img}
                    width={320}
                    height={240}
                    alt={brand}
                />
            </div>
            <div className={styles.car__text}>
                <div className={styles.car__name}>{brand + " " + model}</div>
                <div className={styles.car__engine}>{volume + "л./" + gear + "/" + engine + "/" + transmission}</div>
                <div className={styles.car__year}>{year + 'г. ' + mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "км"}</div>
                <div className={styles.car__price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "₽"}</div>
            </div>
        </div>
    )
}

export default CarMain