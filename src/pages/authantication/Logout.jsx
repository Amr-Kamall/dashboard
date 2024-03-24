import { IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import React, { useState } from "react";
import { logOut } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

function Logout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      setLoading(true);
      await logOut();
      navigate("/login");
    } catch {
      setLoading(false);
      console.log("errrrrrrrrrrrrrror");
    }
  }

  return (
    <Tooltip title="logout" onClick={handleLogout}>
      <IconButton color="inherit">
        {loading ? <Spinner width="small" /> : <LogoutIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default Logout;
