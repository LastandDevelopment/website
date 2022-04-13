import React from "react";

import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useTranslation } from "react-i18next";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: 220,
}));

export default function WoodenGUIDownload() {
  const [t] = useTranslation();
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
          {t("downloadPage.download")}
        </Typography>
        <Container className="containerLeft">
          <Typography
            variant="h2"
            sx={{ paddingTop: 12, paddingBottom: 4, marginLeft: 1 }}
          >
            {t("downloadPage.betaVersions")}
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
                  Beta 1.0
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    mt: 5,
                  }}
                  href="https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/WoodenGUIBeta1.0for1.18.zip"
                >
                  <Typography variant="h6">
                    {t("downloadPage.downloadFor118")}
                  </Typography>
                </Button>
                <Box />
                <Button
                  color="primary"
                  variant="contained"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    mt: 2,
                  }}
                  href="https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/WoodenGUIBeta1.0for1.17.zip"
                >
                  <Typography variant="h6">
                    {t("downloadPage.downloadFor117")}
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
