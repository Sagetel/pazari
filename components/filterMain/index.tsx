'use client'
import Image from 'next/image'
import { useState, useEffect, useRef, RefObject } from 'react'
import clsx from 'clsx'
import FilterOption from '../filterOptions'
import styles from './style.module.scss'
function FilterMain() {
    const pathImages = [
        "black-car",
        "car-charging",
        "race-bike",
        "cargo",
    ]
    const [selectedCar, setSelectedCar] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState<number | null>(null);
    const [setting, setSetting] = useState({ brand: '', model: '', gear: '', engine: '', yearMin: "0", yearMax: "2025", mileagemin: 0, mileageMax: 0, type: 'cars', volumeMin: '0', volumeMax: '0' })
    const [options, setOptions] = useState([
        { name: 'Бренд', type: 'brand', value: '', variants: [' &#10006;&nbsp;&nbsp;&nbsp;Любой', 'BMW', 'Audi', 'Lada', 'Chery', 'Honda', 'Kia', 'Renauilt', 'Nissan', 'Skoda', 'Volfswagen'] },
        { name: 'Модель', type: 'brand', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любая', 'BMW', 'Audi', 'Lada', 'Chery', 'Honda', 'Kia', 'Renauilt', 'Nissan', 'Skoda', 'Volfswagen'] },
        { name: 'Привод', type: 'gear', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Зданий', 'Передний', 'Полный'] },
        { name: 'Двигатель', type: 'engine', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Бензин', 'Дизель', 'Электро', 'Гибрид'] },
        { name: 'Год от', type: 'yearMin', value: '', variants: ['Год от', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'] },
        { name: 'до', type: 'yearMax', value: '', variants: ['год до', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'] },
        { name: 'Объем от', type: 'volumeMin', value: '', variants: ['Объем от', '0.1л', '0.2л', '0.3л', '0.4л', '0.5л', '0.6л', '0.7л', '0.8л', '0.9л', '1л', '1.1л', '1.2л', '1.3л', '1.4л', '1.5л', '1.6л', '1.7л', '1.8л', '1.9л', '2л', '2.1л', '2.2л', '2.3л', '2.4л', '2.5л', '2.6л', '2.7л', '2.8л', '2.9л', '3л', '3.5л', '4л', '4.5л', '5л', '5.5л', '6л', '6.5л', '7л', '7.5л', '8л', '8.5л', '9л', '9.5л'] },
        { name: 'Объем до', type: 'volumeMax', value: '', variants: ['Объем до', '0.1л', '0.2л', '0.3л', '0.4л', '0.5л', '0.6л', '0.7л', '0.8л', '0.9л', '1л', '1.1л', '1.2л', '1.3л', '1.4л', '1.5л', '1.6л', '1.7л', '1.8л', '1.9л', '2л', '2.1л', '2.2л', '2.3л', '2.4л', '2.5л', '2.6л', '2.7л', '2.8л', '2.9л', '3л', '3.5л', '4л', '4.5л', '5л', '5.5л', '6л', '6.5л', '7л', '7.5л', '8л', '8.5л', '9л', '9.5л'] },
    ])
    const changeSelector = (id: number | null) => {
        if (id === selectedOptions) setSelectedOptions(null)
        else setSelectedOptions(id)
    }
    const setNewRuleSetting = (type: string, value: string) => {
        console.log("sdfsdf");

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
    var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/car_brand";
    var token = "314eb29270f3f29e425779f785d31cf34ca77206";
    var query = "форд";

    var optionsFetch: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({ query: query })
    }

    // fetch(url, optionsFetch)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log("error", error));

    const optionRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    //@ts-ignore
    const handleOutsideClick = (e) => {
        console.log(e.target.offsetParent, optionRef.current);
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
                            <FilterOption selectedOptions={selectedOptions} changeSelector={changeSelector} name={option.name} key={index} index={index} type={option.type} value={option.value} optionRef={optionRef} variants={option.variants} setNewRuleSetting={setNewRuleSetting} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMain