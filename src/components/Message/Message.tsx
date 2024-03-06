import React, { useRef } from "react";
import { messageService } from "../../observables/messageService";

const Message: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    function sendMessage() {
        if (inputRef.current?.value) {
            messageService.sendMessage(inputRef.current.value);
            inputRef.current.value = "";
        }
    }

    function clearMessages() {
        messageService.clearMessage();
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
