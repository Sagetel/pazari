'use client'
import { useEffect, useRef, RefObject } from 'react'
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
}
function FilterOption({ name, type, value, variants, index, selectedOptions, changeSelector, optionRef, setNewRuleSetting }: Props) {

    return (
        <div className={styles.option} >
            {/* <div className={styles.option__lable}>{name}</div> */}
            <div className={styles.option__menu} onClick={() => { changeSelector(index) }}>
                <div className={styles.option__text} >
                    {value ? value : name}
                </div>
                <div className={styles.option__triangle}>
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
                            }} dangerouslySetInnerHTML={{ __html: variant }}/>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default FilterOption