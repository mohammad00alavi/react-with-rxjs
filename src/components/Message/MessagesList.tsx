import React, { useEffect, useState } from "react";
import { messageService } from "../../observables/messageService";
import { messageTypes } from "../../types/MessageTypes";
import { Card } from "@mui/material";

const MessagesList: React.FC = () => {
    const [history, setHistory] = useState<messageTypes[]>([]);
    useEffect(() => {
        const historySubscription = messageService
            .getHistory()
            .subscribe(setHistory);

        return () => {
            if (historySubscription) {
                historySubscription.unsubscribe();
            }
        };
    }, [history]);
    return (
        <Card>
            <p>Messages List:</p>
            <ul>
                {history && history.length > 0 ? (
                    history.map((message, index) => (
                        <li style={{ listStyle: "none" }} key={index}>
                            {message.text}
                        </li>
                    ))
                ) : (
                    <p>There is no message!</p>
                )}
            </ul>
        </Card>
    );
};

export default MessagesList;
