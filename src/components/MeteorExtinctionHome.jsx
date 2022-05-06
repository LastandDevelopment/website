import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Paper,
  SvgIcon,
  IconButton,
  Slide,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import {
  DownloadRounded,
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";

import MainMenu from "./imagesME/mainmenu.png";
import Countdown from "./imagesME/countdown.png";
import Game from "./imagesME/maingame.png";
import MeteorDestroyed from "./imagesME/maingamemeteordestroyed.png";
import MeteorExplosion from "./imagesME/meteorexplosion.png";
import Rocket from "./imagesME/rocket.png";
import RocketExploding from "./imagesME/rocketexplode.png";
import Pause from "./imagesME/pausemenu.png";
import GameOver from "./imagesME/gameover.png";

import { ReactComponent as GitHub } from "./icons/GitHubIcon.svg";

import { useTranslation } from "react-i18next";

import { makeStyles } from "@mui/styles";

import { useSwipeable } from "react-swipeable";

const useStyles = makeStyles((theme) => ({
  ImageCarouselBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (min-width: 1200px)": {
      height: "500px",
    },
    "@media screen and (max-width: 1200px)": {
      height: "41.667vw",
    },
  },
  ImageCarouselContent: {
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: "10px",
    position: "absolute",
    top: 0,
    left: 0,
  },
  ImageCarouselContentBox: {
    width: "100%",
    height: "100%",
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
  ImageCarouselPaper: {
    "@media screen and (min-width: 1200px)": {
      paddingBottom: "50px",
    },
    "@media screen and (max-width: 1200px)": {
      paddingBottom: "4.5vw",
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

export default function MeteorExtinctionHome(props) {
  const classes = useStyles();

  const [t] = useTranslation();

  const [imageIndex, setImageIndex] = useState(1);

  const [imageDirection, setImageDirection] = useState("");

  const nextImage = () => {
    setImageDirection("next");
    setImageIndex(imageIndex < 9 ? (prev) => prev + 1 : 1);
  };

  const imageBefore = () => {
    setImageDirection("before");
    setImageIndex(imageIndex > 1 ? (prev) => prev - 1 : 9);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => imageBefore(),
    swipeDuration: 500,
    delta: 10,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <Container className="defaultContainer">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Box sx={{ px: 2 }}>
          <Typography
            variant="h1"
            sx={{ paddingBottom: 1, paddingTop: 18 }}>
            Meteor Extinction
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 4, paddingTop: 10 }}>
            {t("meteorExtinctionHome.text1")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 5 }}>
            {t("meteorExtinctionHome.description")}
          </Typography>
        </Box>
        <Button
          size="large"
          variant="contained"
          color="primary"
          sx={{ py: 2, px: 10, my: 2 }}
          startIcon={<DownloadRounded />}
          component={Link}
          to={"/meteorextinction/download"}
        >
          <Typography variant="h3">
            {t("meteorExtinctionHome.download")}
          </Typography>
        </Button>
        <Paper
          elevation={3}
          sx={{
            marginY: 10,
            paddingX: "3%",
            paddingTop: "3%",
          }}
          className={classes.ImageCarouselPaper}
        >
          <Box className={classes.ImageCarouselBox}>
            <Box
              sx={{ marginRight: "1.5%", width: "5%", alignItems: "center" }}
            >
              <IconButton
                sx={{
                  width: "100%",
                  height: 0,
                  paddingTop: "50%",
                  paddingBottom: "50%",
                }}
                aria-label="Image Before"
                color={props.themeMode === "dark" ? "secondary" : "primary"}
                onClick={imageBefore}
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
                    alt={t("meteorExtinctionImages.mainMenu")}
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
                    src={Countdown}
                    alt="Countdown"
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
                    src={Game}
                    alt="Gameplay"
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
                    src={MeteorDestroyed}
                    alt={t("meteorExtinctionImages.meteorDestroyed")}
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
                    src={MeteorExplosion}
                    alt={t("meteorExtinctionImages.meteorExplosion")}
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
                    src={Rocket}
                    alt={t("meteorExtinctionImages.rocket")}
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
                    src={RocketExploding}
                    alt={t("meteorExtinctionImages.rocketExploding")}
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
                    src={Pause}
                    alt={t("meteorExtinctionImages.pause")}
                  />
                </Slide>
                <Slide
                  in={imageIndex === 9}
                  timeout={500}
                  easing={{
                    enter: "cubic-bezier(0.9, 0, 0.1, 1)",
                    exit: "cubic-bezier(0.9, 0, 0.1, 1)",
                  }}
                  direction={
                    imageIndex === 9
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
                    src={GameOver}
                    alt={t("meteorExtinctionImages.gameOver")}
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
                <Dot
                  theme={props.themeMode}
                  selected={imageIndex === 9} />
              </div>
            </Box>
            <Box sx={{ marginLeft: "1.5%", width: "5%", alignItems: "center" }}>
              <IconButton
                sx={{
                  width: "100%",
                  height: 0,
                  paddingTop: "50%",
                  paddingBottom: "50%",
                }}
                aria-label="Next Image"
                color={props.themeMode === "dark" ? "secondary" : "primary"}
                onClick={nextImage}
              >
                <NavigateNextRounded
                  className={classes.ImageCarouselIconNext}
                />
              </IconButton>
            </Box>
          </Box>
        </Paper>

        <Button
          variant="outlined"
          color={props.themeMode === "dark" ? "secondary" : "primary"}
          sx={{ paddingY: 1, paddingX: 4, marginY: 3 }}
          href="https://github.com/LastandDevelopment/MeteorExtinctionOfficial/issues/new/choose"
          target="_blank"
          rel="noreferrer noopener"
          startIcon={
            <SvgIcon>
              <GitHub
                style={{
                  color: props.themeMode === "dark" ? "#ffffff" : "#000000",
                }}
              />
            </SvgIcon>
          }
        >
          <Typography
            variant="h6"
            sx={{ marginLeft: 0.5 }}>
            {t("meteorExtinctionHome.issueReport")}
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}
