import * as React from "react";

import { Container, Box, Typography } from "@mui/material";

export default function Alpha012Changelog() {
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
            Alpha 0.1.2
          </Typography>
          <Box sx={{ marginLeft: 3 }}>
            <ul>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Crosshair is built in as a native mouse pointer, so it's more
                  direct, no longer lags behind, and can be displayed over the
                  score
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Fixed a bug that sometimes prevented the remaining attempts
                  from being displayed correctly after restarting the game in
                  the pause menu
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Fixed an error that occurred when app info was opened and then
                  closed again very quickly
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  Fixed a bug that prevented the correct crosshair from being
                  displayed during the countdown if the game ended while being
                  paused
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
