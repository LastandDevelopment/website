import * as React from "react";
import { Typography, Button, Container, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import { DownloadRounded } from "@mui/icons-material";

import MainMenu from "./images/mainmenu.png";
import Countdown from "./images/countdown.png";
import Game from "./images/maingame.png";
import MeteorDestroyed from "./images/maingamemeteordestroyed.png";
import MeteorExplosion from "./images/meteorexplosion.png";
import Rocket from "./images/rocket.png";
import RocketExploding from "./images/rocketexplode.png";
import Pause from "./images/pausemenu.png";
import GameOver from "./images/gameover.png";

import GitHub from "./icons/GitHubIcon.svg";

export default function MeteorExtinctionHome() {
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
            The first game by Lastand Development is now in development!
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 5 }}>
            The goal of the game is to prevent meteors from hitting the earth
            using a shield and rockets. There's a freeplay mode where you can
            try to beat your or your friend's highscore and a level mode where
            upgrades can be purchased to help you master increasingly difficult
            levels.
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
              src={Countdown}
              alt="Countdown"
            />
            <img
              className="imageContenStartAndMiddle"
              src={Game}
              alt="Gameplay"
            />
            <img
              className="imageContenStartAndMiddle"
              src={MeteorDestroyed}
              alt="Gameplay - Meteor Destroyed"
            />
            <img
              className="imageContenStartAndMiddle"
              src={MeteorExplosion}
              alt="Gameplay - Meteor Exploding"
            />
            <img
              className="imageContenStartAndMiddle"
              src={Rocket}
              alt="Gameplay - Rocket"
            />
            <img
              className="imageContenStartAndMiddle"
              src={RocketExploding}
              alt="Gameplay - Rocket Exploding"
            />
            <img
              className="imageContenStartAndMiddle"
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
          color="secondary"
          sx={{ paddingY: 1, paddingX: 4, marginY: 3 }}
          href="https://github.com/LastandDevelopment/MeteorExtinctionOfficial/issues/new/choose"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={GitHub}
            className="githubic"
            alt="GitHub"
            style={{ height: 18 }}
          />
          <Typography
            variant="h6"
            sx={{ marginLeft: 1.5 }}>
            Report an issue
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}
