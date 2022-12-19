import React from "react";
import Header from "./components/Header";
// import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import MoviesPage from "./components/MoviesPage";

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <MoviesPage />
    </Box>
  );
};

export default App;
