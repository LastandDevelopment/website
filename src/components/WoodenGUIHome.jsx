import React from "react";

import { Typography, Button, Container, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import { DownloadRounded } from "@mui/icons-material";

import MainMenu from "./imagesWGUI/MainMenu.png";
import Hotbar from "./imagesWGUI/Hotbar.png";
import Inventory from "./imagesWGUI/Inventory.png";
import CreativeInventory from "./imagesWGUI/CreativeInventory.png";
import Loom from "./imagesWGUI/Loom.png";
import EnchantingTable from "./imagesWGUI/EnchantingTable.png";
import Trading from "./imagesWGUI/Trading.png";
import GamemodeSwitcher from "./imagesWGUI/GamemodeSwitcher.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

export default function WoodenGUIHome() {
  const [t] = useTranslation();
  const imageScrollerClass = isMobile ? "imageScrollerMobile" : "imageScroller";
  return (
    <Container className="defaultContainer">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Box sx={{ px: 2 }}>
          <Typography
            variant="h1"
            sx={{ paddingBottom: 1, paddingTop: 18 }}>
            Wooden GUI
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 4, paddingTop: 10 }}>
            {t("woodenGUIHome.text1")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 2 }}>
            {t("woodenGUIHome.description")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 5 }}>
            {t("woodenGUIHome.betaWarning")}
          </Typography>
        </Box>
        <Button
          size="large"
          variant="contained"
          color="primary"
          sx={{ py: 2, px: 10, my: 2 }}
          startIcon={<DownloadRounded />}
          component={Link}
          to={"/woodengui/download"}
        >
          <Typography variant="h3">{t("woodenGUIHome.download")}</Typography>
        </Button>
        <Paper
          elevation={3}
          sx={{ marginY: 10, padding: "3vw" }}>
          <Box className={imageScrollerClass}>
            <img
              className="imageContentStartAndMiddle"
              src={MainMenu}
              alt="Main Menu"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Hotbar}
              alt="Hotbar"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Inventory}
              alt="Inventory"
            />
            <img
              className="imageContentStartAndMiddle"
              src={CreativeInventory}
              alt="Creative Inventory"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Loom}
              alt="Loom" />
            <img
              className="imageContentStartAndMiddle"
              src={EnchantingTable}
              alt="Enchanting Table"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Trading}
              alt="Trading"
            />
            <img
              className="imageContentEnd"
              src={GamemodeSwitcher}
              alt="Gamemode Switcher"
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
