import { Stack } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

function Row1() {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2.2}>
      <Card
        icon={<EmailIcon />}
        num={"12,361"}
        info={"Emails Sent"}
        increase={"+14%"}
        scheme={"nivo"}
      />
      <Card
        icon={<PointOfSaleIcon />}
        num={"431,225"}
        info={"Sales obtained"}
        increase={"+21%"}
        scheme={"accent"}
      />
      <Card
        icon={<PersonAddIcon />}
        num={"32,441"}
        info={"New Clients"}
        increase={"+5%"}
        scheme={"paired"}
      />
      <Card
        icon={<TrafficIcon />}
        num={"1,325,134"}
        info={"Traffic Received"}
        increase={"+43%"}
        scheme={"set3"}
      />
    </Stack>
  );
}

export default Row1;
