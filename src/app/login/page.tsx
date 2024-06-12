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
                    backgroundColor: 'rgba(0, 85, 135, 0.8)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '-10px 10px 30px #002236',
                }}>
                    <div
                        style={{
                            display: 'row',
                        }}
                    >
                        <Typography variant="h1" style={{marginBottom: '6vh'}}>Sign Up</Typography>
                        <TextField
                            label="Login"
                            id="fullWidth"
                        />
                    </div>                
            </Paper>
        </Grid>
    )
}