import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "60px",
  boxSizing: "border-box",
}));

export const ItemsContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  padding: "24px",
  gap: "12px",
  boxSizing: "border-box",

  borderRadius: "16px",
  border: "1px solid #424242",
}));
