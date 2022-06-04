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
  Grow,
} from "@mui/material";

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
import { useEffect } from "react";

export default function TitleBar(props) {
  const { i18n } = useTranslation();

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

  const [appearanceIconGrowIn, setAppearanceIconGrowIn] = useState(true);

  const handleThemeModeChange = () => {
    setAppearanceIconGrowIn(false);
    setTimeout(() => {
      props.handleThemeModeChange();
    }, 300);
  };

  useEffect(() => {
    setAppearanceIconGrowIn(true);
  }, [props.themeMode]);

  useEffect(() => {
    if (!(i18n.language === "en" || i18n.language === "de")) {
      i18n.changeLanguage(i18n.language.includes("de") ? "de" : "en");
    }
  }, [i18n.language, i18n]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="primary"
        enableColorOnDark
        elevation={0}
        sx={{ maxWidth: "100vw", left: 0 }}
      >
        <Toolbar>
          <Button
            color="secondary"
            sx={{ p: 1 }}
            component={Link}
            to={"/"}>
            <img
              src={LastandDevelopmentLogo}
              alt="Lastand Development"
              style={{ height: 30, width: 76.84 }}
            />
          </Button>
          <IconButton
            size="large"
            color="secondary"
            id="menu-button"
            aria-label={t("ariaLabels.menu")}
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
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to={"/contact"}>
              <ListItemIcon>
                <EmailRoundedIcon fontSize="medium" />
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
                handleThemeModeChange();
              }}
            >
              <ListItemIcon>
                <Grow
                  timeout={300}
                  in={appearanceIconGrowIn}>
                  <AppearanceIcon />
                </Grow>
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
                <InfoRounded fontSize="medium" />
              </ListItemIcon>
              <ListItemText>{t("menu.about")}</ListItemText>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem onClick={openGitHubRepo}>
              <ListItemIcon>
                <CodeRoundedIcon fontSize="medium" />
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
