import * as React from "react";
import { Typography, Container, Box, Link } from "@mui/material";

export default function Contact() {
  return (
    <Container className="containerHome">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Typography
          variant="h1"
          sx={{ paddingBottom: 10, paddingTop: 18 }}>
          Contact
        </Typography>
        <Container className="containerLeft">
          <Typography
            variant="body1"
            sx={{ paddingTop: 5, paddingBottom: 1 }}>
            If you want to contact me, please write an email to the following
            email address:
          </Typography>
          <Link
            underline="none"
            color="gray"
            href="mailto:lastand.development@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Typography variant="h2">lastand.development@gmail.com</Typography>
          </Link>
          <Typography
            variant="body1"
            sx={{ paddingTop: 10, paddingBottom: 1 }}>
            If you want to report an issue or create a feature request for
            Meteor Extinction, please consider creating an issue on
            <Link
              underline="none"
              sx={{ marginLeft: 0.8 }}
              variant="h5"
              color="gray"
              href="https://github.com/LastandDevelopment/MeteorExtinctionOfficial/issues/new/choose"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingTop: 5, paddingBottom: 1 }}>
            Otherwise, please write an email with the following information:
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
              For Meteor Extinction: Operating System
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              For Wooden GUI: Minecraft Version and installed Modifications
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              For this Website: Browser (+ Version)
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 4 }}>
              2.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              For Meteor Extinction and Wooden GUI: Version
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 4 }}>
              3.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              Desciption of the Issue or the requested Feature
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 4 }}>
              4.
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 1 }}>
              For Issues: Steps to reproduce the Issue
            </Typography>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
