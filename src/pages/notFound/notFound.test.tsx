import { render, screen } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import App from "../../App";


describe("NotFound", () => {
    it('should render correctly', () => {
        const { container } = render(<MemoryRouter initialEntries={['/asdds']}>
            <App />
        </MemoryRouter>);
        expect(screen.getByText('404')).toBeInTheDocument()
    });
});
