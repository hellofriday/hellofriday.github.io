import styles from "./order.module.scss"
import {useAtom} from "jotai";
import {OrderItem} from "../components/orderItem";
import {selectedFoodListAtom} from "./foodList";

const Order = () => {
    const [selectedFoodList] = useAtom(selectedFoodListAtom)

    const totalPrice = ()=>{
        let price = 0
        selectedFoodList.forEach(item => {
            price += item.num * item.price
        })
        return price
    }

  return (
        <div className={styles.container}>
            <div className={styles.title}>请结账</div>
            <div className={styles['title-area']}>
                <div>名称</div>
                <div>单价</div>
                <div>数量</div>
                <div>总价</div>
            </div>
            {selectedFoodList.map(item => <OrderItem key={item.id} detail={item}/>)}
            <div className={styles.total}>
                总计: <div className={styles.price}>{`￥${totalPrice()}`}</div>
            </div>
        </div>
  )
}

export default Order
