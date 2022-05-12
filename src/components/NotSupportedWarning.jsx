import React, { useState } from "react";

import {
  Box,
  Collapse,
  Container,
  Fade,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { osName } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { ReportRounded } from "@mui/icons-material";

export default function NotSupportedWarning(props) {
  const [show, setShow] = useState(props.show);
  const [t] = useTranslation();

  const text =
    props.program === "ME"
      ? t("warning.MEnotAvailableForOS") +
        osName +
        t("warning.MEnotAvailableForOS2")
      : t("warning.MCnotAvailableForOS") +
        osName +
        t("warning.MCnotAvailableForOS2");
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container>
      <Collapse
        in={show}
        timeout={500}
        orientation={"vertical"}>
        <Fade
          in={show}
          timeout={500}>
          <Paper
            elevation={3}
            sx={{
              marginBottom: 6,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <ReportRounded sx={{ marginLeft: 2, fontSize: 40, marginY: 2 }} />
            <Typography
              variant="body1"
              sx={{ paddingTop: 2, paddingBottom: 2, paddingLeft: 2 }}
            >
              {text}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ marginRight: 2, marginTop: 2, alignSelf: "self-start" }}>
              <IconButton
                onClick={handleClose}
                aria-label={t("ariaLabels.closeWarning")}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>
          </Paper>
        </Fade>
      </Collapse>
    </Container>
  );
}
