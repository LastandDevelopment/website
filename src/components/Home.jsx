import React, { Fragment } from "react";
import { Typography, Box, Grid, Paper, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import MEImage from "./icons/MeteorExtinctionBanner.svg";
import WGUIImage from "./icons/WoodenGUIBanner.svg";

import BannerHome from "./BannerHome";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: 480,
}));

export default function Home() {
  return (
    <Fragment>
      <BannerHome />
      <Container className="containerHome">
        <Box sx={{ flexGrow: 1, pb: 4 }}>
          <Box sx={{ px: 2 }}>
            <Typography
              variant="body1"
              sx={{ paddingBottom: 1, paddingTop: 10 }}
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
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ p: 3 }}>
                  Meteor Extinction
                </Typography>
                <img
                  className="Banner"
                  src={MEImage}
                  alt="Meteor Extinction"
                  style={{ width: 330 }}
                  component="div"
                  sx={{ flexGrow: 1 }}
                />
                <Typography
                  variant="body2"
                  sx={{ p: 2 }}>
                  The arcade game by Lastand Development. Protect the earth from
                  meteors. Alone or in offline multiplayer with friends!
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<ArrowForwardIosRoundedIcon />}
                  sx={{ py: 1, px: 14, my: 2 }}
                  component={Link}
                  to={"/meteorextinction"}
                >
                  <Typography variant="h6">Learn More</Typography>
                </Button>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}>
              <Item elevation={3}>
                <Typography
                  variant="h2"
                  sx={{ p: 3 }}>
                  Wooden GUI
                </Typography>
                <img
                  className="Banner"
                  src={WGUIImage}
                  alt="Wooden GUI"
                  style={{ width: 330 }}
                  component="div"
                  sx={{ flexGrow: 1 }}
                />
                <Typography
                  variant="body2"
                  sx={{ p: 2 }}>
                  The resource pack by Lastand Development for Minecraft: Java
                  Edition. Enjoy a fully wood-based Minecraft interface!
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<ArrowForwardIosRoundedIcon />}
                  sx={{ py: 1, px: 14, my: 2 }}
                  component={Link}
                  to={"/woodengui"}
                >
                  <Typography variant="h6">Learn More</Typography>
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}
