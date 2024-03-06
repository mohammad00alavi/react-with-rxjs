import { Box, Card } from "@mui/material";
import MessageCount from "../Message/MessageCount";

const Navbar = () => {
    return (
        <Card>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 2,
                }}
            >
                <h1 style={{ fontSize: 16 }}>Messenger</h1>
                <MessageCount />
            </Box>
        </Card>
    );
};

export default Navbar;
