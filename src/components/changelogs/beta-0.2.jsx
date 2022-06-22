import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Beta02Changelog() {
  const [t] = useTranslation();

  return (
    <Container className="leftTextAlignContainer">
      <Typography
        variant="h2"
        sx={{ paddingTop: 12, paddingBottom: 3, marginLeft: 1 }}
      >
        Beta 0.2
      </Typography>
      <Box sx={{ marginLeft: 3 }}>
        <ul>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p1")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p2")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p3")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p4")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p5")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p6")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p7")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p8")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p9")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p10")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p11")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p12")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p13")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p14")}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1 }}>
              {t("changelogBeta02.p15")}
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
}
