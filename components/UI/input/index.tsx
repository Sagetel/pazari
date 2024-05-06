import styles from './style.module.scss'
import { ChangeEvent, RefObject } from 'react'

interface Props {
    placeholder: string
    value: string
    setNewValue: (value: string, type: string) => void
    type: string
}

function Input(props: Props) {
    const { placeholder, value, setNewValue, type } = props

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value, type);
    };

    return (
        <input type={type} className={styles.input} placeholder={placeholder} value={value}
            onChange={handleInput} />
    )
}

export default Input