"use client"
import { useThemeContext } from "@/components/ThemeContext";
import { CssBaseline, Grid, Icon, Paper, TextField, Typography, styled } from "@mui/material";

const ImgIcon = styled("img")(() => ({
    height: "100%",
}));

export default function LoginPage() {
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
                    backgroundColor: 'rgba(0, 126, 200, 0.8)',
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
                        <Typography variant="h2" style={{marginBottom: '10%'}}>SIGN UP</Typography>
                        <Typography variant="h6" style={{marginBottom: '1%'}}>Email</Typography>
                        <TextField //TODO: Adicionar configuração como variante depois
                            label="Seu melhor email"
                            sx={{
                                width: '100%',
                                marginBottom: '3%',
                                color: 'secundary',
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
                                '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                                    color: 'white'
                                },
                                '.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                                    color: 'white !important'
                                }
                            }}
                        />
                        <Typography variant="h6" style={{marginBottom: '1%'}}>Senha</Typography>
                        <TextField //TODO: Adicionar configuração como variante depois
                            label="Sua melhor Senha"
                            sx={{
                                width: '100%',
                                marginBottom: '3%',
                                color: 'secundary',
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
                                '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                                    color: 'white'
                                },
                                '.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                                    color: 'white !important'
                                }
                            }}
                        />
                    </div>                
            </Paper>
        </Grid>
    )
}