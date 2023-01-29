import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [areaOfLithuania, setAreaOfLithuania] = useState(null);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setCountries(response.data);
        setAreaOfLithuania(
          response.data.find((country) => country.name === "Lithuania").area
        );
        setFilterCountries(response.data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  const reFetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setCountries(response.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return {
    countries,
    loading,
    error,
    setCountries,
    areaOfLithuania,
    reFetchData,
    filterCountries,
  };
};

export default useFetch;
