import React, { useContext } from "react";
import { CountriesContext } from "../../../context/CountriesContext";
import "./filterButton.scss";

export const FilterButton = () => {
  const {
    countries,
    setCountries,
    areaOfLithuania,
    reFetchData,
    filterCountries,
  } = useContext(CountriesContext);

  const filterCountriesArray = (type) => {
    const types = {
      all: "all",
      area: "area",
      region: "region",
    };
    const filterProperty = types[type];

    if (filterProperty === "region") {
      const OceaniaCountries = [...countries].filter(
        (country) =>
          typeof country[filterProperty] === "string" &&
          country[filterProperty] === "Oceania"
      );
      setCountries(OceaniaCountries);
    } else if (filterProperty === "area") {
      const CountriesSmallertThanLithuania = [...filterCountries].filter(
        (country) =>
          typeof country[filterProperty] === "number" &&
          country[filterProperty] < areaOfLithuania
      );
      setCountries(CountriesSmallertThanLithuania);
    } else if (filterProperty === "all") {
      reFetchData();
    }
  };
  return (
    <div className="filter__button">
      <select
        onChange={(filterCountries) =>
          filterCountriesArray(filterCountries.target.value)
        }
      >
        <option value="all"> All Countries</option>
        <option value="area"> Smaller than LTU</option>
        <option value="region"> Oceania region</option>
      </select>
    </div>
  );
};
