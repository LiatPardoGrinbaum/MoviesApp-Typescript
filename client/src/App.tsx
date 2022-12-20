import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
// import Container from "@mui/material/Container";

import "./App.css";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import SingleMoviePage from "./components/SingleMoviePage/SingleMoviePage";

const App: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={MoviesPage} />
          <Route path="/movie" component={SingleMoviePage} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
};

export default App;
