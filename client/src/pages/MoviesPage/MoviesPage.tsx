import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { ApiResponse, useFetch } from "../../hooks/useFetch";
import { ContentType } from "../../context/MyContext";
// import SingleMovie from "../SingleMovieDiv/SingleMovieDiv";
import SingleContentDiv from "../../components/SingleContentDiv/SingleContentDiv";
import { theme } from "../../theme";
import "./MoviesPage.css";

import PaginationDiv from "../../components/PaginationDiv/PaginationDiv";
// import axios from "axios";

const MoviesBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  width: "90%",
}));

const MoviesPage = () => {
  const [page, setPage] = useState<number>(1);

  const { results, error, loading, totalPages }: ApiResponse = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_OMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&page=${page}`
  );

  const insertMovies = () => {
    return results.map((content: ContentType) => {
      console.log(content);
      return (
        <SingleContentDiv
          key={content.id}
          title={content.title || content.name}
          id={content.id}
          poster={content.poster_path}
          date={content.release_date || content.first_air_date}
          media_type="movie"
          vote={content.vote_average}
        />
      );
    });
  };
  if (!loading) console.log("loading", loading);
  // console.log(data);
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      className="moviespage">
      <h1 style={{ color: theme.palette.primary.main }}>MOVIES</h1>
      <MoviesBoxContainer>
        {results ? (
          <div className="contentsContainer">{insertMovies()}</div>
        ) : (
          <div>
            <p>{error}</p>
          </div>
        )}
      </MoviesBoxContainer>
      <PaginationDiv setPage={setPage} numOfPages={totalPages} />
    </Box>
  );
};

export default MoviesPage;
