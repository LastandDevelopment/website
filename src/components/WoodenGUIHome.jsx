import * as React from "react";
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

export default function WoodenGUIHome() {
  return (
    <Container className="containerHome">
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
            Wooden GUI is a resource pack for Minecraft: Java Edition.
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 2 }}>
            It brings a cozy wood look to all of Minecraft's user interface. It
            is vibrant and perfectly optimized for optimal item visibility. In
            addition, Wooden GUI fits perfectly with the vanilla textures of
            Minecraft, as it is based on these textures.
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 5 }}>
            It is still a beta version. Especially in the later survival game,
            some menus that have not yet been edited can be found. Therefore,
            the resource pack will be updated regularly.
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
          <Typography variant="h3">Download</Typography>
        </Button>
        <Paper
          elevation={3}
          sx={{ marginY: 10, padding: "3vw", textAlign: "left" }}
        >
          <Box className="imageScroller">
            <img
              className="imageContenStartAndMiddle"
              src={MainMenu}
              alt="Main Menu"
            />
            <img
              className="imageContenStartAndMiddle"
              src={Hotbar}
              alt="Hotbar"
            />
            <img
              className="imageContenStartAndMiddle"
              src={Inventory}
              alt="Inventory"
            />
            <img
              className="imageContenStartAndMiddle"
              src={CreativeInventory}
              alt="Creative Inventory"
            />
            <img
              className="imageContenStartAndMiddle"
              src={Loom}
              alt="Loom" />
            <img
              className="imageContenStartAndMiddle"
              src={EnchantingTable}
              alt="Enchanting Table"
            />
            <img
              className="imageContenStartAndMiddle"
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
