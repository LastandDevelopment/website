import { UpdateRounded } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { isWindows, osName } from "react-device-detect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function CheckMEVersion(props) {
  const [t] = useTranslation();

  const mostRecentVersion = "Alpha 0.1.2";

  const query = useQuery();
  const [versionQuery, setVersionQuery] = useState(query.get("version"));
  useEffect(() => {
    if (props.location.pathname === props.displayLocation.pathname) {
      setVersionQuery(query.get("version"));
    }
  }, [props.location, props.displayLocation, query]);

  const downloadUpdate = () => {
    const link = document.createElement("a");
    link.href =
      "https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinctionAlpha0.1.2.zip";
    link.click();
  };

  const versionNumber = versionQuery;
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

  if (isWindows) {
    if (versionNumber === "alpha-0.1" || versionNumber === "alpha-0.1.1") {
      return (
        <HelmetProvider>
          <div className="insideDiv">
            <Container className="defaultContainer">
              <Helmet>
                <meta
                  name="robots"
                  content="noindex" />
                <meta
                  name="description"
                  content="The Update Page of Meteor Extinction, the First Game by Lastand Development"
                />
              </Helmet>
              <Box sx={{ flexGrow: 1, pb: 4 }}>
                <Typography
                  variant="h1"
                  sx={{ paddingTop: 10 }}>
                  Meteor Extinction
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ paddingTop: 1 }}>
                  {t("updateME.title")}
                </Typography>
                <Typography
                  variant="body1"
                  className="textLarge"
                  sx={{ paddingTop: 7 }}
                >
                  {t("updateME.updateAvailable")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ paddingTop: 5 }}>
                  {t("updateME.yourVersion")}: {currentVersion}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ paddingTop: 1 }}>
                  {t("updateME.latestVersion")}: {mostRecentVersion}
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<UpdateRounded />}
                  sx={{ py: 1, px: 6, my: 4 }}
                  onClick={downloadUpdate}
                >
                  <Typography
                    variant="body1"
                    className="textSmall">
                    {t("updateME.loadUpdate")}
                  </Typography>
                </Button>
              </Box>
            </Container>
          </div>
        </HelmetProvider>
      );
    } else if (currentVersion === mostRecentVersion) {
      return (
        <HelmetProvider>
          <div className="insideDiv">
            <Container className="defaultContainer">
              <Helmet>
                <meta
                  name="robots"
                  content="noindex" />
                <meta
                  name="description"
                  content="The Update Page of Meteor Extinction, the First Game by Lastand Development"
                />
              </Helmet>
              <Box sx={{ flexGrow: 1, pb: 4 }}>
                <Typography
                  variant="h1"
                  sx={{ paddingTop: 10 }}>
                  Meteor Extinction
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ paddingTop: 1 }}>
                  {t("updateME.title")}
                </Typography>
                <Typography
                  variant="body1"
                  className="textLarge"
                  sx={{ paddingTop: 7 }}
                >
                  {t("updateME.noUpdateAvailable")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ paddingTop: 5 }}>
                  {t("updateME.yourVersion")}: {currentVersion}
                </Typography>
              </Box>
            </Container>
          </div>
        </HelmetProvider>
      );
    } else {
      return (
        <HelmetProvider>
          <div className="insideDiv">
            <Container className="defaultContainer">
              <Helmet>
                <meta
                  name="robots"
                  content="noindex" />
                <meta
                  name="description"
                  content="The Update Page of Meteor Extinction, the First Game by Lastand Development"
                />
              </Helmet>
              <Box sx={{ flexGrow: 1, pb: 4 }}>
                <Typography
                  variant="h1"
                  sx={{ paddingTop: 10 }}>
                  Meteor Extinction
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ paddingTop: 1 }}>
                  {t("updateME.title")}
                </Typography>
                <Typography
                  variant="body1"
                  className="textLarge"
                  sx={{ paddingTop: 7 }}
                >
                  {unknownVersionText}
                </Typography>
              </Box>
            </Container>
          </div>
        </HelmetProvider>
      );
    }
  } else {
    return (
      <HelmetProvider>
        <div className="insideDiv">
          <Container className="defaultContainer">
            <Helmet>
              <meta
                name="robots"
                content="noindex" />
              <meta
                name="description"
                content="The Update Page of Meteor Extinction, the First Game by Lastand Development"
              />
            </Helmet>
            <Box sx={{ flexGrow: 1, pb: 4 }}>
              <Typography
                variant="h1"
                sx={{ paddingTop: 10 }}>
                Meteor Extinction
              </Typography>
              <Typography
                variant="h2"
                sx={{ paddingTop: 1 }}>
                {t("updateME.title")}
              </Typography>
              <Typography
                variant="body1"
                className="textLarge"
                sx={{ paddingTop: 7 }}
              >
                {t("updateME.notAvailableForOS")}
                {osName}
                {t("updateME.notAvailableForOS2")}
              </Typography>
            </Box>
          </Container>
        </div>
      </HelmetProvider>
    );
  }
}
