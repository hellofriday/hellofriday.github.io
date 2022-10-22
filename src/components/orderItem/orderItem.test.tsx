import { render } from "@testing-library/react";
import cakeImg from "../../assets/img/cake.jpg";
import {ISelectedFood} from "../../data/ISelectedFood";
import {OrderItem} from "./orderItem";

const cake = {
    image: {
        alt: 'cake',
        url: cakeImg
    },
    name: `蛋糕1`,
    id: '10',
    price: 10,
    num: 2
} as ISelectedFood;

describe("OrderItem", () => {
    it('should render correctly', () => {
        const { container } = render(<OrderItem detail={cake} />);
        expect(container.querySelector('.item')).toBeInTheDocument()
    });

    it('total price should be 20', () => {
        const { container } = render(<OrderItem detail={cake} />);
        expect(container.querySelector('.totalPrice')!.innerHTML).toBe('￥20')
    });

});
