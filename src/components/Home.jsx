import React, { Fragment } from "react";
import { Typography, Box, Grid, Paper, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import MEImage from "./icons/MeteorExtinctionBanner.svg";
import WGUIImage from "./icons/WoodenGUIBanner.svg";

import BannerHome from "./BannerHome";

export default function Home() {
  return (
    <Fragment>
      <BannerHome />
      <Container className="containerHome">
        <Box sx={{ flexGrow: 1, pb: 4 }}>
          <Box sx={{ px: 2 }}>
            <Typography
              variant="body1"
              className="TopPaddingHome"
              sx={{ paddingBottom: 1 }}
            >
              The Official Website of Lastand Development.
            </Typography>
            <Typography
              variant="body1"
              sx={{ pb: 10 }}>
              Here you can find all my projects and programs, straight from the
              developer.
            </Typography>
          </Box>
          <Grid
            container
            spacing={4}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}>
              <Paper
                elevation={3}
                style={{ padding: 20 }}
                className="HomePaper"
              >
                <Typography
                  variant="h2"
                  sx={{ pt: 2, pb: 3 }}>
                  Meteor Extinction
                </Typography>
                <Box
                  component={Link}
                  to={"/meteorextinction"}>
                  <img
                    className="Banner"
                    src={MEImage}
                    alt="Meteor Extinction"
                    sx={{ flexGrow: 1 }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ p: 2 }}>
                  The arcade game by Lastand Development. Protect the earth from
                  meteors and buy upgrades to destroy more meteors!
                </Typography>
                <Button
                  className="HomeButton"
                  color="primary"
                  variant="contained"
                  endIcon={<ArrowForwardIosRoundedIcon />}
                  sx={{ py: 1, my: 2 }}
                  component={Link}
                  to={"/meteorextinction"}
                >
                  <Typography variant="h6">Learn More</Typography>
                </Button>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}>
              <Paper
                className="HomePaper"
                style={{ padding: 20 }}
                elevation={3}
              >
                <Typography
                  variant="h2"
                  sx={{ pt: 2, pb: 3 }}>
                  Wooden GUI
                </Typography>
                <Box
                  component={Link}
                  to={"/woodengui"}>
                  <img
                    className="Banner"
                    src={WGUIImage}
                    alt="Wooden GUI"
                    sx={{ flexGrow: 1 }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ p: 2 }}>
                  The resource pack by Lastand Development for Minecraft: Java
                  Edition. Enjoy a fully wood-based Minecraft interface!
                </Typography>
                <Button
                  className="HomeButton"
                  color="primary"
                  variant="contained"
                  endIcon={<ArrowForwardIosRoundedIcon />}
                  sx={{ py: 1, my: 2 }}
                  component={Link}
                  to={"/woodengui"}
                >
                  <Typography variant="h6">Learn More</Typography>
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}
