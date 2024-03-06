import React, { useEffect, useRef, useState } from "react";
import { messageService } from "../../observables/messageService";

const Message: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const subscription = messageService
            .getHistoryCount()
            .subscribe(setCount);

        return () => subscription.unsubscribe();
    }, []);

    const sendMessage = () => {
        if (inputRef.current?.value) {
            messageService.sendMessage(inputRef.current.value);
            inputRef.current.value = "";
        }
    };

    const clearMessages = () => {
        messageService.clearMessage();
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={sendMessage}>Send Message</button>
            <button onClick={clearMessages}>Clear Messages</button>
            <p>Number of Messages: {count}</p>
        </div>
    );
};

export default Message;
