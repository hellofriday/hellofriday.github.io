import {fireEvent, render, screen} from "@testing-library/react";
import Order from "./order";
import App from "../../App";
import {BrowserRouter} from "react-router-dom";


describe("Order", () => {
    it('should render correctly', () => {
        const { container } = render(<Order />);
        expect(container.querySelector('.container')).toBeInTheDocument()
    });

    it("should render totalPrice correctly", () => {
        const { container } = render(<App />, {wrapper: BrowserRouter});
        const foodList = container.querySelectorAll('.item')! as NodeListOf<any>
        const firstFood = foodList[0] as HTMLElement
        const second = foodList[1] as HTMLElement
        fireEvent.click(firstFood.querySelector('.add')!);
        fireEvent.click(second.querySelector('.add')!);
        const orderBtn = container.querySelector('.orderBtn')! as HTMLElement
        expect(orderBtn).toBeInTheDocument()

        fireEvent.click(orderBtn);
        expect(screen.getByTestId('totalPrice').innerHTML).toBe('￥21')
    });
});
