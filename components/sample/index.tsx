'use client'
import { useState, useEffect, useRef, RefObject } from 'react'
import styles from './style.module.scss'
import FilterOption from '../filterOptions'
import Popup from '../popup'
import { optionsFields } from '../../public/scripts/options'

function Sample() {
  const [sampleArray, setSampleArray] = useState([
    {
      name: "Большая и крутая",
      rules: {
        brand: "Hyundai", carBody: "", engine: "", gear: "", mileageMax: "", mileageMin: "", model: "", priceMax: "", priceMin: "", transmission: "Автоматическая", type: "cars", volumeMax: "", volumeMin: "", yearMax: "", yearMin: "", horseMin: '', horseMax: ''
      }
    },
  ])
  const [setting, setSetting] = useState({
    brand: '', model: '', gear: '', transmission: '', engine: '', yearMin: "", yearMax: "", mileageMin: '', mileageMax: '', type: 'cars', volumeMin: '', volumeMax: '', carBody: '', priceMin: '', priceMax: '', horseMin: '', horseMax: ''
  })

  const [newSampleName, setNewSampleName] = useState('')

  const [options, setOptions] = useState(optionsFields)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<number | null>(null);
  const changeSelector = (id: number | null) => {
    if (id === selectedOptions) setSelectedOptions(null)
    else setSelectedOptions(id)
  }
  const optionRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  //@ts-ignore
  const handleOutsideClick = (e) => {
    if (e.target.offsetParent != optionRef.current) {
      changeSelector(null)
    }
  }
  const setNewRuleSetting = (type: string, value: string) => {
    const newSetting = {
      ...setting,
      [type]: value
    };
    setSetting(newSetting);
    const updatedOptions = options.map(option => {
      if (option.type === type) {
        return { ...option, value: value };
      } else {
        return option;
      }
    });
    setOptions(updatedOptions);
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSampleName(e.target.value);
  };

  const saveSample = () => {
    const newSample = {
      name: newSampleName,
      rules: setting
    };
    setSampleArray([...sampleArray, newSample]);
    setIsOpen(false);
  }



  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <div className={styles.sample}>
      <div className={styles.sample__title}>Шаблоны поиска

        <div className={styles.sample__create}>
          <div className={styles.sample__create__title} onClick={() => { setIsOpen(true) }}>Создать шаблон</div>
          {isOpen &&
            <Popup setIsOpen={setIsOpen}>
              <div className={styles.sample__options} onClick={() => {
                console.log(setting);
              }}>
                {options.map((option, index) =>
                  <FilterOption selectedOptions={selectedOptions} changeSelector={changeSelector} name={option.name} key={index} index={index} type={option.type} value={option.value} optionRef={optionRef} variants={option.variants} setNewRuleSetting={setNewRuleSetting} typeInput={option.typeInput} />)
                }
                <input type="text" value={newSampleName} onChange={handleInput} placeholder='Название шаблона' />
                <div className={styles.sample__btn} onClick={() => { saveSample() }}>Сохранить</div>
              </div>
            </Popup>
          }
        </div>
      </div>

      <div className={styles.sample__table}>
        {sampleArray.map((sample, index) =>
          <div className={styles.sample__row} key={index}>
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
              <div className={styles.sample__cell}>Объем от: {sample.rules.volumeMax ? sample.rules.volumeMax : "-"}</div>
              <div className={styles.sample__cell}>Объем до: {sample.rules.volumeMin ? sample.rules.volumeMin : "-"}</div>
              <div className={styles.sample__cell}>Год от: {sample.rules.yearMax ? sample.rules.yearMax : "-"}</div>
              <div className={styles.sample__cell}>Год до: {sample.rules.yearMin ? sample.rules.yearMin : "-"}</div>
              <div className={styles.sample__cell}>Мощность л.с от: {sample.rules.horseMin ? sample.rules.horseMin : "-"}</div>
              <div className={styles.sample__cell}>Мощность л.с до: {sample.rules.horseMax ? sample.rules.horseMax : "-"}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sample