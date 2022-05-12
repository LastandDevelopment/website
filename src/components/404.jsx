import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Collapse,
  Container,
  Fade,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meteorFallStartPosition = Math.round((Math.random() - 0.5) * 500);

const useStyles = makeStyles((theme) => ({
  Image: {
    height: "150px",
    width: "150px",
    marginBottom: "30px",
    animation: "$MeteorFall 1.05s linear",
    "@media screen and (min-width: 850px)": {
      marginTop: "80px",
    },
    "@media screen and (max-width: 850px)": {
      marginTop: "45vh",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },

  ImageAnimDone: {
    height: "150px",
    marginBottom: "30px",
    transform: "rotate(0deg)",
    animation: "$MeteorExplosion 1.2s steps(14)",
    "@media screen and (min-width: 850px)": {
      marginTop: "80px",
    },
    "@media screen and (max-width: 850px)": {
      marginTop: "40vh",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },

  MeteorFallBox: {
    maxWidth: "150px",
    width: "150px",
    overflowX: "hidden",
    "@media screen and (min-width: 850px)": {
      animation: "$MeteorFallBoxAnim 1.05s linear",
    },
    "@media screen and (max-width: 850px)": {
      animation: "$MeteorFallBoxAnimMobile 1.05s linear",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  Box: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    height: "100vh",
    "@media screen and (min-width: 850px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "@media screen and (max-width: 850px)": {
      marginTop: "64px",
      marginBottom: "64px",
      position: "relative",
    },
  },

  TextBox: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "850px",
    width: "80vw",
    "@media screen and (max-width: 850px)": {
      marginTop: "50vh",
      transform: "translateY(-50%)",
    },
  },

  ImageCollapser: {
    "@media screen and (max-width: 850px)": {
      height: "200px",
    },
  },

  FixedButton: {
    transition:
      "opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
  },

  "@keyframes MeteorFall": {
    from: {
      opacity: 0,
    },
    "66%": {
      opacity: 0,
      transform: "rotate(20deg)",
    },
    to: {
      opacity: 1,
      transform: "rotate(52deg)",
    },
  },

  "@keyframes MeteorFallBoxAnim": {
    from: {
      transform: `translate(${meteorFallStartPosition}px, -80vh)`,
    },
    "66%": {
      transform: `translate(${meteorFallStartPosition}px, -80vh)`,
    },
    to: {
      transform: "translate(0px, 0px)",
    },
  },

  "@keyframes MeteorFallBoxAnimMobile": {
    from: {
      transform: `translate(${meteorFallStartPosition}px, -90vh)`,
    },
    "66%": {
      transform: `translate(${meteorFallStartPosition}px, -90vh)`,
    },
    to: {
      transform: "translate(0px, -10vh)",
    },
  },

  "@keyframes MeteorExplosion": {
    from: {
      transform: "translate(0px, 0px)",
    },
    to: {
      transform: "translate(-2100px, 0px)",
    },
  },
}));

export default function NotFound() {
  const [t] = useTranslation();
  const classes = useStyles();

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

  const [step, setStep] = useState(1);
  const [changing, setChanging] = useState(false);
  const [showAnim, setShowAnim] = useState(true);
  const [showReport, setShowReport] = useState(false);

  if (!changing) {
    if (step === 1) {
      setChanging(true);
      setTimeout(() => {
        setStep(2);
        setChanging(false);
      }, 1050);
    }

    if (step === 2) {
      setChanging(true);
      setTimeout(() => {
        setStep(3);
        setShowAnim(false);
      }, 900);
    }
  }

  useEffect(() => {
    if (!showAnim) {
      setTimeout(() => {
        setShowReport(true);
      }, 1300);
    }
  }, [showAnim]);

  return (
    <HelmetProvider>
      <Container className="defaultContainer">
        <Helmet>
          <meta
            name="robots"
            content="noindex" />
          <meta
            name="description"
            content="404 - Oooooooooops! This page was hit by a meteor!"
          />

          <link
            rel="preload"
            as="image"
            href="/animations/meteor.svg" />
          <link
            rel="preload"
            as="image"
            href="/animations/explosion.svg" />
          <link
            rel="preload"
            as="image"
            href="/animations/empty.svg" />
        </Helmet>
        <Box className={classes.Box}>
          <Collapse
            in={showAnim}
            timeout={1000}
            orientation={
              windowDimension.winWidth < 850 ? "vertical" : "horizontal"
            }
            className={classes.ImageCollapser}
          >
            <Box className={classes.MeteorFallBox}>
              <img
                className={step === 1 ? classes.Image : classes.ImageAnimDone}
                src={
                  step === 1
                    ? "/animations/meteor.svg"
                    : step === 2
                      ? "/animations/explosion.svg"
                      : "/animations/empty.svg"
                }
                alt={t("404.meteorAnimation")}
                sx={{ flexGrow: 1 }}
              />
            </Box>
          </Collapse>
          <Box className={classes.TextBox}>
            <Typography
              variant="h1"
              sx={{ marginBottom: 2 }}>
              404
            </Typography>
            <Typography variant="body1">{t("404.ohno")}</Typography>
            <Typography variant="body1">{t("404.notfound")}</Typography>
            <Collapse
              in={!showAnim}
              timeout={1000}
              orientation={"vertical"}>
              <Fade
                in={!showAnim}
                timeout={1000}>
                <Typography
                  variant="body1"
                  sx={{ marginTop: 3 }}>
                  {t("404.fix")}
                </Typography>
              </Fade>
              <Fade
                in={!showAnim}
                timeout={1000}>
                <Button
                  className={classes.FixedButton}
                  color="primary"
                  variant="contained"
                  sx={{ py: 1, marginTop: 1, width: "250px" }}
                  component={Link}
                  to={"/"}
                  startIcon={<HomeRoundedIcon />}
                >
                  <Typography
                    variant="body1"
                    className="textSmall">
                    {t("404.home")}
                  </Typography>
                </Button>
              </Fade>
            </Collapse>
            <Collapse
              in={showReport}
              timeout={1000}
              orientation={"vertical"}>
              <Fade
                in={showReport}
                timeout={1000}>
                <Typography
                  variant="body1"
                  sx={{ marginTop: 3 }}>
                  {t("404.issue")}
                </Typography>
              </Fade>
              <Fade
                in={showReport}
                timeout={1000}>
                <Button
                  className={classes.FixedButton}
                  color="primary"
                  variant="contained"
                  sx={{ py: 1, marginTop: 1, width: "250px" }}
                  component={Link}
                  to={"/contact/issue-template?error=404"}
                  startIcon={<ErrorRoundedIcon />}
                >
                  <Typography
                    variant="body1"
                    className="textSmall">
                    {t("404.report404")}
                  </Typography>
                </Button>
              </Fade>
            </Collapse>
          </Box>
        </Box>
      </Container>
    </HelmetProvider>
  );
}
