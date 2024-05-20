
'use client'
import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
//@ts-ignore
import cookie from 'js-cookie';
import styles from './style.module.scss'
import MyInformation from '../../../components/myInformation'
import MyAdverts from '../../../components/myAdverts'
import MyFavorite from '../../../components/myFavorite'
import { useContext } from 'react';
import { setUser } from "../../../utilities/action"
import { Context } from "../../../context"
import { getUser, updateUser } from '../../../utilities/api'
interface UserInformation {
    name: string;
    surname: string;
    phone: string;
    email: string;
    password: string;
}

type MyInformation = UserInformation | null;

function Account() {
    const { state, dispatch } = useContext(Context);
    const [userjwt, setUserJwt] = useState(state.user)
    const [myInformation, setMyInformation] = useState<MyInformation>(null);
    const [selectedSection, setSelectedSection] = useState(0)
    const menuPoints = [
        'Информация',
        'Мои объявления',
        'Избранное',
        'Настройки',
    ]

    function renderSelectedComponent() {
        switch (selectedSection) {
            case 0:
                //@ts-ignore
                return <MyInformation {...myInformation} />;
            case 1:
                return <MyAdverts />;
            case 2:
                return <MyFavorite />;
            default:
                //@ts-ignore
                return <MyInformation {...myInformation} />;
        }
    }

    const logout = () => {
        setUser(dispatch, '');
        cookie.remove('userjwt');
        window.location.href = '/';
    }
    const getUserInformation = async () => {
        const userInformation = await getUser(userjwt)
        console.log(userInformation);
        if (!userInformation) return
        const newInformation = {
            name: userInformation?.name,
            surname: userInformation?.surname,
            phone: userInformation?.phone,
            email: userInformation.email,
            password: 'cumhack@gmail.com'
        }
        setMyInformation(newInformation)
    }

    useEffect(() => {
        if (userjwt) {
            getUserInformation()
        }
    }, [userjwt])

    useEffect(() => { setUserJwt(state.user) }, [state.user])

    const sendUpdateInf = () => {
        const data = {jwt: userjwt, data: {name: 'Олег', phone: '+79900977651'}}
        const jsonData = data
        updateUser(jsonData)
    }

    return (
        <div className={styles.account}>
            <div className={styles.account__container}>
                <div className={styles.account__title} >Личный кабинет</div>
                <div className={styles.account__menu}>
                    {menuPoints.map((point, index) => (
                        <div className={clsx(styles.account__menu__item, (index === selectedSection && styles.account__menu__item__selected))} key={index} onClick={() => { setSelectedSection(index) }}>
                            {point}
                        </div>
                    ))}
                    <div className={clsx(styles.account__menu__item)} onClick={() => { logout() }}>
                        Выйти
                    </div>
                </div>
                <div className={styles.account__information}>
                    {myInformation ? renderSelectedComponent() : <p>Загрузка...</p>}
                </div>
            </div>
        </div>
    )
}

export default Account