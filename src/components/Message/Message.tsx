import React from "react";
import { messageObserver } from "../../observables/messageObserver";

const Message: React.FC = () => {
    function sendMessage() {
        messageObserver.sendMessage("New Message!");
    }

    function clearMessages() {
        messageObserver.clearMessage();
    }
    return (
        <div>
            <h2>Message</h2>
            <button onClick={sendMessage}>Send Message</button>
            <button onClick={clearMessages}>Clear Messages</button>
        </div>
    );
};

export default Message;
