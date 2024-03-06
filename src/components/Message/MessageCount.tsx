import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect, useState } from "react";
import { messageService } from "../../observables/messageService";

const MessageCount = () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const subscription = messageService
            .getHistoryCount()
            .subscribe(setCount);

        return () => subscription.unsubscribe();
    }, []);
    return (
        <Badge badgeContent={count} color="primary">
            <NotificationsIcon />
        </Badge>
    );
};

export default MessageCount;
