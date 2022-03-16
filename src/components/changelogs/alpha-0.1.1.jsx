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
            sx={{ paddingTop: 12, paddingBottom: 3, marginLeft: 1 }}
          >
            Alpha 0.1.1
          </Typography>
          <Box sx={{ marginLeft: 3 }}>
            <ul>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Added ability to pause the game (ESC key)
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Added ability to cancel or restart the game
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Added FPS display (Hotkey: F3)
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Added display of the text "New Highscore" when the highscore
                  is broken
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Bugs with the way buttons and scores have been displayed on
                  different aspect ratios have been fixed
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
