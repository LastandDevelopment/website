import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Alpha010Changelog() {
  const [t] = useTranslation();

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
          {t("changelog.changelog")}
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
                  {t("changelogAlpha01.p1")}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  {t("changelogAlpha01.p2")}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1 }}>
                  {t("changelogAlpha01.p3")}
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
