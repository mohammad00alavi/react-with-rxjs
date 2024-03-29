import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Observable, Subscription, fromEvent } from "rxjs";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const button = document.getElementById("button") as HTMLElement;
        if (!button) return;
        const button$: Observable<MouseEvent> = fromEvent<MouseEvent>(
            button,
            "click"
        );
        const subscribtion: Subscription = button$.subscribe({
            next: () => setCount((prevCount) => prevCount + 1),
            error: (err) => console.log(err),
            complete: () => console.log("completed!"),
        });

        return () => subscribtion.unsubscribe();
    }, []);
    return (
        <Card>
            <p>{count}</p>
            <button id="button" data-testid="button">
                Click me!
            </button>
        </Card>
    );
};

export default Counter;
