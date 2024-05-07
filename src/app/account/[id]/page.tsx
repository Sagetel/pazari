
'use client'
import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import MyInformation from './../../../../components/myInformation'
import MyAdverts from '../../../../components/myAdverts'
import MyFavorite from '../../../../components/myFavorite'

function Account() {
    const myInformation = { name: 'Олег', surname: 'Олег', phone: '+79009976651', email: 'cumhack@gmail.com', password: 'cumhack@gmail.com' }

    const [selectedSection, setSelectedSection] = useState(0)
    const menuPoints = [
        'Информация',
        'Мои объявления',
        'Избранное',
        'Настройки',
        'Выйти'
    ]
    function renderSelectedComponent() {
        switch (selectedSection) {
            case 0:
                return <MyInformation {...myInformation} />;
            case 1:
                return <MyAdverts />;
            case 2:
                return <MyFavorite />;
            default:
                return <MyInformation {...myInformation} />;
        }
    }
    
    return (
        <div className={styles.account}>
            <div className={styles.account__container}>
                <div className={styles.account__title}>Личный кабинет</div>
                <div className={styles.account__menu}>

                    {menuPoints.map((point, index) => (
                        <div className={clsx(styles.account__menu__item, (index === selectedSection && styles.account__menu__item__selected))} key={index} onClick={() => { setSelectedSection(index) }}>
                            {point}
                        </div>
                    ))}
                </div>
                <div className={styles.account__information}>
                    {renderSelectedComponent()}
                </div>
            </div>
        </div>
    )
}

export default Account