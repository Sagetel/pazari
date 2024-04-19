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
        <div className={styles.car}>CarMain</div>
    )
}

export default CarMain