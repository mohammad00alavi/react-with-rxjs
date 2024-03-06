import React, { useEffect, useState } from "react";
import { messageService } from "../../observables/messageService";
import { messageTypes } from "../../types/MessageTypes";

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
        <ul>
            {history &&
                history.map((message, index) => (
                    <li style={{ listStyle: "none" }} key={index}>
                        {message.text}
                    </li>
                ))}
        </ul>
    );
};

export default MessagesList;
