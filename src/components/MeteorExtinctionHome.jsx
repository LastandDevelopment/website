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

const useStyles = makeStyles((theme) => ({
  ImageCarouselBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (min-width: 1200px)": {
      height: "534.67px",
    },
    "@media screen and (max-width: 1200px)": {
      height: "44.636vw",
    },
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
    "&:hover": {
      transform: "translateX(5%)",
      transition: "transform 0.3s ease-in-out",
    },
    "&:not(:hover)": {
      transform: "translateX(0)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  ImageCarouselIconBefore: {
    "@media screen and (min-width: 1200px)": {
      fontSize: "40px !important",
    },
    "@media screen and (max-width: 1200px)": {
      fontSize: "4vw !important",
    },
    "&:hover": {
      transform: "translateX(-5%)",
      transition: "transform 0.3s ease-in-out",
    },
    "&:not(:hover)": {
      transform: "translateX(0)",
      transition: "transform 0.3s ease-in-out",
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
  },
  DotOne: {
    "@media screen and (min-width: 1200px)": {
      width: "18px",
      height: "18px",
      marginLeft: "9px",
      marginRight: "9px",
    },
    "@media screen and (max-width: 1200px)": {
      width: "1.5vw",
      height: "1.5vw",
      marginLeft: "0.75vw",
      marginRight: "0.75vw",
    },
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
}));

export default function MeteorExtinctionHome(props) {
  const classes = useStyles();

  const [t] = useTranslation();
  const [imageIndex, setImageIndex] = useState(1);

  const [moving, setMoving] = useState(false);

  const [imageDirection, setImageDirection] = useState("");

  const nextImage = () => {
    setMoving(true);
    setImageDirection("next");
    setImageIndex(imageIndex < 9 ? imageIndex + 1 : 1);
    setTimeout(() => {
      setMoving(false);
    }, 500);
  };

  const imageBefore = () => {
    setMoving(true);
    setImageDirection("before");
    setImageIndex(imageIndex > 1 ? imageIndex - 1 : 9);
    setTimeout(() => {
      setMoving(false);
    }, 500);
  };

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
                onClick={!moving ? imageBefore : null}
              >
                <NavigateBeforeRounded
                  className={classes.ImageCarouselIconBefore}
                />
              </IconButton>
            </Box>
            <Box sx={{ width: "87%", height: "100%" }}>
              <Box
                className={classes.ImageCarouselContentBox}
                flexGrow={1}>
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
                    alt="Main Menu"
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
                    alt="Gameplay - Meteor Destroyed"
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
                    alt="Gameplay - Meteor Exploding"
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
                    alt="Gameplay - Rocket"
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
                    alt="Gameplay - Rocket Exploding"
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
                    alt="Pause Menu"
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
                    alt="Game Over"
                  />
                </Slide>
              </Box>
              <div className={classes.PointsDiv}>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div className={classes.DotOne} />
                  <div className={classes.DotTwo} />
                  <div className={classes.DotThree} />
                  <div className={classes.DotFour} />
                  <div className={classes.DotFive} />
                  <div className={classes.DotSix} />
                  <div className={classes.DotSeven} />
                  <div className={classes.DotEight} />
                  <div className={classes.DotNine} />
                </div>
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
                onClick={!moving ? nextImage : null}
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
