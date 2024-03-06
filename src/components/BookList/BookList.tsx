import React, { useEffect, useRef, useState } from "react";
import { Result, autoComplete } from "../../observables/bookService";
import { Card } from "@mui/material";

const BookList: React.FC = () => {
    const [results, setResults] = useState<Result[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef?.current) {
            const subscription = autoComplete(inputRef.current).subscribe(
                (newResults) => setResults(newResults)
            );

            return () => {
                subscription.unsubscribe();
            };
        }
    }, []);
    return (
        <Card>
            <input type="text" ref={inputRef} />
            <p>Search results:</p>
            {results &&
                results.length > 0 &&
                results
                    .slice(0, 3)
                    .map((result, index) => (
                        <li key={index}>{result.title}</li>
                    ))}
        </Card>
    );
};

export default BookList;
