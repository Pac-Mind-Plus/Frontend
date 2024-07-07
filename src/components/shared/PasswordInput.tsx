import {
    VisibilityOffTwoTone as VisibilityOffTwoToneIcon,
    VisibilityTwoTone as VisibilityTwoToneIcon,
} from "@mui/icons-material";
import { TextField, InputAdornment, Tooltip, IconButton } from "@mui/material";
import { useState } from "react";

type PropsType = {
    label: string,
    style: any,
    value?: any,
    onChange?: any,
};

export default function PasswordInputComp({label, style, value, onChange}: PropsType) {

    const [showText, setShowText] = useState(false);

    const changeShowTextHandler = () => {
        setShowText((prevShow) => !prevShow);
    };

    return (
        <TextField //TODO: Adicionar configuração como variante depois
                            label={label}
                            type={showText ? "" : "password"}
                            sx={style}
                            value={value}
                            onChange={onChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                            <Tooltip title={showText ? "Hide" : "Show"}>
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    onClick={changeShowTextHandler}
                                                >
                                                    {showText ? (
                                                        <VisibilityOffTwoToneIcon
                                                            sx={{
                                                                color: 'white',
                                                                height: "20px",
                                                            }}
                                                        />
                                                    ) : (
                                                        <VisibilityTwoToneIcon
                                                            sx={{
                                                                color: 'white',
                                                                height: "20px",
                                                            }}
                                                        />
                                                    )}
                                                </IconButton>
                                            </Tooltip>
                                    </InputAdornment>
                                ),
                            }}
                        />
    )
}