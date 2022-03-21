import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { InfoRounded } from "@mui/icons-material";
import MenuRounded from "@mui/icons-material/MenuRounded";

import LastandDevelopmentLogo from "./icons/LastandDevelopmentLogo.svg";

import AboutDialog from "./About";

export default function TitleBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openGitHubRepo = () => {
    setAnchorEl(null);
    const link = document.createElement("a");
    link.href = "https://github.com/LastandDevelopment/website";
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.click();
  };

  const [openAboutDialog, setOpenAboutDialog] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="primary"
        enableColorOnDark
        elevation={0}>
        <Toolbar>
          <Button
            color="secondary"
            sx={{ p: 1 }}
            component={Link}
            to={"/"}>
            <img
              src={LastandDevelopmentLogo}
              className="LDLogo"
              alt="Lastand Development"
              style={{ height: 30 }}
            />
          </Button>
          <IconButton
            size="large"
            color="secondary"
            id="menu-button"
            aria-label="Menu"
            aria-controls={open ? "main-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ marginLeft: "auto" }}
          >
            <MenuRounded />
          </IconButton>
          <Menu
            PaperProps={{
              style: {
                width: 230,
              },
            }}
            id="main-menu"
            elevation={3}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "menu-button",
            }}
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to={"/contact"}>
              <ListItemIcon>
                <EmailRoundedIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Typography>Contact</Typography>
              </ListItemText>
            </MenuItem>
            <MenuItem onClick={openGitHubRepo}>
              <ListItemIcon>
                <CodeRoundedIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>Source Code</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOpenAboutDialog(true);
                setAnchorEl(null);
              }}
            >
              <ListItemIcon>
                <InfoRounded fontSize="medium" />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <AboutDialog
        openAboutDialog={openAboutDialog}
        setOpenAboutDialog={setOpenAboutDialog}
      />
    </Box>
  );
}
