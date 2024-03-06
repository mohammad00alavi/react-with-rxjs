import { Box, Button, Card } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const ComponentPageLayout = () => {
    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            <Card sx={{ marginBottom: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 1,
                        gap: 4,
                    }}
                >
                    <h1 style={{ fontSize: 16 }}>RxJs Components</h1>
                    <Link to={"/"}>
                        <Button variant="contained">Go to home</Button>
                    </Link>
                </Box>
            </Card>
            <Outlet />
        </Box>
    );
};

export default ComponentPageLayout;
