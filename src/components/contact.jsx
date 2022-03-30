import * as React from "react";
import { Typography, Container, Box, Link, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [t] = useTranslation();
  return (
    <Container className="containerHome">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Typography
          variant="h1"
          sx={{ paddingBottom: 10, paddingTop: 18 }}>
          {t("contact.title")}
        </Typography>
        <Container className="containerLeft">
          <Typography
            variant="body1"
            sx={{ paddingTop: 5, paddingBottom: 1 }}>
            {t("contact.emailAddress")}
          </Typography>
          <Box className="linkWrapper">
            <Link
              underline="none"
              color="secondary.hover"
              href="mailto:lastand.development@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Typography variant="h5">
                lastand.development@gmail.com
              </Typography>
            </Link>
          </Box>
          <Typography
            variant="body1"
            sx={{ paddingTop: 10, paddingBottom: 2 }}>
            {t("contact.issueReport")}
          </Typography>
          <Button
            underline="none"
            sx={{ marginBottom: 2, marginRight: 2, paddingY: 0.5, paddingX: 3 }}
            variant="outlined"
            color="secondary"
            href="https://github.com/LastandDevelopment/website/issues/new/choose"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Typography variant="h6">{t("contact.websiteButton")}</Typography>
          </Button>
          <Button
            underline="none"
            sx={{ marginBottom: 2, marginRight: 2, paddingY: 0.5, paddingX: 3 }}
            variant="outlined"
            color="secondary"
            href="https://github.com/LastandDevelopment/MeteorExtinctionOfficial/issues/new/choose"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Typography variant="h6">Meteor Extinction</Typography>
          </Button>
          <Typography
            variant="body1"
            sx={{ paddingTop: 8, paddingBottom: 1 }}>
            {t("contact.noGitHub")}
          </Typography>
          <Box sx={{ paddingX: 3 }}>
            <Typography
              variant="h2"
              sx={{ paddingTop: 4 }}>
              1.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              {t("contact.environmentVersionMeteorExtinction")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              {t("contact.environmentVersionWoodenGUI")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              {t("contact.environmentVersionWebsite")}
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 4 }}>
              2.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              {t("contact.version")}
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 4 }}>
              3.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              {t("contact.description")}
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 4 }}>
              4.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              {t("contact.reproduce")}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
