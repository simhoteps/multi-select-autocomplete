import React from "react";
import { ICharacterType } from "../types/types";
import { useGetAlertsQuery } from "../services";
import { Typography } from "@mui/material";
import { toImageUrl } from "../utils/helpers/AssetHelpers";
import CustomAutocomplete from "../components/CustomAutocomplete";
import { Container, ItemsContainer } from "./components/StyleComponents";

const Home = () => {
  const {
    data: characters = {} as ICharacterType,
    isError,
    isLoading,
    isFetching,
  } = useGetAlertsQuery();

  return (
    <Container>
      {isLoading === true ? (
        <Typography>Loading..</Typography>
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
