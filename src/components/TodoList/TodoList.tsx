import { Box, Button, Input } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { filter, fromEvent } from "rxjs";

const inputObservableFunc = (input: HTMLInputElement) =>
    fromEvent<KeyboardEvent>(input, "keydown").pipe(
        filter((e) => e.key === "Enter")
    );

const TodoList = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [items, setItems] = useState<string[]>([]);
    useEffect(() => {
        if (inputRef?.current) {
            const subscribtion = inputObservableFunc(
                inputRef.current
            ).subscribe((e) => {
                const target = e.target as HTMLInputElement;
                if (target) {
                    setItems((prevItems) => [
                        ...prevItems,
                        target.value.toString(),
                    ]);
                }
            });

            return () => subscribtion.unsubscribe();
        }
    }, []);
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <Input
                    type="text"
                    inputRef={inputRef}
                    placeholder="Write your todo here..."
                />
                <Button variant="contained">Add</Button>
            </Box>
            {items.length > 0 && (
                <ul>
                    {items.map((item, index) => (
                        <li
                            style={{ listStyle: "none", textAlign: "left" }}
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
