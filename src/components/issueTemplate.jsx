import React, { useState, useEffect } from "react";

import {
  Container,
  Box,
  TextField,
  MenuItem,
  Fade,
  Collapse,
  Typography,
  Button,
} from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useTranslation } from "react-i18next";

export default function IssueTemplate() {
  var sanitizeHTML = function (str) {
    return str.replace(/[^\w. ]/gi, function (c) {
      return "&#" + c.charCodeAt(0) + ";";
    });
  };

  const [t] = useTranslation();

  const [valid, setValid] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const [sendable, setSendable] = useState(false);

  useEffect(() => {
    if (!alarm && valid) {
      setSendable(true);
    } else {
      setSendable(false);
    }
  }, [alarm, valid]);

  const [program, setProgram] = useState("");
  const [mESelected, setMESelected] = useState(false);
  const [wGUISelected, setWGUISelected] = useState(false);
  const [wSSelected, setWSSelected] = useState(false);

  const [os, setOs] = useState("");
  const [mEVersion, setMEVersion] = useState("");
  const [mEDescription, setMEDescription] = useState("");
  const [mEReproduction, setMEReproduction] = useState("");

  const [minecraftVersion, setMinecraftVersion] = useState("");
  const [wGUIVersion, setWGUIVersion] = useState("");
  const [wGUIDescription, setWGUIDescription] = useState("");

  const [browser, setBrowser] = useState("");
  const [wSVersion, setWSVersion] = useState("");
  const [wSDescription, setWSDescription] = useState("");
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

    if (program === "Meteor Extinction") {
      if (os.match(/\W/g) != null) {
        setAlarm(true);
      } else {
        setAlarm(false);
      }
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
    setProgram(event.target.value);
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
      setTimeout(() => {
        setMESelected(true);
      }, 1000);
      setWGUISelected(false);
      setWSSelected(false);
    } else if (program === "Wooden GUI") {
      setMESelected(false);
      setTimeout(() => {
        setWGUISelected(true);
      }, 1000);
      setWSSelected(false);
    } else if (program === "Website") {
      setMESelected(false);
      setWGUISelected(false);
      setTimeout(() => {
        setWSSelected(true);
      }, 1000);
    }
  }, [program]);

  const sendMail = () => {
    if (program === "Meteor Extinction") {
      const link = document.createElement("a");
      link.href =
        "mailto:lastand.development@gmail.com?subject=Issue: Meteor Extinction&body=Operating System: " +
        sanitizeHTML(os);
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.click();
    }
  };

  return (
    <Container className="containerForm">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <Typography
          variant="h1"
          sx={{ paddingBottom: 10, paddingTop: 18 }}>
          {t("issueTemplate.title")}
        </Typography>
        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ py: 1.5, px: 4, mb: 5 }}
            variant="contained"
            color="primary"
            endIcon={<SendRoundedIcon />}
            disabled={!sendable}
            onClick={sendMail}
          >
            <Typography variant="h6">{t("issueTemplate.send")}</Typography>
          </Button>
        </Box>
        <Collapse
          in={!valid}
          timeout={1000}
          orientation={"vertical"}
          sx={{ paddingTop: "5px" }}
        >
          <Fade
            in={!valid}
            timeout={1000}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                color="error"
                sx={{ marginBottom: 5 }}
              >
                {t("issueTemplate.fillEverything")}
              </Typography>
            </Box>
          </Fade>
        </Collapse>
        <Collapse
          in={alarm}
          timeout={1000}
          orientation={"vertical"}
          sx={{ paddingTop: "5px" }}
        >
          <Fade
            in={alarm}
            timeout={1000}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                color="error"
                sx={{ marginBottom: 5 }}
              >
                {t("issueTemplate.alarm")}
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
          color="secondary"
          SelectProps={{
            IconComponent: ArrowDropDownRoundedIcon,
          }}
          sx={{ textAlign: "left", mb: 7 }}
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
              color="secondary"
              fullWidth
              sx={{ mb: 2 }}
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
              fullWidth
              sx={{ mb: 2 }}
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
              fullWidth
              sx={{ mb: 2 }}
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
              fullWidth
              multiline
              minRows={4}
              sx={{ mb: 2 }}
              value={wSReproduction}
              onChange={handleChangeWSReproduction}
            />
          </Fade>
        </Collapse>
      </Box>
    </Container>
  );
}
