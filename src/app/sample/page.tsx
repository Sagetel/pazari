'use client'
import React, { useState } from 'react'
import styles from './style.module.scss'
import PopUp from '../../../components/popUp'
function Sample() {
  const sampleArray = [
    {
      name: "Большая и крутая",
      rules: {
        brand: "Hyundai", carBody: "", engine: "", gear: "", mileageMax: "", mileageMin: "", model: "", priceMax: "", priceMin: "", transmission: "Автоматическая", type: "cars", volumeMax: "", volumeMin: "", yearMax: "", yearMin: "",
      }
    },
  ]
  const [setting, setSetting] = useState({
    brand: '', model: '', gear: '', transmission: '', engine: '', yearMin: "", yearMax: "", mileageMin: '', mileageMax: '', type: 'cars', volumeMin: '', volumeMax: '', carBody: '', priceMin: '', priceMax: ''
  })
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.sample}>
      <div className={styles.sample__container}>
        <div className={styles.sample__title}>Шаблоны поиска</div>
        <div className={styles.sample__create}>
          <div className={styles.sample__create__title} onClick={() => { setIsOpen(true) }}>Создать шаблон</div>
          {isOpen &&
            <PopUp setIsOpen={setIsOpen}><div>kam</div></PopUp>
          }
        </div>
        <div className={styles.sample__table}>
          {sampleArray.map((sample) =>
            <div className={styles.sample__row}>
              <div className={styles.sample__name}>{sample.name}</div>
              <div className={styles.sample__rules}>
                <div className={styles.sample__cell}>Бред: {sample.rules.brand ? sample.rules.brand : "-"}</div>
                <div className={styles.sample__cell}>Модель: {sample.rules.model ? sample.rules.model : "-"}</div>
                <div className={styles.sample__cell}>Кузов: {sample.rules.carBody ? sample.rules.carBody : "-"}</div>
                <div className={styles.sample__cell}>Двигатель: {sample.rules.engine ? sample.rules.engine : "-"}</div>
                <div className={styles.sample__cell}>Привод: {sample.rules.gear ? sample.rules.gear : "-"}</div>
                <div className={styles.sample__cell}>Пробег от: {sample.rules.mileageMax ? sample.rules.mileageMax : "-"}</div>
                <div className={styles.sample__cell}>Пробег до: {sample.rules.mileageMin ? sample.rules.mileageMin : "-"}</div>
                <div className={styles.sample__cell}>Цена от: {sample.rules.priceMax ? sample.rules.priceMax : "-"}</div>
                <div className={styles.sample__cell}>Цена до: {sample.rules.priceMin ? sample.rules.priceMin : "-"}</div>
                <div className={styles.sample__cell}>Коробка: {sample.rules.transmission ? sample.rules.transmission : "-"}</div>
                <div className={styles.sample__cell}>Объем от:{sample.rules.volumeMax ? sample.rules.volumeMax : "-"}</div>
                <div className={styles.sample__cell}>Объем до:{sample.rules.volumeMin ? sample.rules.volumeMin : "-"}</div>
                <div className={styles.sample__cell}>Год от: {sample.rules.yearMax ? sample.rules.yearMax : "-"}</div>
                <div className={styles.sample__cell}>Год до: {sample.rules.yearMin ? sample.rules.yearMin : "-"}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sample