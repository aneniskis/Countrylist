import { createContext } from "react";
import { API_URL } from "../api/constantApi";
import useFetch from "../hooks/useFetch";

const INITIAL_STATE = {
  countries: [],
};

export const CountriesContext = createContext(INITIAL_STATE);

export const CountriesContextProvider = ({ children }) => {
  const {
    countries,
    loading,
    error,
    setCountries,
    areaOfLithuania,
    reFetchData,
    filterCountries,
  } = useFetch(API_URL);

  const value = {
    countries,
    loading,
    error,
    setCountries,
    areaOfLithuania,
    reFetchData,
    filterCountries,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
