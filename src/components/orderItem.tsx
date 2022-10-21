import styles from './orderItem.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {ISelectedFood} from "../data/ISelectedFood";
import 'react-lazy-load-image-component/src/effects/opacity.css';

type Props = {
    detail: ISelectedFood
}
export function OrderItem({detail}: Props) {

    return <div className={styles.item}>
        <LazyLoadImage
            className={styles.img}
            alt={detail.image.alt}
            effect="opacity"
            src={detail.image.url} />
        <div className={styles.info}>
            <div className={styles.name}>{detail.name}</div>
            <div className={styles.price}>
                {`￥${detail.price}`}
            </div>
            <div className={styles.num}>{detail.num}</div>
            <div className={styles.totalPrice}>{`￥${detail.num * detail.price}`}</div>
        </div>
    </div>
}
