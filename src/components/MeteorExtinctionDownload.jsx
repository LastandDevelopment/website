import React from "react";

import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import WindowsIcon from "./icons/WindowsIcon.svg";

import Alpha0_1_2 from "./downloads/MeteorExtinctionAlpha0.1.2.zip";
import Alpha0_1_1 from "./downloads/MeteorExtinctionAlpha0.1.1.zip";
import Alpha0_1_0 from "./downloads/MeteorExtinctionAlpha0.1.zip";

import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: 250,
}));

const downloadAlpha012 = () => {
  saveAs(Alpha0_1_2, "Meteor Extinction Alpha 0.1.2.zip");
};

const downloadAlpha011 = () => {
  saveAs(Alpha0_1_1, "Meteor Extinction Alpha 0.1.1.zip");
};

const downloadAlpha010 = () => {
  saveAs(Alpha0_1_0, "Meteor Extinction Alpha 0.1.zip");
};

export default function MeteorExtinctionDownload(props) {
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
          {t("downloadPage.download")}
        </Typography>
        <Container className="containerLeft">
          <Typography
            variant="h2"
            sx={{ paddingTop: 12, paddingBottom: 4, marginLeft: 1 }}
          >
            {t("downloadPage.alphaVersions")}
          </Typography>
          <Grid
            container
            spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={4}>
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ pt: 3 }}>
                  Alpha 0.1.2
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ pb: 2, pt: 1 }}>
                  {t("downloadPage.releaseDateAlpha012")}
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    mt: 3,
                  }}
                  onClick={downloadAlpha012}
                >
                  <img
                    src={WindowsIcon}
                    className="windowsic"
                    alt="Windows"
                    style={{ height: 18 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: 2 }}>
                    {t("downloadPage.download")}
                  </Typography>
                </Button>
                <Box />
                <Button
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  variant="text"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    my: 2,
                  }}
                  component={Link}
                  to={"/meteorextinction/download/changelog/alpha-0.1.2"}
                >
                  <Typography variant="h6">
                    {t("downloadPage.changelog")}
                  </Typography>
                </Button>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={4}>
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ pt: 3 }}>
                  Alpha 0.1.1
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ pb: 2, pt: 1 }}>
                  {t("downloadPage.releaseDateAlpha011")}
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    mt: 3,
                  }}
                  onClick={downloadAlpha011}
                >
                  <img
                    src={WindowsIcon}
                    className="windowsic"
                    alt="Windows"
                    style={{ height: 18 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: 2 }}>
                    {t("downloadPage.download")}
                  </Typography>
                </Button>
                <Box />
                <Button
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  variant="text"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    my: 2,
                  }}
                  component={Link}
                  to={"/meteorextinction/download/changelog/alpha-0.1.1"}
                >
                  <Typography variant="h6">
                    {t("downloadPage.changelog")}
                  </Typography>
                </Button>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={4}>
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ pt: 3 }}>
                  Alpha 0.1
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ pb: 2, pt: 1 }}>
                  {t("downloadPage.releaseDateAlpha01")}
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    mt: 3,
                  }}
                  onClick={downloadAlpha010}
                >
                  <img
                    src={WindowsIcon}
                    className="windowsic"
                    alt="Windows"
                    style={{ height: 18 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: 2 }}>
                    {t("downloadPage.download")}
                  </Typography>
                </Button>
                <Box />
                <Button
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  variant="text"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    my: 2,
                  }}
                  component={Link}
                  to={"/meteorextinction/download/changelog/alpha-0.1.0"}
                >
                  <Typography variant="h6">
                    {t("downloadPage.changelog")}
                  </Typography>
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
