import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

function TypographyTitle({ children, padding }) {
  const theme = useTheme();

  if (padding) {
    return (
      <Typography
        color={theme.palette.secondary.main}
        fontSize={21}
        fontWeight={700}
        padding="20px 25px"
      >
        {children}
      </Typography>
    );
  }

  return (
    <Typography
      color={theme.palette.secondary.main}
      fontSize={21}
      fontWeight={700}
    >
      {children}
    </Typography>
  );
}

export default TypographyTitle;
