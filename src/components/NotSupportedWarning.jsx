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
            <Typography
              variant="body1"
              sx={{ padding: 2 }}>
              {text}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ marginRight: 2 }}>
              <IconButton onClick={handleClose}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>
          </Paper>
        </Fade>
      </Collapse>
    </Container>
  );
}
