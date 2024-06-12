'use client'
import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.scss"
//@ts-ignore
import cookie from 'js-cookie';
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../context"

import { setUser, setAds } from "../../utilities/action"
import { getAllAds } from "../../utilities/api";


const Header = () => {
  const { state, dispatch } = useContext(Context);
  const dataState = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (dataState.state.user) {
      setIsLoggedIn(true)
    }
  }, [dataState])

  const saveAllAds = async () => {
    const ads = await getAllAds()
    if (ads) {
      setAds(dispatch, ads);
    }
  }

  useEffect(() => {
    const userjwt = cookie.get('userjwt') || '';
    if (userjwt) {
      setUser(dispatch, userjwt);
    }
    saveAllAds()
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.header__firstline}>
        <div className={styles.header__container}>
          <Link href="/">
            <div className={styles.header__logo} >
              MERCADO
            </div>
          </Link>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__link} >Избранное</li>
              <Link href="/navigator">
                <li className={styles.header__link}>Навигатор</li>
              </Link>
              <li className={styles.header__link}>Поддержка</li>
            </ul>
            <div className={styles.header__buttons}>
              <Link href="/create-ad">
                <div className={styles.header__btn}>
                  Создать объявление
                </div>
              </Link>
              {
                !isLoggedIn ?
                  <Link href="/login">
                    <div className={styles.header__link} >Вход
                      <Image
                        className={styles.header__enter}
                        src='/icons/enter.svg'
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </div>
                  </Link>
                  :
                  <Link href="/account">
                    <div className={styles.header__link}>
                      <Image
                        className={styles.header__enter}
                        src='/icons/user.svg'
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </div>
                  </Link>
              }
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.underline}>
        <div className={styles.underline__container}>
          <nav className={styles.underline__nav}>
            <ul className={styles.underline__list}>
              <li className={styles.underline__link}>Электромобили</li>
              <li className={styles.underline__link}>Иномарки</li>
              <li className={styles.underline__link}>Китайские</li>
              <li className={styles.underline__link}>Некитайские</li>
              <li className={styles.underline__link}>Отечественные</li>
              <li className={styles.underline__link}>Мотоциклы</li>
              <li className={styles.underline__link}>Коммерческий транспорт</li>
              <a className={styles.underline__link} href={"/sample"}>
                Шаблоны
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header