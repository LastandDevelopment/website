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
        <Container className="containerDownloadME">
          <Typography
            variant="h2"
            sx={{ paddingTop: 12, paddingBottom: 5, marginLeft: 1 }}
          >
            Alpha 0.1
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Basic Gameplay: Shield to defend the Earth, Meteors falling, Rocket
            available after 10 points
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Main Menu to start the Game
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Game-Over Screen with Highscore System
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}
