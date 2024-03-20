import { Box } from "@mui/material";
import React from "react";
import Bar from "./Bar";

function BarChart({ isDashboard }) {
  return (
    <Box sx={{ height: "75vh" }}>
      <Bar isDashboard={isDashboard} />
    </Box>
  );
}

export default BarChart;
