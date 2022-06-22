import React from "react";

import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  SvgIcon,
  Menu,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { ReactComponent as WindowsIcon } from "./icons/WindowsIcon.svg";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { useTranslation } from "react-i18next";
import NotSupportedWarning from "./NotSupportedWarning";
import { isAndroid, isMacOs, isWindows, osName } from "react-device-detect";
import { Helmet, HelmetProvider } from "react-helmet-async";

import MeteorExtinctionDownloadOSSelection from "./MeteorExtinctionDownloadOSSelection";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: 250,
}));

export default function MeteorExtinctionDownload(props) {
  const [t] = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const downloadAlpha012 = () => {
    const link = document.createElement("a");
    link.href =
      "https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinctionAlpha0.1.2.zip";
    link.click();
  };

  const downloadAlpha011 = () => {
    const link = document.createElement("a");
    link.href =
      "https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinctionAlpha0.1.1.zip";
    link.click();
  };

  const downloadAlpha01 = () => {
    const link = document.createElement("a");
    link.href =
      "https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinctionAlpha0.1.zip";
    link.click();
  };

  return (
    <HelmetProvider>
      <div className="insideDiv">
        <Container className="defaultContainer">
          <Helmet>
            <meta
              name="robots"
              content="noindex" />
            <meta
              name="description"
              content="Download Meteor Extinction, the First Game by Lastand Development"
            />
          </Helmet>
          <Box sx={{ flexGrow: 1, pb: 4 }}>
            <Typography
              variant="h1"
              sx={{ paddingTop: 10 }}>
              Meteor Extinction
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: 1, paddingBottom: 12 }}>
              {t("downloadPage.download")}
            </Typography>
            <NotSupportedWarning
              program="ME"
              show={!(isWindows || isAndroid || isMacOs || osName === "Linux")}
            />
            <Container className="leftTextAlignContainer">
              <Typography
                variant="h2"
                sx={{ paddingBottom: 4, marginLeft: 1 }}>
                {t("downloadPage.betaVersions")}
              </Typography>
              <Grid
                container
                spacing={4}
                sx={{ marginBottom: 8 }}>
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
                      Beta 0.2
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ pb: 2, pt: 1 }}>
                      {t("downloadPage.releaseDateBeta02")}
                    </Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        mt: 3,
                      }}
                      onClick={handleClick}
                      startIcon={<DownloadRoundedIcon />}
                    >
                      <Typography
                        variant="body1"
                        className="textSmall">
                        {t("downloadPage.download")}
                      </Typography>
                    </Button>
                    <Menu
                      PaperProps={{
                        style: {
                          width: 230,
                        },
                        elevation: 10,
                      }}
                      id="main-menu"
                      elevation={3}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: -5,
                        horizontal: "center",
                      }}
                    >
                      <MeteorExtinctionDownloadOSSelection
                        handleClose={handleClose}
                      />
                    </Menu>
                    <Box />
                    <Button
                      color={
                        props.themeMode === "dark" ? "secondary" : "primary"
                      }
                      variant="text"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        my: 2,
                      }}
                      component={Link}
                      to={
                        "/meteorextinction/download/changelog?version=beta-0.2"
                      }
                    >
                      <Typography
                        variant="body1"
                        className="textSmall">
                        {t("downloadPage.changelog")}
                      </Typography>
                    </Button>
                  </Item>
                </Grid>
              </Grid>
              <Typography
                variant="h2"
                sx={{ paddingBottom: 4, marginLeft: 1 }}>
                {t("downloadPage.alphaVersions")}
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
                      Alpha 0.1.2
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ pb: 2, pt: 1 }}>
                      {t("downloadPage.releaseDateAlpha012")}
                    </Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        mt: 3,
                      }}
                      onClick={downloadAlpha012}
                      startIcon={
                        <SvgIcon>
                          <WindowsIcon style={{ color: "#FFFFFF" }} />
                        </SvgIcon>
                      }
                    >
                      <Typography
                        variant="body1"
                        className="textSmall"
                        sx={{ marginLeft: 0.5 }}
                      >
                        {t("downloadPage.download")}
                      </Typography>
                    </Button>
                    <Box />
                    <Button
                      color={
                        props.themeMode === "dark" ? "secondary" : "primary"
                      }
                      variant="text"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        my: 2,
                      }}
                      component={Link}
                      to={
                        "/meteorextinction/download/changelog?version=alpha-0.1.2"
                      }
                    >
                      <Typography
                        variant="body1"
                        className="textSmall">
                        {t("downloadPage.changelog")}
                      </Typography>
                    </Button>
                  </Item>
                </Grid>
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
                      Alpha 0.1.1
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ pb: 2, pt: 1 }}>
                      {t("downloadPage.releaseDateAlpha011")}
                    </Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        mt: 3,
                      }}
                      onClick={downloadAlpha011}
                      startIcon={
                        <SvgIcon>
                          <WindowsIcon style={{ color: "#FFFFFF" }} />
                        </SvgIcon>
                      }
                    >
                      <Typography
                        variant="body1"
                        className="textSmall"
                        sx={{ marginLeft: 0.5 }}
                      >
                        {t("downloadPage.download")}
                      </Typography>
                    </Button>
                    <Box />
                    <Button
                      color={
                        props.themeMode === "dark" ? "secondary" : "primary"
                      }
                      variant="text"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        my: 2,
                      }}
                      component={Link}
                      to={
                        "/meteorextinction/download/changelog?version=alpha-0.1.1"
                      }
                    >
                      <Typography
                        variant="body1"
                        className="textSmall">
                        {t("downloadPage.changelog")}
                      </Typography>
                    </Button>
                  </Item>
                </Grid>
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
                      Alpha 0.1
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ pb: 2, pt: 1 }}>
                      {t("downloadPage.releaseDateAlpha01")}
                    </Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        mt: 3,
                      }}
                      onClick={downloadAlpha01}
                      startIcon={
                        <SvgIcon>
                          <WindowsIcon style={{ color: "#FFFFFF" }} />
                        </SvgIcon>
                      }
                    >
                      <Typography
                        variant="body1"
                        className="textSmall"
                        sx={{ marginLeft: 0.5 }}
                      >
                        {t("downloadPage.download")}
                      </Typography>
                    </Button>
                    <Box />
                    <Button
                      color={
                        props.themeMode === "dark" ? "secondary" : "primary"
                      }
                      variant="text"
                      className="downloadButton"
                      sx={{
                        py: 1,
                        my: 2,
                      }}
                      component={Link}
                      to={
                        "/meteorextinction/download/changelog?version=alpha-0.1"
                      }
                    >
                      <Typography
                        variant="body1"
                        className="textSmall">
                        {t("downloadPage.changelog")}
                      </Typography>
                    </Button>
                  </Item>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </div>
    </HelmetProvider>
  );
}
