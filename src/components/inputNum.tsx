import styles from './inputNum.module.scss'
import {useState} from "react";

type Props = {
    min?: number
    max?: number
    defaultValue?: number
    onValueChange: Function
}
export function InputNum({min = 1, max = 999, defaultValue = 1, onValueChange}: Props) {
    const [inputValue, setInputValue] = useState(defaultValue)
    const onChange = (e: any) => {
        const value = e.target.value
        const v1 = value.replace(/[^\d]/g,'')
        try {
            const v2 = parseInt(v1)
            if (v2 >= max) {
                return;
            }
            onValueChange(v2)
            setInputValue(v2)
        } catch (e) {
            throw new Error('please only enter integer!')
        }
    }

    const minus = () => {
        if (inputValue <= min) {
            return
        }
        setInputValue(inputValue - 1)
    }

    const add = () => {
        if (inputValue >= max) {
            return
        }
        setInputValue(inputValue + 1)
    }

    return <div className={styles['input-number']}>
        <div className={[styles.btn, inputValue <= min && styles.disable, styles['minus-btn']].join(' ')} onClick={minus}/>
        <input type="text" className={styles['input']} onChange={onChange} value={inputValue}/>
        <div className={[styles.btn,inputValue >= max && styles.disable, styles['plus-btn']].join(' ')} onClick={add}/>
    </div>
}
