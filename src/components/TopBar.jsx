import {
  Box,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  styled,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useTheme } from "@emotion/react";
import Logout from "../pages/authantication/Logout";
import UserAvatar from "./UserAvatar";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function TopBar({ open, setMode, handleDrawerOpen }) {
  const navigate = useNavigate();
  function handleClickedUser() {
    navigate("/account");
  }
  const theme = useTheme();
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UserAvatar />

          <Stack direction={"row"}>
            {theme.palette.mode === "light" ? (
              <Tooltip title="light">
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  onClick={() => {
                    localStorage.setItem(
                      "theme",
                      theme.palette.mode === "light" ? "dark" : "light"
                    );
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                  }}
                >
                  <LightModeOutlinedIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="dark">
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  onClick={() => {
                    localStorage.setItem(
                      "theme",
                      theme.palette.mode === "light" ? "dark" : "light"
                    );
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                  }}
                >
                  <DarkModeOutlinedIcon />
                </IconButton>
              </Tooltip>
            )}

            <Logout />

            <Tooltip title="user">
              <IconButton
                aria-label="delete"
                color="inherit"
                onClick={handleClickedUser}
              >
                <PersonOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="settings">
              <IconButton aria-label="delete" color="inherit">
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
