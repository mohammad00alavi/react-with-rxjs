import React, { useEffect, useState } from "react";
import {
    messageObserver,
    messageTypes,
} from "../../observables/messageObserver";
import Message from "./Message";

const MessageContainer: React.FC = () => {
    const [messages, setMessages] = useState<messageTypes[]>([]);
    useEffect(() => {
        const subscription = messageObserver
            .onMessage()
            .subscribe((message: messageTypes) => {
                if (message.text === "") {
                    setMessages([]);
                }
                if (message) {
                    setMessages((prevMessages) => [...prevMessages, message]);
                }
            });

        return () => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
    }, [messages]);
    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>{message.text}</div>
            ))}
            <Message />
        </div>
    );
};

export default MessageContainer;
