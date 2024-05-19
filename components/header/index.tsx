import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.scss"
const Header = () => {
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
              <li className={styles.header__link}>Избранное</li>
              <li className={styles.header__link}>Личный навигатор</li>
              <li className={styles.header__link}>Поддержка</li>
            </ul>
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
            {/* <a className={styles.header__link} href="/account/121">
              <Image
                className={styles.header__enter}
                src='/icons/user.svg'
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </a> */}
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