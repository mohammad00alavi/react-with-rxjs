/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";

describe("test Counter component", () => {
    test("render without crashing", () => {
        render(<Counter />);
    });
    test("initial count is 0", () => {
        const { getByText } = render(<Counter />);
        expect(getByText("0")).toBeInTheDocument();
    });
    test("check the counter functionality", () => {
        const { getByTestId } = render(<Counter />);
        const button = getByTestId("button");
        fireEvent.click(button);
        const { getByText } = render(<Counter />);
        expect(getByText("1")).toBeInTheDocument();
        fireEvent.click(button);
        expect(getByText("2")).toBeInTheDocument();
    });
});
