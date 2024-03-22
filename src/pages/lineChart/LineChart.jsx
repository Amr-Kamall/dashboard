import React from "react";
import { Box } from "@mui/material";
import Line from "./Line.jsx";

function LineChart({ isDashboard }) {
  return (
    <Box sx={{ height: "75vh", width: "95%" }}>
      <Line />
    </Box>
  );
}

export default LineChart;
