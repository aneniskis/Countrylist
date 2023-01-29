import React from "react";
import { useContext } from "react";
import { ButtonsContainer } from "../components/buttonsContainer/ButtonsContainer";
import { CountriesList } from "../components/countriesList/CountriesList";
import { ErrorMessage } from "../components/errorMessage/ErrorMessage";
import { LoaderSpinner } from "../components/loaderSpinner/LoaderSpinner";

import { Title } from "../components/title/Title";
import { CountriesContext } from "../context/CountriesContext";

export const MainPage = () => {
  const { loading, error } = useContext(CountriesContext);
  return (
    <>
      <Title />
      <ButtonsContainer />
      {error && <ErrorMessage />}
      {loading ? <LoaderSpinner /> : <CountriesList />}
    </>
  );
};
