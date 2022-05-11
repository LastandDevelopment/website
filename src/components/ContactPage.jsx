import React from "react";

import { Typography, Container, Box, Button } from "@mui/material";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contact(props) {
  const [t] = useTranslation();

  return (
    <HelmetProvider>
      <Container className="defaultContainer">
        <Helmet>
          <meta
            name="description"
            content="Contact Lastand Development. Write an email or report an issue."
          />
        </Helmet>
        <Box sx={{ flexGrow: 1, pb: 4 }}>
          <Typography
            variant="h1"
            sx={{ paddingBottom: 10, paddingTop: 18 }}>
            {t("contact.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingTop: 5, paddingBottom: 1 }}>
            {t("contact.emailAddress")}
          </Typography>
          <Container sx={{ width: "fitContent" }}>
            <Button
              variant="text"
              color={props.themeMode === "dark" ? "secondary" : "primary"}
              href="mailto:lastand.development@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              sx={{ textTransform: "unset" }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 20, fontWeight: 1000 }}
              >
                lastand.development@gmail.com
              </Typography>
            </Button>
          </Container>
          <Typography
            variant="body1"
            sx={{ paddingTop: 10, paddingBottom: 2 }}>
            {t("contact.issueReport")}
          </Typography>
          <Button
            underline="none"
            sx={{ marginBottom: 2, marginRight: 2, paddingY: 0.5, width: 200 }}
            variant="outlined"
            color={props.themeMode === "dark" ? "secondary" : "primary"}
            href="https://github.com/LastandDevelopment/website/issues/new/choose"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Typography
              variant="body1"
              className="textSmall">
              {t("contact.websiteButton")}
            </Typography>
          </Button>
          <Button
            underline="none"
            sx={{ marginBottom: 2, marginRight: 2, paddingY: 0.5, width: 200 }}
            variant="outlined"
            color={props.themeMode === "dark" ? "secondary" : "primary"}
            href="https://github.com/LastandDevelopment/MeteorExtinctionOfficial/issues/new/choose"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Typography
              variant="body1"
              className="textSmall">
              Meteor Extinction
            </Typography>
          </Button>
          <Typography
            variant="body1"
            sx={{ paddingTop: 8, paddingBottom: 3 }}>
            {t("contact.noGitHub")}
          </Typography>
          <Button
            sx={{ py: 1.5, px: 7 }}
            variant="contained"
            color="primary"
            component={Link}
            to="/contact/issue-template"
            startIcon={<BugReportRoundedIcon />}
          >
            <Typography
              variant="body1"
              className="textSmall">
              {t("contact.issueTemplate")}
            </Typography>
          </Button>
        </Box>
      </Container>
    </HelmetProvider>
  );
}
