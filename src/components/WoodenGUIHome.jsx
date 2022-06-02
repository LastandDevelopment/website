import React, { useState } from "react";

import {
  Typography,
  Button,
  Container,
  Box,
  Paper,
  styled,
  IconButton,
  Slide,
} from "@mui/material";
import { Link } from "react-router-dom";

import {
  DownloadRounded,
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";

import MainMenu from "./imagesWGUI/MainMenu.png";
import Hotbar from "./imagesWGUI/Hotbar.png";
import Inventory from "./imagesWGUI/Inventory.png";
import CreativeInventory from "./imagesWGUI/CreativeInventory.png";
import Loom from "./imagesWGUI/Loom.png";
import EnchantingTable from "./imagesWGUI/EnchantingTable.png";
import Trading from "./imagesWGUI/Trading.png";
import GamemodeSwitcher from "./imagesWGUI/GamemodeSwitcher.png";

import { useTranslation } from "react-i18next";

import { makeStyles } from "@mui/styles";

import { useSwipeable } from "react-swipeable";
import { Helmet, HelmetProvider } from "react-helmet-async";

const useStyles = makeStyles((theme) => ({
  ImageCarouselBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageCarouselContent: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    position: "absolute",
    top: 0,
    left: 0,
  },
  ImageCarouselContentBox: {
    width: "100%",
    aspectRatio: "16 / 9",
    overflow: "hidden",
    borderRadius: "10px",
    position: "relative",
  },
  ImageCarouselIconNext: {
    "@media screen and (min-width: 1200px)": {
      fontSize: "40px !important",
    },
    "@media screen and (max-width: 1200px)": {
      fontSize: "4vw !important",
    },
  },
  ImageCarouselIconBefore: {
    "@media screen and (min-width: 1200px)": {
      fontSize: "40px !important",
    },
    "@media screen and (max-width: 1200px)": {
      fontSize: "4vw !important",
    },
  },
  PointsDiv: {
    "@media screen and (min-width: 1200px)": {
      marginTop: "12px",
    },
    "@media screen and (max-width: 1200px)": {
      marginTop: "1vw",
    },
    textAlign: "center",
    height: "10px",
    display: "flex",
    justifyContent: "center",
  },
}));

const Dot = styled("div")(({ theme, selected }) => ({
  "@media screen and (min-width: 1200px)": {
    width: selected ? "13.5px" : "9px",
    height: selected ? "13.5px" : "9px",
    marginTop: selected ? "0px" : "2.25px",
    marginBottom: selected ? "0px" : "2.25px",
    marginLeft: "4.5px",
    marginRight: "4.5px",
  },
  "@media screen and (max-width: 1200px)": {
    width: selected ? "1.125vw" : "0.75vw",
    height: selected ? "1.125vw" : "0.75vw",
    marginTop: selected ? "0vw" : "0.1875vw",
    marginBottom: selected ? "0vw" : "0.1875vw",
    marginLeft: "0.375vw",
    marginRight: "0.375vw",
  },
  transition: "all 0.2s ease-in-out",
  borderRadius: "50%",
  backgroundColor:
    theme === "dark"
      ? selected
        ? "#ffffff"
        : "#b3b3b3"
      : selected
        ? "#000000"
        : "#4d4d4d",
}));

export default function WoodenGUIHome(props) {
  const classes = useStyles();

  const [t] = useTranslation();

  const [imageIndex, setImageIndex] = useState(1);

  const [imageDirection, setImageDirection] = useState("");

  const nextImage = () => {
    setImageDirection("next");
    setImageIndex(imageIndex < 8 ? (prev) => prev + 1 : 1);
  };

  const previousImage = () => {
    setImageDirection("before");
    setImageIndex(imageIndex > 1 ? (prev) => prev - 1 : 8);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
    swipeDuration: 500,
    delta: 10,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <HelmetProvider>
      <div className="insideDiv">
        <Container className="defaultContainer">
          <Helmet>
            <meta
              name="description"
              content="Introducing Wooden GUI, the Resource Pack for Minecraft: Java Edition by Lastand Development"
            />
          </Helmet>
          <Box sx={{ flexGrow: 1, pb: 4 }}>
            <Box sx={{ px: 2 }}>
              <Typography
                variant="h1"
                sx={{ paddingBottom: 1, paddingTop: 10 }}
              >
                Wooden GUI
              </Typography>
              <Typography
                variant="body1"
                sx={{ paddingBottom: 4, paddingTop: 10 }}
              >
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
              <Typography
                variant="body1"
                className="textLarge">
                {t("woodenGUIHome.download")}
              </Typography>
            </Button>
            <Paper
              elevation={3}
              sx={{
                marginY: 10,
                padding: "3%",
              }}
            >
              <Box className={classes.ImageCarouselBox}>
                <Box
                  sx={{
                    marginRight: "1.5%",
                    width: "5%",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      width: "100%",
                      height: 0,
                      paddingTop: "50%",
                      paddingBottom: "50%",
                    }}
                    aria-label={t("ariaLabels.previousImage")}
                    onClick={previousImage}
                  >
                    <NavigateBeforeRounded
                      className={classes.ImageCarouselIconBefore}
                    />
                  </IconButton>
                </Box>
                <Box sx={{ width: "87%", height: "100%" }}>
                  <Box
                    {...handlers}
                    className={classes.ImageCarouselContentBox}
                    flexGrow={1}
                  >
                    <Slide
                      in={imageIndex === 1}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 1
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={MainMenu}
                        alt={t("woodenGUIImages.mainMenu")}
                      />
                    </Slide>
                    <Slide
                      in={imageIndex === 2}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 2
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={Hotbar}
                        alt="Hotbar"
                      />
                    </Slide>
                    <Slide
                      in={imageIndex === 3}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 3
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={Inventory}
                        alt={t("woodenGUIImages.inventory")}
                      />
                    </Slide>
                    <Slide
                      in={imageIndex === 4}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 4
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={CreativeInventory}
                        alt={t("woodenGUIImages.creativeInventory")}
                      />
                    </Slide>
                    <Slide
                      in={imageIndex === 5}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 5
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={Loom}
                        alt={t("woodenGUIImages.loom")}
                      />
                    </Slide>
                    <Slide
                      in={imageIndex === 6}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 6
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={EnchantingTable}
                        alt={t("woodenGUIImages.enchantingTable")}
                      />
                    </Slide>
                    <Slide
                      in={imageIndex === 7}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 7
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={Trading}
                        alt={t("woodenGUIImages.trading")}
                      />
                    </Slide>
                    <Slide
                      in={imageIndex === 8}
                      timeout={500}
                      easing={{
                        enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                        exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                      }}
                      direction={
                        imageIndex === 8
                          ? imageDirection === "next"
                            ? "left"
                            : "right"
                          : imageDirection === "next"
                            ? "right"
                            : "left"
                      }
                    >
                      <img
                        className={classes.ImageCarouselContent}
                        src={GamemodeSwitcher}
                        alt={t("woodenGUIImages.gamemodeSwitcher")}
                      />
                    </Slide>
                  </Box>
                  <div className={classes.PointsDiv}>
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 1} />
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 2} />
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 3} />
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 4} />
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 5} />
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 6} />
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 7} />
                    <Dot
                      theme={props.themeMode}
                      selected={imageIndex === 8} />
                  </div>
                </Box>
                <Box
                  sx={{ marginLeft: "1.5%", width: "5%", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      width: "100%",
                      height: 0,
                      paddingTop: "50%",
                      paddingBottom: "50%",
                    }}
                    aria-label={t("ariaLabels.nextImage")}
                    onClick={nextImage}
                  >
                    <NavigateNextRounded
                      className={classes.ImageCarouselIconNext}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
    </HelmetProvider>
  );
}
