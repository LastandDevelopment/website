import * as React from "react";

import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import Beta0_1_1_17 from "./downloads/WoodenGUIBeta0.1for1.17.zip";
import Beta0_1_1_18 from "./downloads/WoodenGUIBeta0.1for1.18.zip";

import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";

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
                  Beta 0.1
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className="downloadButton"
                  sx={{
                    py: 1,
                    mt: 5,
                  }}
                  onClick={downloadBeta01118}
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
                  onClick={downloadBeta01117}
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
