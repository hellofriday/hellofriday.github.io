import styles from './food.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {IFood} from "../data/IFood";
import {InputNum} from "./inputNum";
import {useState} from "react";
import {selectedFoodListAtom} from "../pages/foodList";
import {useAtom} from "jotai";

type Props = {
    detail: IFood
}
export function Food({detail}: Props) {
    const [currentBoughtNum, setCurrentBoughtNum] = useState(0)
    const [selectedFoodList, setSelectedFoodList] = useAtom(selectedFoodListAtom)
    const onValueChange = (value: number) => {
        setCurrentBoughtNum(value)

        const {id} = detail
        const boughtItem = {foodId: id, num: value}
        const index = selectedFoodList.findIndex(item => item.foodId === id)

        if (value === 0) {
            // remove item from list when value is zero
            if (index !== -1) {
                const newArr = [...selectedFoodList]
                newArr.splice(index, 1)
                setSelectedFoodList(newArr)
            }
        } else {
            if (index !== -1) {
                const newArr = [...selectedFoodList]
                newArr[index] = boughtItem
                setSelectedFoodList(newArr)
            } else {
                setSelectedFoodList([...selectedFoodList, boughtItem])
            }
        }
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
            { currentBoughtNum > 0 ? <InputNum min={0} onValueChange={onValueChange}/> : <div className={styles.add} onClick={buy}/>}
        </>
    </div>
}
