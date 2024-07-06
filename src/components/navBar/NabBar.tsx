"use client";

import React from "react";

import {
    AppBar,
    Toolbar,
    Icon,
    Typography,
    Tooltip,
    IconButton,
} from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

import {
    Brightness4TwoTone as Brightness4TwoToneIcon,
    Brightness7TwoTone as Brightness7TwoToneIcon,
    ExitToAppTwoTone as ExitToAppTwoToneIcon,
    HelpTwoTone as HelpTwoToneIcon,
} from "@mui/icons-material";
import CustomLink from "../shared/navigation/CustomLink";
import { useRouter } from "next/navigation";

const ImgIcon = styled("img")(() => ({
    height: "95%",
}));

const DivFlexGrow = styled("div")(() => ({
    flexGrow: 1,
}));

function NavBar() {
    const router = useRouter()

    const handleOnLogoIconClick = () => {
        router.push("/");
    };

    const appTheme = useTheme();

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "rgba(0,126,200, 1)",
                    
                    zIndex: appTheme.zIndex.drawer + 1,
                    transition: appTheme.transitions.create(
                        ["width", "margin"],
                        {
                            easing: appTheme.transitions.easing.sharp,
                            duration:
                                appTheme.transitions.duration.leavingScreen,
                        },
                    ),
                }}
            >
                <Toolbar>
                    <Tooltip title="Home">
                        <Icon
                            onClick={handleOnLogoIconClick}
                            sx={{
                                fontSize: 68,
                                display: "flex",
                                textAlign: "center",
                                cursor: "pointer",
                            }}
                        >
                            <ImgIcon alt="Mind Plus" src="/mind-plus-icon.png" />
                        </Icon>
                    </Tooltip>
                    <Tooltip title="Home">
                        <CustomLink href="/" variant="container">
                            <Typography
                                noWrap
                                variant="h6"
                                sx={{
                                    cursor: "pointer",
                                    textDecoration: "none",
                                }}
                            >
                                MIND PLUS
                            </Typography>
                        </CustomLink>
                    </Tooltip>
                    <DivFlexGrow />
                    <Tooltip
                        title={"Otavio Murilo Rau"}
                    >
                        <CustomLink
                            // href={getPersonPath()}
                            variant="container" href={""}                        >
                            <Typography
                                noWrap
                                variant="h6"
                                sx={{
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    paddingRight: appTheme.spacing(1),
                                }}
                                id="hello_page"
                            >
                                Hello, {"Otavio Murilo Rau"}
                                {/* {!!mounted &&
                                    contextManager.getDisplayName()} */}
                            </Typography>
                        </CustomLink>
                    </Tooltip>
                    <Tooltip
                        title={
                            appTheme.palette.mode === "dark"
                                ? "Light"
                                : "Dark"
                        }
                    >
                        <IconButton onClick={() => alert('opppss')}>     
                        {/* toggleColorMode}> */}
                            {appTheme.palette.mode === "dark" ? (
                                <Brightness7TwoToneIcon />
                            ) : (
                                <Brightness4TwoToneIcon
                                    style={{ color: "white" }}
                                />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Help">
                        <IconButton
                            color="inherit"
                            href=""
                            target="_blank"
                        >
                            <HelpTwoToneIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Sign Out">
                        <IconButton
                            color="inherit"
                            onClick={() => alert('IHUUUUL')}    //handleOnLogoutClick}
                        >
                            <ExitToAppTwoToneIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
