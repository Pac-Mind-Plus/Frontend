"use client"
import { useThemeContext } from "@/components/ThemeContext";
import { Button, CssBaseline, Grid, Icon, Box, Paper, TextField, Typography, styled, FormControlLabel, Checkbox, Link} from "@mui/material";
import { AccountCircle as MuiPersonsCircleIcon } from '@mui/icons-material';
import { useRouter } from "next/navigation";
import PasswordInputComp from "@/components/shared/PasswordInput";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../authContext";

const ImgIcon = styled("img")(() => ({
    height: "100%",
}));

export default function RegisterPage() {
    const appTheme = useThemeContext();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState("");
    const router = useRouter();
    const [terms, setTerms] = useState(false);
    const { getAdminToken } = useAuth()

    const handleRegister = async () => {
        
        if (!terms) {
            setError("Please, accept the terms");
            return;
        }

        if (password != confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const adminToken = await getAdminToken()

        const userData = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            enabled: true,
            attributes: {},
            credentials: [
                {
                    type: "password",
                    value: password,
                    temporary: false
                }
            ]
        };

        try {
            await axios.post("http://localhost:8081/admin/realms/MindPlus/users", userData, {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                    'Content-Type': 'application/json',
                }
            })
            const { data } = await axios.get(`http://localhost:8081/admin/realms/MindPlus/users?username=${username}&exact=true`, {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                }
            })

            await axios.post(`http://localhost:8081/admin/realms/MindPlus/users/${data[0].id}/role-mappings/clients/e283494b-3bc7-446c-8611-16b5502064ec`, [{
                "id": "89b398a9-f5e1-491b-8ef8-aa740d2d780f",
                "name": "user",
                "clientRole": true
            }], {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                }
            })

            alert('User registered successfully!');
            router.push("/login");
        } catch (error) {
            console.log(error);
            setError("Failed to register user")
        }
    }

    return (
        <body
            style={{
                backgroundColor: "white",
            }}
        >
        <Grid
            container
            component="main"
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={6}
                md={7}
                sx={{
                    display: "relative",
                    backgroundImage: "url(login-page-background.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: '100vh',
                }}
            />
            <Paper
                sx={{
                    position: 'absolute',
                    margin: '0 0 0 8vw',
                    height: '90vh',
                    width: '45vw',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: '30px',
                    background: 'linear-gradient(45deg, rgba(2,0,36,0.4) 0%, rgba(0,126,200,0.4) 48%, rgba(0,212,255,0.4) 100%)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '-5px 5px 20px #003e64',
                }}>
                <div
                    style={{
                        margin: '5%',
                        display: 'row',
                        width: '100%',
                        color: 'white',
                    }}
                >

                    <Typography variant="h2" style={{ marginBottom: '1%' }}><MuiPersonsCircleIcon sx={{ mx: 0.5, fontSize: '150%'}} />REGISTER</Typography>
                    <Typography variant="h6" style={{ marginBottom: '1%', fontSize:"80%" }}>Name</Typography>
                    <TextField //TODO: Adicionar configuração como variante depois
                        label="Your Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        sx={{
                            width: '100%',
                            marginBottom: '1%',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            borderRadius: '8px',
                        }}
                    />
                    <Typography variant="h6" style={{ marginBottom: '1%', fontSize:"80%" }}>Last Name</Typography>
                    <TextField //TODO: Adicionar configuração como variante depois
                        label="Your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        sx={{
                            width: '100%',
                            marginBottom: '1%',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            borderRadius: '8px',
                        }}
                    />
                    <Typography variant="h6" style={{ marginBottom: '1%', fontSize:"80%" }}>Username</Typography>
                    <TextField //TODO: Adicionar configuração como variante depois
                        label="Your best username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={{
                            width: '100%',
                            marginBottom: '1%',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            borderRadius: '8px',
                        }}
                    />
                    <Typography variant="h6" style={{ marginBottom: '1%', fontSize:"80%" }}>Password</Typography>
                    <PasswordInputComp
                        label="That better password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            marginBottom: '1%',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            borderRadius: '8px',
                        }}
                    />
                    <Typography variant="h6" style={{ marginBottom: '1%', fontSize:"80%" }}>Repeat Password</Typography>
                    <PasswordInputComp
                        label="Repeat that better password"
                        value={confirmPassword}
                        onChange={(e: any) => setConfirmPassword(e.target.value)}
                        style={{
                            width: '100%',
                            marginBottom: '1%',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            borderRadius: '8px',
                        }}
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <Box
                        sx={{
                            width: '100%',

                        }}
                    >
                        <Button
                            sx={{
                                width: '100%',
                                height: '6vh',
                                fontSize: '180%',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '8px',
                                color: 'white',
                                ':hover': {
                                    background: 'linear-gradient(45deg, rgba(18,34,0,0.7) 0%, rgba(6,200,0,0.7) 48%, rgba(0,50,29,0.7) 100%)',
                                }
                            }}
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                        <FormControlLabel label={<Link href="terms">Terms of Privacy</Link>} control={
                            <Checkbox value={terms} onChange={() => {setTerms(!terms)}} sx={{color:"white"}} />}>
                        </FormControlLabel>
                        <Typography
                            sx={{
                                marginTop: '3%',
                                fontSize: 'bold',
                            }}
                        ><a href="/login">Login In</a></Typography>
                    </Box>
                </div>
            </Paper>
            <Grid
                xs={12}
                sm={8}
                md={5}
                component={'div'}
            >
                <Icon
                    sx={{
                        fontSize: 300,
                        textAlign: "center",
                        width: '40vw',
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ImgIcon
                        alt="MIND PLUS"
                        src={"/mind-plus-logo-log.png"}
                        sx={{
                            marginBottom: appTheme.spacing(0.5),
                        }}
                    />
                </Icon>
            </Grid>
        </Grid>
        </body>
    )
}