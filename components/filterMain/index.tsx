'use client'
import Image from 'next/image'
import { useState, useEffect, useRef, RefObject } from 'react'
import clsx from 'clsx'
import FilterOption from '../filterOptions'
import styles from './style.module.scss'
interface Setting {
    brand: string;
    model: string;
    gear: string;
    transmission: string;
    engine: string;
    yearMin: string;
    yearMax: string;
    mileageMin: string;
    mileageMax: string;
    type: string;
    volumeMin: string;
    volumeMax: string;
    carBody: string;
    priceMin: string;
    priceMax: string;
}

interface Props {
    setting: Setting;
    setSetting: React.Dispatch<React.SetStateAction<Setting>>;
}
function FilterMain(props: Props) {
    const setting = props.setting
    const setSetting = props.setSetting
    const pathImages = [
        "black-car",
        "car-charging",
        "race-bike",
        "cargo",
    ]
    const [selectedCar, setSelectedCar] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState<number | null>(null);

    const [options, setOptions] = useState([
        { name: 'Бренд', type: 'brand', value: '', variants: [' &#10006;&nbsp;&nbsp;&nbsp;Любой', 'BMW', 'Hyundai', 'Audi', 'Lada', 'Chery', 'Honda', 'Kia', 'Renauilt', 'Nissan', 'Skoda', 'Volfswagen'], typeInput: 'string' },
        { name: 'Модель', type: 'brand', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любая', 'BMW', 'Audi', 'Lada', 'Chery', 'Honda', 'Kia', 'Renauilt', 'Nissan', 'Skoda', 'Volfswagen'], typeInput: 'string' },
        { name: 'Двигатель', type: 'engine', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Бензин', 'Дизель', 'Электро', 'Гибрид'], typeInput: 'string' },
        { name: 'Год от', type: 'yearMin', value: '', variants: ['Год от', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'], typeInput: 'string' },
        { name: 'до', type: 'yearMax', value: '', variants: ['год до', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'], typeInput: 'string' },
        { name: 'Привод', type: 'gear', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Зданий', 'Передний', 'Полный'], typeInput: 'string' },
        { name: 'Объем от', type: 'volumeMin', value: '', variants: ['Объем от', '0.1л', '0.2л', '0.3л', '0.4л', '0.5л', '0.6л', '0.7л', '0.8л', '0.9л', '1л', '1.1л', '1.2л', '1.3л', '1.4л', '1.5л', '1.6л', '1.7л', '1.8л', '1.9л', '2л', '2.1л', '2.2л', '2.3л', '2.4л', '2.5л', '2.6л', '2.7л', '2.8л', '2.9л', '3л', '3.5л', '4л', '4.5л', '5л', '5.5л', '6л', '6.5л', '7л', '7.5л', '8л', '8.5л', '9л', '9.5л'], typeInput: 'string' },
        { name: 'Объем до', type: 'volumeMax', value: '', variants: ['Объем до', '0.1л', '0.2л', '0.3л', '0.4л', '0.5л', '0.6л', '0.7л', '0.8л', '0.9л', '1л', '1.1л', '1.2л', '1.3л', '1.4л', '1.5л', '1.6л', '1.7л', '1.8л', '1.9л', '2л', '2.1л', '2.2л', '2.3л', '2.4л', '2.5л', '2.6л', '2.7л', '2.8л', '2.9л', '3л', '3.5л', '4л', '4.5л', '5л', '5.5л', '6л', '6.5л', '7л', '7.5л', '8л', '8.5л', '9л', '9.5л'], typeInput: 'string' },
        { name: 'Коробка', type: 'transmission', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любая', 'Автоматическая', 'Робот', 'Механическая'], typeInput: 'string' },
        { name: 'Кузов', type: 'carBody', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Седан', 'Хэтчбек', 'Хэтчбек 3дв.', 'Хэтчбек 5дв.', 'Купе', 'Лифтбек', 'Кабриолет', 'Пикап', 'Внедоожник', 'Внедоожник 3дв.', 'Внедоожник 5дв.', 'Минивен', 'Фургон'], typeInput: 'string' },
        { name: 'Пробег от, км', type: 'mileagemin', value: '', variants: [''], typeInput: 'number' },
        { name: 'до', type: 'mileageMax', value: '', variants: [''], typeInput: 'number' },
        { name: 'Цена от, ₽', type: 'priceMin', value: '', variants: [''], typeInput: 'number' },
        { name: 'до', type: 'priceMax', value: '', variants: [''], typeInput: 'number' },

    ])
    const changeSelector = (id: number | null) => {
        if (id === selectedOptions) setSelectedOptions(null)
        else setSelectedOptions(id)
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

    const optionRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    //@ts-ignore
    const handleOutsideClick = (e) => {
        if (e.target.offsetParent != optionRef.current) {
            changeSelector(null)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);
    return (
        <div className={styles.filter}>
            <div className={styles.filter__container}>
                <div className={styles.filter__menu}>
                    <div className={styles.filter__panel}>
                        {pathImages.map((image, index) =>
                            <div className={clsx(styles.filter__car, (selectedCar === index && styles.filter__selected))} key={image} onClick={() => { setSelectedCar(index) }}>
                                <Image
                                    className={styles.filter__icon}
                                    src={`/icons/cars/${image}.svg`}
                                    width={45}
                                    height={40}
                                    alt="Picture of the author"
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.filter__options}>
                        {options.map((option, index) =>
                            <FilterOption selectedOptions={selectedOptions} changeSelector={changeSelector} name={option.name} key={index} index={index} type={option.type} value={option.value} optionRef={optionRef} variants={option.variants} setNewRuleSetting={setNewRuleSetting} typeInput={option.typeInput} />)
                        }
                        <div className={styles.filter__btn}>Показать результаты</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMain