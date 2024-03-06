import React, { useRef } from "react";
import { messageObserver } from "../../observables/messageObserver";

const Message: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    function sendMessage() {
        if (inputRef.current?.value) {
            messageObserver.sendMessage(inputRef.current.value);
            inputRef.current.value = "";
        }
    }

    function clearMessages() {
        messageObserver.clearMessage();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={sendMessage}>Send Message</button>
            <button onClick={clearMessages}>Clear Messages</button>
        </div>
    );
};

export default Message;
