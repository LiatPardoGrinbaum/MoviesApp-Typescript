import React, { useState } from "react";
import { Box, InputBase, styled } from "@mui/material";
import { ApiResponse, useFetch } from "../../hooks/useFetch";
import { MovieType } from "../../context/MyContext";
import SingleMovie from "../SingleMovieDiv/SingleMovieDiv";
// import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
  border: "solid 1px rgba(100, 100, 111, 0.2)",
  margin: "1rem",
}));

const MoviesBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

//*need to get setMovies from context, and set data after using useFetch then review it
//* need to define in context- title and setTitle and import here

const MoviesPage = () => {
  const [title, setTitle] = useState<string>("");

  const { data, error, loading, responseField }: ApiResponse = useFetch(
    `https://www.omdbapi.com/?s=${title.split(" ").join("+")}&page=1&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
  );
  console.log("DATA", responseField);
  console.log("error", typeof error);
  const insertMovies = () => {
    return data.map((movie: MovieType) => {
      console.log(movie);
      return <SingleMovie key={movie.imdbID} title={movie.Title} id={movie.imdbID} poster={movie?.Poster} />;
    });
  };
  if (!loading) console.log("dattaaaa", loading);
  // console.log(data);
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <Search>
        <InputBase
          placeholder="Search..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
        />
      </Search>
      <MoviesBoxContainer>
        {responseField ? (
          <div>{insertMovies()}</div>
        ) : (
          <div>
            zssz
            <p>{error}</p> <p>{error}</p> <p>{error}</p> <p>{error}</p> <p>{error}</p>
            <br></br>
            <p>ddddddddddd</p>
          </div>
        )}
      </MoviesBoxContainer>
    </Box>
  );
};

export default MoviesPage;
