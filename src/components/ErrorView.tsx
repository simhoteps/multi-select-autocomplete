import React from "react";
import { Stack, Typography } from "@mui/material";
import { toImageUrl } from "../utils/helpers/AssetHelpers";

const ErrorView = () => {
  return (
    <Stack alignItems={"center"} gap={"24px"}>
      <img
        src={toImageUrl("/assets/Rick-and-Morty.jpeg")}
        alt="Rick & Morty"
        style={{ width: "90%", height: "30vh", borderRadius: "8px" }}
      />
      <Typography fontFamily="Anta" fontStyle={"700"} variant="h4">
        Data Not Found
      </Typography>
    </Stack>
  );
};

export default ErrorView;
