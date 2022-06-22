import React, { useState } from "react";

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
import { styled } from "@mui/material/styles";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

import MEImage from "./icons/MeteorExtinctionBanner.svg";
import WGUIImage from "./icons/WoodenGUIBanner.svg";

import BannerHome from "./BannerHome";
import { useTranslation } from "react-i18next";

const LearnMoreIcon = styled(ArrowForwardIosRoundedIcon)(({ hover }) => ({
  transform: `translateX(${hover === 1 ? 6 : 0}px)`,
  fontSize: "15px !important",
}));

export default function Home() {
  const [t] = useTranslation();
  const { i18n } = useTranslation();

  const [hoverButtonOne, setHoverButtonOne] = useState(false);
  const [hoverButtonTwo, setHoverButtonTwo] = useState(false);
  const [hoverButtonInfo, setHoverButtonInfo] = useState(false);

  const checkLanguageClass = (() => {
    if (i18n.language === "de") {
      return styles.PaperGerman;
    } else if (i18n.language === "en") {
      return styles.PaperEnglish;
    }
  })();

  return (
    <div className="insideDiv">
      <BannerHome />
      <Container className="defaultContainer">
        <Box sx={{ flexGrow: 1, pb: 4 }}>
          <Box className={styles.IntroductionText}>
            <Typography
              variant="body1"
              sx={{ paddingBottom: 1, paddingTop: 10 }}
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
          <Paper
            sx={{ display: "flex", alignItems: "center" }}
            elevation={3}
            style={{ padding: 20 }}
          >
            <CampaignRoundedIcon sx={{ fontSize: 50, marginRight: 0.6 }} />
            <Typography
              sx={{ margin: 2 }}
              variant="body1">
              <b>Meteor Extinction Beta 0.2</b>
              {t("home.announcement")}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              endIcon={
                <LearnMoreIcon
                  hover={hoverButtonInfo ? 1 : 0}
                  variant="learnMore"
                />
              }
              sx={{ py: 1, px: 5, my: 2, marginLeft: "auto" }}
              component={Link}
              to={"/meteorextinction"}
              onMouseEnter={() => setHoverButtonInfo(true)}
              onMouseLeave={() => setHoverButtonInfo(false)}
              onTouchStart={() => setHoverButtonInfo(true)}
              onTouchEnd={() => setHoverButtonInfo(false)}
            >
              <Typography
                variant="body1"
                className="textSmall">
                {t("home.moreInfo")}
              </Typography>
            </Button>
          </Paper>
          <Grid
            container
            spacing={4}
            sx={{ paddingTop: 4 }}>
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
                  className={styles.Banner}
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
                  className={styles.CardButton}
                  color="primary"
                  variant="contained"
                  endIcon={
                    <LearnMoreIcon
                      hover={hoverButtonOne ? 1 : 0}
                      variant="learnMore"
                    />
                  }
                  sx={{ py: 1, my: 2 }}
                  component={Link}
                  to={"/meteorextinction"}
                  onMouseEnter={() => setHoverButtonOne(true)}
                  onMouseLeave={() => setHoverButtonOne(false)}
                  onTouchStart={() => setHoverButtonOne(true)}
                  onTouchEnd={() => setHoverButtonOne(false)}
                >
                  <Typography
                    variant="body1"
                    className="textSmall">
                    {t("home.moreInfo")}
                  </Typography>
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
                  className={styles.Banner}
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
                  className={styles.CardButton}
                  color="primary"
                  variant="contained"
                  endIcon={
                    <LearnMoreIcon
                      hover={hoverButtonTwo ? 1 : 0}
                      variant="learnMore"
                    />
                  }
                  sx={{ py: 1, my: 2 }}
                  component={Link}
                  to={"/woodengui"}
                  onMouseEnter={() => setHoverButtonTwo(true)}
                  onMouseLeave={() => setHoverButtonTwo(false)}
                  onTouchStart={() => setHoverButtonTwo(true)}
                  onTouchEnd={() => setHoverButtonTwo(false)}
                >
                  <Typography
                    variant="body1"
                    className="textSmall">
                    {t("home.moreInfo")}
                  </Typography>
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
