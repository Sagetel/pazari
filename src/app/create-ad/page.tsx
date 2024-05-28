'use client';
import React, { useState, useEffect, useRef, RefObject } from 'react'
import { featureFields, OptionsFieldsInterface } from '../../../public/scripts/options'
import FilterOption from '../../../components/filterOptions'

import styles from './style.module.scss'
function CreateAd() {
  const [selectedOptions, setSelectedOptions] = useState<number | null>(null);
  const optionRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [setting, setSetting] = useState({
    brand: '',
    model: '',
    gear: '',
    engine: '',
    year: '',
    type: 'cars',
    volume: '',
    transmission: '',
    carBody: '',
    photo: '',
    mileage: '',
    price: '',
    description: ''
  })
  const changeSelector = (id: number | null) => {
    if (id === selectedOptions) setSelectedOptions(null)
    else setSelectedOptions(id)
  }

  const [options, setOptions] = useState<OptionsFieldsInterface[]>(featureFields)
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
  return (
    <div className={styles.create}>
      <div className={styles.create__container}>
        <h1 className={styles.create__title}>Создать объявление</h1>
        <div className={styles.create__fields}>
          {options.map((option, index) =>
            <FilterOption selectedOptions={selectedOptions} changeSelector={changeSelector} name={option.name} key={index} index={index} type={option.type} value={option.value} optionRef={optionRef} variants={option.variants} setNewRuleSetting={setNewRuleSetting} typeInput={option.typeInput} />)
          }
        </div>
        <div className={styles.create__button} onClick={() => {
          console.log(setting);
        }}>Опубликовать объявление</div>
      </div>
    </div>
  )
}

export default CreateAd