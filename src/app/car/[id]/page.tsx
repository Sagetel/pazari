import React from 'react'
import styles from './style.module.scss'
import GalleryCar from '../../../../components/galleryCar'
import ContactsCar from '../../../../components/contactsCar'
import InformationCar from '../../../../components/InformationCar'
function CarPage() {
    return (
        <div className={styles.carPage}>
            <div className={styles.carPage__container}>
                <div className={styles.carPage__lable}>
                    <div className={styles.carPage__name}>GAC GS8, 2023</div>
                    <div className={styles.carPage__price}>4 199 000 ₽</div>
                    <div className={styles.carPage__information}>16 апреля</div>
                </div>
                <GalleryCar />
                <ContactsCar />
                <InformationCar />
            </div>
        </div>
    )
}

export default CarPage