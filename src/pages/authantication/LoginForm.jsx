import { useTheme } from "@mui/material/styles"; // Corrected import statement
import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //snakbar
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function onSubmit(data) {
    try {
      setLoading(true);
      await login(data); // Wait for the login operation to complete
      setLoading(false); // Set loading state back to false on successful login
      navigate("/"); // Navigate to the specified route (homepage)
    } catch (error) {
      setLoading(false); // Set loading state back to false on login error
      console.error("provided email or password are incorrect");
      handleClick();
      reset();
      // Handle the error (e.g., show an error message)
    }
  }
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      gap={2}
      bgcolor={theme.palette.grey[300]}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "25px",
          fontWeight: "bold",
          color: theme.palette.grey[800], // Use a valid key from the palette
        }}
      >
        Log in to your account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
          sx={{
            padding: "2rem ",
            width: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "Center",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              width: "100%",
              gap: 0.8,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: theme.palette.grey[800],
              }}
            >
              Email Address
            </Typography>
            <input
              disabled={loading}
              style={{
                width: "100%",
                padding: "8px 10px",
                outline: "none",
                background: "transparent",
                border: "1px solid grey",
              }}
              {...register("email", {
                required: true,
                pattern: {
                  value: regEmail,
                },
              })}
            />
            {errors.email && (
              <span style={{ color: "Red", fontSize: "13px" }}>
                Please Provide a Valid Email Address
              </span>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              width: "100%",
              gap: 0.8,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: theme.palette.grey[800],
              }}
            >
              Password
            </Typography>
            <input
              disabled={loading}
              style={{
                width: "100%",
                padding: "8px 10px",
                outline: "none",
                background: "transparent",
                border: "1px solid grey",
              }}
              {...register("password", {
                required: true,
                minLength: { value: 4 },
              })}
            />
            {errors.password && (
              <span style={{ color: "Red", fontSize: "13px" }}>
                Password needs a minimum of 8 characters
              </span>
            )}
          </Box>
          <Button type="submit" fullWidth variant="contained">
            {loading ? <Spinner width="small" /> : "login"}
          </Button>
        </Paper>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%", color: "#fff" }}
          >
            provided email or password are incoreect
          </Alert>
        </Snackbar>
      </form>
    </Stack>
  );
}

export default LoginForm;
