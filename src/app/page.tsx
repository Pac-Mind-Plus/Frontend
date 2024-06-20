import NabBar from "@/components/navBar/NabBar";
import { Typography } from "@mui/material"

export default function Home() {
  return (
    <main>
      <NabBar />
      <Typography variant="h2" color={'#DADADA'} align="center">Olá Mundos</Typography>

    </main>
  );
}
