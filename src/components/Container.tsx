import React from "react";
import { EmbedChildren } from "../types/ComponentTypes";
import { Box } from "@mui/material";

const Container: React.FC<EmbedChildren> = ({ children }) => {
    return (
        <Box gap={4} sx={{ display: "flex", flexDirection: "column" }}>
            {children}
        </Box>
    );
};

export default Container;
