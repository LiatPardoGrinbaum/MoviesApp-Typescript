import React, { useState } from "react";
import { Box, InputBase, styled } from "@mui/material";
import { ApiResponse, useFetch } from "../../hooks/useFetch";
import { ContentType } from "../../context/MyContext";
// import SingleMovie from "../SingleMovieDiv/SingleMovieDiv";
import SingleContentDiv from "../SingleContentDiv/SingleContentDiv";
import "./HomePage.css";
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
  width: "80%",
}));

//*need to get setMovies from context, and set data after using useFetch then review it
//* need to define in context- title and setTitle and import here

const HomePage = () => {
  const [input, setInput] = useState<string>("");

  const { results, error, loading }: ApiResponse = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_OMDB_API_KEY}`
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
          media_type={content.media_type}
          vote={content.vote_average}
        />
      );
    });
  };
  if (!loading) console.log("loading", loading);
  // console.log(data);
  return (
    <Box
      className="homePageContainer"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%">
      <Search>
        <InputBase
          placeholder="Search..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          fullWidth={true}
        />
      </Search>
      <MoviesBoxContainer>
        {results ? (
          <div className="contentsContainer">{insertMovies()}</div>
        ) : (
          <div>
            <p>{error}</p>
          </div>
        )}
      </MoviesBoxContainer>
    </Box>
  );
};

export default HomePage;
