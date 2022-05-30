import React from "react";
import { CircularProgress, Box, Fade, Typography } from "@mui/material";
import { getLanguage } from "./services/SettingsService";

export default function CustomProgress(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Fade
        in={true}
        style={{
          transitionDelay: "1000ms",
        }}
      >
        <CircularProgress
          color={props.themeMode === "dark" ? "secondary" : "primary"}
          size="60px"
          sx={{ strokeLinecap: "round" }}
        />
      </Fade>
      <Fade
        in={true}
        style={{
          transitionDelay: "2000ms",
        }}
      >
        <Typography
          variant="body1"
          sx={{ marginTop: 2 }}>
          {getLanguage().includes("de")
            ? "Übersetzungsdateien werden geladen..."
            : "Loading Translation Files..."}
        </Typography>
      </Fade>
    </Box>
  );
}
