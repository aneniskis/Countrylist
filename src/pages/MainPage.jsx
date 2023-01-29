import React from "react";
import { useContext } from "react";
import { ButtonsContainer } from "../components/buttonsContainer/ButtonsContainer";
import { CountriesList } from "../components/countriesList/CountriesList";
import { LoaderSpinner } from "../components/loaderSpinner/LoaderSpinner";

import { Title } from "../components/title/Title";
import { CountriesContext } from "../context/CountriesContext";

export const MainPage = () => {
  const { loading } = useContext(CountriesContext);
  return (
    <>
      <Title />
      <ButtonsContainer />
      {loading ? <LoaderSpinner /> : <CountriesList />}
    </>
  );
};
