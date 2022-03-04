import * as React from "react";

import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import WindowsIcon from "./icons/WindowsIcon.svg";

import Alpha0_1_2 from "./downloads/MeteorExtinctionAlpha0.1.2.zip";
import Alpha0_1_1 from "./downloads/MeteorExtinctionAlpha0.1.1.zip";
import Alpha0_1_0 from "./downloads/MeteorExtinctionAlpha0.1.zip";

import { saveAs } from "file-saver";

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

export default function MeteorExtinctionDownload() {
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
          Download
        </Typography>
        <Container className="containerDownloadME">
          <Typography
            variant="h2"
            sx={{ paddingTop: 12, paddingBottom: 4, marginLeft: 1 }}
          >
            Alpha Versions
          </Typography>
          <Grid
            container
            spacing={4}>
            <Grid
              item
              xs={12}
              md={4}
              sm={6}>
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ pt: 3 }}>
                  Alpha 0.1.2
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ pb: 2, pt: 1 }}>
                  01/19/2022
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 10,
                    mt: 3,
                  }}
                  onClick={downloadAlpha012}
                >
                  <img
                    src={WindowsIcon}
                    className="windowsic"
                    alt="windows"
                    style={{ height: 18 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: 2 }}>
                    Download
                  </Typography>
                </Button>
                <Button
                  color="secondary"
                  variant="text"
                  sx={{
                    py: 1,
                    px: 11.8,
                    my: 2,
                  }}
                  component={Link}
                  to={"/meteorextinction/download/changelog/alpha-0.1.2"}
                >
                  <Typography variant="h6">Changelog</Typography>
                </Button>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sm={6}>
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ pt: 3 }}>
                  Alpha 0.1.1
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ pb: 2, pt: 1 }}>
                  01/18/2022
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 10,
                    mt: 3,
                  }}
                  onClick={downloadAlpha011}
                >
                  <img
                    src={WindowsIcon}
                    className="windowsic"
                    alt="windows"
                    style={{ height: 18 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: 2 }}>
                    Download
                  </Typography>
                </Button>
                <Button
                  color="secondary"
                  variant="text"
                  sx={{
                    py: 1,
                    px: 11.8,
                    my: 2,
                  }}
                  component={Link}
                  to={"/meteorextinction/download/changelog/alpha-0.1.1"}
                >
                  <Typography variant="h6">Changelog</Typography>
                </Button>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sm={6}>
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ pt: 3 }}>
                  Alpha 0.1
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ pb: 2, pt: 1 }}>
                  01/17/2022
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 10,
                    mt: 3,
                  }}
                  onClick={downloadAlpha010}
                >
                  <img
                    src={WindowsIcon}
                    className="windowsic"
                    alt="windows"
                    style={{ height: 18 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: 2 }}>
                    Download
                  </Typography>
                </Button>
                <Button
                  color="secondary"
                  variant="text"
                  sx={{
                    py: 1,
                    px: 11.8,
                    my: 2,
                  }}
                  component={Link}
                  to={"/meteorextinction/download/changelog/alpha-0.1.0"}
                >
                  <Typography variant="h6">Changelog</Typography>
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
