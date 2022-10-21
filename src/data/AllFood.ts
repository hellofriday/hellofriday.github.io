import {IFood} from "./IFood";
import cakeImg from '../assets/img/cake.jpg'

export function createCake() {
    const cakeList = [] as IFood[];
    for (let i = 0; i < 20; i++) {
        const cake = {
            image: {
                alt: 'cake',
                url: cakeImg
            },
            name: `蛋糕${i}`,
            id: i + '',
            price: i + 10
        } as IFood
        cakeList.push(cake)
    }
    return cakeList
}
