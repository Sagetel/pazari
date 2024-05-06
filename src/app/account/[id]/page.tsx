'use client'
import React, { useState } from 'react'
import styles from './style.module.scss'
import MyInformation from './../../../../components/myInformation'

function Account() {
    const myInformation = { name: 'Олег', surname: 'Олег', phone: '+79009976651', email: 'cumhack@gmail.com', password: 'cumhack@gmail.com' }
    return (
        <div className={styles.account}>
            <div className={styles.account__container}>
                <div className={styles.account__title}>Личный кабинет</div>
                <div className={styles.account__menu}>
                    <div className={styles.account__menu__item}>Информация</div>
                    <div className={styles.account__menu__item}>Мои объявления</div>
                    <div className={styles.account__menu__item}>Избранное</div>
                    <div className={styles.account__menu__item}>Настройки</div>
                    <div className={styles.account__menu__item}>Выйти</div>
                </div>
                <div className={styles.account__information}>
                    <MyInformation {...myInformation} />
                </div>
            </div>
        </div>
    )
}

export default Account