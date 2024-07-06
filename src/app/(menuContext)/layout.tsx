"use client"
import NavBar from "@/components/navBar/NabBar";
import { Box } from "@mui/material";
import { AuthProvider } from "../(authContext)/authContext";

export default function menuRootContext({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Box
            sx={{
                pt: "68px",
            }}
        > 
            <NavBar />
            {children}
        </Box>
    )
}