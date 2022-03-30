import React, { Fragment } from "react";
import { Typography, Box, Grid, Paper, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import MEImage from "./icons/MeteorExtinctionBanner.svg";
import WGUIImage from "./icons/WoodenGUIBanner.svg";

import BannerHome from "./BannerHome";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t] = useTranslation();
  const { i18n } = useTranslation();

  const checkLanguageClass = (() => {
    if (i18n.language === "de") {
      return "HomePaperGerman";
    } else if (i18n.language === "en") {
      return "HomePaperEnglish";
    }
  })();

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
              {t("home.text1")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ pb: 10 }}>
              {t("home.text2")}
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
                className={checkLanguageClass}
                elevation={3}
                style={{ padding: 20 }}
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
                  {t("home.meteorExtinctionDescription")}
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
                  <Typography variant="h6">{t("home.moreInfo")}</Typography>
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
                className={checkLanguageClass}
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
                  {t("home.woodenGUIDescription")}
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
                  <Typography variant="h6">{t("home.moreInfo")}</Typography>
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}
