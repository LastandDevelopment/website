import React, { useEffect, useState } from "react";
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

import { ReactComponent as GitHub } from "./icons/GitHubIcon.svg";

import { useTranslation } from "react-i18next";

import styles from "./MeteorExtinctionHome.module.css";

import { useSwipeable } from "react-swipeable";

import maingameL from "./imagesME/maingame/L.webp";
import maingameM from "./imagesME/maingame/M.webp";
import maingameS from "./imagesME/maingame/S.webp";

import meteorL from "./imagesME/meteor/L.webp";
import meteorM from "./imagesME/meteor/M.webp";
import meteorS from "./imagesME/meteor/S.webp";

import meteorexplosionL from "./imagesME/meteorexplosion/L.webp";
import meteorexplosionM from "./imagesME/meteorexplosion/M.webp";
import meteorexplosionS from "./imagesME/meteorexplosion/S.webp";

import rocketL from "./imagesME/rocket/L.webp";
import rocketM from "./imagesME/rocket/M.webp";
import rocketS from "./imagesME/rocket/S.webp";

import rocketexplosionL from "./imagesME/rocketexplosion/L.webp";
import rocketexplosionM from "./imagesME/rocketexplosion/M.webp";
import rocketexplosionS from "./imagesME/rocketexplosion/S.webp";

import { Helmet, HelmetProvider } from "react-helmet-async";

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
  const [t] = useTranslation();

  const [imageIndex, setImageIndex] = useState(1);

  const [imageDirection, setImageDirection] = useState("");

  const nextImage = () => {
    setImageDirection("next");
    setImageIndex(imageIndex < 5 ? (prev) => prev + 1 : 1);
  };

  const previousImage = () => {
    setImageDirection("before");
    setImageIndex(imageIndex > 1 ? (prev) => prev - 1 : 5);
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

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  const imageNames =
    windowDimension.winWidth >= 1200
      ? [maingameL, meteorL, meteorexplosionL, rocketL, rocketexplosionL]
      : windowDimension.winWidth >= 756
        ? [maingameM, meteorM, meteorexplosionM, rocketM, rocketexplosionM]
        : [maingameS, meteorS, meteorexplosionS, rocketS, rocketexplosionS];

  return (
    <HelmetProvider>
      <div className="insideDiv">
        <Container className="defaultContainer">
          <Helmet>
            <meta
              name="description"
              content="Introducing Meteor Extinction, the First Game by Lastand Development"
            />
          </Helmet>
          <Box sx={{ flexGrow: 1, pb: 4 }}>
            <Box sx={{ px: 2 }}>
              <Typography
                variant="h1"
                sx={{ paddingBottom: 1, paddingTop: 10 }}
              >
                Meteor Extinction
              </Typography>
              <Typography
                variant="body1"
                sx={{ paddingBottom: 4, paddingTop: 10 }}
              >
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
              <Typography
                variant="body1"
                className="textLarge">
                {t("meteorExtinctionHome.download")}
              </Typography>
            </Button>
            <Paper
              elevation={3}
              sx={{
                marginY: 6,
                padding: "3%",
              }}
            >
              <Box className={styles.ImageCarouselBox}>
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
                      className={styles.ImageCarouselIconBefore}
                    />
                  </IconButton>
                </Box>
                <Box sx={{ width: "87%", height: "100%" }}>
                  <Box
                    {...handlers}
                    className={styles.ImageCarouselContentBox}
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
                        className={styles.ImageCarouselContent}
                        src={imageNames[0]}
                        alt="Gameplay"
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
                        className={styles.ImageCarouselContent}
                        src={imageNames[1]}
                        alt={t("meteorExtinctionImages.meteorDestroyed")}
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
                        className={styles.ImageCarouselContent}
                        src={imageNames[2]}
                        alt={t("meteorExtinctionImages.meteorExplosion")}
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
                        className={styles.ImageCarouselContent}
                        src={imageNames[3]}
                        alt={t("meteorExtinctionImages.rocket")}
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
                        className={styles.ImageCarouselContent}
                        src={imageNames[4]}
                        alt={t("meteorExtinctionImages.rocketExploding")}
                      />
                    </Slide>
                  </Box>
                  <div className={styles.PointsDiv}>
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
                      className={styles.ImageCarouselIconNext}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Paper>

            <Button
              variant="outlined"
              color={props.themeMode === "dark" ? "secondary" : "primary"}
              sx={{ paddingY: 1, paddingX: 4, marginBottom: 3 }}
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
                variant="body1"
                className="textSmall"
                sx={{ marginLeft: 0.5 }}
              >
                {t("meteorExtinctionHome.issueReport")}
              </Typography>
            </Button>
          </Box>
        </Container>
      </div>
    </HelmetProvider>
  );
}
