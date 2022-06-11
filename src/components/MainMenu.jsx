import React, { useState, useEffect, Fragment } from "react";

import {
  Divider,
  Grow,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";
import { Link } from "react-router-dom";

export default function MainMenu(props) {
  const [t] = useTranslation();

  const openGitHubRepo = () => {
    props.handleClose();
    const link = document.createElement("a");
    link.href = "https://github.com/LastandDevelopment/website";
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.click();
  };

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

  return (
    <Fragment>
      <MenuItem
        onClick={props.handleClose}
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
        handleTopMenuClose={props.handleClose}
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
          props.setOpenAboutDialog(true);
          props.handleClose();
        }}
      >
        <ListItemIcon>
          <InfoRoundedIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText>{t("menu.about")}</ListItemText>
      </MenuItem>
      <Divider
        variant="middle"
        sx={{ borderRadius: "0.5px" }} />
      <MenuItem onClick={openGitHubRepo}>
        <ListItemIcon>
          <CodeRoundedIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText>{t("menu.source")}</ListItemText>
      </MenuItem>
    </Fragment>
  );
}
