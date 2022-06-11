import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Button, Menu } from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";

import LastandDevelopmentLogo from "./icons/LastandDevelopmentLogo.svg";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import AboutDialog from "./About";
import MainMenu from "./MainMenu";

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

  const [openAboutDialog, setOpenAboutDialog] = useState(false);

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
            <MainMenu
              handleClose={handleClose}
              themeMode={props.themeMode}
              handleThemeModeChange={props.handleThemeModeChange}
              setOpenAboutDialog={setOpenAboutDialog}
            />
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
