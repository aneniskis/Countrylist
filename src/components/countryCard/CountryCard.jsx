import React from "react";
import "./countryCard.scss";

export const CountryCard = ({ country }) => {
  const { name, region, area } = country;
  return (
    <>
      <div className="countryCard">
        <div className="countryCard__info">
          <p>Country name: {name}</p>
          <p>Region: {region}</p>
          <p>Arena size: {area}</p>
        </div>
      </div>
    </>
  );
};
