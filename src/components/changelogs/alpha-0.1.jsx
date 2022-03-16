import * as React from "react";

import { Container, Box, Typography } from "@mui/material";

export default function Alpha010Changelog() {
  return (
    <Container className="containerHome">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Typography
          variant="h1"
          sx={{ paddingTop: 18 }}>
          Meteor Extinction
        </Typography>
        <Typography
          variant="h2"
          sx={{ paddingTop: 1 }}>
          Changelog
        </Typography>
        <Container className="containerLeft">
          <Typography
            variant="h2"
            sx={{ paddingTop: 12, paddingBottom: 3, marginLeft: 1 }}
          >
            Alpha 0.1
          </Typography>
          <Box sx={{ marginLeft: 3 }}>
            <ul>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Basic Gameplay: Shield to defend the Earth, Meteors falling,
                  Rocket available after 10 points
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Main Menu to start the Game
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Game-Over Screen with Highscore System
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
