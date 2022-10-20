import styles from "./foodList.module.scss"
import {Food} from "../components/food";
import {createCake} from "../data/AllFood";

const cakeList = createCake()

const FoodList = () => {

  return (
        <div className={styles.container}>
            <div className={styles.title}>请选择以下餐品</div>
            {cakeList.map(item => <Food detail={item} key={item.id}/>)}
        </div>
  )
}

export default FoodList
