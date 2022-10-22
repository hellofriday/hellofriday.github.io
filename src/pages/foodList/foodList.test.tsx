import { fireEvent, render, screen } from "@testing-library/react";
import FoodList from "./foodList";
import {BrowserRouter} from "react-router-dom";
import App from "../../App";


describe("FoodList", () => {
    it('should render correctly', () => {
        const { container } = render(<FoodList />, {wrapper: BrowserRouter});
        expect(container.querySelector('.container')).toBeInTheDocument()
    });

    it("should show/hide '去结账' button correctly when click food add button or minus button", () => {
        const { container } = render(<FoodList />, {wrapper: BrowserRouter});
        const firstFood = container.querySelector('.item')! as HTMLElement
        expect(firstFood).toMatchSnapshot()

        fireEvent.click(firstFood.querySelector('.add')!);
        expect(container.querySelector('.orderBtn')).toBeInTheDocument()

        fireEvent.click(firstFood.querySelector('.minus-btn')!);
        expect(container.querySelector('.orderBtn')).not.toBeInTheDocument()
    });

    it("should navigate to order page when click '去结账' button", () => {
        const { container } = render(<App />, {wrapper: BrowserRouter});
        const firstFood = container.querySelector('.item')! as HTMLElement
        fireEvent.click(firstFood.querySelector('.add')!);
        const orderBtn = container.querySelector('.orderBtn')! as HTMLElement
        expect(orderBtn).toBeInTheDocument()

        fireEvent.click(orderBtn);
        expect(screen.getByText('请结账')).toBeInTheDocument();
    });
});
