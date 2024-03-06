import React, { useEffect, useState } from "react";
import { messageService } from "../../observables/messageService";
import { messageTypes } from "../../types/MessageTypes";

const MessagesList: React.FC = () => {
    const [messages, setMessages] = useState<messageTypes[]>([]);
    useEffect(() => {
        const subscription = messageService
            .onMessage()
            .subscribe((message: messageTypes) => {
                if (message) {
                    setMessages((prevMessages) => [...prevMessages, message]);
                } else {
                    setMessages([]);
                }
            });

        return () => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
    }, [messages]);
    return (
        <ul>
            {messages &&
                messages.map((message, index) => (
                    <li style={{ listStyle: "none" }} key={index}>
                        {message.text}
                    </li>
                ))}
        </ul>
    );
};

export default MessagesList;
