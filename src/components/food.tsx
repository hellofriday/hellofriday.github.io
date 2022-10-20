import styles from './food.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {IFood} from "../data/IFood";
import {InputNum} from "./inputNum";
import {useState} from "react";

type Props = {
    detail: IFood
}
export function Food({detail}: Props) {
    const [currentBoughtNum, setCurrentBoughtNum] = useState(0)

    const onValueChange = (value: number) => {
        setCurrentBoughtNum(value)
    }

    const buy = () => {
        setCurrentBoughtNum(1)
    }

    return <div className={styles.item}>
        <LazyLoadImage
            className={styles.img}
            alt={detail.image.alt}
            src={detail.image.url} />
        <div className={styles.info}>
            <div className={styles.name}>{detail.name}</div>
            <div className={styles.price}>
                <b>￥</b>
                <span>{detail.price}</span>
            </div>
        </div>
        <div className={styles.gap}/>
        <>
            { currentBoughtNum > 0 ? <InputNum onValueChange={onValueChange}/> : <div className={styles.add} onClick={buy}/>}
        </>
    </div>
}
