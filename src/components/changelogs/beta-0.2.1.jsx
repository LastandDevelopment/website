import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Beta021Changelog() {
  const [t] = useTranslation();

  return (
    <Container className="leftTextAlignContainer">
      <Typography
        variant="h2"
        sx={{ paddingTop: 12, paddingBottom: 3, marginLeft: 1 }}
      >
        Beta 0.2.1
      </Typography>
      <Box sx={{ marginLeft: 3 }}>
        <ul>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta021.p1")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta021.p2")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta021.p3")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta021.p4")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta021.p5")}
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
}
