"use client"
import { useThemeContext } from "@/components/ThemeContext";
import { Button, CssBaseline, Grid, Icon, Box, Paper, TextField, Typography, styled, IconButton, InputAdornment, Tooltip } from "@mui/material";
import {
    AccountCircle as MuiPersonsCircleIcon,
    VisibilityOffTwoTone as VisibilityOffTwoToneIcon,
    VisibilityTwoTone as VisibilityTwoToneIcon,
} from '@mui/icons-material';
import PasswordInputComp from "@/components/shared/PasswordInput";

const ImgIcon = styled("img")(() => ({
    height: "100%",
}));

export default function LoginPage() { //TODO: Colocar os componentes em comum em um leyout para aplicar o efeito de animate
    const appTheme = useThemeContext();

    return (
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
                    left: '41.67%',
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
                        
                        <Typography variant="h2" style={{marginBottom: '5%'}}><MuiPersonsCircleIcon sx={{ mx: 0.5, fontSize: '300%', marginBottom: '1%' }}/>SIGN UP</Typography>
                        <Typography variant="h6" style={{marginBottom: '1%'}}>Email</Typography>
                        <TextField //TODO: Adicionar configuração como variante depois
                            label="Your best email"
                            sx={{
                                width: '100%',
                                marginBottom: '3%',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                borderRadius: '8px',
                                input: {
                                    color: 'white',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                color: 'white',
                                opacity: 1,
                                },
                                '& .MuiOutlinedInput-root': {
                                '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)',
                                    },
                                },
                                '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                                    color: 'white'
                                },
                            }}
                        />
                        <Typography variant="h6" style={{marginBottom: '1%'}}>Password</Typography>
                        <PasswordInputComp
                            label="That Better Password"
                            style={{
                                width: '100%',
                                marginBottom: '3%',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                borderRadius: '8px',
                                input: {
                                    color: 'white',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                color: 'white',
                                opacity: 1,
                                },
                                '& .MuiOutlinedInput-root': {
                                '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)',
                                    },
                                },
                                '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                                    color: 'white'
                                },
                            }}
                        />
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
                            onClick={() => alert('LOGADOOOOOO')}
                        >
                            Entrar
                        </Button>
                        <Typography
                            sx={{
                                marginTop: '3%',
                                fontSize: 'bold'
                            }}
                        ><a href="/register">I Don't have an account</a></Typography>
                    </div>                
            </Paper>
        </Grid>
    )
}