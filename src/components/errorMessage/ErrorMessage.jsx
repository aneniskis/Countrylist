import React, { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import "./errorMessage.scss";

export const ErrorMessage = () => {
  const { error } = useContext(CountriesContext);

  return (
    <>
      <div className="error">
        <h3 className="error__main">{error.message}!</h3>
        <p className="error__explanation">
          Something unexpected happened while connecting to the server{" "}
          <span>(Service Unavailable)</span> .
        </p>
      </div>
    </>
  );
};
