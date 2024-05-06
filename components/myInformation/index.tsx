'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
    name: string
    surname: string
    phone: string
    email: string
    password: string
}
function MyInformation(information: Props) {
    const [editMode, setEditMode] = useState(false)
    const [prevInformation, setPrevInformation] = useState({
        name: information.name,
        surname: information.surname,
        phone: information.phone,
        email: information.email,
        password: information.password,
    })
    const [name, setName] = useState(information.name)
    const [surname, setSurname] = useState(information.surname)
    const [phone, setPhone] = useState(information.phone)
    const [email, setEmail] = useState(information.email)
    const [password, setPassword] = useState(information.password)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        switch (field) {
            case 'name':
                setName(e.target.value);
                break;
            case 'surname':
                setSurname(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSaveChanges = () => {
        const newInformation = {
            name,
            surname,
            phone,
            email,
            password,
        }
        // sendToBack(newInformation)
        setEditMode(false)
        setPrevInformation({
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            password: password,
        })
    }
    const handleUndoChanges = () => {
        setName(prevInformation.name)
        setSurname(prevInformation.surname)
        setPhone(prevInformation.phone)
        setEmail(prevInformation.email)
        setPassword(prevInformation.password)
        setEditMode(false);
    }

    return (
        <div className={styles.information}>
            <div className={styles.information__title}>Моя информация
                {editMode ?
                    <div className={styles.information__links}>
                        <div className={styles.information__link} onClick={() => { handleSaveChanges() }}>
                            <Image
                                className={styles.header__enter}
                                src='/icons/check.svg'
                                width={23}
                                height={23}
                                alt="Редактировать"
                            />
                        </div>
                        <div className={styles.information__link} onClick={() => { handleUndoChanges() }}>
                            <Image
                                className={styles.header__enter}
                                src='/icons/close.svg'
                                width={17}
                                height={17}
                                alt="Редактировать"
                            />
                        </div>
                    </div>
                    :
                    <div className={styles.information__link} onClick={() => { setEditMode(!editMode) }}>
                        <Image
                            className={styles.header__enter}
                            src='/icons/edit.svg'
                            width={23}
                            height={23}
                            alt="Редактировать"
                        />
                    </div>
                }
            </div>
            <div className={styles.information__row}>
                <div className={styles.information__name}>Имя</div>
                {editMode ? (
                    <input
                        className={styles.information__cell}
                        type="text"
                        value={name}
                        onChange={(e) => handleInputChange(e, 'name')}
                    />
                ) : (
                    <div className={styles.information__cell}>{name}</div>
                )}
            </div>
            <div className={styles.information__row}>
                <div className={styles.information__name}>Фамилия</div>
                {editMode ? (
                    <input
                        className={styles.information__cell}
                        type="text"
                        value={surname}
                        onChange={(e) => handleInputChange(e, 'surname')}
                    />
                ) : (
                    <div className={styles.information__cell}>{surname}</div>
                )}
            </div>
            <div className={styles.information__row}>
                <div className={styles.information__name}>Телефон</div>
                {editMode ? (
                    <input
                        className={styles.information__cell}
                        type="text"
                        value={phone}
                        onChange={(e) => handleInputChange(e, 'phone')}
                    />
                ) : (
                    <div className={styles.information__cell}>{phone}</div>
                )}
            </div>
            <div className={styles.information__row}>
                <div className={styles.information__name}>Email</div>
                {editMode ? (
                    <input
                        className={styles.information__cell}
                        type="text"
                        value={email}
                        onChange={(e) => handleInputChange(e, 'email')}
                    />
                ) : (
                    <div className={styles.information__cell}>{email}</div>
                )}
            </div>
            <div className={styles.information__row}>
                <div className={styles.information__name}>Пароль</div>
                {editMode ? (
                    <input
                        className={styles.information__cell}
                        type="password"
                        value={email}
                        onChange={(e) => handleInputChange(e, 'password')}
                    />
                ) : (
                    <div className={styles.information__cell}>********</div>
                )}
            </div>
        </div>
    )
}

export default MyInformation