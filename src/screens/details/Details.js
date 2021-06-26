import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Details = () => {
  let { id } = useParams();
  let [movieData, setMovieData] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8085/api/v1/movies/${id}`)
      .then((response) => setMovieData(response.data));
  }, []);

  console.log(movieData);
  return <div>Movie Details Page</div>;
};

export default Details;
