import React, { useEffect, useState } from "react";
import { CountryCard } from "../countryCard/CountryCard";
import "./countriesList.scss";
import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import ReactPaginate from "react-paginate";

export const CountriesList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { countries } = useContext(CountriesContext);

  const countryPerPage = 10;
  const pagesVisited = pageNumber * countryPerPage;
  const pageCount = Math.ceil(countries.length / countryPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    if (pageNumber > pageCount) {
      setPageNumber(pageCount - 1);
    }
  }, [pageNumber, pageCount]);

  return (
    <>
      {countries
        .slice(pagesVisited, pagesVisited + countryPerPage)
        .map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      {countries.length > 0 && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          onPageChange={changePage}
        />
      )}
    </>
  );
};
