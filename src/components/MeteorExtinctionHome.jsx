import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Paper,
  SvgIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { DownloadRounded } from "@mui/icons-material";

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

export default function MeteorExtinctionHome(props) {
  const [t] = useTranslation();
  const imageScrollerClass = isMobile ? "imageScrollerMobile" : "imageScroller";
  return (
    <Container className="containerHome">
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
          sx={{ marginY: 10, padding: "3vw" }}>
          <Box className={imageScrollerClass}>
            <img
              className="imageContentStartAndMiddle"
              src={MainMenu}
              alt="Main Menu"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Countdown}
              alt="Countdown"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Game}
              alt="Gameplay"
            />
            <img
              className="imageContentStartAndMiddle"
              src={MeteorDestroyed}
              alt="Gameplay - Meteor Destroyed"
            />
            <img
              className="imageContentStartAndMiddle"
              src={MeteorExplosion}
              alt="Gameplay - Meteor Exploding"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Rocket}
              alt="Gameplay - Rocket"
            />
            <img
              className="imageContentStartAndMiddle"
              src={RocketExploding}
              alt="Gameplay - Rocket Exploding"
            />
            <img
              className="imageContentStartAndMiddle"
              src={Pause}
              alt="Pause Menu"
            />
            <img
              className="imageContentEnd"
              src={GameOver}
              alt="Game Over" />
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
