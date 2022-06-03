import React, { useState, useEffect, useMemo } from "react";

import {
  Container,
  Box,
  TextField,
  MenuItem,
  Fade,
  Collapse,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    textAlign: "center",
    "@media screen and (max-width: 900px)": {
      width: "90vw !important",
    },
    "@media screen and (min-width: 900px)": {
      width: "820px !important",
    },
  },
}));

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function IssueTemplate(props) {
  const classes = useStyles();

  const [t] = useTranslation();
  const query = useQuery();

  const [valid, setValid] = useState(false);

  const [transition, setTransition] = useState(false);

  const [program, setProgram] = useState(
    query.get("error") === "404" ? "Website" : ""
  );
  const [programSelected, setProgramSelected] = useState(
    query.get("error") === "404"
  );
  const [mESelected, setMESelected] = useState(false);
  const [wGUISelected, setWGUISelected] = useState(false);
  const [wSSelected, setWSSelected] = useState(query.get("error") === "404");

  const [feedback, setFeedback] = useState(false);

  const [os, setOs] = useState("");
  const [mEVersion, setMEVersion] = useState("");
  const [mEDescription, setMEDescription] = useState("");
  const [mEReproduction, setMEReproduction] = useState("");

  const [minecraftVersion, setMinecraftVersion] = useState("");
  const [wGUIVersion, setWGUIVersion] = useState("");
  const [wGUIDescription, setWGUIDescription] = useState("");

  const [browser, setBrowser] = useState("");
  const [wSVersion, setWSVersion] = useState("");
  const [wSDescription, setWSDescription] = useState(
    query.get("error") === "404" ? "404 in page [URL]" : ""
  );
  const [wSReproduction, setWSReproduction] = useState("");

  useEffect(() => {
    if (program === "Meteor Extinction") {
      if (
        !(os === "") &&
        !(mEVersion === "") &&
        !(mEDescription === "") &&
        !(mEReproduction === "")
      ) {
        setValid(true);
      } else {
        setValid(false);
      }
    } else if (program === "Wooden GUI") {
      if (
        !(minecraftVersion === "") &&
        !(wGUIVersion === "") &&
        !(wGUIDescription === "")
      ) {
        setValid(true);
      } else {
        setValid(false);
      }
    } else if (program === "Website") {
      if (
        !(browser === "") &&
        !(wSVersion === "") &&
        !(wSDescription === "") &&
        !(wSReproduction === "")
      ) {
        setValid(true);
      } else {
        setValid(false);
      }
    } else {
      setValid(false);
    }
  }, [
    program,
    os,
    mEVersion,
    mEDescription,
    mEReproduction,
    minecraftVersion,
    wGUIVersion,
    wGUIDescription,
    browser,
    wSVersion,
    wSDescription,
    wSReproduction,
  ]);

  const handleChangeChooseProgram = (event) => {
    if (!transition) {
      setTransition(true);
      setProgram(event.target.value);
      setTimeout(() => {
        setTransition(false);
      }, 2000);
    }
  };

  const handleChangeFeedback = (event) => {
    setFeedback(event.target.checked);
  };

  const handleChangeOS = (event) => {
    setOs(event.target.value);
  };
  const handleChangeMEVersion = (event) => {
    setMEVersion(event.target.value);
  };
  const handleChangeMEDescription = (event) => {
    setMEDescription(event.target.value);
  };
  const handleChangeMEReproduction = (event) => {
    setMEReproduction(event.target.value);
  };

  const handleChangeMinecraftVersion = (event) => {
    setMinecraftVersion(event.target.value);
  };
  const handleChangeWGUIVersion = (event) => {
    setWGUIVersion(event.target.value);
  };
  const handleChangeWGUIDescription = (event) => {
    setWGUIDescription(event.target.value);
  };

  const handleChangeBrowser = (event) => {
    setBrowser(event.target.value);
  };
  const handleChangeWSVersion = (event) => {
    setWSVersion(event.target.value);
  };
  const handleChangeWSDescription = (event) => {
    setWSDescription(event.target.value);
  };
  const handleChangeWSReproduction = (event) => {
    setWSReproduction(event.target.value);
  };

  useEffect(() => {
    if (program === "Meteor Extinction") {
      setTimeout(
        () => {
          setMESelected(true);
          setProgramSelected(true);
        },
        programSelected ? 1000 : 0
      );
      setWGUISelected(false);
      setWSSelected(false);
    } else if (program === "Wooden GUI") {
      setMESelected(false);
      setTimeout(
        () => {
          setWGUISelected(true);
          setProgramSelected(true);
        },
        programSelected ? 1000 : 0
      );
      setWSSelected(false);
    } else if (program === "Website") {
      setMESelected(false);
      setWGUISelected(false);
      setTimeout(
        () => {
          setWSSelected(true);
          setProgramSelected(true);
        },
        programSelected ? 1000 : 0
      );
    }
  }, [program, programSelected]);

  const sendMail = () => {
    if (program === "Meteor Extinction") {
      const link = document.createElement("a");
      feedback
        ? (link.href =
            "mailto:lastand.development@gmail.com?subject=Issue: Meteor Extinction Version " +
            mEVersion +
            "&body=Operating System:%0D%0A   " +
            os +
            "%0D%0A%0D%0AVersion of Meteor Extinction:%0D%0A   Version " +
            mEVersion +
            "%0D%0A%0D%0ADescription of the Issue:%0D%0A   " +
            mEDescription.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0ASteps to reproduce the issue:%0D%0A   " +
            mEReproduction.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0A%0D%0AFEEDBACK REQUESTED")
        : (link.href =
            "mailto:lastand.development@gmail.com?subject=Issue: Meteor Extinction Version " +
            mEVersion +
            "&body=Operating System:%0D%0A   " +
            os +
            "%0D%0A%0D%0AVersion of Meteor Extinction:%0D%0A   Version " +
            mEVersion +
            "%0D%0A%0D%0ADescription of the Issue:%0D%0A   " +
            mEDescription.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0ASteps to reproduce the issue:%0D%0A   " +
            mEReproduction.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0A%0D%0ADO NOT RESPOND");
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.click();
    } else if (program === "Wooden GUI") {
      const link = document.createElement("a");
      feedback
        ? (link.href =
            "mailto:lastand.development@gmail.com?subject=Issue: Wooden GUI Version " +
            wGUIVersion +
            "&body=Minecraft Version and installed Modifications:%0D%0A   " +
            minecraftVersion +
            "%0D%0A%0D%0AVersion of Wooden GUI:%0D%0A   Version " +
            wGUIVersion +
            "%0D%0A%0D%0ADescription of the Issue:%0D%0A   " +
            wGUIDescription.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0A%0D%0AFEEDBACK REQUESTED")
        : (link.href =
            "mailto:lastand.development@gmail.com?subject=Issue: Wooden GUI Version " +
            wGUIVersion +
            "&body=Minecraft Version and installed Modifications:%0D%0A   " +
            minecraftVersion +
            "%0D%0A%0D%0AVersion of Wooden GUI:%0D%0A   Version " +
            wGUIVersion +
            "%0D%0A%0D%0ADescription of the Issue:%0D%0A   " +
            wGUIDescription.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0A%0D%0ADO NOT RESPOND");
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.click();
    } else if (program === "Website") {
      const link = document.createElement("a");
      feedback
        ? (link.href =
            "mailto:lastand.development@gmail.com?subject=Issue: Website Version " +
            wSVersion +
            "&body=Browser:%0D%0A   " +
            browser +
            "%0D%0A%0D%0AVersion of the Website:%0D%0A   Version " +
            wSVersion +
            "%0D%0A%0D%0ADescription of the Issue:%0D%0A   " +
            wSDescription.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0ASteps to reproduce the issue:%0D%0A   " +
            wSReproduction.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0A%0D%0AFEEDBACK REQUESTED")
        : (link.href =
            "mailto:lastand.development@gmail.com?subject=Issue: Website Version " +
            wSVersion +
            "&body=Browser:%0D%0A   " +
            browser +
            "%0D%0A%0D%0AVersion of the Website:%0D%0A   Version " +
            wSVersion +
            "%0D%0A%0D%0ADescription of the Issue:%0D%0A   " +
            wSDescription.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0ASteps to reproduce the issue:%0D%0A   " +
            wSReproduction.replaceAll("\n", "%0D%0A   ") +
            "%0D%0A%0D%0A%0D%0ADO NOT RESPOND");
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.click();
    }
  };

  return (
    <HelmetProvider>
      <div className="insideDiv">
        <Container className={classes.container}>
          <Helmet>
            {query.get("error") === "404" && (
              <meta
                name="robots"
                content="noindex" />
            )}
            <meta
              name="description"
              content="Report an Issue for Meteor Extinction, Wooden GUI or the website of Lastand Development."
            />
          </Helmet>
          <Box sx={{ flexGrow: 1, pb: 4 }}>
            <Typography
              variant="h1"
              sx={{ paddingTop: 10 }}>
              {t("issueTemplate.title")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 11, paddingBottom: 5 }}
            >
              {t("issueTemplate.description")}
            </Typography>
            <Box sx={{ textAlign: "right" }}>
              <Button
                sx={{ py: 1.5, px: 4, marginBottom: 5 }}
                variant="contained"
                color="primary"
                endIcon={<SendRoundedIcon />}
                disabled={!valid}
                onClick={sendMail}
              >
                <Typography
                  variant="body1"
                  className="textSmall">
                  {t("issueTemplate.send")}
                </Typography>
              </Button>
            </Box>
            <Collapse
              in={!valid}
              timeout={1000}
              orientation={"vertical"}>
              <Fade
                in={!valid}
                timeout={1000}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{ marginBottom: 3 }}
                  >
                    {t("issueTemplate.fillEverything")}
                  </Typography>
                </Box>
              </Fade>
            </Collapse>
            <TextField
              id="choose-program"
              label={t("issueTemplate.chooseProgram")}
              value={program}
              onChange={handleChangeChooseProgram}
              select
              fullWidth
              variant="outlined"
              color={props.themeMode === "dark" ? "secondary" : "primary"}
              SelectProps={{
                IconComponent: ArrowDropDownRoundedIcon,
              }}
              sx={{ textAlign: "left", mb: 2 }}
            >
              <MenuItem value="Meteor Extinction">Meteor Extinction</MenuItem>
              <MenuItem value="Wooden GUI">Wooden GUI</MenuItem>
              <MenuItem value="Website">Website</MenuItem>
            </TextField>
            <Collapse
              in={mESelected}
              timeout={1000}
              orientation={"vertical"}
              sx={{ paddingTop: "5px" }}
            >
              <Fade
                in={mESelected}
                timeout={1000}>
                <TextField
                  id="operating-system"
                  label={t("issueTemplate.os")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  sx={{ mb: 2, mt: 5 }}
                  value={os}
                  onChange={handleChangeOS}
                />
              </Fade>
              <Fade
                in={mESelected}
                timeout={1000}>
                <TextField
                  id="game-version"
                  label={t("issueTemplate.gameVersion")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  value={mEVersion}
                  onChange={handleChangeMEVersion}
                  select
                  SelectProps={{
                    IconComponent: ArrowDropDownRoundedIcon,
                  }}
                  sx={{ textAlign: "left", mb: 2 }}
                >
                  <MenuItem value="Alpha 0.1">Alpha 0.1</MenuItem>
                  <MenuItem value="Alpha 0.1.1">Alpha 0.1.1</MenuItem>
                  <MenuItem value="Alpha 0.1.2">Alpha 0.1.2</MenuItem>
                </TextField>
              </Fade>
              <Fade
                in={mESelected}
                timeout={1000}>
                <TextField
                  id="issue-description-ME"
                  label={t("issueTemplate.issueDescription")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  multiline
                  minRows={6}
                  sx={{ mb: 2 }}
                  value={mEDescription}
                  onChange={handleChangeMEDescription}
                />
              </Fade>
              <Fade
                in={mESelected}
                timeout={1000}>
                <TextField
                  id="issue-reproduction-ME"
                  label={t("issueTemplate.issueReproduction")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  multiline
                  minRows={4}
                  sx={{ mb: 2 }}
                  value={mEReproduction}
                  onChange={handleChangeMEReproduction}
                />
              </Fade>
            </Collapse>
            <Collapse
              in={wGUISelected}
              timeout={1000}
              orientation={"vertical"}
              sx={{ paddingTop: "5px" }}
            >
              <Fade
                in={wGUISelected}
                timeout={1000}>
                <TextField
                  id="minecraft-version"
                  label={t("issueTemplate.minecraftVersion")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  sx={{ mb: 2, mt: 5 }}
                  value={minecraftVersion}
                  onChange={handleChangeMinecraftVersion}
                />
              </Fade>
              <Fade
                in={wGUISelected}
                timeout={1000}>
                <TextField
                  id="pack-version"
                  label={t("issueTemplate.packVersion")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  value={wGUIVersion}
                  onChange={handleChangeWGUIVersion}
                  select
                  SelectProps={{
                    IconComponent: ArrowDropDownRoundedIcon,
                  }}
                  sx={{ textAlign: "left", mb: 2 }}
                >
                  <MenuItem value="Beta 1.0">Beta 1.0</MenuItem>
                </TextField>
              </Fade>
              <Fade
                in={wGUISelected}
                timeout={1000}>
                <TextField
                  id="issue-description-WGUI"
                  label={t("issueTemplate.issueDescription")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  multiline
                  minRows={6}
                  sx={{ mb: 2 }}
                  value={wGUIDescription}
                  onChange={handleChangeWGUIDescription}
                />
              </Fade>
            </Collapse>
            <Collapse
              in={wSSelected}
              timeout={1000}
              orientation={"vertical"}
              sx={{ paddingTop: "5px" }}
            >
              <Fade
                in={wSSelected}
                timeout={1000}>
                <TextField
                  id="browser"
                  label={t("issueTemplate.browser")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  sx={{ mb: 2, mt: 5 }}
                  value={browser}
                  onChange={handleChangeBrowser}
                />
              </Fade>
              <Fade
                in={wSSelected}
                timeout={1000}>
                <TextField
                  id="website-version"
                  label={t("issueTemplate.websiteVersion")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  sx={{ mb: 2 }}
                  value={wSVersion}
                  onChange={handleChangeWSVersion}
                />
              </Fade>
              <Fade
                in={wSSelected}
                timeout={1000}>
                <TextField
                  id="issue-description-WS"
                  label={t("issueTemplate.issueDescription")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  multiline
                  minRows={6}
                  sx={{ mb: 2 }}
                  value={wSDescription}
                  onChange={handleChangeWSDescription}
                />
              </Fade>
              <Fade
                in={wSSelected}
                timeout={1000}>
                <TextField
                  id="issue-reproduction-WS"
                  label={t("issueTemplate.issueReproduction")}
                  variant="outlined"
                  color={props.themeMode === "dark" ? "secondary" : "primary"}
                  fullWidth
                  multiline
                  minRows={4}
                  sx={{ mb: 2 }}
                  value={wSReproduction}
                  onChange={handleChangeWSReproduction}
                />
              </Fade>
            </Collapse>
            <Container sx={{ textAlign: "left" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: props.themeMode === "dark" ? "white" : "black",
                      "&.Mui-checked": {
                        color: props.themeMode === "dark" ? "white" : "black",
                      },
                    }}
                    checked={feedback}
                    onChange={handleChangeFeedback}
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<CheckBoxRoundedIcon />}
                  />
                }
                label={t("issueTemplate.requestFeedback")}
              />
            </Container>
          </Box>
        </Container>
      </div>
    </HelmetProvider>
  );
}
