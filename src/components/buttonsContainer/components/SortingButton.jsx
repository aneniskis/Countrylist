import React, { useContext } from "react";
import { CountriesContext } from "../../../context/CountriesContext";
import "./sortingButton.scss";

export const SortingButton = ({ title, sorting }) => {
  const { countries, setCountries } = useContext(CountriesContext);
  const countriesSort = (sorting) => {
    if (sorting === "desc") {
      const sortedListDesc = [...countries].sort((countryOne, countryTwo) =>
        countryTwo.name.localeCompare(countryOne.name)
      );
      setCountries(sortedListDesc);
    } else {
      const sortedListAsc = [...countries].sort((countryOne, countryTwo) =>
        countryOne.name.localeCompare(countryTwo.name)
      );
      setCountries(sortedListAsc);
    }
  };

  return (
    <div className="sortingButton" onClick={() => countriesSort(sorting)}>
      {title}
    </div>
  );
};
