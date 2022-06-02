import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ChangelogChooser from "./ChangelogChooser";

export default function Changelog(props) {
  const [t] = useTranslation();

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
              content="The Changelog of Meteor Extinction, the First Game by Lastand Development"
            />
          </Helmet>
          <Box sx={{ flexGrow: 1, pb: 10 }}>
            <Typography
              variant="h1"
              sx={{ paddingTop: 10 }}>
              Meteor Extinction
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 1 }}>
              {t("changelog.changelog")}
            </Typography>
            <ChangelogChooser
              displayLocation={props.displayLocation}
              location={props.location}
            />
          </Box>
        </Container>
      </div>
    </HelmetProvider>
  );
}
