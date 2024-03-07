import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
    test("render without crashing", () => {
        render(<Navbar />);
    });
});
