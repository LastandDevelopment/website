import * as React from "react";

import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import Beta0_1_1_17 from "./downloads/WoodenGUIBeta0.1for1.17.zip";
import Beta0_1_1_18 from "./downloads/WoodenGUIBeta0.1for1.18.zip";

import { saveAs } from "file-saver";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: 220,
}));

const downloadBeta01117 = () => {
  saveAs(Beta0_1_1_17, "Wooden GUI Beta 0.1 for 1.17.zip");
};

const downloadBeta01118 = () => {
  saveAs(Beta0_1_1_18, "Wooden GUI Beta 0.1 for 1.18.zip");
};

export default function WoodenGUIDownload() {
  return (
    <Container className="containerHome">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Typography
          variant="h1"
          sx={{ paddingTop: 18 }}>
          Wooden GUI
        </Typography>
        <Typography
          variant="h2"
          sx={{ paddingTop: 1 }}>
          Download
        </Typography>
        <Container className="containerLeft">
          <Typography
            variant="h2"
            sx={{ paddingTop: 12, paddingBottom: 4, marginLeft: 1 }}
          >
            Beta Versions
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
                  Beta 0.1
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 8,
                    mt: 5,
                  }}
                  onClick={downloadBeta01118}
                >
                  <Typography variant="h6">Download for 1.18</Typography>
                </Button>
                <Box />
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 8,
                    mt: 2,
                  }}
                  onClick={downloadBeta01117}
                >
                  <Typography variant="h6">Download for 1.17</Typography>
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
