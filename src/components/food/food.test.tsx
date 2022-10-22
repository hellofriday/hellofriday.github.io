import { fireEvent, render } from "@testing-library/react";
import { Food } from './food';
import cakeImg from "../../assets/img/cake.jpg";
import {IFood} from "../../data/IFood";

const cake = {
    image: {
        alt: 'cake',
        url: cakeImg
    },
    name: `蛋糕1`,
    id: '10',
    price: 10
} as IFood;

describe("Food", () => {
    it('should render correctly', () => {
        const { container } = render(<Food detail={cake} />);
        expect(container.querySelector('.item')).toBeInTheDocument()
    });

    it('should render inputNum correctly when click add/remove button or input', () => {
        const { container } = render(<Food detail={cake} />);
        fireEvent.click(container.querySelector('.add')!);
        expect(container.querySelector('.input-number')).toBeInTheDocument()

        const input = container.querySelector('.input')! as HTMLInputElement
        fireEvent.change(input, {target: {value: '0'}})
        expect(container.querySelector('.input-number')).not.toBeInTheDocument()

        fireEvent.click(container.querySelector('.add')!);
        expect(container.querySelector('.input-number')).toBeInTheDocument()

        fireEvent.click(container.querySelector('.minus-btn')!);
        expect(container.querySelector('.input-number')).not.toBeInTheDocument()
    });

    it('should be 1 when click add button', () => {
        const { container } = render(<Food detail={cake} />);
        fireEvent.click(container.querySelector('.add')!);
        const input = container.querySelector('.input')! as HTMLInputElement
        expect(input.value).toBe('1')
    });

});
