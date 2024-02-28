import React from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";

const LoadingView = () => {
  return (
    <Stack gap={"24px"}>
      <CircularProgress color="success" size={100} />
      <Typography fontFamily="Anta" fontStyle={"700"} variant="h5">
        Loading...
      </Typography>
    </Stack>
  );
};

export default LoadingView;
