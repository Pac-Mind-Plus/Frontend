import { Box } from "@mui/material";
import NavBar from "../../components/navBar/NabBar";

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
            <NavBar/>
            {children}
        </Box>
    )
}