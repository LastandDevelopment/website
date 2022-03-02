import * as React from "react";
import { Typography, Box, Grid, Paper, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import MEImage from "./icons/MeteorExtinctionLogo.png";
import WGUIImage from "./icons/WoodenGUIBanner.png";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Home() {
  return (
    <Container className="containerHome">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Typography
          variant="body1"
          sx={{ p: 1 }}>
          The Official Website of Lastand Development.
        </Typography>
        <Typography
          variant="body2"
          sx={{ pb: 10 }}>
          Here you can find all my projects and programs, straight from the
          developer.
        </Typography>
        <Grid
          container
          spacing={4}>
          <Grid
            item
            xs={12}
            md={6}>
            <Item elevation={3}>
              <Typography
                variant="h2"
                sx={{ p: 2 }}>
                Meteor Extinction
              </Typography>
              <img
                class="meimg"
                src={MEImage}
                alt="meimg"
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
              >
                Learn More
              </Button>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}>
            <Item elevation={3}>
              <Typography
                variant="h2"
                sx={{ p: 2 }}>
                Wooden GUI
              </Typography>
              <img
                class="wgimg"
                src={WGUIImage}
                alt="wgimg"
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
              <Typography
                variant="body2"
                sx={{ p: 2 }}>
                Created using Aseprite. Based on the Minecraft textures by
                Mojang Studios.
              </Typography>
              <Button
                color="primary"
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon />}
                sx={{ py: 1, px: 14, my: 2 }}
              >
                Learn More
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
