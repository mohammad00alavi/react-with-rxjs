import { render, waitFor } from "@testing-library/react";
import BookList from "./BookList";
import { Subject } from "rxjs";
import { Result } from "../../observables/bookService";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

describe("BookList component", () => {
    test("render without crashing", () => {
        render(<BookList />);
    });
    test("input field is present", () => {
        const { getByRole } = render(<BookList />);
        expect(getByRole("textbox")).toBeInTheDocument();
    });

    test("displays search results", async () => {
        const results$ = new Subject<Result[]>();
        const mockObservable = () => results$;
        const mockResults: Result[] = [
            { title: "Book 1" },
            { title: "Book 2" },
            { title: "Book 3" },
        ];

        const { getByText } = render(<BookList observable={mockObservable} />);

        act(() => {
            results$.next(mockResults);
        });

        await waitFor(() => {
            expect(getByText("Book 1")).toBeInTheDocument();
            expect(getByText("Book 2")).toBeInTheDocument();
            expect(getByText("Book 3")).toBeInTheDocument();
        });
    });
});
