import { Box, Button, Divider, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/apiAuth";
import { useQuery } from "react-query";
import Spinner from "../../components/Spinner";
import { useTheme } from "@emotion/react";

function UpdateUserDataForm() {
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const theme = useTheme();

  const {
    data: userData,
    error,
    isLoading,
  } = useQuery("userData", getCurrentUser);

  useEffect(() => {
    if (userData && userData.user_metadata) {
      const { firstName, lastName, avatar } = userData.user_metadata;
      setFullName(`${firstName} ${lastName}`);
      setAvatar(avatar);
    }
  }, [userData]);

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
        />
        <label for="file">Choose a file</label>
      </Box>
      <Divider />
      <Box display={"flex"} gap={1.3} justifyContent={"end"}>
        <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
          cancel
        </Button>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Update account
        </Button>
      </Box>
    </Paper>
  );
}

export default UpdateUserDataForm;
