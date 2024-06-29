"use client";

import React, { useContext, useEffect } from "react";

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
    AddCircleTwoTone as AddCircleTwoToneIcon,
    HistoryTwoTone as HistoryTwoToneIcon,
    Brightness4TwoTone as Brightness4TwoToneIcon,
    Brightness7TwoTone as Brightness7TwoToneIcon,
    ExitToAppTwoTone as ExitToAppTwoToneIcon,
    FavoriteBorderTwoTone as FavoriteBorderTwoToneIcon,
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
    
    // useCustomRouter();
    // const { toggleColorMode } = useContext(ColorModeContext);
    // const contextManager = useContext(UserContext);
    // const modalContext = useContext(ModalContext);

    const [mounted, setMounted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    // const loader = useLoader();

    // useEffect(() => {
    //     setMounted(true);
    //     loader.stopLoad();
    // }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const handleOnCreateButtonClick = () => {
    //     modalContext.handleModal("");
    // };

    const handleOnLogoIconClick = () => {
        router.push("/");
    };

    // const handleOnLogoutClick = async () => {
    //     loader.startLoad();
    //     if (mounted) {
    //         await contextManager
    //             .doLogout()
    //             .catch(console.error)
    //             .finally(loader.stopLoad);
    //     }
    // };

    const handleOnAboutClick = () => {
        handleOpen();
    };

    // const getPersonPath = (): string => {
    //     const personId = contextManager.getPersonId();
    //     return `/persons/${personId}/`;
    // };

    const appTheme = useTheme();

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#5c6bc0",
                    
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
                {/* <About open={open} onClose={handleClose} /> */}

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
                        title={"Otavio Murilo Rau"}     // !!mounted && contextManager.getDisplayName()}
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
                    <>
                        <Tooltip title="New">
                            <IconButton
                                id="new_item_header"
                                onClick={() => alert()}    //handleOnCreateButtonClick}
                            >
                                <AddCircleTwoToneIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                        {/* <CustomLink
                            href="/changelog/all"
                            variant="container"
                        >
                            <Tooltip title="Changelog">
                                <IconButton>
                                    <HistoryTwoToneIcon
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </CustomLink> */}
                    </>
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
                    <Tooltip title="About">
                        <IconButton
                            color="inherit"
                            onClick={handleOnAboutClick}
                        >
                            <FavoriteBorderTwoToneIcon />
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
