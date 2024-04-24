import React from 'react'
import styles from './style.module.scss'
function ContactsCar() {
    return (
        <div className={styles.contancts}>
            <div className={styles.contancts__title}>Контактная информаци</div>
            <div className={styles.contancts__phone}>
                <div className={styles.contancts__phone__title}>Телефон</div>
                <div className={styles.contancts__phone__number}>+7 (900) 997-66-51</div>
            </div>
            <div className={styles.contancts__telegram}>
                <div className={styles.contancts__telegram__title}>Telegram</div>
                <div className={styles.contancts__telegram__number}>@sagetel</div>
            </div>
        </div>
    )
}

export default ContactsCar