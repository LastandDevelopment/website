import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Collapse,
  Container,
  Fade,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import meteor from "./animations/meteor.svg";
import anim from "./animations/explosion.svg";

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

  const [animationClassName, setAnimationClassName] = useState("NotFoundImage");
  const [imageSrc, setImageSrc] = useState(meteor);
  const [changing, setChanging] = useState(false);
  const [showAnim, setShowAnim] = useState(true);

  if (!changing) {
    if (imageSrc === meteor) {
      setChanging(true);
      setTimeout(() => {
        setAnimationClassName("NotFoundImageAnimDone");
        setImageSrc(anim);
        setChanging(false);
      }, 1050);
    }

    if (imageSrc === anim) {
      setChanging(true);
      setTimeout(() => {
        setShowAnim(false);
      }, 900);
    }
  }

  return (
    <Container className="containerHome">
      <Box className="NotFoundBox">
        <Collapse
          in={showAnim}
          timeout={1000}
          orientation={
            windowDimension.winWidth <= 850 ? "vertical" : "horizontal"
          }
          sx={
            windowDimension.winWidth <= 850
              ? {
                height: "200px",
              }
              : {}
          }
        >
          <Box
            sx={
              windowDimension.winWidth <= 850
                ? {
                  maxWidth: "150px",
                  marginX: "auto",
                  overflowX: "hidden",
                }
                : { maxWidth: "150px", marginRight: 10, overflowX: "hidden" }
            }
            className="MeteorFallBox"
          >
            <img
              className={animationClassName}
              src={imageSrc}
              alt="Meteor"
              sx={{ flexGrow: 1 }}
            />
          </Box>
        </Collapse>
        <Box
          sx={
            windowDimension.winWidth <= 850
              ? {
                marginTop: "38vh",
                marginX: 2,
              }
              : { marginX: 2 }
          }
        >
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
              <Button
                color="primary"
                variant="contained"
                sx={{ py: 1, my: 2, px: 5 }}
                component={Link}
                to={"/"}
                startIcon={<HomeRoundedIcon />}
              >
                <Typography variant="h6">{t("404.home")}</Typography>
              </Button>
            </Fade>
          </Collapse>
        </Box>
      </Box>
    </Container>
  );
}
