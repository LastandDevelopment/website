import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ChangelogChooser from "./ChangelogChooser";

export default function Changelog(props) {
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
        <ChangelogChooser
          displayLocation={props.displayLocation}
          location={props.location}
        />
      </Box>
    </Container>
  );
}
