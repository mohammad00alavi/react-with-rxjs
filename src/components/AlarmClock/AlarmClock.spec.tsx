import { fireEvent, render } from "@testing-library/react";
import AlarmClock from "./AlarmClock";
import "@testing-library/jest-dom";

describe("AlarmClock component", () => {
    test("render component without crashing", () => {
        render(<AlarmClock />);
    });
    test("input field is present", () => {
        const { getByRole } = render(<AlarmClock />);
        expect(getByRole("spinbutton")).toBeInTheDocument();
    });
    test("check dismiss button functionality", () => {
        const { getByTestId } = render(<AlarmClock />);
        const button = getByTestId("dismissBtn");
        const flag = getByTestId("flag-title");
        fireEvent.click(button);
        expect(flag).toHaveTextContent(/Have a nice day!/i);
    });
});
