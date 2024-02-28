import React from "react";
import { ICharacterType } from "../types/types";
import { useGetAlertsQuery } from "../services";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { toImageUrl } from "../utils/helpers/AssetHelpers";
import CustomAutocomplete from "../components/CustomAutocomplete";
import { Container, ItemsContainer } from "./components/StyleComponents";
import ErrorView from "../components/ErrorView";
import LoadingView from "../components/LoadingView";

const Home = () => {
  const {
    data: characters = {} as ICharacterType,
    isError,
    isLoading,
  } = useGetAlertsQuery();

  return (
    <Container>
      {isError === true ? (
        <ErrorView />
      ) : isLoading === true ? (
        <LoadingView />
      ) : (
        <ItemsContainer>
          <img
            src={toImageUrl("/assets/Rick&Morty.jpeg")}
            alt="Rick & Morty"
            style={{ width: "90%", height: "30vh", borderRadius: "8px" }}
          />
          <CustomAutocomplete data={characters.results} />
        </ItemsContainer>
      )}
    </Container>
  );
};

export default Home;
