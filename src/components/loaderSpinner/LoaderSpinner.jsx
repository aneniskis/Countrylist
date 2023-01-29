import React from "react";
import { Circles } from "react-loader-spinner";
import "./loaderSpinner.scss";

export const LoaderSpinner = () => {
  return (
    <div className="spinner">
      <Circles
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="circles-loading"
      />
    </div>
  );
};
