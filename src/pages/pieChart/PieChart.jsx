import React from "react";
import { Box } from "@mui/material";
import Pie from "./Pie";

function PieChart({ isDashboard }) {
  return (
    <Box
      sx={{
        height: "75vh",
        width: "95%",
        margin: "auto",
      }}
    >
      <Pie isDashboard={isDashboard} />
    </Box>
  );
}

export default PieChart;
