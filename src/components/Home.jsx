import React, { Fragment } from "react";

import {
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
// import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

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
        <Box sx={{ flexGrow: 1, pb: 6 }}>
          <Box className="homeText">
            <Typography
              variant="body1"
              className="TopPaddingHome"
              sx={{ paddingBottom: 1 }}
            >
              {t("home.text1")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingBottom: 10 }}>
              {t("home.text2")}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: 4 }}>
            <Accordion elevation={3}>
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon />}
                aria-controls="AboutLastandDevelopment-content"
                id="AboutLastandDevelopment-header"
                sx={{ paddingY: 2, paddingX: 5 }}
              >
                <Typography variant="h2">{t("home.about")}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ paddingBottom: 5, paddingX: 5 }}>
                <Typography
                  variant="body1"
                  sx={{ paddingBottom: 1 }}>
                  {t("home.hello")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ paddingBottom: 1 }}>
                  {t("home.description1")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ paddingBottom: 1 }}>
                  {t("home.description2")}
                </Typography>
                <Typography variant="body1">
                  {t("home.description3")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* <Paper
            sx={{ display: "flex", alignItems: "center" }}
            elevation={3}
            style={{ padding: 20 }}
          >
            <CampaignRoundedIcon sx={{ fontSize: 50, marginRight: 0.6 }} />
            <Typography
              sx={{ margin: 2 }}
              variant="body1">
              Description
            </Typography>
          </Paper> */}
          <Grid
            container
            spacing={4}
            /*sx={{ paddingTop: 4 }}*/
          >
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
                <img
                  className="Banner"
                  src={MEImage}
                  alt="Meteor Extinction"
                  sx={{ flexGrow: 1 }}
                />
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
                <img
                  className="Banner"
                  src={WGUIImage}
                  alt="Wooden GUI"
                  sx={{ flexGrow: 1 }}
                />
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
