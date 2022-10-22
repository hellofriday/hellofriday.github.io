import styles from './inputNum.module.scss';
import {useEffect, useState} from 'react';
type Props = {
    min?: number;
    max?: number;
    defaultValue?: number;
    onValueChange: (value: number) => void;
};

export function InputNum({min = 1, max = 999, defaultValue = 1, onValueChange}: Props) {
    const [inputValue, setInputValue] = useState(defaultValue);

    if (!(defaultValue >= min && defaultValue <= max)) {
        throw Error('Please set valid defaultValue')
    }

    const onChange = (e: any) => {
        const value = e.target.value;

        // only receive number
        const v1 = value.replace(/[^\d]/g, '');
        if (v1 === '') {
            return;
        }
        const v2 = parseInt(v1);
        if (v2 <= min) {
            setInputValue(min);
        } else if (v2 >= max) {
            setInputValue(max);
        } else {
            setInputValue(v2);
        }
    };

    useEffect(() => {
        onValueChange(inputValue);
    }, [inputValue]);

    const minus = () => {
        if (inputValue <= min) {
            return;
        }
        setInputValue(inputValue - 1);
    };

    const add = () => {
        if (inputValue >= max) {
            return;
        }
        setInputValue(inputValue + 1);
    };

    return (
        <div className={styles['input-number']}>
            <div
                className={[
                    styles.btn,
                    inputValue <= min && styles.disable,
                    styles['minus-btn']
                ].join(' ')}
                onClick={minus}
            />
            <input type="text" className={styles['input']} onChange={onChange} value={inputValue}/>
            <div
                className={[
                    styles.btn,
                    inputValue >= max && styles.disable,
                    styles['plus-btn']
                ].join(' ')}
                onClick={add}
            />
        </div>
    );
}
