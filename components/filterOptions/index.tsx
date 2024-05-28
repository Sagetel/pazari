'use client'
import { ChangeEvent, RefObject } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import styles from './style.module.scss'
interface Props {
    name: string
    type: string
    value: string
    index: number
    selectedOptions: number | null
    changeSelector: (id: number | null) => void
    setNewRuleSetting: (type: string, value: string) => void
    key: number
    variants: Array<string>
    optionRef: RefObject<HTMLDivElement>
    typeInput: string
}
function FilterOption({ name, type, value, variants, index, selectedOptions, changeSelector, optionRef, setNewRuleSetting, typeInput }: Props) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (typeInput === 'textarea' || typeInput === 'photo') {
            const newValue = e.target.value
            setNewRuleSetting(type, newValue);
            return
        }
        const newValue = e.target.value.replace(/\D/g, "")
        setNewRuleSetting(type, newValue);
    };
    return (
        <div className={styles.option} >
            {typeInput === "string" ?
                <div className={clsx(styles.option__menu, (value && styles.option__selected))} onClick={() => { changeSelector(index) }}>
                    <div className={clsx(styles.option__text,)} >
                        {value ? value : name}
                    </div>
                    <div className={styles.option__triangle} >
                        <Image
                            src='/icons/triangle.svg'
                            width={15}
                            height={15}
                            alt="triangle"
                        />
                    </div>
                    {selectedOptions === index &&
                        <div className={clsx(styles.option__list)} ref={optionRef}>
                            {variants.map((variant, index) => (
                                <div className={styles.option__item} key={index} onClick={() => {
                                    (index === 0) ? setNewRuleSetting(type, '') : setNewRuleSetting(type, variant);
                                }} dangerouslySetInnerHTML={{ __html: variant }} />
                            ))}
                        </div>
                    }
                </div>
                :
                typeInput === "textarea" ?
                    <textarea className={styles.option__menu} placeholder={name} value={value} rows={7}
                        onChange={handleInputChange} />
                    :
                    typeInput === "photo" ?
                        <input className={styles.option__menu} onChange={handleInputChange} type="file" name="photo" accept="image/*"/>
                            :
                            <input type="text" className={styles.option__menu} placeholder={name} value={value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                onChange={handleInputChange} />
            }
                        </div>
    )
}

            export default FilterOption