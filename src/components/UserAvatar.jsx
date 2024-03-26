import { Stack, Typography } from "@mui/material";
import React from "react";
import { getCurrentUser } from "../services/apiAuth";
import { useQuery } from "react-query";
import Spinner from "./Spinner";

function UserAvatar() {
  const { data: userData, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: getCurrentUser,
  });

  if (isLoading) return <Spinner width={"small"} />;
  if (!userData || !userData.user_metadata) {
    return null;
  }

  const { fullName, avatar } = userData.user_metadata;
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <img
        src={avatar || "/default-user.jpg"}
        className="img-avatar"
        alt={fullName}
      />
      <Typography>{fullName}</Typography>
    </Stack>
  );
}

export default UserAvatar;
