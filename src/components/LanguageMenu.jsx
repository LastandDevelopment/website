import React, { useState, Fragment, useMemo, useEffect } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { useTranslation } from "react-i18next";
import { ListItemIcon, ListItemText } from "@mui/material";

export default function LanguageMenu(props) {
  const [t] = useTranslation();
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const languageItems = useMemo(
    () => [
      {
        description: "English",
        lang: "en",
      },
      {
        description: "Deutsch",
        lang: "de",
      },
    ],
    []
  );

  useEffect(() => {
    if (i18n.language === "en" || i18n.language === "de") {
      const langIndex = languageItems.findIndex(
        (l) => l.lang === i18n.language
      );
      setSelectedIndex(langIndex);
    } else {
      if (i18n.language.includes("de")) {
        setSelectedIndex(1);
      } else {
        setSelectedIndex(0);
      }
    }
  }, [i18n.language, languageItems, i18n]);

  return (
    <Fragment>
      <MenuItem onClick={handleClick}>
        <ListItemIcon>
          <LanguageRoundedIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText>{t("menu.language")}</ListItemText>
      </MenuItem>
      <Menu
        PaperProps={{
          style: {
            width: 150,
          },
        }}
        id="language-menu"
        elevation={3}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: 15,
          horizontal: 145,
        }}
      >
        {languageItems.map((l, i) => (
          <MenuItem
            key={"langItem" + i}
            selected={i === selectedIndex}
            onClick={() => {
              i18n.changeLanguage(l.lang);
              handleClose();
              props.handleTopMenuClose();
            }}
          >
            <ListItemText sx={{ marginLeft: 1 }}>{l.description}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}
