import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Collapse,
  Container,
  Fade,
  Typography,
} from "@mui/material";

import styles from "./404.module.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Meteor from "./animations/meteor.svg";
import Explosion from "./animations/explosion.svg";
import Empty from "./animations/empty.svg";

export default function NotFound() {
  const [t] = useTranslation();

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
      <div className="insideDiv">
        <Container className="defaultContainer">
          <Helmet>
            <meta
              name="robots"
              content="noindex" />
            <meta
              name="description"
              content="404 - Oooooooooops! This page was hit by a meteor!"
            />
          </Helmet>
          <Box className={styles.Box}>
            <Collapse
              in={showAnim}
              timeout={1000}
              orientation={
                windowDimension.winWidth < 850 ? "vertical" : "horizontal"
              }
              className={styles.ImageCollapser}
            >
              <Box className={styles.MeteorFallBox}>
                <img
                  className={step === 1 ? styles.Image : styles.ImageAnimDone}
                  src={step === 1 ? Meteor : step === 2 ? Explosion : Empty}
                  alt={t("404.meteorAnimation")}
                  sx={{ flexGrow: 1 }}
                />
              </Box>
            </Collapse>
            <Box className={styles.TextBox}>
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
                    className={styles.FixedButton}
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
                    className={styles.FixedButton}
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
      </div>
    </HelmetProvider>
  );
}
