import styles from "./foodList.module.scss"
import {Food} from "../components/food";
import {createCake} from "../data/AllFood";
import {ISelectedFood} from "../data/ISelectedFood";
import {atom, useAtom} from "jotai";
import {useEffect} from "react";

const cakeList = createCake()
export const selectedFoodListAtom = atom([] as ISelectedFood[])

const FoodList = () => {
    const [selectedFoodList] = useAtom(selectedFoodListAtom)

    useEffect(()=>{
        console.log(selectedFoodList)
    })

    const goShoppingCart = () => {
        console.log(selectedFoodList)
    }
  return (
        <div className={styles.container}>
            <div className={styles.title}>请选择以下餐品</div>
            {cakeList.map(item => <Food detail={item} key={item.id}/>)}
            <div className={styles.btn} onClick={goShoppingCart}>去结账</div>
        </div>
  )
}

export default FoodList
