import { Box, Button, Divider, Paper, Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCurrentUser, updateCurrentUser } from "../../services/apiAuth";
import Spinner from "../../components/Spinner";
import { useTheme } from "@emotion/react";
import { useQuery } from "react-query";

function UpdateUserDataForm() {
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  // snackbar
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

  const {
    data: userData,
    error,
    isLoading,
  } = useQuery({ queryKey: "userData", queryFn: getCurrentUser });

  useEffect(() => {
    if (userData && userData.user_metadata) {
      const { fullName, avatar } = userData.user_metadata;
      setFullName(`${fullName} `);
      setAvatar(avatar);
    }
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!fullName) return;
      setLoading(true);
      await updateCurrentUser({ fullName, avatar });
      handleClick();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Box textAlign={"center"}>
        <Spinner />;
      </Box>
    );
  }

  if (error) {
    console.error("Error fetching user data:", error);
    // You can render an error component here if needed
  }
  if (!userData || !userData.user_metadata) {
    return null; // Or render an appropriate UI for when data is not available
  }
  const { email } = userData.user_metadata;
  // console.log(avatar);

  return (
    <form onSubmit={handleSubmit}>
      <Paper
        sx={{ padding: 3, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: 5,
          }}
        >
          <label className="lab">Email address</label>
          <input
            style={{
              width: "250px",
              padding: "6px 10px",
              outline: "none",
              borderRadius: "5px",
              border: "none",
              fontSize: "15px",
              background: theme.palette.grey[400],
            }}
            type="email"
            value={email}
            disabled={true}
          />
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: 8,
          }}
        >
          <label>Full name</label>

          <input
            style={{
              width: "250px",
              padding: "6px 10px",
              outline: "none",
              borderRadius: "5px",
              border: "none",
              fontSize: "15px",
              background: theme.palette.grey[100],
            }}
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={loading}
          />
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: 5,
          }}
        >
          <p>avatar image</p>
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile"
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={loading}
          />
          <label for="file">Choose a file</label>
        </Box>
        <Divider />
        <Box display={"flex"} gap={1.3} justifyContent={"end"}>
          <Button
            variant="outlined"
            disabled={loading}
            sx={{ textTransform: "capitalize" }}
          >
            cancel
          </Button>
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Update account
          </Button>
        </Box>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "#fff" }}
        >
          Account Created Successfully
        </Alert>
      </Snackbar>
    </form>
  );
}

export default UpdateUserDataForm;
