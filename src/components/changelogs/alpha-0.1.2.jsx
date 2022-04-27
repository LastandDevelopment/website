import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Alpha012Changelog() {
  const [t] = useTranslation();

  return (
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
              {t("changelogAlpha012.p1")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogAlpha012.p2")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogAlpha012.p3")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogAlpha012.p4")}
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
}
