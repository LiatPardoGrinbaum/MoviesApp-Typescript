import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = () => {
  const [input, setInput] = useState<string>("");
  return (
    <Box
      className="SearchMoviesPageContainer"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%">
      <SearchBar input={input} setInput={setInput} />
    </Box>
  );
};

export default SearchPage;
