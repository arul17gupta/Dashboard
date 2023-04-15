import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, token } from "../../Theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingslinedIcon from "@mui/icons-material/Settings";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {

    const theme = useTheme();
    const colors = token(theme.palette.mode);
    const ColorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search Bar */}

            <Box display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px" >

                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search " />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>

            </Box>
 
            {/* Icons */}

            <Box display="flex">
                <IconButton onClick={ColorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
                    {/* <LightModeOutlinedIcon /> */}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingslinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>




        </Box>
    )
}

export default Topbar;