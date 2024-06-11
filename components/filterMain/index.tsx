'use client'
import Image from 'next/image'
import { useState, useEffect, useRef, RefObject } from 'react'
import { optionsFields, OptionsFieldsInterface } from '../../public/scripts/options'
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
    horseMin: string;
    horseMax: string;
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

    const [options, setOptions] = useState<OptionsFieldsInterface[]>(optionsFields)
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMain