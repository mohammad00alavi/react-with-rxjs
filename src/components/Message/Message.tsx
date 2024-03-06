import React, { useRef } from "react";
import { messageService } from "../../observables/messageService";
import { Box, Button, Card, Input } from "@mui/material";

const Message: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

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
        <Card>
            <Box
                gap={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 1,
                }}
            >
                <Input
                    type="text"
                    inputRef={inputRef}
                    color="primary"
                    placeholder="Write a message here..."
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button variant="contained" onClick={sendMessage}>
                    Send Message
                </Button>
                <Button variant="outlined" onClick={clearMessages}>
                    Clear Messages
                </Button>
            </Box>
        </Card>
    );
};

export default Message;
