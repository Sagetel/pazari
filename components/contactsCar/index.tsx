import React from 'react'
import styles from './style.module.scss'
interface Props {
    phone: string,
    tg: string
}
function ContactsCar({ phone, tg }: Props) {
    return (
        <div className={styles.contancts}>
            <div className={styles.contancts__title}>Контактная информаци</div>
            <div className={styles.contancts__phone}>
                <div className={styles.contancts__phone__title}>Телефон</div>
                <div className={styles.contancts__phone__number}>{phone}</div>
            </div>
            <div className={styles.contancts__telegram}>
                <div className={styles.contancts__telegram__title}>Telegram</div>
                <div className={styles.contancts__telegram__number}>{tg}</div>
            </div>
        </div>
    )
}

export default ContactsCar