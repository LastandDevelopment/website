import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Alpha011Changelog() {
  const [t] = useTranslation();

  return (
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
              {t("changelogAlpha011.p1")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogAlpha011.p2")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogAlpha011.p3")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogAlpha011.p4")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogAlpha011.p5")}
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
}
