import React from "react";
import { FilterButton } from "./components/FilterButton";
import { SortingButton } from "./components/SortingButton";
import "../buttonsContainer/buttonsContainer.scss";

export const ButtonsContainer = () => {
  return (
    <>
      <div className="buttonsContainer">
        <div className="buttonsContainer__sorting">
          <SortingButton title="A➡Z" sorting="asc" />
          <SortingButton title="Z➡A" sorting="desc" />
        </div>
        <FilterButton />
      </div>
    </>
  );
};
