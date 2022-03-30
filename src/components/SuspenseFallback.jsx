import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function CustomProgress() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress
        color="secondary"
        size="60px"
        sx={{ strokeLinecap: "round" }}
      />
    </Box>
  );
}
