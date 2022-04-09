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
  Divider,
} from "@mui/material";
import {
  isMobile,
  isFirefox,
  isSafari,
  isIE,
  isMobileSafari,
} from "react-device-detect";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { InfoRounded } from "@mui/icons-material";
import MenuRounded from "@mui/icons-material/MenuRounded";

import LastandDevelopmentLogo from "./icons/LastandDevelopmentLogo.svg";

import AboutDialog from "./About";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";

function MenuMargin() {
  if (
    isMobile === false &&
    isFirefox === false &&
    isSafari === false &&
    isIE === false &&
    isMobileSafari === false
  ) {
    return 1.9;
  } else {
    return 0;
  }
}

export default function TitleBar(props) {
  const [t] = useTranslation();
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

  const AppearanceIcon =
    props.themeMode === "dark" ? LightModeRoundedIcon : DarkModeRoundedIcon;

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
              style={{ height: 30, width: 76.84 }}
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
            sx={{ marginLeft: "auto", marginRight: MenuMargin }}
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
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to={"/contact"}>
              <ListItemIcon>
                <EmailRoundedIcon
                  fontSize="medium"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography>{t("menu.contact")}</Typography>
              </ListItemText>
            </MenuItem>
            <LanguageMenu
              handleTopMenuClose={handleClose}
              themeMode={props.themeMode}
            />
            <MenuItem
              onClick={() => {
                props.handleThemeModeChange();
              }}
            >
              <ListItemIcon>
                <AppearanceIcon
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography>{t("menu.appearance")}</Typography>
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOpenAboutDialog(true);
                setAnchorEl(null);
              }}
            >
              <ListItemIcon>
                <InfoRounded
                  fontSize="medium"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                />
              </ListItemIcon>
              <ListItemText>{t("menu.about")}</ListItemText>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem onClick={openGitHubRepo}>
              <ListItemIcon>
                <CodeRoundedIcon
                  fontSize="medium"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                />
              </ListItemIcon>
              <ListItemText>{t("menu.source")}</ListItemText>
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
