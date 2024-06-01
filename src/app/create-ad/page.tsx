'use client';
import React, { useState, useEffect, useRef, RefObject } from 'react'
import { featureFields, OptionsFieldsInterface } from '../../../public/scripts/options'
import FilterOption from '../../../components/filterOptions'
import { createAds } from '../../../utilities/api.js'
import styles from './style.module.scss'
import { useContext } from 'react';
import { Context } from "../../../context"
function CreateAd() {
  const { state, dispatch } = useContext(Context);
  const [userjwt, setUserJwt] = useState(state.user)
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
    description: '',
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

  
  const [phoneNumber, setPhoneNumber] = useState('+7');
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (phoneNumber.length > 11 && input.length > 11) { return }
    if (input.length === 0 || input.length === 1) { setPhoneNumber("+7"); return }
    setPhoneNumber(`+` + input.replace(/\D/g, ''));
  };
  const [telegramName, setTelegramName] = useState('@');
  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.includes('@') && input.lastIndexOf('@') !== 0) {
      const newInput = input.split('@').join('');
      setTelegramName(`@${newInput}`);
    } else {
      setTelegramName(input);
    }
  };
  const sendAd = () => {
    const ad = {
      personal: { phone: phoneNumber, tg: telegramName }, information: setting
    }
    createAds(JSON.stringify(ad), userjwt)
  }
  useEffect(() => { setUserJwt(state.user) }, [state.user])
  return (
    <div className={styles.create}>
      <div className={styles.create__container}>
        <h1 className={styles.create__title}>Создать объявление</h1>
        <div className={styles.create__fields}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Введите номер телефона"
          />
          <input
            type="text"
            value={telegramName}
            onChange={handleTelegramChange}
            placeholder="Введите имя Telegram"
          />
          {options.map((option, index) =>
            <FilterOption selectedOptions={selectedOptions} changeSelector={changeSelector} name={option.name} key={index} index={index} type={option.type} value={option.value} optionRef={optionRef} variants={option.variants} setNewRuleSetting={setNewRuleSetting} typeInput={option.typeInput} />)
          }
        </div>
        <div className={styles.create__button} onClick={() => {
          sendAd();
        }}>Опубликовать объявление</div>
      </div>
    </div>
  )
}

export default CreateAd


