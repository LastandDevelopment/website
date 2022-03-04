import * as React from "react";

import { Container, Box, Typography } from "@mui/material";

export default function Alpha011Changelog() {
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
            sx={{ paddingTop: 12, paddingBottom: 5, marginLeft: 1 }}
          >
            Alpha 0.1.1
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Added ability to pause the game (ESC key)
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Added ability to cancel or restart the game
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Added FPS display (Hotkey: F3)
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Added display of the text "New Highscore" when the highscore is
            broken
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingBottom: 2, marginLeft: 3 }}>
            Bugs with the way buttons and scores have been displayed on
            different aspect ratios have been fixed
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}
