import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./data";

function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}

export default Invoices;
