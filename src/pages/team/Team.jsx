import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

function Team() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      // width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell({ row: { access } }) {
        return (
          <Box
            sx={{
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "User"
                  ? "#3da58a"
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : null,
              color: "#fff",
              padding: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access === "Manager" && <SecurityOutlined fontSize="small" />}
            {access === "User" && <LockOpenOutlined fontSize="small" />}
            <Typography fontSize={14} variant="body1">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  const theme = useTheme();

  // console.log(theme.palette.mode);
  return (
    <div style={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Team;
