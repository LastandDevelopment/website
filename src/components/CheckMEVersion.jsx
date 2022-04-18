import { DownloadRounded } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function CheckMEVersion() {
  const [t] = useTranslation();

  const mostRecentVersion = "Alpha 0.1.2";

  const query = useQuery();
  const versionNumber = query.get("version");
  const currentVersion =
    versionNumber === "alpha-0.1"
      ? "Alpha 0.1"
      : versionNumber === "alpha-0.1.1"
        ? "Alpha 0.1.1"
        : versionNumber === "alpha-0.1.2"
          ? "Alpha 0.1.2"
          : versionNumber === "" || versionNumber === null
            ? t("updateME.noVersionGiven")
            : versionNumber;

  const unknownVersionText =
    currentVersion === versionNumber
      ? t("updateME.unknownVersion") + ": " + currentVersion
      : t("updateME.noVersionGiven");

  if (versionNumber === "alpha-0.1" || versionNumber === "alpha-0.1.1") {
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
            {t("updateME.title")}
          </Typography>
          <Typography
            variant="h3"
            sx={{ paddingTop: 7 }}>
            {t("updateME.updateAvailable")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingTop: 5 }}>
            {t("updateME.yourVersion")}: Version {currentVersion}
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingTop: 1 }}>
            {t("updateME.latestVersion")}: Version {mostRecentVersion}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            startIcon={<DownloadRounded />}
            sx={{ py: 1, px: 6, my: 4 }}
            href="https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinctionAlpha0.1.2.zip"
          >
            <Typography variant="h6">{t("updateME.loadUpdate")}</Typography>
          </Button>
        </Box>
      </Container>
    );
  } else if (currentVersion === mostRecentVersion) {
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
            {t("updateME.title")}
          </Typography>
          <Typography
            variant="h3"
            sx={{ paddingTop: 7 }}>
            {t("updateME.noUpdateAvailable")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ paddingTop: 5 }}>
            {t("updateME.yourVersion")}: Version {currentVersion}
          </Typography>
        </Box>
      </Container>
    );
  } else {
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
            {t("updateME.title")}
          </Typography>
          <Typography
            variant="h3"
            sx={{ paddingTop: 7 }}>
            {unknownVersionText}
          </Typography>
        </Box>
      </Container>
    );
  }
}
