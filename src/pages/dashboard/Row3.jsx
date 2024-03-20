import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import TypographyTitle from "./TypographyTitle";
import Pie from "../pieChart/Pie";
import Bar from "../barChart/Bar";
import Geo from "../geography/Geo";

function Row3() {
  return (
    <Stack direction={"row"} gap={1.5} flexWrap={"wrap"}>
      <Paper
        sx={{
          width: "300px",
          minHeight: "300px",
          flexGrow: 1,
          padding: "25px 25px ",
        }}
      >
        <TypographyTitle>Campaign</TypographyTitle>
        <Box sx={{ height: "210px" }}>
          <Pie isDashboard={true} />
        </Box>
        <Box sx={{ textAlign: "center", marginTop: 2.5 }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
            $48,352 revenue generated
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
            {" "}
            Includes extra misc expenditures and costs
          </Typography>
        </Box>
      </Paper>
      {/* sssssssssssssssssssssssssssssssssssssss */}
      <Paper
        sx={{
          width: "340px",
          minHeight: "300px",
          flexGrow: 1,
        }}
      >
        <TypographyTitle padding="padding">Sales Quantity</TypographyTitle>
        <Box sx={{ height: "300px" }}>
          <Bar isDashboard={true} />
        </Box>
      </Paper>
      <Paper
        sx={{
          width: "300px",
          minHeight: "300px",
          flexGrow: 1,
          padding: "25px 25px ",
        }}
      >
        <Box sx={{ height: "320px" }}>
          <Geo isDashboard={true} />
        </Box>
      </Paper>
    </Stack>
  );
}

export default Row3;
